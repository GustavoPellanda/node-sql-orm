const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/test', (req, res) => res
  .status(200)
  .send({ mensagem: 'Hello!' })
);

app.listen(PORT, () => {
    console.log("Server listening on port 3000...");
});

module.exports = app;
