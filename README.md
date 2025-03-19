# drive-bc-overlay
Collection of important road data for the Metro Vancouver Area from OpenBC, OSM, and Google Maps in one place

## Overspeed Query

```overpassql
[out:json][timeout:90];
area[name="Vancouver"]->.searchArea; // or whatever area

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

out geom;
