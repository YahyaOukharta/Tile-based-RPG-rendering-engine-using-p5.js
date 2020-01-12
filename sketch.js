var level;

function preload()
{
    level = new Level("./tileset.json","./map.json");
}

function setup()
{
    createCanvas(700,700);
    background(0);
    noSmooth();
    level.render();

}

function draw()
{
}