-- migrate:up
CREATE TABLE rooms(
    id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_quota INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE rooms;
