class Circle{
	constructor(x,y,radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
	}
	
	toDxfString(num,name){
		
		let s = '0\nCIRCLE\n';
		s += '5\n'+num+'\n'
		s += '330\n1F\n';
		s += '100\nAcDbEntity\n';
		s += '8\n'+name+'\n';
		s += '100\nAcDbCircle\n';
	    s += '10\n'+this.x+'\n20\n'+this.y+'\n30\n0.0\n40\n'+this.radius+'\n';
	    return s;
	}
	
}

module.exports = Circle;