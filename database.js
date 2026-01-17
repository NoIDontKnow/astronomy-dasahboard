const Database = require("better-sqlite3");
const db = new Database("astronomy.db");

// Create tables
db.exec(`
CREATE TABLE IF NOT EXISTS galaxies (
    galaxy_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT,
    diameter_kly REAL,
    distance_mly REAL
);

CREATE TABLE IF NOT EXISTS stars (
    star_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    spectral_type TEXT,
    mass_solar REAL,
    galaxy_id INTEGER,
    FOREIGN KEY (galaxy_id) REFERENCES galaxies(galaxy_id)
);

CREATE TABLE IF NOT EXISTS exoplanets (
    planet_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    host_star TEXT,
    discovery_method TEXT,
    distance_ly REAL,
    potentially_habitable INTEGER
);
`);

// Seed data (only once)
const galaxyCount = db.prepare("SELECT COUNT(*) AS count FROM galaxies").get();

if (galaxyCount.count === 0) {
    db.exec(`
    INSERT INTO galaxies VALUES
    (1, 'Milky Way', 'Spiral', 105, 0),
    (2, 'Andromeda', 'Spiral', 220, 2.5),
    (3, 'Triangulum', 'Spiral', 60, 3.0);

    INSERT INTO stars VALUES
    (1, 'Sun', 'G2V', 1.0, 1),
    (2, 'Proxima Centauri', 'M5.5V', 0.12, 1),
    (3, 'Sirius', 'A1V', 2.1, 1);

    INSERT INTO exoplanets VALUES
    (1, 'Proxima Centauri b', 'Proxima Centauri', 'Radial Velocity', 4.24, 1),
    (2, 'Kepler-452b', 'Kepler-452', 'Transit', 1400, 1),
    (3, 'HD 209458 b', 'HD 209458', 'Transit', 159, 0);
    `);
}

module.exports = db;
