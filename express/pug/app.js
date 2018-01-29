const express = require("express");
const app = express();
const port = process.argv[2];

// routes for /home
app.get("/home", (req, res) => {
  res.end("Hello World!");
});

app.listen(port);
