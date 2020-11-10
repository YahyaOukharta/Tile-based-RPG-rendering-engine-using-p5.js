class Camera
{
    constructor(pos)
    {
        this.pos = pos.copy().mult(tilesize);
        this.offset = this.getOffset();
    }

    getOffset()
    {
        return (createVector(width / 2 - this.pos.x , height / 2 - this.pos.y));
    }

    follow(player)
    {
        this.pos = player.pos.copy().mult(tilesize);
        translate(this.getOffset().x, this.getOffset().y);
    }
}