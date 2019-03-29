class Layer{
	
	constructor(name, colorNumber){
	    this.name = name;
	    this.colorNumber = colorNumber;
	    this.shapes = [];
	}
	
	toDxfString(num){
	    let s = '0\nLAYER\n';
		s += '5\n'+num+"\n";
		s += "330\n2\n100\nAcDbSymbolTableRecord\n100\nAcDbLayerTableRecord\n";
		s += "2\n"+this.name+"\n"
		s += "70\n0\n62\n"+this.colorNumber+"\n6\nContinuous\n370\n-3\n390\nF\n347\nEE\n348\n0\n";
	    return s;        
	}
	
	/**
	 * add shape to basic
	 * @shape {object} shape - draw shape
	 */
	addShape(shape){
		this.shapes.push(shape);
		return this;
	}
	
	getShapes(){
	    return this.shapes;
	}
	
	shapeToString(layerNum){
		let s = " ";
		for(let i=0;i<this.shapes.length;i++){
			let firstLine5 = (648*layerNum+25*i).toString(16).toUpperCase();
			//console.log(this.shapes[i].__proto__.constructor.name);
			s += this.shapes[i].toDxfString(firstLine5,this.name);
		}  
		return s;
	}
}
module.exports = Layer;