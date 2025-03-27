# drive-bc-overlay [![Netlify Status](https://api.netlify.com/api/v1/badges/231bab18-35f8-4e00-98fa-7b06a361f5d4/deploy-status)](https://app.netlify.com/sites/drivebc/deploys)
Collection of important road data for the Metro Vancouver Area and the rest of BC (OpenBC, OSM (overpass), and Google Maps/Roads/Places API) normally not available on Google Maps, Apple Maps, etc...

## Stuff
### Live road works/incidents/events updates
![image](https://github.com/user-attachments/assets/8c8f1706-72fe-4000-b54b-953cb4b517a7)
### Polylines with detailed road data and layers by road type
![image](https://github.com/user-attachments/assets/41df7793-70c1-4825-8fac-24fca9aa7e2f)
### Measurements to nearest road (Places API)
![image](https://github.com/user-attachments/assets/9f6a4c9f-a6bd-4868-bf26-f2f2272ac609)

## Overpass Query

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
