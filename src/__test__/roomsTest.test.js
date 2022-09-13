const request = require("supertest");
const { createApp } = require("../../app");
const { appDataSource } = require("../utils/dataSource");

describe("POST/rooms", () => {
    let app;

    beforeEach(async () => {
        app = createApp();
        await appDataSource.initialize();
    });

    afterEach(async () => {
        await appDataSource.query(
            `SET FOREIGN_KEY_CHECKS = 0
            `
        );

        await appDataSource.query(
            `TRUNCATE rooms;
            `
        );

        await appDataSource.destroy();
    });

    test("SUCCESS: creates a room", async () => {
        await request(app)
                .post("/rooms")
                .send({
                    user_quota: 30
                })
                .expect(201)
                .expect({
                    message: "roomCreated",
                    room_id: 1
                });
    });

    test("FAIL: cannot create a room with user_quota < 2", async () => {
        await request(app)
                .post("/rooms")
                .send({
                    user_quota: 1
                })
                .expect(406);
    });

    test("FAIL: cannot create a room with user_quota > 30", async () => {
        await request(app)
                .post("/rooms")
                .send({
                    user_quota: 31
                })
                .expect(406);
    });
});