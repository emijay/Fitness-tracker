CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT,
	email TEXT,
	created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS workoutType (
	id SERIAL PRIMARY KEY,
	name TEXT
);

CREATE TABLE IF NOT EXISTS exercises (
	id SERIAL PRIMARY KEY,
	name TEXT,
	weight INTEGER,
	reps INTEGER,
	sets INTEGER,
	distance INTEGER,
	duration INTEGER,
	workout_id INTEGER,
	user_id INTEGER,
	created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS macros (
	id SERIAL PRIMARY KEY,
	carbs INTEGER,
	protein INTEGER,
	fat INTEGER,
	calories INTEGER,
	user_id INTEGER,
	created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS bodystats (
	id SERIAL PRIMARY KEY,
	weight INTEGER,
	fatpercent INTEGER,
	user_id INTEGER,
	created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS macrogoals (
	id SERIAL PRIMARY KEY,
	carbs INTEGER,
	protein INTEGER,
	fat INTEGER,
	calories INTEGER,
	user_id INTEGER,
	created_at DATE DEFAULT now()
);