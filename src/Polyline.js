class Polyline{
	/**
	 * @param {array} points - Array of points like [ [x1, y1], [x2, y2]... ]
	 */
	constructor(points) {
	    this.points = points;
		this.pointNum = this.points.length;
	}
	
	toDxfString(num)
	{
	    //https://www.autodesk.com/techpubs/autocad/acad2000/dxf/polyline_dxf_06.htm
	    let s = '0\nLWPOLYLINE\n';
	    s += '5\n'+num+'\n330\n1F\n100\nAcDbEntity\n'+'8\n0\n';
		s += '100\nAcDbPolyline\n';
		s += '90\n'+this.pointNum+'\n';
		s += '70\n0\n43\n0.0\n';
		
	    for (let i = 0; i < this.points.length; i++)
	    {
	        s += '10\n'+this.points[i][0]+'\n20\n'+this.points[i][1]+'\n';
	    }
	   
	    return s;
	}
}

module.exports = Polyline;