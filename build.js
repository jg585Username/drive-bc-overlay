// build.js
const fs = require("fs");
const path = require("path");

// 1) Read the environment variable from Netlify
const key = process.env.GOOGLE_MAPS_API_KEY;
if (!key) {
    throw new Error("GOOGLE_MAPS_API_KEY is not defined in environment!");
}

// 2) Read your index.template.html
const templatePath = path.join(__dirname, "index.template.html");
let html = fs.readFileSync(templatePath, "utf8");

// 3) Replace the placeholder
html = html.replace("__MY_API_KEY__", key);

// 4) Write to a final index.html in a "dist" folder
const distFolder = path.join(__dirname, "dist");
if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder);
}
const outputPath = path.join(distFolder, "index.html");
fs.writeFileSync(outputPath, html);

console.log("Built index.html with your Google Maps API key!");
