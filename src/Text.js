class Text{
	constructor(x,y,lineheight,content,angle) {
		this.x= x;
		this.y = y;
		this.lineheight = lineheight;
		this.content = content;
		this.angle = angle;
	}
	
	toDxfString(num){
		
		let s = '0\nTEXT\n';
		s += '5\n'+num+'\n'
		s += '330\n1F\n';
		s += '100\nAcDbEntity\n';
		s += '8\n0\n';
		s += '100\nAcDbText\n';
        //s += `8\n${this.layer.name}\n`;
        s += '10\n'+this.x+'\n20\n'+this.y+'\n30\n0.0\n';
		s += '40\n'+this.lineheight + '\n1\n'+ this.content+'\n';
		s += '50\n'+this.angle+'\n100\nAcDbText\n';
        return s;
	}
}

module.exports = Text;