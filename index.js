import express from "express";

const app = express();

app.use(express.static("./public"));

app.listen(5001, () => {
  console.log("APP is running on 5001");
});

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});
