-- migrate:up
CREATE TABLE availabilities(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    availability VARCHAR(10) NOT NULL
);

-- migrate:down
DROP TABLE availabilities;
