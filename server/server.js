const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

const textToImage = require("text-to-image");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hellodddd");
});

app.get("/post", (req, res) => {
  res.send(req.body);
});

app.post("/post", urlencodedParser, async (req, res) => {
  console.log(req.body);
  const { colorPicked, quote } = req.body;
  console.log(colorPicked);
  const dataUri = await textToImage.generate(quote, {
    debug: true,
    maxWidth: 1000,
    customHeight: 500,
    fontSize: 18,
    fontFamily: "Arial",
    lineHeight: 30,
    margin: 5,
    bgColor: "black",
    textColor: req.body.colorPicked,
  });
  res.send(dataUri);
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
