import { loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

const HELLOWORLD_PROTO_PATH = __dirname + "/../../protos/helloworld.proto";
const helloWorldPckgDefinition = loadSync(HELLOWORLD_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const BOOKSTORE_PROTO_PATH = __dirname + "/../../protos/bookstore.proto";
const bookStorePckgDefinition = loadSync(BOOKSTORE_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

export const HelloProto = loadPackageDefinition(
  helloWorldPckgDefinition
).helloworld;
export const BookStoreProto = loadPackageDefinition(
  bookStorePckgDefinition
).Bookstore;
