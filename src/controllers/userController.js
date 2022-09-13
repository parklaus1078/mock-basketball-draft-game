const userService = require("../services/userService");
const { errorMaker } = require("../utils/errorMaker");

const postUsername = async (req, res) => {
        const { username, room_id } = req.body;
    
        if (!username || !room_id) {
           const err = errorMaker("KEY_ERROR", 400);
           throw err;
        }
    
        const postUsername = await userService.postUsername(username, room_id);
    
        return res.status(201).json({
            message: "usernamePosted", 
            user_id: postUsername
        });
};

module.exports = {
    postUsername
}