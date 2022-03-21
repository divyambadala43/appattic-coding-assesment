const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hellodddd");
});

app.get("/post", (req, res) => {
  res.send("Post");
});

app.post("/post", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render("post");
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
