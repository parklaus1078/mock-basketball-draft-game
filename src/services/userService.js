const userDao = require("../models/userDao");
const { errorMaker } = require("../utils/errorMaker");

const postUsername = async (username, room_id) => {
    const usernames = await userDao.usernamesInRoom(room_id);

    if (usernames.includes(username)) {
        const err = errorMaker("USERNAME_EXISTS_IN_THE_ROOM", 409);
        throw err;
    }

    const postUsername = await userDao.postUsername(username, room_id);

    return postUsername;
};

module.exports = {
    postUsername
}