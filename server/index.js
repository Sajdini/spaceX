const express = require("express");
const cors = require("cors");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const bodyParser = require("body-parser");

const db = lowDb(new FileSync("db.json"));

db.defaults({ name: "", id: null, comment: "" }).write();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/userInfo", (req, res) => {
  const data = db.get("userInfo").value();
  return res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
