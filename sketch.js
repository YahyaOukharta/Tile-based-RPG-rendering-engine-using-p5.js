let camera;
let tileset;
let spritesheet;
let level;
let player;
let walkable = 
  [0,3,17,18,19,34,35,42,43,51,
  52,53,54,55,59,60,61,68,69,70,71,72,76,77,
  78,80,114,115,116,117,118,130,131,132,133,
  134,135,148,149,150,151,152];

let tilesize = 40;
function preload()
{

}

function setup()
{
  level = new Level('assets/new_mapl.json', 'assets/tileset.json', tilesize, walkable);
  player = new Player(6,8,'assets/spritesheet.json',tilesize);
  camera = new Camera(player.pos);

  createCanvas(tilesize * level.mapSize().x, tilesize * level.mapSize().y);
}

let s;

function draw()
{
    frameRate(32);
    background(20);

    push();
    //scale(2);
    //camera.follow(player)
    //scale
    level.render();
    player.render();

    pop();
    //noLoop();
}

function mousePressed()
{
     var tilepos = createVector( floor(mouseX / (width) * level.mapSize().x),
                                 floor(mouseY / (height) * level.mapSize().y));
    //var tilepos = createVector( floor((mouseX - camera.getOffset().x)*2 / width * level.mapSize().x),
    //                            floor((mouseY - camera.getOffset().y)*2 / height * level.mapSize().y));
    console.log(mouseX,mouseY);
    console.log(tilepos.x, tilepos.y);
    console.log(tilepos.x, tilepos.y);

    var path = level.findPath(player.pos,tilepos);
    player.path = path;
    //console.log(path);
  //console.log();

}