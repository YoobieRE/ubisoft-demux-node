import 'dotenv/config';
import { Secret, TOTP } from 'otpauth';
import { writeFileSync } from 'fs';
import yaml from 'yaml';
import { InputData, jsonInputForTargetLanguage, quicktype } from 'quicktype-core';
import path from 'path';
import { UbiServicesApi, UbisoftDemux } from '../src';

const main = async () => {
  const email = process.env.MAIN_EMAIL || '';
  const password = process.env.MAIN_PASSWORD || '';
  const totpSecret = process.env.TOTP_SECRET || '';

  let ticket;
  const ubiServices = new UbiServicesApi();
  const loginResp = await ubiServices.login(email, password);
  if (loginResp.ticket) {
    ticket = loginResp.ticket;
  } else {
    const totp = new TOTP({ secret: Secret.fromBase32(totpSecret) });
    const mfaResp = await ubiServices.login2fa(
      loginResp.twoFactorAuthenticationTicket,
      totp.generate()
    );
    ticket = mfaResp.ticket;
  }

  const ubiDemux = new UbisoftDemux();
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

  const ownershipResp = await ownershipConnection.request({
    request: {
      requestId: 1,
      initializeReq: {
        getAssociations: true,
        protoVersion: 7,
        useStaging: false,
      },
    },
  });

  await ubiDemux.destroy();

  // Turn all owned response YAMLs into JSON strings
  const configurationJsons = ownershipResp?.response?.initializeRsp?.ownedGames?.ownedGames.map(
    (game) => {
      const parsedConfig = yaml.parse(game.configuration, { uniqueKeys: false });
      return JSON.stringify(parsedConfig);
    }
  );

  // Use quicktype to convert all the JSON strings to a Typescript interface
  const jsonInput = jsonInputForTargetLanguage('typescript');
  await jsonInput.addSource({
    name: 'configuration',
    samples: configurationJsons || [],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  const types = await quicktype({
    inputData,
    lang: 'typescript',
    rendererOptions: {
      'just-types': 'true',
    },
  });

  // Add ESLint exceptions
  types.lines.unshift('/* eslint-disable */');

  writeFileSync(
    path.join(__dirname, '../src/generated/configuration-types.ts'),
    types.lines.join('\n'),
    'utf-8'
  );
};
main();
