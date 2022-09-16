const { Pool } = require("pg");

const pool = new Pool();

async function readAllTableware() {
  const res = await pool.query("SELECT * FROM Tableware");
  return res.rows;
}

async function createTableware(name, qty) {
  await pool.query("INSERT INTO Tableware (name, qty) VALUES ($1, $2)", [
    name,
    qty,
  ]);
}

module.exports = {
  readAllTableware,
  createTableware,
};
