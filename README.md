# Tile Based RPG Rendering engine in P5.js

Try it out on this link [https://yahyaoukharta.github.io/Tile-based-RPG-rendering-engine-using-p5.js/](https://yahyaoukharta.github.io/Tile-based-RPG-rendering-engine-using-p5.js/)

# Program parts

## Tileset
    - Takes in tileset.json from 'tiled' software
    - Store data

## Level
   - Takes in map.json from 'tiled'
   - Render map
   - Store map as 2d array for pathfinding
   - Path finding utilities

## Player 
   - Player from [BlowHard](https://github.com/YahyaOukharta/BlowHard)
   - Walks towards mouse on click
   - Gets path using [A* Pathfinding](https://github.com/bgrins/javascript-astar) algorithm
