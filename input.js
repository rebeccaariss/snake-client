const { UP, LEFT, DOWN, RIGHT, SALUTATION, OBSERVATION, LAMENTATION } = require("./constants");

// Stores the active TCP connection object:
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

//Notes on movement from Compass:
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    setInterval(() => {
      connection.write(UP);
    }, 50);
  }
  if (key === "a") {
    setInterval(() => {
      connection.write(LEFT);
    }, 50);
  }
  if (key === "s") {
    setInterval(() => {
      connection.write(DOWN);
    }, 50);
  }
  if (key === "d") {
    setInterval(() => {
      connection.write(RIGHT);
    }, 50);
  }
  if (key === "h") {
    connection.write(SALUTATION);
  }
  if (key === "j") {
    connection.write(OBSERVATION);
  }
  if (key === "k") {
    connection.write(LAMENTATION);
  }
};

module.exports = { setupInput };