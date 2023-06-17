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

  //Notes on movement from Compass:
  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)

  conn.on("connect", () => {
    console.log("Connected to ssssserver 🐍");
    conn.write("Name: BEC");
    // conn.write("Move: up");
  });

  // –––––––––– setTimeout experiment 1: ––––––––––
  // (sending more than one successive move message)
  // in order to accomplish this, we need to write the times
  // at intervals manually/through hard coding.

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Moving right");
  //     conn.write("Move: right");
  //   }, 2000);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Moving left");
  //     conn.write("Move: left");
  //   }, 4000);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Moving down");
  //     conn.write("Move: down");
  //   }, 6000);
  // });

  // –––––––––– setTimeout experiment 2: ––––––––––
  // (setTimeout moves snake incrementally but we need to call every time)

  //Continually move up every 50ms:
  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Moving up");
  //     conn.write("Move: up");
  //   }, 50);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Moving up");
  //     conn.write("Move: up");
  //   }, 50);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Moving up");
  //     conn.write("Move: up");
  //   }, 50);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Moving up");
  //     conn.write("Move: up");
  //   }, 50);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Moving up");
  //     conn.write("Move: up");
  //   }, 50);
  // });

  // –––––––––– substitute setInterval (experiment 3): ––––––––––
  // (with setInterval, the snake continuously moves without us having to
  // call a function for every movement as we did in experiment 2).
  // however, this creates an infinite loop, so the snake does crash
  // and server returns resulting "you crashed, so you ded." message 🙃

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     console.log("Moving up");
  //     conn.write("Move: up");
  //   }, 50);
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };