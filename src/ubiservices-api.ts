import debug from 'debug';
import phin from 'phin';

export interface CreateSessionSuccessResponse<T = string> {
  platformType: string;
  ticket: string;
  twoFactorAuthenticationTicket: null;
  profileId: string;
  userId: string;
  nameOnPlatform: string;
  environment: string;
  expiration: string;
  spaceId: string;
  clientIp: string;
  clientIpCountry: string;
  serverTime: string;
  sessionId: string;
  sessionKey: string;
  rememberMeTicket: T;
}

export interface CreateSession2FaRequiredResponse {
  maskedPhone: string;
  platformType: null;
  ticket: null;
  twoFactorAuthenticationTicket: string;
  profileId: null;
  userId: null;
  nameOnPlatform: null;
  environment: null;
  expiration: string;
  spaceId: null;
  clientIp: null;
  clientIpCountry: null;
  serverTime: null;
  sessionId: string;
  sessionKey: null;
  rememberMeTicket: null;
  codeGenerationPreference: string[];
}

export interface UbiServicesApiProps {
  appId?: string;
}

export class UbiServicesApi {
  private appId = 'f68a4bb5-608a-4ff2-8123-be8ef797e0a6';

  private debug = debug('ubiservices-api');

  constructor(props?: UbiServicesApiProps) {
    this.appId = props?.appId ?? this.appId;
  }

  public async login(
    email: string,
    password: string
  ): Promise<CreateSessionSuccessResponse | CreateSession2FaRequiredResponse> {
    this.debug('Making login request. Email: %s, Password: %s', email, password);
    const resp = await phin({
      method: 'POST',
      url: 'https://public-ubiservices.ubi.com/v3/profiles/sessions',
      headers: {
        'User-Agent': 'Massgate',
        'Ubi-AppId': this.appId,
        'Ubi-RequestedPlatformType': 'uplay',
        Authorization: `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ rememberMe: true }),
    });
    const data: CreateSessionSuccessResponse | CreateSession2FaRequiredResponse = JSON.parse(
      resp.body.toString()
    );
    this.debug('Login response: %j', data);
    return data;
  }

  public async login2fa(
    twoFactorAuthenticationTicket: string,
    twoFactorCode: string
  ): Promise<CreateSessionSuccessResponse> {
    this.debug('Making 2fa request. twoFactorCode: %s', twoFactorCode);
    const resp = await phin({
      method: 'POST',
      url: 'https://public-ubiservices.ubi.com/v3/profiles/sessions',
      headers: {
        'User-Agent': 'Massgate',
        'Ubi-AppId': this.appId,
        'Ubi-RequestedPlatformType': 'uplay',
        'Ubi-2faCode': twoFactorCode,
        Authorization: `ubi_2fa_v1 t=${twoFactorAuthenticationTicket}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ rememberMe: true }),
    });
    const data: CreateSessionSuccessResponse = JSON.parse(resp.body.toString());
    this.debug('Login 2fa response: %j', data);
    return data;
  }

  public async loginRememberMe(rememberMeTicket: string): Promise<CreateSessionSuccessResponse> {
    this.debug('Making rememberMe request');
    const resp = await phin({
      method: 'POST',
      url: 'https://public-ubiservices.ubi.com/v3/profiles/sessions',
      headers: {
        'User-Agent': 'Massgate',
        'Ubi-AppId': this.appId,
        'Ubi-RequestedPlatformType': 'uplay',
        Authorization: `rm_v1 t=${rememberMeTicket}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ rememberMe: true }),
    });
    const data: CreateSessionSuccessResponse = JSON.parse(resp.body.toString());
    this.debug('Login rememberMe response: %j', data);
    return data;
  }
}
