import { sayHello } from "./services/hello";
import { ServerCredentials, Server } from "@grpc/grpc-js";
import { HelloProto } from "./protos";
import { SERVER_URL } from "../config";

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  const server = new Server();
  server.addService(HelloProto.Greeter.service, { sayHello });
  server.bindAsync(SERVER_URL, ServerCredentials.createInsecure(), () => {
    server.start();
    console.log(`Launching server at ${SERVER_URL}`);
  });
}

main();
