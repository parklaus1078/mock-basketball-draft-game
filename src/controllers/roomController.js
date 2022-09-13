const roomService = require("../services/roomService");
const { errorMaker } = require("../utils/errorMaker");

const createRoom = async (req, res) => {
    const { user_quota } = req.body;

    if (!user_quota) {
        const err = errorMaker("KEY_ERROR", 400);
        throw err;
    }

    const createRoom = await roomService.createRoom(user_quota);

    return res.status(201).json({ 
        message: "roomCreated", 
        room_id: createRoom 
    });
};

module.exports = {
    createRoom
}