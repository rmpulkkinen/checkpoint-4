const {
  readAllTableware,
  createTableware,
  updateTableware,
  deleteTableware,
} = require("./db");

async function read() {
  const result = await readAllTableware();
  console.log(result);
}
