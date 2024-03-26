const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.status(200).send({
    version: "1.0.0",
    userMessage:
      "It worked",
    status: 200,
    fareManagerId: "X91SMSS",
  });
});

app.get("/:fail", (req, res) => {
  console.log(req.get("host"));
  res.status(200).send({
    version: "1.0.0",
    userMessage:
      "Sorry, Something happened unexpectedly. Please try after sometime.",
    status: 404,
    fareManagerId: "X91SMSS",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
