const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Wlcome To Rockpad");
});

app.listen(process.env.PORT || 3000);
