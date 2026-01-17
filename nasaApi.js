// nasaApi.js
const db = require("./database");

const NASA_API_KEY = "DEMO_KEY";

async function fetchNasaData() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    db.prepare(`
        CREATE TABLE IF NOT EXISTS nasa_apod (
            date TEXT PRIMARY KEY,
            title TEXT,
            explanation TEXT
        )
    `).run();

    db.prepare(`
        INSERT OR IGNORE INTO nasa_apod (date, title, explanation)
        VALUES (?, ?, ?)
    `).run(data.date, data.title, data.explanation);
}

function displayNasaSummary() {
    const apod = db.prepare(`
        SELECT date, title
        FROM nasa_apod
        ORDER BY date DESC
        LIMIT 1
    `).get();

    if (apod) {
        console.log("\n🚀 NASA ASTRONOMY PICTURE OF THE DAY");
        console.log(`Date: ${apod.date}`);
        console.log(`Title: ${apod.title}`);
    }
}

module.exports = { fetchNasaData, displayNasaSummary };
