-- migrate:up
CREATE TABLE users(
    id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    room_id BIGINT NOT NULL,
    turn INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_room_id FOREIGN KEY (room_id) REFERENCES rooms (id) ON DELETE cascade,
    CONSTRAINT users_id_and_room_id_unique UNIQUE(room_id, id)
);

-- migrate:down
DROP TABLE users;
