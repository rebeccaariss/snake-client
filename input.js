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

// w = "Move: up"
// a = "Move: left"
// s = "Move: down"
// d = "Move: right"

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    setInterval(() => {
      connection.write("Move: up");
    }, 50);
    // connection.write('Move: up');
  }
  if (key === "a") {
    setInterval(() => {
      connection.write("Move: left");
    }, 50);
    // connection.write('Move: left');
  }
  if (key === "s") {
    setInterval(() => {
      connection.write("Move: down");
    }, 50);
    // connection.write('Move: down');
  }
  if (key === "d") {
    setInterval(() => {
      connection.write("Move: right");
    }, 50);
    // connection.write('Move: right');
  }
};

module.exports = { setupInput };