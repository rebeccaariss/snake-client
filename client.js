const net = require("net");

// establishes a connection with the game server
const connect = function() {
  console.log("Connecting ...");
  // Note that object assigned to variable "conn" is an
  // instance of the Socket class in Node's net library.
  // See Socket methods in node docs:
  // https://nodejs.org/api/net.html#class-netsocket
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Connected to ssssserver 🐍");
    conn.write("Name: BEC");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };