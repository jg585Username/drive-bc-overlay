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

console.log("Built index.html with your Google Maps API key");

const geoFiles = ["map.geojson", "burnaby_bsss.geojson", "westbay_cypress.geojson", "burnaby_highway.geojson"];
geoFiles.forEach(filename => {
    fs.copyFileSync(
        path.join(__dirname, filename),
        path.join(__dirname, "dist", filename)
    );
});
const imageFiles = [
    "construction.png",
    "incident.png",
    "special_event.png"
];
const imagesDir = path.join(__dirname, "dist", "images");
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}
imageFiles.forEach(filename => {
    // src is e.g. images/construction.png
    const src = path.join(__dirname, "images", filename);
    // dest is dist/images/construction.png
    const dest = path.join(__dirname, "dist", "images", filename);
    fs.copyFileSync(src, dest);
});
console.log("Copied geojson files + images into dist/ folder");

fs.copyFileSync(
    path.join(__dirname, "public", "favicon.png"),
    path.join(__dirname, "dist", "favicon.png")
);
