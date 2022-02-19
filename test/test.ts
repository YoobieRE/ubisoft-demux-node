import 'dotenv/config';
import { UbisoftDemux } from '../src';
import { fileHashToPathChar } from '../src/util';

jest.setTimeout(15000);
describe('Demux package', () => {
  let ubi: UbisoftDemux;
  const email = process.env.EMAIL || '';
  const password = process.env.PASSWORD || '';
  const mainEmail = process.env.MAIN_EMAIL;
  const mainPassword = process.env.MAIN_PASSWORD;

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
        patchBaseUrl: expect.any(String),
        latestVersion: expect.any(Number),
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
          countryCode: expect.any(String),
          continentCode: expect.any(String),
        },
      },
    });
  });

  it('should get a session token and authorize', async () => {
    ubi = new UbisoftDemux();
    const resp = await ubi.ubiServices.login(email, password);
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
    const { ticket } = await ubi.ubiServices.login(email, password);
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

    const resp = await connection.request({
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

  if (mainEmail && mainPassword) {
    it('should get download manifest for an old version', async () => {
      ubi = new UbisoftDemux();
      const { ticket } = await ubi.ubiServices.login(mainEmail, mainPassword);
      await ubi.basicRequest({
        authenticateReq: {
          clientId: 'uplay_pc',
          sendKeepAlive: false,
          token: {
            ubiTicket: ticket,
          },
        },
      });

      const ownershipConnection = await ubi.openConnection('ownership_service');

      await ownershipConnection.request({
        request: {
          requestId: 1,
          initializeReq: {
            getAssociations: true,
            protoVersion: 7,
            useStaging: false,
          },
        },
      });

      const ownershipTokenResp = await ownershipConnection.request({
        request: {
          requestId: 0,
          ownershipTokenReq: {
            productId: 274,
          },
        },
      });

      const ownershipToken = ownershipTokenResp.response?.ownershipTokenRsp?.token as string;
      expect(ownershipToken).toBeDefined();

      const downloadConnection = await ubi.openConnection('download_service');

      await downloadConnection.request({
        request: {
          requestId: 0,
          initializeReq: {
            ownershipToken,
          },
        },
      });

      const hashes = [
        '1FC64441A932E9DDEBDD3373813D87FD3F3DB99F',
        '0052FECD390A0B80D4ED8984897363DEF431E3DD',
        '2080F18968F5B5BE4096398D90C18C7231AF2972',
        'EF4846003A494EE2CD67AC0A03F50362D9528AF4',
        'E9D9FE138B32D918E1A851479118AD4A0EF1BD43',
        '0DCBCB404C3CE7982314FB2597683E76D9197F9A',
      ];

      const slicePaths = hashes.map((hash) => `slices_v3/${fileHashToPathChar(hash)}/${hash}`);

      const urlRequestResp = await downloadConnection.request({
        request: {
          requestId: 0,
          urlReq: {
            urlRequests: [
              {
                productId: 274,
                relativeFilePath: slicePaths,
              },
            ],
          },
        },
      });
      expect(urlRequestResp.response?.urlRsp?.urlResponses).toBeDefined();
      hashes.forEach((hash) => {
        expect(JSON.stringify(urlRequestResp.response?.urlRsp?.urlResponses)).toContain(hash);
      });
    });
  }
});
