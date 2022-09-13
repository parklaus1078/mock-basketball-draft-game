const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./src/routes");

const createApp = () => {
    const globalErrorHandler = (err, req, res, next) => {
        err.statusCode = err.statusCode || 500;
        res.status(err.statusCode).json({ message: err.message });
    };

    const app = express();
    app.use(express.json());
    app.use(morgan("combined"));
    app.use(cors());

    app.use(routes);
    app.use(globalErrorHandler);

    return app;
};

module.exports = {
    createApp
}