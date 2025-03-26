const fs = require("fs");
const path = require("path");

const key = process.env.GOOGLE_MAPS_API_KEY;
if (!key) {
    throw new Error("GOOGLE_MAPS_API_KEY is not defined in environment!");
}

const templatePath = path.join(__dirname, "index.html");
let html = fs.readFileSync(templatePath, "utf8");

html = html.replace("__MY_API_KEY__", key);

const distFolder = path.join(__dirname, "dist");
if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder);
}
const outputPath = path.join(distFolder, "index.html");
fs.writeFileSync(outputPath, html);

console.log("Built index.html with your Google Maps API key!");

const geoFiles = ["map.geojson", "burnaby_bsss.geojson", "westbay_cypress.geojson", "burnaby_highway.geojson"];
geoFiles.forEach(filename => {
    fs.copyFileSync(
        path.join(__dirname, filename),
        path.join(__dirname, "dist", filename)
    );
});
