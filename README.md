# 🌌 Astronomy Dashboard – 

A modern **Node.js astronomy dashboard** that combines:

- 3D visualization of celestial objects
- Real-time NASA API data
- SQLite database storage
- Data analysis and statistics display

Built for **scientific computing enthusiasts** who want to explore the visible universe programmatically.

---

## 🚀 Features

1. **3D Modeling**
   - Interactive 3D simulation of planets, stars, and orbital systems.
   - Built using Node.js and Three.js-compatible modeling logic (`model3d.js`).

2. **NASA API Integration**
   - Fetches Astronomy Picture of the Day (APOD) from NASA API.
   - Stores data in SQLite (`astronomy.db`) for offline access.
   - Displays title and date of the latest APOD.

3. **Statistics and Summaries**
   - Generates insights from modeled celestial data.
   - Provides concise dashboard summary of universe data.

4. **Data Persistence**
   - All API data and user interactions stored in SQLite.
   - Schema automatically created on first run.

---

## 🛠 Project Structure
astronomy-dashboard/
│
├─ app.js # Main application entry point
├─ index.js # Dashboard statistics & summary logic
├─ model3d.js # 3D data modeling and visualization
├─ nasaApi.js # NASA API fetching and database storage
├─ database.js # SQLite connection and initialization
├─ package.json # Node project configuration
└─ README.md # This documentation

---

## 🖥 Usage

Once running, the dashboard will display:

1. **Statistics**
   - General info about celestial objects
   - Number of stars, planets, or other simulated data

2. **3D Model**
   - ASCII/console representation of the universe simulation
   - Interactions with orbits and planets

3. **NASA Data**
   - Fetches latest APOD
   - Displays **title and date**

4. **Summary**
   - High-level overview combining stats, NASA data, and 3D model output

---

## 📊 Example Output

=======================================
ASTRONOMY DASHBOARD – EXTENDED EDITION

Statistics:

Total Planets Simulated: 8

Stars in System: 1

Asteroids: 342

3D Model Loaded:
🌞
🪐 🪐
🪐 🪐

🚀 NASA ASTRONOMY PICTURE OF THE DAY
Date: 2026-01-17
Title: The Orion Nebula

Summary:

Universe snapshot completed

All data stored in astronomy.db
---

## 🗄 Database

- SQLite database: `astronomy.db`
- Tables automatically created:

| Table         | Description                              |
|---------------|------------------------------------------|
| `nasa_apod`   | NASA Astronomy Picture of the Day data   |
| `celestial`   | Simulated celestial objects (planets, stars, asteroids) |

> No manual creation needed; app auto-generates tables.

---

## 🔧 Development

- Add new 3D objects in `model3d.js`
- Extend NASA API endpoints in `nasaApi.js`
- Customize statistics and summaries in `index.js`
- Data analysis pipelines can be added in `index.js` or separate modules

---

## 📚 References

- [NASA Open APIs](https://api.nasa.gov/)
- [SQLite Node.js](https://www.npmjs.com/package/sqlite3)
- [Node.js Documentation](https://nodejs.org/en/docs/)

---

## 🌟 Future Improvements

- Web-based dashboard using Express + Three.js
- Interactive visualization of star systems
- Cache multiple NASA datasets for historical data
- CLI interactivity for custom universe simulations

---

## 👨‍💻 Author

- Developed as part of a **scientific computing & astronomy visualization project**
- GitHub: [NoIDontKnow](https://github.com/NoIDontKnow)
