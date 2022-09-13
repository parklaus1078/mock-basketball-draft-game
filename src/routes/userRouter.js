const express = require("express");
const router = express.Router();
const { asyncCatch } = require("../utils/asyncWrap");

const userController = require("../controllers/userController");

router.post("/", asyncCatch(userController.postUsername));

module.exports = {
    router
}