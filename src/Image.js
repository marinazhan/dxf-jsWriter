class Image{
	constructor(x,y,width,height,name){
	    this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.name = name;
		/* this.imgDef = imgDef; */
	}
	
	toDxfString(num,layerName,imgDefNum){
		let s = '0\nIMAGE\n5\n';
		s += num + '\n';
		s += "330\n1F\n100\nAcDbEntity\n8\n";
		s += layerName + '\n100\nAcDbRasterImage\n';
		s += "10\n" + this.x + "\n20\n" + this.y + "\n30\n0.0\n";
		s += "11\n1.0\n21\n0.0\n31\n0.0\n12\n0.0\n22\n1.0\n32\n0.0\n";
		s += "13\n"+this.width+"\n";
		s += "23\n"+this.height+"\n";
		s += "340\n"+imgDefNum+"\n";
		s += "71\n1\n91\n2\n14\n0\n24\n0\n";
		s += "14\n"+this.width+"\n24\n"+this.height+"\n";
		return s;
	}
}

module.exports = Image;