import parseArgs from "minimist";
import { credentials } from "@grpc/grpc-js";
import { SERVER_URL } from "../config";
import { HelloProto } from "../src/protos/HelloWorld";

function main() {
  const argv = parseArgs(process.argv.slice(2), {
    string: "target",
  });

  // if (argv.target) {
  //   target = argv.target;
  // } else {
  //   target = SERVER_URL;
  // }
  const target = SERVER_URL;

  const client = new HelloProto.Greeter(target, credentials.createInsecure());
  const name = argv._.length > 0 ? argv._[0] : "world";
  client.sayHello({ name }, function (err, response) {
    console.log("Greeting:", response.message);
  });
}

main();
