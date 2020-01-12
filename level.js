function parse_json_file(path)
{
	var request = new XMLHttpRequest();
	request.open("GET", path, false);
	request.overrideMimeType("application/json");
	request.send(null);
	var jsonData = JSON.parse(request.responseText);
	return jsonData;
}

class Level
{
	constructor(tileset_path,map_path)
	{
		this.tileset_data = parse_json_file(tileset_path);
		//console.log(this.tileset_data);
		this.map_data = parse_json_file(map_path);
		console.log(this.map_data);
		this.map_size = createVector(this.map_data.width, this.map_data.height); // n_tiles
		//console.log(this.map_size);
		this.map_tiles = this.map_data.layers[0].data;
		this.tileset_image = loadImage(this.tileset_data.image);
		this.tile_size = createVector(this.map_data.tilewidth, this.map_data.tileheight);//size of each tile
		//console.log(this.map_tiles);
		//console.log(this.tile_size);
	}

	render()
	{
		var dw = width / this.map_size.x;
		var dh = height / this.map_size.y;
		console.log("dw/dh = " + dw + " " + dh);
		for (var i = 0; i < this.map_tiles.length; i++)
		{
			var sx,sy,dx,dy;
			dx = (i % this.map_size.x) * dw;
			dy = floor(i / this.map_size.x) * dh;
			console.log("dx/dy = " + dx + " " + dy);
			sx = ((this.map_tiles[i] - 1) % this.tileset_data.columns) * this.tile_size.x;
			sy = floor((this.map_tiles[i] - 1) / this.tileset_data.columns) * this.tile_size.y;
			console.log("sx/sy = " + sx + " " + sy);


			image(this.tileset_image, dx,dy, dw,dh, sx,sy, this.tile_size.x, this.tile_size.y);
		}
	}
}