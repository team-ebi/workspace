const express = require("express");
const app = express();

const businessesAPI = require("../controllers/businesses");
const usersAPI = require("../controllers/users");
const availabilityAPI = require("../controllers/availability");
const reservationsAPI = require("../controllers/reservations");
const stripecheckoutAPI = require("../controllers/stripecheckout");

const setupServer = () => {
    app.use(express.json());

    app.use("/api/businesses", businessesAPI);
    app.use("/api/users", usersAPI);
    app.use("/api/availability", availabilityAPI);
    app.use("/api/reservations", reservationsAPI);
    app.use("/api/stripecheckout", stripecheckoutAPI)

    return app;
};

module.exports = { setupServer };
