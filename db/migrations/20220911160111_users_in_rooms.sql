-- migrate:up
CREATE TABLE users_in_rooms(
    id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    room_id BIGINT,
    user_id BIGINT,
    turn INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_in_rooms_room_id FOREIGN KEY (room_id) REFERENCES rooms (id),
    CONSTRAINT fk_users_in_rooms_user_id FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE users_in_rooms;
