class ImageDef{
	
	constructor(width,height,fileName){
		this.width = width;
		this.height = heigth;
		this.fileName = fileName;
		this.codeFive = null;
	}
	
	imageToDxfString(){
		let s = "0\nIMAGEDEF\n5\n";
		s += this.codeFive+"\n";
		s += "330\n28A\n";
		s += "100\nAcDbRasterImageDef\n";
		s += "1\n"+ "..\\img\\"+this.fileName+"\n";
		s += "10\n"+ this.width +"\n20\n"+this.height+"\n";
		s += "280\n1\n281\n0\n";
		return s;
	}
}
module.exports = ImageDef;
