import { readFileSync } from 'fs';
import { UbisoftFileParser } from '../src';

describe('UbisoftFileParser', () => {
  const fileParser = new UbisoftFileParser();

  it('should parse a user.dat file', () => {
    const data = readFileSync(`${__dirname}/sample-files/user.dat`);
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
    const data = readFileSync(`${__dirname}/sample-files/ownership-cache`);
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

  it('should parse download cache file', () => {
    const data = readFileSync(`${__dirname}/sample-files/download-cache`);
    const result = fileParser.parseDownloadCache(data);
    expect(result.toJSON()).toMatchObject({
      isPaused: true,
      download: [
        {
          productId: 5595,
          manifestId: '6AE3706598150132DC1A850493D1194AA516FC89',
          downloadType: 'DownloadType_Edison',
          downloadState: 'DownloadState_Paused',
          downloadInitiator: 'Unknown',
          brandedInstallerId: '',
        },
      ],
    });
  });

  it('should parse download metadata file', () => {
    const data = readFileSync(
      `${__dirname}/sample-files/6AE3706598150132DC1A850493D1194AA516FC89.metadata`
    );
    const result = fileParser.parseDownloadMetadata(data);
    expect(result.toJSON()).toMatchObject({
      licenses: [{ identifier: 'eula', version: 201 }],
      bytesOnDisk: '2325238421',
      bytesToDownload: '1953149568',
      chunks: [
        { language: '', bytesOnDisk: '244440828', paddedBytesOnDisk: '244552956' },
        { language: '', bytesOnDisk: '168166654', paddedBytesOnDisk: '168243454' },
        { language: '', bytesOnDisk: '1912630939', paddedBytesOnDisk: '1913561755' },
      ],
      paddedBytesOnDisk: '2326358165',
      languages: [
        { code: 'cs-CZ' },
        { code: 'de-DE' },
        { code: 'da-DK' },
        { code: 'en-US' },
        { code: 'es-ES' },
        { code: 'fr-FR' },
        { code: 'it-IT' },
        { code: 'ko-KR' },
        { code: 'pl-PL' },
        { code: 'pt-BR' },
        { code: 'ru-RU' },
        { code: 'tr-TR' },
        { code: 'zh-CN' },
      ],
    });
  });

  it('should parse download manifest file', () => {
    const data = readFileSync(
      `${__dirname}/sample-files/6AE3706598150132DC1A850493D1194AA516FC89.manifest`
    );
    const result = fileParser.parseDownloadManifest(data);
    expect(result.toJSON()).toMatchObject({
      licenses: [
        {
          identifier: 'eula',
          version: 201,
          locales: [
            { language: 'cs-CZ', sha1: 'uB9RujFjbua3rnVcYqvuCzeEZyQ=' },
            { language: 'de-DE', sha1: 'AV9/xlf3IRH/+CkzJAvpPbllgSI=' },
            { language: 'da-DK', sha1: 'DXBT3bFv9ZLHjZ0eAuRKHbJxFps=' },
            { language: 'en-US', sha1: 'EUTa7kji5GwjnNDtUXHSvBFCCBo=' },
            { language: 'en-GB', sha1: 'fu9C8tiQVrI65VneTu5zs4r06vw=' },
            { language: 'en-CA', sha1: 'TZq2iaPaRb1IMhPmUuLK0GsPhnw=' },
            { language: 'es-ES', sha1: '5b8eKGz5i2K4ltQU9xUjGDzV82c=' },
            { language: 'fr-FR', sha1: 'umF2wqNkCICiMlCgMBLBCGaDnm4=' },
            { language: 'fr-CA', sha1: 'Npv1SajRhrGjfugbja9AZq2dPF4=' },
            { language: 'it-IT', sha1: 'hO7mfVro91owMWLyB0vIHdGHZ90=' },
            { language: 'ko-KR', sha1: '4dWjTZNCHtImr96laXd5sCTwoSo=' },
            { language: 'pl-PL', sha1: 'VjHEOVPAtDjg4p8a7YfPtfcwSpU=' },
            { language: 'pt-BR', sha1: '7/qL1DVPOJiz+M3FpRlQ33Q/ZW0=' },
            { language: 'ru-RU', sha1: 'g89DtTS+CK77TEXyclStpwNhzkA=' },
            { language: 'tr-TR', sha1: '/F4Ju0bNnFU6b+5A6e/+D8kYffI=' },
            { language: 'zh-CN', sha1: 'R5tk09MRwhlkZPuRsl+iUDQIo44=' },
          ],
          format: 'LicenseFormat_Text',
        },
      ],
      chunks: expect.any(Array), // Hides a lot
      sliceSizeDeprecated: 3145728,
      installFirewallRules: [
        {
          name: 'Trackmania UDP',
          exe: '$INSTALL_DIR/trackmania.exe',
          profile: 'FirewallProfile_All',
          protocol: 'FirewallProtocol_UDP',
          ports: '2350',
          version: 1,
        },
        {
          name: 'Trackmania TCP',
          exe: '$INSTALL_DIR/trackmania.exe',
          profile: 'FirewallProfile_All',
          protocol: 'FirewallProtocol_TCP',
          ports: '2350',
          version: 1,
        },
      ],
      legacyInstaller: '',
      isEncryptedDeprecated: false,
      paddedSliceSizeDeprecated: 3147264,
      patchRequired: false,
      isCompressed: true,
      compressionMethod: 'CompressionMethod_Zstd',
      version: 3,
      languages: [
        { code: 'cs-CZ' },
        { code: 'de-DE' },
        { code: 'da-DK' },
        { code: 'en-US' },
        { code: 'es-ES' },
        { code: 'fr-FR' },
        { code: 'it-IT' },
        { code: 'ko-KR' },
        { code: 'pl-PL' },
        { code: 'pt-BR' },
        { code: 'ru-RU' },
        { code: 'tr-TR' },
        { code: 'zh-CN' },
      ],
    });
  });

  it('should parse download licenses file', () => {
    const data = readFileSync(
      `${__dirname}/sample-files/6AE3706598150132DC1A850493D1194AA516FC89.licenses`
    );
    const result = fileParser.parseDownloadLicenses(data);
    expect(result.toJSON()).toMatchObject({
      licenses: [
        {
          identifier: 'eula',
          version: 201,
          locales: expect.any(Array), // Hides a lot
          format: 'LicenseFormat_Text',
        },
      ],
    });
  });

  it('should parse download install state file', () => {
    const data = readFileSync(
      `${__dirname}/sample-files/6AE3706598150132DC1A850493D1194AA516FC89.state`
    );
    const result = fileParser.parseDownloadInstallState(data);
    expect(result.toJSON()).toMatchObject({
      manifestSha1: '6AE3706598150132DC1A850493D1194AA516FC89',
      version: 32,
      selectedLanguage: 'en-US',
      licenses: [{ identifier: 'EULA', version: 201 }],
      installers: [
        { identifier: 'uplay_firewall\\Trackmania TCP', manifestVersion: 1 },
        { identifier: 'uplay_firewall\\Trackmania UDP', manifestVersion: 1 },
      ],
      chunks: [
        { chunkId: 0, isRequired: true, isDownloaded: true, tags: 'base' },
        { chunkId: 1, isRequired: true, isDownloaded: true, tags: 'common' },
        { chunkId: 2, isRequired: true, isDownloaded: true, tags: 'stadium' },
      ],
      shortcuts: [{ name: 'Trackmania' }],
      languages: [
        'cs-CZ',
        'de-DE',
        'da-DK',
        'en-US',
        'es-ES',
        'fr-FR',
        'it-IT',
        'ko-KR',
        'pl-PL',
        'pt-BR',
        'ru-RU',
        'tr-TR',
        'zh-CN',
      ],
      patchRequired: false,
      bytesDownloadedOnPatchStart: '0',
      requiredBytesDownloadedOnPatchStart: '0',
      gameName: 'Trackmania',
      installedLanguages: ['en-US'],
      uplayId: 5595,
    });
  });
});
