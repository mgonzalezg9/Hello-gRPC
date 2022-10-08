const PROTO_PATH = __dirname + "/protos/helloworld.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { SERVER_URL } = require("./config");
const { sayHello } = require("./services/hello");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  const server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, { sayHello });
  server.bindAsync(SERVER_URL, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log(`Launching server at ${SERVER_URL}`);
  });
}

main();
