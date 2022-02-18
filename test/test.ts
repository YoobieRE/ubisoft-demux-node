import { UbisoftDemux } from '../src';

jest.setTimeout(15000);
describe('Demux package', () => {
  let ubi: UbisoftDemux;

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
});
