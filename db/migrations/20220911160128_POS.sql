-- migrate:up
CREATE TABLE POS(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10)
);

-- migrate:down
DROP TABLE POS;
