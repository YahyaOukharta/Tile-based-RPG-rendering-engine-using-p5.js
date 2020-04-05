class Player
{
    constructor(x,y, tilesize)
    {
        this.pos = createVector(x,y);
        this.tilesize = tilesize;

        this.path = null;
    }

    render()
    {
        push();
            noStroke();
            fill(255,0,0);
            rect(this.pos.x * this.tilesize, this.pos.y * this.tilesize, this.tilesize, this.tilesize);
        pop();
        this.follow_path();
    }

    follow_path()
    {
        
        if (!this.path || !this.path.length)
            this.path = null;
        else
        {
            console.log('following path');
            //this.pos = this.path[0];
            this.pos.x = this.path[0].x;
            this.pos.y = this.path[0].y;
            this.path.shift();
        }
    }
}