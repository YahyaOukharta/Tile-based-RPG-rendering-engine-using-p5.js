function mirrorXY(grid){
    var out = [];

    for(var x = 0; x < grid[0].length; x++)
    {   var arr = []
        for(var y = 0; y < grid.length; y++)
        {
            arr.push(grid[y][x]);
        }
        out.push(arr);
    }
    return (out);
}
function initGraph(arr, ncols, walkable){
    console.log(arr);
    var tmp = [];
    for(var i = 0; i < arr.length; i++)
    {
        if (walkable.indexOf(arr[i] - 1) > -1)
           tmp.push(1);
           //arr[i] = 1;
        else
           tmp.push(0);
           //arr[i] = 0; useful for debugging
    }
    var nLines = arr.length / ncols;
    var g = [];
    for(var i = 0; i < nLines; i++)
    {
        var ar = tmp.slice(i * ncols, i * ncols + ncols); //arr instead of tmp for debugging
        g.push(ar);
    }
    return (mirrorXY(g));
}

class Level
{
    constructor(mapPath, tilesetPath, tilesize, walkable)
    {
        this.tileset = new Tileset(tilesetPath);
        this.tilesize = tilesize;
        this.data = parseJsonFile(mapPath);
        this.map = this.data.layers[0];
        this.graph = new Graph(initGraph(this.map.data, this.map.width, walkable));
    }
    
    mapSize() //width and height of map (number of tiles)
    {
        return (createVector(this.map.width,this.map.height));
    }

    mapTiles() //array of tiles numbers
    {
        return (this.map.data);
    }

    render()
    {
        var mapSize = this.mapSize();
        var ncols = this.tileset.nColumns();
        var stilesize = this.tileset.sTilesize;
        var dw = width / mapSize.x;
        var dh = height / mapSize.y;
        var img = this.tileset.getImage();
        var mapTiles = this.mapTiles();

		for (var i = 0; i < mapTiles.length; i++)
		{
			var sx,sy,dx,dy;
			dx = (i % mapSize.x) * dw;
			dy = floor(i / mapSize.x) * dh;
			sx = ((mapTiles[i] - 1) % ncols) * stilesize.x;
            sy = floor((mapTiles[i] - 1) / ncols) * stilesize.y;
            noSmooth();
			image(img, dx,dy, dw,dh, sx,sy, stilesize.x, stilesize.y);
		}
    }
    findPath(start, end)
    {
        var s = start.copy();
        s.x = Number(s.x.toFixed(0));
        s.y = Number(s.y.toFixed(0));
        return (astar.search(this.graph,this.graph.grid[s.x][s.y], this.graph.grid[end.x][end.y]))
    }
}
