class Player
{
    constructor(x,y,tilesetPath ,tilesize)
    {
        this.tileset = new Tileset(tilesetPath);

        this.tilesize = tilesize;

        this.pos = createVector(x,y);
        this.vel = createVector(0,0);

        this.class=3;       //class of player 
        this.dir=0;         //direction of player
        this.frame=0;       //frame of animation of the player
        this.frameCount=0;      //timer for animation 

        this.path = null;
    }

    render()
    {
        var img = this.tileset.getImage();
        var dx = this.pos.x * this.tilesize;
        var dy = this.pos.y * this.tilesize;
        var sx = this.dir*3*this.tileset.sTilesize.x + this.frame*this.tileset.sTilesize.x;
        var sy = this.class * this.tileset.sTilesize.y;
        image(img,dx, dy,this.tilesize,this.tilesize,
            sx,sy,this.tileset.sTilesize.x,this.tileset.sTilesize.y);
        this.follow_path();
    }

    follow_path()
    {
        
        if (!this.path || !this.path.length)
        {
            this.path = null;
            this.frame=0;           //otherwise set frame and framecount to zero
            this.frameCount=0;
        }
        else
        {
            var dst = createVector(this.path[0].x,this.path[0].y);
            if (this.pos.x.toFixed(1) == dst.x && this.pos.y.toFixed(1) == dst.y)
            {
                this.pos.x = Number(this.pos.x.toFixed(1));
                this.pos.y = Number(this.pos.y.toFixed(1));
                this.path.shift();
            }
            else
            {
                var dir = dst.sub(this.pos).setMag(1);
                this.updateDir(dir);
                this.updatePos(dir);
                this.updateFrame();
            }
        }
    }

    updateFrame()
    {
        if(this.frame===0){
            this.frame=1;               
            this.frameCount=0;
        }else{
            this.frameCount+=0.25;     //... oscilate value of this.frame between 1 and  
            this.frame= ( floor( this.frameCount ) +1 ) % 3 ;
        }
    }

    updatePos(dir)
    {
        var ratio = 0.2;

        if(dir.x == 1)
            this.pos.add(createVector(1, 0).mult(ratio));
        else if(dir.x == -1)
            this.pos.add(createVector(-1, 0).mult(ratio));
        else if(dir.y == -1)
            this.pos.add(createVector(0, -1).mult(ratio));
        else if(dir.y == 1)
            this.pos.add(createVector(0, 1).mult(ratio));
    }

    updateDir(dir)
    {
        if(dir.x == 1)
            this.dir = 1;
        else if(dir.x == -1)
            this.dir = 3;
        else if(dir.y == -1)
            this.dir = 2;
        else if(dir.y == 1)
            this.dir = 0;
    }
}