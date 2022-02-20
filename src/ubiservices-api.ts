import debug from 'debug';
import phin from 'phin';

export interface CreateSessionResponse {
  platformType: string;
  ticket: string;
  twoFactorAuthenticationTicket: string | null;
  profileId: string;
  userId: string;
  nameOnPlatform: string;
  environment: string;
  expiration: Date;
  spaceId: string;
  clientIp: string;
  clientIpCountry: string;
  serverTime: Date;
  sessionId: string;
  sessionKey: string;
  rememberMeTicket: string | null;
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
    password: string,
    totp?: string // TODO
  ): Promise<CreateSessionResponse> {
    this.debug('Making login request. Email: %s, Password: %s', email, password);
    const resp = await phin({
      method: 'POST',
      url: 'https://public-ubiservices.ubi.com/v3/profiles/sessions',
      headers: {
        'Ubi-AppId': this.appId,
        Authorization: `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ rememberMe: true }),
    });
    const data: CreateSessionResponse = JSON.parse(resp.body.toString());
    this.debug('Login response: %j', data);
    return data;
  }
}
