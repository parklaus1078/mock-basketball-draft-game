const roomDao = require("../models/roomDao");
const { errorMaker } = require("../utils/errorMaker");

const createRoom = async (user_quota) => {
    const num_user_quota = Number(user_quota);
    if (num_user_quota < 2 || num_user_quota > 30) {
        const err = errorMaker("INVALID_USER_QUOTA", 406);
        throw err;
    }

    const createRoom = await roomDao.createRoom(num_user_quota);

    return createRoom;
};

module.exports = {
    createRoom
}