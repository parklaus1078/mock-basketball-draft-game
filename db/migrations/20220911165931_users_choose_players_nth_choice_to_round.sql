-- migrate:up
ALTER TABLE users_choose_players RENAME COLUMN nth_choice TO round;

-- migrate:down

