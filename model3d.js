// model3d.js
const db = require("./database");

function generate3DModel() {
    const stars = db.prepare(`
        SELECT name, distance_ly
        FROM exoplanets
    `).all();

    return stars.map((obj, index) => {
        const angle1 = index * 1.3;
        const angle2 = index * 0.7;

        const x = obj.distance_ly * Math.cos(angle1);
        const y = obj.distance_ly * Math.sin(angle1);
        const z = obj.distance_ly * Math.cos(angle2);

        return {
            name: obj.name,
            x: x.toFixed(2),
            y: y.toFixed(2),
            z: z.toFixed(2)
        };
    });
}

function display3DModel() {
    console.log("\n🌐 3D MODEL – CELESTIAL COORDINATES");
    const model = generate3DModel();

    model.forEach(obj => {
        console.log(
            `- ${obj.name} → (x:${obj.x}, y:${obj.y}, z:${obj.z})`
        );
    });
}

module.exports = { display3DModel };
