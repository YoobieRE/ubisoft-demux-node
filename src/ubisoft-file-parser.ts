import debug from 'debug';
import zlib from 'zlib';
import type {
  ownership_cache,
  user_dat_file,
  download,
  download_install_state,
  download_cache,
} from './generated';
import { packageDefinition } from './proto-defs';

export class UbisoftFileParser {
  private debug = debug('ubisoft-file-parser');

  /**
   * Parse the contents of `%LOCALAPPDATA%\Ubisoft Game Launcher\user.dat`
   * @param userDat Raw contents of user.dat
   * @returns Decoded object of file
   */
  public parseUserDat(userDat: Buffer): user_dat_file.Cache & protobuf.Message {
    this.debug('Parsing user.dat data: %s', userDat.toString('hex'));
    const protoType = packageDefinition.lookupType('mg.protocol.user_dat_file.Cache');
    const result = protoType.decode(userDat) as user_dat_file.Cache & protobuf.Message;
    return result;
    /**
     * Note: the rememberMeTicket returned here is not a hash, but is encrypted so it can be decrypted and the login can be refreshed.
     * What I know so far about the encryption scheme:
     * - The registry key `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography\MachineGuid` is likely used as the key or IV (it's read right before writing user.dat)
     *     It is stripped of its dashes and likely parsed as a string and not converted from hex to binary (it's seen in memory as a string without dashes, and not found as a hexadecimal binary array)
     * - The encryption algorithm is non-avalanching, which pretty much narrows it down to AES or 3DES
     * - If the MachineGuid as a string is the key, it's likely a 256 bit AES key
     * - The ciphertext is exactly the size of the plaintext, so there isn't an IV header in the cipertext
     */
  }

  /**
   * Parse the contents of `Registry(HKLM\SOFTWARE\WOW6432Node\Ubisoft\Launcher\InstallDir)\cache\ownership\{user guid}`
   * @param ownershipCache Raw contents of the ownership cache
   * @returns Decoded object of file
   */
  public parseOwnershipCache(
    ownershipCache: Buffer
  ): ownership_cache.OwnershipCache & protobuf.Message {
    const protoType = packageDefinition.lookupType('mg.protocol.ownership_cache.OwnershipCache');
    const trimmedData = ownershipCache.subarray(262);
    this.debug('Parsing ownership cache data: %s', trimmedData.toString('hex'));
    const result = protoType.decode(trimmedData) as ownership_cache.OwnershipCache &
      protobuf.Message;
    return result;
  }

  /**
   * Parse the contents of `Registry(HKLM\SOFTWARE\WOW6432Node\Ubisoft\Launcher\InstallDir)\cache\download\{user guid}`
   * @param downloadCache Raw contents of the download cache
   * @returns Decoded object of file
   */
  public parseDownloadCache(
    downloadCache: Buffer
  ): download_cache.DownloadCache & protobuf.Message {
    const protoType = packageDefinition.lookupType('mg.protocol.download_cache.DownloadCache');
    const trimmedData = downloadCache.subarray(2);
    this.debug('Parsing download cache data: %s', trimmedData.toString('hex'));
    const result = protoType.decode(trimmedData) as download_cache.DownloadCache & protobuf.Message;
    return result;
  }

  /**
   * Parse the contents of `{manifest hash}.metadata`. It is obtained (but not stored) during download start.
   * @param downloadMetadata Raw contents of the download metadata
   * @returns Decoded object of file
   */
  public parseDownloadMetadata(
    downloadMetadata: Buffer
  ): download.ManifestMetaData & protobuf.Message {
    const protoType = packageDefinition.lookupType('mg.protocol.download.ManifestMetaData');
    const trimmedData = downloadMetadata.subarray(356);
    const decompressed = zlib.inflateSync(trimmedData);
    this.debug('Parsing download metadata: %s', decompressed.toString('hex'));
    const result = protoType.decode(decompressed) as download.ManifestMetaData & protobuf.Message;
    return result;
  }

  /**
   * Parse the contents of `Registry(HKLM\SOFTWARE\WOW6432Node\Ubisoft\Launcher\InstallDir)\data\{game ID}\manifests\{manifest hash}`
   * or `{game install directory}\uplay_install.manifest`
   * @param downloadManifest Raw contents of the download/install manifest
   * @returns Decoded object of file
   */
  public parseDownloadManifest(downloadManifest: Buffer): download.Manifest & protobuf.Message {
    const protoType = packageDefinition.lookupType('mg.protocol.download.Manifest');
    const trimmedData = downloadManifest.subarray(356);
    const decompressed = zlib.inflateSync(trimmedData);
    this.debug('Parsing download manifest: %s', decompressed.toString('hex'));
    const result = protoType.decode(decompressed) as download.Manifest & protobuf.Message;
    return result;
  }

  /**
   * Parse the contents of `{manifest hash}.licenses`. It is obtained (but not stored) during download start.
   * @param downloadMetadata Raw contents of the download licenses
   * @returns Decoded object of file
   */
  public parseDownloadLicenses(
    downloadLicenses: Buffer
  ): download.ManifestLicenses & protobuf.Message {
    const protoType = packageDefinition.lookupType('mg.protocol.download.ManifestLicenses');
    const trimmedData = downloadLicenses.subarray(356);
    const decompressed = zlib.inflateSync(trimmedData);
    this.debug('Parsing download licenses: %s', decompressed.toString('hex'));
    const result = protoType.decode(decompressed) as download.ManifestLicenses & protobuf.Message;
    return result;
  }

  /**
   * Parse the contents of `{game install directory}\uplay_download\{game ID}\{manifest hash}.state`
   * or `{game install directory}\uplay_install.state`
   * @param downloadManifest Raw contents of the download/install state
   * @returns Decoded object of file
   */
  public parseDownloadInstallState(
    downloadInstallState: Buffer
  ): download_install_state.DownloadInstallState & protobuf.Message {
    const protoType = packageDefinition.lookupType(
      'mg.protocol.download_install_state.DownloadInstallState'
    );
    this.debug('Parsing download install state: %s', downloadInstallState.toString('hex'));
    const result = protoType.decode(
      downloadInstallState
    ) as download_install_state.DownloadInstallState & protobuf.Message;
    return result;
  }
}
