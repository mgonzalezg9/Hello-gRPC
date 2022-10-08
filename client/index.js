const PROTO_PATH = __dirname + "/../protos/helloworld.proto";

const parseArgs = require("minimist");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { SERVER_URL } = require("../config");
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

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

  const client = new hello_proto.Greeter(
    target,
    grpc.credentials.createInsecure()
  );
  const name = argv._.length > 0 ? argv._[0] : "world";
  client.sayHello({ name }, function (err, response) {
    console.log("Greeting:", response.message);
  });
}

main();
