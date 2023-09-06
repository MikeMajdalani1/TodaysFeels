const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
