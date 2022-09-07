const express = require("express");
const cors = require("cors");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const db = lowDb(new FileSync("db.json"));

db.defaults({ comments: [] }).write();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 4000;

app.get("/comments", (req, res) => {
  const data = db.get("notes").value();
  return res.json(data);
});

app.post("/comments/new", (req, res) => {
  const comment = req.body;
  db.get("comments").push({ comment }).write();
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
