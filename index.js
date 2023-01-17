import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("APP is running on 5001");
});

app.get("/", (req, res) => {
  res.json("APP");
});
