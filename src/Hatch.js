class Hatch{
	
	constructor(points) {
	    
		this.points = points;
		this.pointsNum = points.length;
		
	}
	
	toDxfString(num,name){
	    
	    let s = '0\nHATCH\n';
	    s += '5\n'+num+'\n330\n1F\n100\nAcDbEntity\n'+'8\n'+name+'\n';
		s += "100\nAcDbHatch\n10\n0.0\n20\n0.0\n30\n0.0\n210\n0.0\n220\n0.0\n230\n1.0\n2\nSOLID\n70\n1\n71\n0\n91\n1\n92\n7\n72\n0\n73\n1\n";
		s += '93\n'+this.pointsNum+'\n';
		
	    for (let i = 0; i < this.pointsNum; i++)
	    {
	        s += '10\n'+this.points[i][0]+'\n20\n'+this.points[i][1]+'\n';
	    }
		
		s += '97\n1\n330\n0\n75\n1\n76\n1\n47\n2.680470542950764\n98\n1\n10\n3453.190575686195\n20\n1802.787515878135\n450\n0\n451\n0\n460\n0.0\n461\n0.0\n452\n0\n462\n0.0\n453\n2\n463\n0.0\n63\n3\n421\n255\n463\n1.0\n63\n2\n421\n16776960\n470\nLINEAR\n';
		
	    return s;
	}
}

module.exports = Hatch;