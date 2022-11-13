# ubisoft-demux-node

[![npm](https://img.shields.io/npm/v/ubisoft-demux)](https://www.npmjs.com/package/ubisoft-demux)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/claabs/ubisoft-demux-node/Unit%20test%20and%20build)

The Ubisoft Connect game launcher uses a bespoke socket-level protocol sending protocol buffer encoded messages to perform the majority of its core functionality.
This package implements the Demux protocol and assists with communicating directly with the Demux API.

## Usage

The package is well documented with JSDoc and TypeScript. Hovering and IntelliSense should give you plenty of information on each function. The types for the protobuf data are undocumented as of now due to being internal Ubisoft knowledge.

You should be using this package guided by knowledge gained from reverse engineering requests in the Ubisoft Connect launcher. It is very low level and you can easily do things out of order as the Demux API is not meant to be directly consumed by users.

### Demux API

#### Send a basic request

Basic requests contain a `requestId` that must increment with each request. This method keeps track of all requests and manages the `requestId` for you.

```ts
import { UbisoftDemux } from 'ubisoft-demux';
const ubiDemux = new UbisoftDemux();
const resp = await ubiDemux.basicRequest({
    getPatchInfoReq: {
        patchTrackId: 'DEFAULT',
        testConfig: false,
        trackType: 0,
    },
});
```

#### Send a service request

A service is a set of requests restricted to a certain domain's data model. This package will keep track of a request's service type and decode it appropriately.

```ts
import { UbisoftDemux } from 'ubisoft-demux';
const ubiDemux = new UbisoftDemux();
const resp = await ubiDemux.serviceRequest('utility_service', {
    request: {
        geoipReq: {},
    },
});
```

#### Use a service connection

Most service interactions occur through an open "connection". This package will open a connection and manage incrementing its connection `requestId`.

```ts
import { UbisoftDemux } from 'ubisoft-demux';
const ubiDemux = new UbisoftDemux();
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
```

#### Authentication

You can authenticate with the Demux API using a login ticket obtained from the UbiServices HTTP API. See below for more on it.

```ts
import { UbisoftDemux } from 'ubisoft-demux';
const ubiDemux = new UbisoftDemux();
await ubiDemux.basicRequest({
    authenticateReq: {
        clientId: 'uplay_pc',
        sendKeepAlive: false,
        token: {
            ubiTicket: `<your ticket here>`,
        },
    },
});
```

#### Errors

The Demux API does not return errors. If you do something wrong, you will just see a timeout error. The default timeout is 10 seconds.

### UbiServices API

Ubisoft's HTTP REST API is out of the scope of this package, but it contains some basic requests that are complementary to the Demux API.

#### Login

Currently only supports fresh login without 2FA.

```ts
import { UbiServicesApi } from 'ubisoft-demux';
const ubiServices = new UbiServicesApi();
const { ticket } = await ubiServices.login(email, password);
```

### File Parser

Since many of Ubisoft Connect's local files are also protobuf format, this package can also decode many of them.

```ts
import { UbisoftFileParser } from 'ubisoft-demux';
const data = readFileSync(`%LOCALAPPDATA%/Ubisoft Game Launcher/user.dat`);
const fileParser = new UbisoftFileParser();
const result = fileParser.parseUserDat(data);
```

Use IntelliSense to see all the available file parsers.

## How to get the .proto's

Only needed if you need to update the protos

1. [Follow steps 1-3 of this guide](https://github.com/claabs/uplay-install-reverse#protobuf-schema).
1. Copy the protos folder to `./proto`

## How to capture and decode Ubisoft Connect Demux requests

Follow the documentation on [ubisoft-dmx-decode](https://github.com/claabs/ubisoft-dmx-decode)
