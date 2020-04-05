function parseJsonFile(path)
{
	var request = new XMLHttpRequest();
	request.open("GET", path, false);
	request.overrideMimeType("application/json");
	request.send(null);
	var jsonData = JSON.parse(request.responseText);
	return jsonData;
}

class Tileset
{
    constructor(path)
    {
        this.data = parseJsonFile(path);
        this.image = loadImage(this.data.image);
        this.sTilesize = createVector(this.data.tilewidth,this.data.tileheight);
    }
    nColumns()
    {
        return(this.data.columns);
    }
    getImage()
    {
        return (this.image);
    }
}