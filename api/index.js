const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 3000;

routes(app);

app.listen(PORT, () => {
    console.log("Server listening on port 3000...");
});

module.exports = app;
