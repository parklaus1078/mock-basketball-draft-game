-- migrate:up
CREATE TABLE users_choose_players(
    id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    player_id INT NOT NULL,
    nth_choice INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_choose_players_user_id FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT fk_users_choose_players_player_id FOREIGN KEY (player_id) REFERENCES players (id)
);

-- migrate:down
DROP TABLE users_choose_players;
