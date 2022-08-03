import 'dotenv/config';
import { Secret, TOTP } from 'otpauth';
import { UbiServicesApi, UbisoftDemux } from '../src';
import { fileHashToPathChar } from '../src/util';

jest.setTimeout(15000);
describe('Demux package', () => {
  let ubiDemux: UbisoftDemux;
  const email = process.env.EMAIL || '';
  const password = process.env.PASSWORD || '';
  const totpSecret = process.env.TOTP_SECRET || '';

  let ticket: string;
  let rememberMeTicket: string;

  beforeAll(async () => {
    const ubiServices = new UbiServicesApi();
    const resp = await ubiServices.login(email, password);
    if (resp.ticket) {
      ticket = resp.ticket;
      rememberMeTicket = resp.rememberMeTicket;
    } else {
      const totp = new TOTP({ secret: Secret.fromBase32(totpSecret) });
      const mfaResp = await ubiServices.login2fa(
        resp.twoFactorAuthenticationTicket as string,
        totp.generate()
      );
      ticket = mfaResp.ticket;
      rememberMeTicket = mfaResp.rememberMeTicket;
    }
  });

  afterEach(async () => {
    await ubiDemux.destroy();
  });

  it('should login with rememberMeTicket', async () => {
    const ubiServices = new UbiServicesApi();
    const resp = await ubiServices.loginRememberMe(rememberMeTicket);
    expect(resp.ticket).toBeDefined();
    ticket = resp.ticket;
    ubiDemux = new UbisoftDemux();
    const authResp = await ubiDemux.basicRequest({
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

  it('should send a basic request', async () => {
    ubiDemux = new UbisoftDemux();
    const resp = await ubiDemux.basicRequest({
      getPatchInfoReq: {
        patchTrackId: 'DEFAULT',
        testConfig: false,
        trackType: 0,
      },
    });

    expect(resp.toJSON()).toMatchObject({
      requestId: 0,
      getPatchInfoRsp: {
        success: true,
        patchTrackId: expect.any(String),
        testConfig: false,
        patchBaseUrl: expect.any(String),
        latestVersion: expect.any(Number),
        trackType: 0,
      },
    });
  });

  it('should send a service request', async () => {
    ubiDemux = new UbisoftDemux();
    const resp = await ubiDemux.serviceRequest('utility_service', {
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
    ubiDemux = new UbisoftDemux();
    const authResp = await ubiDemux.basicRequest({
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
    ubiDemux = new UbisoftDemux();
    await ubiDemux.basicRequest({
      authenticateReq: {
        clientId: 'uplay_pc',
        sendKeepAlive: false,
        token: {
          ubiTicket: ticket,
        },
      },
    });

    const connection = await ubiDemux.openConnection('ownership_service');

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

  it('should get download manifest for an old version', async () => {
    const TRACKMANIA_ID = 5595;

    ubiDemux = new UbisoftDemux();
    await ubiDemux.basicRequest({
      authenticateReq: {
        clientId: 'uplay_pc',
        sendKeepAlive: false,
        token: {
          ubiTicket: ticket,
        },
      },
    });

    const ownershipConnection = await ubiDemux.openConnection('ownership_service');

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
          productId: TRACKMANIA_ID,
        },
      },
    });

    const ownershipToken = ownershipTokenResp.response?.ownershipTokenRsp?.token as string;
    expect(ownershipToken).toBeDefined();

    const downloadConnection = await ubiDemux.openConnection('download_service');

    await downloadConnection.request({
      request: {
        requestId: 0,
        initializeReq: {
          ownershipToken,
        },
      },
    });

    const hashes = ['1762A79B92863ABE35E23D2361669D67943EAA4C'];

    const slicePaths = hashes.map((hash) => `slices_v3/${fileHashToPathChar(hash)}/${hash}`);

    const relativePaths = [
      ...slicePaths,
      'manifests/6AE3706598150132DC1A850493D1194AA516FC89.metadata',
    ];

    const urlRequestResp = await downloadConnection.request({
      request: {
        requestId: 0,
        urlReq: {
          urlRequests: [
            {
              productId: TRACKMANIA_ID,
              relativeFilePath: relativePaths,
            },
          ],
        },
      },
    });
    expect(urlRequestResp.response?.urlRsp?.urlResponses).toBeDefined();
    relativePaths.forEach((path) => {
      expect(JSON.stringify(urlRequestResp.response?.urlRsp?.urlResponses)).toContain(path);
    });
  });
});
