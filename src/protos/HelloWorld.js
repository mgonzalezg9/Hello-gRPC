const PROTO_PATH = __dirname + "/../../protos/helloworld.proto";

import { loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

export const HelloProto = loadPackageDefinition(packageDefinition).helloworld;
