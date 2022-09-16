const {
  readAllTableware,
  createTableware,
  updateTableware,
  deleteTableware,
  readAllOffices,
  createOffice,
  updateOffice,
  deleteOffice,
} = require("./db");

async function readTableware() {
  const result = await readAllTableware();
  console.log(result);
}

async function readOffice() {
  const result = await readAllOffices();
  console.log(result);
}

// readTableware();
// createTableware("Testilautanen", 25);
// updateTableware(5, "Testilautanen", 30, 2);
// deleteTableware(5);

// readOffice();
// createOffice("Academy Mars", "Olympus Mons", 2030);
// updateOffice(5, "Academy Mars", "Valles Marineris", 2031);
// deleteOffice(5);
