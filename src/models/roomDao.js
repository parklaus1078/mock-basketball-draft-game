const { appDataSource } = require("../utils/dataSource");

const createRoom = async (user_quota) => {
    const room_id = await appDataSource.query(
        `INSERT INTO rooms(
            user_quota
        ) VALUES (?)
        `,
        [user_quota]
    );

    return room_id.insertId;
};

module.exports = {
    createRoom
}