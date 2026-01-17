// app.js
const { showStatistics, showSummary } = require("./index");
const { display3DModel } = require("./model3d");
const { fetchNasaData, displayNasaSummary } = require("./nasaApi");

async function runApp() {
    console.log("model3d loaded:", require("./model3d"));
    console.log("nasaApi loaded:", require("./nasaApi"));

    console.log("=======================================");
    console.log(" ASTRONOMY DASHBOARD – EXTENDED EDITION ");
    console.log("=======================================");

    showStatistics();
    display3DModel();

    await fetchNasaData();
    displayNasaSummary();

    showSummary();
}

runApp();
