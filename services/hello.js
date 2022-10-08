/**
 * Implements the SayHello RPC method.
 */
const sayHello = (call, callback) => {
  callback(null, { message: "Hello " + call.request.name });
};

module.exports = { sayHello };
