import express from "express";

const app = express();

app.use(express.static("./public"));

app.listen(80, () => {
  console.log("APP is running on 5001");
});

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});
