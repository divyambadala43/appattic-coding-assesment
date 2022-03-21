const express = require("express");
const bodyParser = require("body-parser");
port = 5000;

const app = express();

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
