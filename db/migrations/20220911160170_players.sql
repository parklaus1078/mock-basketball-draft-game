-- migrate:up
CREATE TABLE players(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    POS_id INT NOT NULL,
    PG_availability_id INT NOT NULL,
    SG_availability_id INT NOT NULL,
    SF_availability_id INT NOT NULL,
    PF_availability_id INT NOT NULL,
    C_availability_id INT NOT NULL,
    FT INT NOT NULL,
    scoring INT NOT NULL,
    pass INT NOT NULL,
    handle INT NOT NULL,
    attack_rebound INT NOT NULL,
    defense_rebound INT NOT NULL,
    block INT NOT NULL,
    steal INT NOT NULL,
    defense INT NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    salary INT NOT NULL,
    CONSTRAINT fk_players_POS_id FOREIGN KEY (POS_id) REFERENCES POS (id),
    CONSTRAINT fk_players_PG_availability_id FOREIGN KEY (PG_availability_id) REFERENCES availabilities (id),
    CONSTRAINT fk_players_SG_availability_id FOREIGN KEY (SG_availability_id) REFERENCES availabilities (id),
    CONSTRAINT fk_players_SF_availability_id FOREIGN KEY (SF_availability_id) REFERENCES availabilities (id),
    CONSTRAINT fk_players_PF_availability_id FOREIGN KEY (PF_availability_id) REFERENCES availabilities (id),
    CONSTRAINT fk_players_C_availability_id FOREIGN KEY (C_availability_id) REFERENCES availabilities (id)
);

-- migrate:down
DROP TABLE players;
