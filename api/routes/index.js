const bodyParser = require("body-parser");
const people = require("./peopleRoute");
const addresses = require("./addressesRoute");
const orders = require("./ordersRoute");

module.exports = app => {
    app.use(bodyParser.json());
    app.use(people, addresses, orders);
}