class Arc{
	
	constructor(x,y,r,startAn,endAn) {
	    this.x = x;
		this.y = y;
		this.r = r;
		this.startAn = startAn;
		this.endAn = endAn;
	}
	
	toDxfString(num){
		let s = "0\nARC\n";
		s += "5\n"+num+"\n";
		s += "330\n1F\n";
		s += "100\nAcDbEntity\n";
		s += "8\n0\n";
		s += "100\nAcDbCircle\n";
		s += "10\n"+this.x + "\n20\n" + this.y +"\n30\n0\n";
		s += "40\n"+ this.r + "\n100\nAcDbArc\n50\n"+this.startAn+"\n51\n"+this.endAn+"\n";
		return s;
	}
}

module.exports = Arc;