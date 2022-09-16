const { Pool } = require("pg");

const pool = new Pool();

async function readAllTableware() {
  const res = await pool.query(
    "SELECT tableware.name name, tableware.qty qty, office.location location FROM tableware INNER JOIN office ON office_id = office.id "
  );
  return res.rows;
}

async function createTableware(name, qty) {
  await pool.query("INSERT INTO Tableware (name, qty) VALUES ($1, $2)", [
    name,
    qty,
  ]);
}

async function updateTableware(id, name, qty, office_id) {
  await pool.query(
    "UPDATE Tableware SET name = $2, qty = $3, office_id = $4 WHERE id = $1;",
    [id, name, qty, office_id]
  );
}

async function deleteTableware(id) {
  await pool.query("DELETE FROM Tableware WHERE id = $1;", [id]);
}

async function readAllOffices() {
  const res = await pool.query("SELECT * FROM office");
  return res.rows;
}

async function createOffice(name, location, starting_year) {
  await pool.query(
    "INSERT INTO office (name, location, starting_year) VALUES ($1, $2, $3)",
    [name, location, starting_year]
  );
}

async function updateOffice(id, name, location, starting_year) {
  await pool.query(
    "UPDATE office SET name = $2, location = $3, starting_year = $4 WHERE id = $1;",
    [id, name, location, starting_year]
  );
}

async function deleteOffice(id) {
  await pool.query("DELETE FROM office WHERE id = $1;", [id]);
}
module.exports = {
  readAllTableware,
  createTableware,
  updateTableware,
  deleteTableware,
  readAllOffices,
  createOffice,
  updateOffice,
  deleteOffice,
};
