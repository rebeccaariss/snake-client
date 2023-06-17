const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// Object is returned from Node's net library connect function:
// (This object is what allows us to interact with the server)
const conn = connect();

setupInput(conn);