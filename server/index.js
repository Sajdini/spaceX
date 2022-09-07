const express = require("express");
const cors = require("cors");
const Comments = require("./config");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/comments", async (req, res) => {
  const snapshot = await Comments.get();
  const list = snapshot.docs.map((doc) => ({
    commentId: doc.id,
    ...doc.data(),
  }));
  res.send(list);
});

app.post("/comments/new", async (req, res) => {
  const { name, id, comment } = req.body;
  //
  const createDate = () => {
    let date = new Date();
    const hh = date.getHours();
    const minutes = date.getMinutes();
    const yy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDay()).padStart(2, "0");
    const formated = `${dd}-${mm}-${yy} ${hh}:${minutes}`;
    return formated;
  };
  await Comments.add({
    name,
    launchTypeId: id,
    comment,
    date: createDate(),
  });
  res.json({ success: true });
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
