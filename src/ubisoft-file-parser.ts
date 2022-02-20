import debug from 'debug';
import type { ownership_cache, user_dat_file } from './generated';
import { packageDefinition } from './proto-defs';

export class UbisoftFileParser {
  private debug = debug('ubisoft-file-parser');

  /**
   * Parse the contents of %LOCALAPPDATA%\Ubisoft Game Launcher\user.dat
   * @param userDat Raw contents of user.dat
   * @returns Decoded object of file
   */
  public parseUserDat(userDat: Buffer): user_dat_file.Cache & protobuf.Message {
    this.debug('Parsing user.dat data: %s', userDat.toString('hex'));
    const cacheType = packageDefinition.lookupType('mg.protocol.user_dat_file.Cache');
    const result = cacheType.decode(userDat) as user_dat_file.Cache & protobuf.Message;
    return result;
  }

  /**
   * Parse the contents of Registry(HKLM\SOFTWARE\WOW6432Node\Ubisoft\Launcher\InstallDir)\cache\ownership\{user guid}
   * @param ownership Raw contents of the ownership cache
   * @returns Decoded object of file
   */
  public parseOwnershipCache(ownership: Buffer): ownership_cache.OwnershipCache & protobuf.Message {
    const cacheType = packageDefinition.lookupType('mg.protocol.ownership_cache.OwnershipCache');
    const trimmedData = ownership.subarray(262);
    this.debug('Parsing ownership cache data: %s', trimmedData.toString('hex'));
    const result = cacheType.decode(trimmedData) as ownership_cache.OwnershipCache &
      protobuf.Message;
    return result;
  }
}
