import { UbisoftDemux } from '../src';
import 'dotenv/config';

jest.setTimeout(15000);
describe('Demux package', () => {
  let ubi: UbisoftDemux;
  const username = process.env.USERNAME || '';
  const password = process.env.PASSWORD || '';

  afterEach(async () => {
    await ubi.destroy();
  });

  it('should send a basic request', async () => {
    ubi = new UbisoftDemux();
    const resp = await ubi.basicRequest({
      getPatchInfoReq: {
        patchTrackId: '129.0',
        testConfig: false,
        trackType: 0,
      },
    });

    expect(resp.toJSON()).toMatchObject({
      requestId: 0,
      getPatchInfoRsp: {
        success: true,
        patchTrackId: 'DEFAULT',
        testConfig: false,
        patchBaseUrl: 'http://static3.cdn.ubi.com/orbit/releases/129.0/patches/',
        latestVersion: 10647,
        trackType: 0,
      },
    });
  });

  it('should send a service request', async () => {
    ubi = new UbisoftDemux();
    const resp = await ubi.serviceRequest('utility_service', {
      request: {
        geoipReq: {},
      },
    });

    expect(resp.toJSON()).toMatchObject({
      response: {
        geoipRsp: {
          countryCode: 'US',
          continentCode: 'NA',
        },
      },
    });
  });

  it('should get a session token and authorize', async () => {
    ubi = new UbisoftDemux();
    const resp = await ubi.login(username, password);
    expect(resp).toMatchObject({
      platformType: 'uplay',
      ticket: expect.any(String),
      twoFactorAuthenticationTicket: null,
      profileId: expect.any(String),
      userId: expect.any(String),
      nameOnPlatform: expect.any(String),
      environment: 'Prod',
      expiration: expect.any(String),
      spaceId: 'e17be87d-2996-4f3b-97c4-19bb2dae2933',
      clientIp: expect.any(String),
      clientIpCountry: 'US',
      serverTime: expect.any(String),
      sessionId: expect.any(String),
      sessionKey: expect.any(String),
      rememberMeTicket: expect.any(String),
    });

    const { ticket } = resp;
    const authResp = await ubi.basicRequest({
      authenticateReq: {
        clientId: 'uplay_pc',
        sendKeepAlive: false,
        token: {
          ubiTicket: ticket,
        },
      },
    });

    expect(authResp).toMatchObject({
      requestId: 0,
      authenticateRsp: {
        success: true,
      },
    });
  });

  it('should open and push to a connection', async () => {
    ubi = new UbisoftDemux();
    const { ticket } = await ubi.login(username, password);
    await ubi.basicRequest({
      authenticateReq: {
        clientId: 'uplay_pc',
        sendKeepAlive: false,
        token: {
          ubiTicket: ticket,
        },
      },
    });

    const connection = await ubi.openConnection('ownership_service');

    const resp = await connection.push({
      request: {
        requestId: 1,
        initializeReq: {
          getAssociations: true,
          protoVersion: 7,
          useStaging: false,
        },
      },
    });

    expect(resp.toJSON()).toMatchObject({
      response: {
        requestId: 1,
        initializeRsp: {
          ownedGames: expect.any(Object),
        },
      },
    });
  });
});
