const express = require("express");
const router = express.Router();
const { asyncCatch } = require("../utils/asyncWrap");

const roomController = require("../controllers/roomController");

router.post("/", asyncCatch(roomController.createRoom));

module.exports = {
    router
}

