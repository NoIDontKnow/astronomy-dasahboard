// index.js
const db = require("./database");

function showStatistics() {
    console.log("\n📊 UNIVERSE STATISTICS");

    const galaxyCount = db.prepare(
        "SELECT COUNT(*) AS count FROM galaxies"
    ).get();

    const starCount = db.prepare(
        "SELECT COUNT(*) AS count FROM stars"
    ).get();

    const habitableCount = db.prepare(
        "SELECT COUNT(*) AS count FROM exoplanets WHERE potentially_habitable = 1"
    ).get();

    console.log(`- Galaxies catalogued: ${galaxyCount.count}`);
    console.log(`- Stars catalogued: ${starCount.count}`);
    console.log(`- Potentially habitable exoplanets: ${habitableCount.count}`);
}

function showSummary() {
    console.log("\n🧠 SCIENTIFIC SUMMARY");
    console.log(
        "This dashboard models the visible universe using structured SQL data, " +
        "integrates live NASA data, and generates 3D spatial representations " +
        "to support scientific exploration and decision-making."
    );
}

module.exports = { showStatistics, showSummary };
