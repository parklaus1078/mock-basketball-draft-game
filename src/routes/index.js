const express = require("express");
const router = express.Router();

const roomRouter = require("./roomRouter");
const userRouter = require("./userRouter");

router.use("/rooms", roomRouter.router);
router.use("/users", userRouter.router);

module.exports = router;