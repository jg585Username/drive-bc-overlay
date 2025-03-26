const fs = require("fs");
const path = require("path");

const key = process.env.GOOGLE_MAPS_API_KEY;
if (!key) {
    throw new Error("GOOGLE_MAPS_API_KEY is not defined in environment!");
}

const templatePath = path.join(__dirname, "index.template.html");
let html = fs.readFileSync(templatePath, "utf8");

html = html.replace("__MY_API_KEY__", key);

const distFolder = path.join(__dirname, "dist");
if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder);
}
const outputPath = path.join(distFolder, "index.html");
fs.writeFileSync(outputPath, html);

console.log("Built index.html with your Google Maps API key!");
