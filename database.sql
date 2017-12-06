CREATE TABLE power (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
    description VARCHAR (1000)
);

INSERT INTO power ("name", "description")
VALUES ('Super Strength', 'Users are unnaturally stronger than other members of their species (in that universe). Stronger than can be achieved by any method of training.'),
('Teleportation', 'The ability to move instantaneously from one location to another without physically occupying the space in between. Sub-power of Spatial Manipulation and Teleportation Manipulation.'),
('Time Travel', 'User can travel and/or send others to future/past. Some users may be limited to remaining on the same spatial spot of a differing timeline, others may be able to move to a different spatial position.'),
('Flight', 'User can fly or otherwise move through the air using various methods. Some possibilities include using one or more forms of energy, wings or similar structures, or even mimicking or becoming an animal that can fly. Users are generally able to Levitate, and Glide as well.');

SELECT * FROM power;