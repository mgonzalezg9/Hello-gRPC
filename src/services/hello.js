/**
 * Implements the SayHello RPC method.
 */
export const sayHello = (call, callback) => {
  callback(null, { message: "Hello " + call.request.name });
};
