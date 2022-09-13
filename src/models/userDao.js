const { appDataSource } = require("../utils/dataSource");

const usernamesInRoom = async (room_id) => {
    const usernames = await appDataSource.query(
        `SELECT
            JSON_ARRAYAGG(
                u.username
            ) AS usernames
        FROM users u
        INNER JOIN rooms r
        ON r.id = u.room_id
        WHERE r.id = ${room_id}
        `
    );

    return usernames[0].usernames;
};

const postUsername = async (username, room_id) => {
    const postUsername = await appDataSource.query(
        `INSERT INTO users(
            room_id,
            username
        ) VALUES (?,?)
        `,
        [room_id, username]
    );

    return postUsername.insertId;
};

module.exports = {
    usernamesInRoom,
    postUsername
}