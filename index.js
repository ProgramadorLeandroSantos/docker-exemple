const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello docker!");
});

app.listen(3000);