const request = require("supertest");

const { createApp } = require("../../app");
const { appDataSource } = require("../utils/dataSource");

describe("POST/users", () => {
    let app;

    beforeEach(async () => {
        app = createApp();
        await appDataSource.initialize();

        await appDataSource.query(
            `INSERT INTO rooms (
                user_quota
            ) VALUES (?),(?),(?)
            `,
            [3, 15, 30]
        );

        await appDataSource.query(
            `INSERT INTO users (
                username,
                room_id
            ) VALUES (?), (?), (?), (?), (?)
            `,
            [["tester1-1", 1],["tester1-2", 1], ["tester2-1", 2], ["tester2-2", 2], ["tester2-3", 2]]
        );

    });

    afterEach(async () => {
        await appDataSource.query(
            `SET FOREIGN_KEY_CHECKS = 0;
            `
        );

        await appDataSource.query(
            `TRUNCATE users;
            `
        );

        await appDataSource.query(
            `TRUNCATE rooms;
            `
        );

        await appDataSource.destroy();
    });

    test("SUCCESS: adding a user", async () => {
        await request(app)
                .post("/users")
                .send({
                    username: "tester1-3",
                    room_id: 1
                })
                .expect(201)
                .expect({ 
                    message: "usernamePosted", 
                    user_id: 6
                });
    });

    test("FAIL: adding a username that exists already", async () => {
        await request(app)
                .post("/users")
                .send({
                    username: "tester1-2",
                    room_id: 1
                })
                .expect(409)
    });

    test("FAIL: request with lack of information", async () => {
        await request(app)
                .post("/users")
                .expect(400)
    });
});