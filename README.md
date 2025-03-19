# drive-bc-overlay

This template should help get you started developing with Vue 3 in Vite.

## Overspeed Query

[out:json][timeout:90];
// Define the search area (Metro Vancouver)
area[name="Vancouver"]->.searchArea;

// Gather results
(
  nwr["highway"]["cycleway"~"lane|track"](area.searchArea);  // Roads with bike lanes (lane or track)
  nwr["highway"]["sidewalk"](area.searchArea);              // Sidewalk presence
  nwr["highway"]["surface"](area.searchArea);               // Surface type (paved, gravel, etc.)
  nwr["highway"]["maxspeed"](area.searchArea);              // Speed limit
  nwr["highway"]["lanes"](area.searchArea);                 // Number of lanes
  nwr["highway"]["width"](area.searchArea);                 // Road width
  nwr["highway"]["oneway"](area.searchArea);                // One-way streets
  nwr["highway"]["access"](area.searchArea);                // Traffic access restrictions
  nwr["highway"]["motor_vehicle"](area.searchArea);         // Motor vehicle restrictions
  nwr["highway"]["bicycle"](area.searchArea);               // Bicycle access rules
  nwr["highway"]["foot"](area.searchArea);                  // Pedestrian access rules
  nwr["highway"]["lit"](area.searchArea);                   // Street lighting availability
  nwr["highway"]["busway"](area.searchArea);                // Bus lanes
  nwr["highway"]["tramway"](area.searchArea);               // Tram tracks
  nwr["highway"]["turn"](area.searchArea);                  // Allowed turn directions
  nwr["highway"]["incline"](area.searchArea);               // Road slope percentage
  nwr["highway"]["ele"](area.searchArea);                   // Elevation above sea level
);

// Print results
out geom;


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
