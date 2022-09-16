const { readAllTableware, createTableware } = require("./db");

async function read() {
  const result = await readAllTableware();
  console.log(result);
}
