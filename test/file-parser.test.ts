import { readFileSync } from 'fs';
import { UbisoftFileParser } from '../src';

describe('UbisoftFileParser', () => {
  const fileParser = new UbisoftFileParser();

  it('should parse a user.dat file', () => {
    const data = readFileSync(`${__dirname}/sample-files/new-user.dat`);
    const result = fileParser.parseUserDat(data);
    expect(result.toJSON()).toMatchObject({
      prod: {
        users: [
          {
            username: 'xiLCtqcrMJDRd0aE2NAAkg4G7Oye2YWHJc32afVOpPM=',
            ubiAccountId:
              'w2qTjAD5ZL/frCRcLfxDj/D+WK0LDV++0sOovntlAsUO10fDQNBFKF8f/7FbBrYObELiCTonUW+owsQl+dUeFw==',
            email: '38T/c5LKjY9ZHbIcQHExPns1cHGM/EGjZtsE4m5k54E=',
            name: 'xiLCtqcrMJDRd0aE2NAAkg4G7Oye2YWHJc32afVOpPM=',
            passwordHash:
              'Z2Q2dVVESWdNZldrM2VBZmNnY1hLT1ZWdVRDNjhDRVd2ZUdLbmhuOTA3TFFxOHRhZ1A0ZkZGanE2NUk5WUlnSGFFRkpNc3hPUllFSytybElxL09PMkE9PQ==',
            passwordSalt:
              'T2hqakJMMklGd2RpQTF6MDVaaWgxUjJXMGxmeVBjdmgxbnRVa3Z5cEl5T0pUZk9RT2U3MTI1MURSNVY0YnBESWlaVzRld2FjQzZJTW02Nk53NGt6THc9PQ==',
            rememberMeTicket:
              'ioHVJmVCDFhCxIyIAhOw0c1MtYXz0eeFnDT7bjTDa6kj0ldo3EeI5nix5ZNc/8uLIy393nBa2mkhpGNxuuXiCFWUr9DoBAFGb6OQ2UaO5Gfr5DtxUq5bho7xCjCKwj3jiJv8ojd5f3cQjqfjGUOOIQtAvDZA7i42FIBMIeBXtpPldsPbPNFqd510UwuRK3Ald8StsPVO3nNztG4v8HVmg44Jx6mhVZzuy/cl7WEyp5nLp+2Id+jIUYgZr0DmUkO5ZipMjpw853k0A50U9EyfaxfUdjARA9E1zKlxHTbfBb56DBonBIeCmA2Pvu1xkLFSz1059Mg+WxyYEPXec3R6NED5ogm5bUD62KJkUEpMmJCxmqz6lIe7BuS9cfYAd/gMNBRUj9n0B/HNHg4qWkFs3l+laouqWS+kudvVnMHqDJQYdo/Z6lGjbGmhUu6gXfKtcRlcPEbCeKNgIReFLJYdey3vgqzRrqF7EvRodnxTLzG1IQouiTBR0NA5v6qNlG97C+fj4DP5SiEMIS8J6ajtCNX2Udet/jBOb188yZyTbC3La6EHRR+bhUxfhUFydOjwGqXKeHZXoft02g47O/M1qKlhmcglPShFRNNfAPE9cZG0yHneUV/WXMg5i6L6h9WBcnw9hicryk4NHBh+PW0Tk4eP7jPw9NZHMuxqowCJSDg81AV9Ne/kYd+KwDqYY7ScRm2pdfmTVRPg+lpJa+ZjFlCwmvDI9lFBmhw2CMsA4G/WDf92mZLtAHZZOXkMGf5lAMGARxQX8xyCpFfdK8tkQCxK2FJqMEF2itdtQNrUYh5a9PHfHmFO3Dvia9KPWVntRjiO7sLJ3tjPxCOY/AkrdntVuAh7jRHY1EjQOZIBOksEXifSWdfjrwM1uwM+OMdS5qudUDqHmwNgajPThqD07kUF48bA+r/hLngqF8a7lRU=',
            hashIterationsOffset: 29,
          },
        ],
        startupEntry: { isRememberMe: true, isRestartCredentials: false, userIndex: 0 },
      },
      uat: {},
    });
  });
  it('should parse ownership cache file', () => {
    const data = readFileSync(`${__dirname}/sample-files/ownership`);
    const result = fileParser.parseOwnershipCache(data);
    expect(result.toJSON()).toMatchObject({
      ownedGames: [
        {
          productId: 5595,
          uplayId: 5595,
          cdKey: '',
          platform: 0,
          productType: 0,
          state: 3,
          productAssociations: [5614, 5615, 5616, 5617, 5618, 5619, 17254, 58826],
          downloadId: 3552,
          brandId: 778,
          pendingKeystorageOwnership: false,
          activationIds: [17139],
          targetPartner: 'TargetPartner_None',
          activationType: 'ActivationType_Purchase',
          ubiServicesAppId: '86263886-327a-4328-ac69-527f0d20a237',
        },
      ],
      productIds: [5595, 17138, 17139],
    });
  });
});
