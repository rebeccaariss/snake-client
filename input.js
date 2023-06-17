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
  }
  if (key === "a") {
    setInterval(() => {
      connection.write("Move: left");
    }, 50);
  }
  if (key === "s") {
    setInterval(() => {
      connection.write("Move: down");
    }, 50);
  }
  if (key === "d") {
    setInterval(() => {
      connection.write("Move: right");
    }, 50);
  }
  if (key === "h") {
    connection.write("Say: sssnake sssays hi");
  }
  if (key === "j") {
    connection.write("Say: sssooo many sssnacks");
  }
  if (key === "k") {
    connection.write("Say: sssooo little time");
  }
};

module.exports = { setupInput };