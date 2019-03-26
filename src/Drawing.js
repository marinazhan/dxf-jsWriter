const Line = require('./Line');

class Drawing {

	constructor() {
		this.layers = {};
		//this.activeLayer = null;
		
		/* for (let i = 0; i < Drawing.LAYERS.length; ++i){
            this.addLayer(Drawing.LAYERS[i].name,Drawing.LAYERS[i].colorNumber,Drawing.LAYERS[i].lineTypeName);
        } */
	}
	
	/**
	 * @param {string} name - layername
	 */
	addLayer(name, colorNumber, lineTypeName){
        this.layers[name] = new Layer(name, colorNumber, lineTypeName);
        return this;
    }

	/**
	 * @param {number} x1 -x
	 * @param {number} y1 -y
	 * @param {number} x2 -x
	 * @param {number} y2 -y
	 */
	drawLine(x1, y1, x2, y2) {
		//this.activeLayer.addShape(new Line(x1, y1, x2, y2));
	}
	
	/* _getDxfLayerTable()
	{
	    let s = '0\nTABLE\n'; //start table
	    s += '2\nLAYER\n'; //name table as LAYER table
	
	    for (let layerName in this.layers)
	    {
	        s += this.layers[layerName].toDxfString();
	    }
	
	    s += '0\nENDTAB\n';
	
	    return s;
	} */
	
	_getDxfLtypeTable()
	{
	    let s = '0\nTABLE\n'; //start table
	   /* s += '2\nLTYPE\n';    //name table as LTYPE table
	
	    for (let lineTypeName in this.lineTypes)
	    {
	        s += this.lineTypes[lineTypeName].toDxfString();
	    }
	
	    s += '0\nENDTAB\n'; //end table */
		s += '2\n VPORT\n 5\n 8\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 1\n 1001\n ACAD\n 1000\n DbSaveVer\n 1071\n 105\n 0\n VPORT\n 5\n EA\n 330\n 8\n 100\n AcDbSymbolTableRecord\n 100\n AcDbViewportTableRecord\n 2\n *Active\n 70\n 0\n 10\n 0.0\n 20\n 0.0\n 11\n 1.0\n 21\n 1.0\n 12\n 3330.863358347044\n 22\n 1440.555374410095\n 13\n 0.0\n 23\n 0.0\n 14\n 10.0\n 24\n 10.0\n 15\n 10.0\n 25\n 10.0\n 16\n 0.0\n 26\n 0.0\n 36\n 1.0\n 17\n 0.0\n 27\n 0.0\n 37\n 0.0\n 40\n 2565.777105469416\n 41\n 1.949874686716792\n 42\n 50.0\n 43\n 0.0\n 44\n 0.0\n 50\n 0.0\n 51\n 0.0\n 71\n 0\n 72\n 1000\n 73\n 1\n 74\n 3\n 75\n 0\n 76\n 1\n 77\n 0\n 78\n 0\n 281\n 0\n 65\n 1\n 110\n 0.0\n 120\n 0.0\n 130\n 0.0\n 111\n 1.0\n 121\n 0.0\n 131\n 0.0\n 112\n 0.0\n 122\n 1.0\n 132\n 0.0\n 79\n 0\n 146\n 0.0\n 348\n F5\n 60\n 3\n 61\n 5\n 292\n 1\n 282\n 1\n 141\n 0.0\n 142\n 0.0\n 63\n 250\n 421\n 3355443\n 1001\n ACAD_NAV_VCDISPLAY\n 1070\n 3\n 0\n ENDTAB\n 0\n TABLE\n 2\n LTYPE\n 5\n 5\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 2\n 0\n LTYPE\n 5\n 14\n 330\n 5\n 100\n AcDbSymbolTableRecord\n 100\n AcDbLinetypeTableRecord\n 2\n ByBlock\n 70\n 0\n 3\n \n 72\n 65\n 73\n 0\n 40\n 0.0\n 0\n LTYPE\n 5\n 15\n 330\n 5\n 100\n AcDbSymbolTableRecord\n 100\n AcDbLinetypeTableRecord\n 2\n ByLayer\n 70\n 0\n 3\n \n 72\n 65\n 73\n 0\n 40\n 0.0\n 0\n LTYPE\n 5\n 16\n 330\n 5\n 100\n AcDbSymbolTableRecord\n 100\n AcDbLinetypeTableRecord\n 2\n Continuous\n 70\n 0\n 3\n Solid line\n 72\n 65\n 73\n 0\n 40\n 0.0\n 0\n ENDTAB\n 0\n TABLE\n 2\n LAYER\n 5\n 2\n 102\n {ACAD_XDICTIONARY\n 360\n 1FF\n 102\n }\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 1\n 0\n LAYER\n 5\n 10\n 102\n {ACAD_XDICTIONARY\n 360\n 13C\n 102\n }\n 330\n 2\n 100\n AcDbSymbolTableRecord\n 100\n AcDbLayerTableRecord\n 2\n 0\n 70\n 0\n 62\n 7\n 6\n Continuous\n 370\n -3\n 390\n F\n 347\n EE\n 348\n 0\n 0\n ENDTAB\n 0\n TABLE\n 2\n STYLE\n 5\n 3\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 2\n 0\n STYLE\n 5\n 11\n 330\n 3\n 100\n AcDbSymbolTableRecord\n 100\n AcDbTextStyleTableRecord\n 2\n Standard\n 70\n 0\n 40\n 0.0\n 41\n 1.0\n 50\n 0.0\n 71\n 0\n 42\n 2.5\n 3\n arial.ttf\n 4\n \n 1001\n ACAD\n 1000\n Arial\n 1071\n 34\n 0\n STYLE\n 5\n 132\n 330\n 3\n 100\n AcDbSymbolTableRecord\n 100\n AcDbTextStyleTableRecord\n 2\n Annotative\n 70\n 0\n 40\n 0.0\n 41\n 1.0\n 50\n 0.0\n 71\n 0\n 42\n 2.5\n 3\n arial.ttf\n 4\n \n 1001\n AcadAnnotative\n 1000\n AnnotativeData\n 1002\n {\n 1070\n 1\n 1070\n 1\n 1002\n }\n 1001\n ACAD\n 1000\n Arial\n 1071\n 34\n 0\n ENDTAB\n 0\n TABLE\n 2\n VIEW\n 5\n 6\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 0\n 0\n ENDTAB\n 0\n TABLE\n 2\n UCS\n 5\n 7\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 0\n 0\n ENDTAB\n 0\n TABLE\n 2\n APPID\n 5\n 9\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 9\n 0\n APPID\n 5\n 12\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n ACAD\n 70\n 0\n 0\n APPID\n 5\n 9E\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n ACAD_PSEXT\n 70\n 0\n 0\n APPID\n 5\n 133\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n AcadAnnoPO\n 70\n 0\n 0\n APPID\n 5\n 134\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n AcadAnnotative\n 70\n 0\n 0\n APPID\n 5\n 135\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n ACAD_DSTYLE_DIMJAG\n 70\n 0\n 0\n APPID\n 5\n 136\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n ACAD_DSTYLE_DIMTALN\n 70\n 0\n 0\n APPID\n 5\n 165\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n ACAD_MLEADERVER\n 70\n 0\n 0\n APPID\n 5\n 217\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n ACAD_NAV_VCDISPLAY\n 70\n 0\n 0\n APPID\n 5\n 281\n 330\n 9\n 100\n AcDbSymbolTableRecord\n 100\n AcDbRegAppTableRecord\n 2\n ACAD_EXEMPT_FROM_CAD_STANDARDS\n 70\n 0\n 0\n ENDTAB\n 0\n TABLE\n 2\n DIMSTYLE\n 5\n A\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 4\n 100\n AcDbDimStyleTable\n 71\n 2\n 340\n 27\n 340\n 137\n 0\n DIMSTYLE\n 105\n 1B0\n 330\n A\n 100\n AcDbSymbolTableRecord\n 100\n AcDbDimStyleTableRecord\n 2\n Standard\n 70\n 0\n 340\n 11\n 0\n DIMSTYLE\n 105\n 137\n 330\n A\n 100\n AcDbSymbolTableRecord\n 100\n AcDbDimStyleTableRecord\n 2\n Annotative\n 70\n 0\n 40\n 0.0\n 41\n 2.5\n 42\n 0.625\n 43\n 3.75\n 44\n 1.25\n 73\n 0\n 74\n 0\n 77\n 1\n 78\n 8\n 140\n 2.5\n 141\n 2.5\n 143\n 0.03937007874016\n 147\n 0.625\n 171\n 3\n 172\n 1\n 271\n 2\n 272\n 2\n 274\n 3\n 278\n 44\n 283\n 0\n 284\n 8\n 340\n 11\n 1001\n AcadAnnotative\n 1000\n AnnotativeData\n 1002\n {\n 1070\n 1\n 1070\n 1\n 1002\n }\n 1001\n ACAD_DSTYLE_DIMJAG\n 1070\n 388\n 1040\n 1.5\n 1001\n ACAD_DSTYLE_DIMTALN\n 1070\n 392\n 1070\n 0\n 0\n DIMSTYLE\n 105\n 27\n 330\n A\n 100\n AcDbSymbolTableRecord\n 100\n AcDbDimStyleTableRecord\n 2\n ISO-25\n 70\n 0\n 41\n 2.5\n 42\n 0.625\n 43\n 3.75\n 44\n 1.25\n 73\n 0\n 74\n 0\n 77\n 1\n 78\n 8\n 140\n 2.5\n 141\n 2.5\n 143\n 0.03937007874016\n 147\n 0.625\n 171\n 3\n 172\n 1\n 271\n 2\n 272\n 2\n 274\n 3\n 278\n 44\n 283\n 0\n 284\n 8\n 340\n 11\n 0\n ENDTAB\n 0\n TABLE\n 2\n BLOCK_RECORD\n 5\n 1\n 330\n 0\n 100\n AcDbSymbolTable\n 70\n 2\n 0\n BLOCK_RECORD\n 5\n 1F\n 102\n {ACAD_XDICTIONARY\n 360\n 1CE\n 102\n }\n 330\n 1\n 100\n AcDbSymbolTableRecord\n 100\n AcDbBlockTableRecord\n 2\n *Model_Space\n 340\n 22\n 70\n 0\n 280\n 1\n 281\n 0\n 0\n BLOCK_RECORD\n 5\n D2\n 330\n 1\n 100\n AcDbSymbolTableRecord\n 100\n AcDbBlockTableRecord\n 2\n *Paper_Space\n 340\n D3\n 70\n 0\n 280\n 1\n 281\n 0\n 0\n BLOCK_RECORD\n 5\n D6\n 330\n 1\n 100\n AcDbSymbolTableRecord\n 100\n AcDbBlockTableRecord\n 2\n *Paper_Space0\n 340\n D7\n 70\n 0\n 280\n 1\n 281\n 0\n 0\n ENDTAB\n';
	
	    return s;
	}

	toDxfString() {
		let s = '';
		s += '0\nSECTION\n';
		s += '2\nHEADER\n9\n';
		s += '$ACADVER\n1\nAC1027\n9\n$ACADMAINTVER\n70\n125\n9\n$DWGCODEPAGE\n3\nANSI_936\n9\n';
		s += '$LASTSAVEDBY\n1\nAdministrator\n9\n$REQUIREDVERSIONS\n160\n0\n9\n$INSBASE\n10\n0.0\n20\n0.0\n30\n0.0\n';
		s += '9\n$EXTMIN\n10\n0\n20\n0\n30\n0.0\n9\n$EXTMAX\n10\n100000\n20\n100000\n30\n0.0\n';
		s += '9\n$LIMMIN\n10\n0.0\n20\n0.0\n9\n$LIMMAX\n10\n420.0\n20\n297.0\n';
		s += '9\n$ORTHOMODE\n70\n0\n9\n$REGENMODE\n70\n1\n9\n$FILLMODE\n70\n1\n9\n';
		s += '$QTEXTMODE\n70\n0\n9\n$MIRRTEXT\n70\n0\n9\n$LTSCALE\n40\n1.0\n9\n$ATTMODE\n70\n1\n9\n$TEXTSIZE\n40\n2.5\n';
		s += '9\n$TRACEWID\n40\n1.0\n9\n$TEXTSTYLE\n7\nStandard\n9\n';
		s += '$CLAYER\n8\n0\n9\n';
		s += '$CELTYPE\n6\nByLayer\n9\n$CECOLOR\n62\n256\n9\n';
		s += '$CELTSCALE\n40\n1.0\n9\n$DISPSILH\n70\n0\n9\n';
		s += '$DIMSCALE\n40\n1.0\n9\n$DIMASZ\n40\n2.5\n9\n$DIMEXO\n40\n0.625\n9\n';
		s += '$DIMDLI\n40\n3.75\n9\n$DIMRND\n40\n0.0\n9\n';
		s += '$DIMDLE\n40\n0.0\n9\n$DIMEXE\n40\n1.25\n9\n';
		s += '$DIMTP\n40\n0.0\n9\n$DIMTM\n40\n0.0\n9\n$DIMTXT\n40\n2.5\n9\n';
		s += '$DIMCEN\n40\n2.5\n9\n$DIMTSZ\n40\n0.0\n9\n$DIMTOL\n70\n0\n';
		s += '9\n$DIMLIM\n70\n0\n9\n$DIMTIH\n70\n0\n9\n$DIMTOH\n70\n0\n9\n';
		s += '$DIMSE1\n70\n0\n9\n';
		s += '$DIMSE2\n70\n0\n9\n$DIMTAD\n70\n1\n9\n';
		s += '$DIMZIN\n70\n8\n9\n$DIMBLK\n1\n\n9\n$DIMASO\n70\n1\n9\n';
		s += '$DIMSHO\n70\n1\n9\n$DIMPOST\n1\n\n9\n';
		s += '$DIMAPOST\n1\n\n9\n$DIMALT\n70\n0\n9\n';
		s += '$DIMALTD\n 70\n 3\n 9\n $DIMALTF\n 40\n 0.03937007874016 \n 9 \n $DIMLFAC \n 40 \n 1.0 \n 9 \n $DIMTOFL \n 70 \n 1 \n 9 \n $DIMTVP \n 40 \n 0.0 \n 9 \n $DIMTIX \n 70 \n 0 \n 9 \n $DIMSOXD \n 70 \n 0 \n 9 \n $DIMSAH \n 70 \n 0 \n 9 \n $DIMBLK1 \n 1  \n \n 9 \n $DIMBLK2 \n 1  \n \n 9 \n $DIMSTYLE \n 2 \n ISO - 25 \n 9 \n $DIMCLRD \n 70 \n 0 \n 9 \n $DIMCLRE \n 70 \n 0 \n 9 \n $DIMCLRT \n 70 \n 0 \n 9 \n $DIMTFAC \n 40 \n 1.0 \n 9 \n $DIMGAP \n 40 \n 0.625 \n 9 \n $DIMJUST \n 70 \n 0 \n 9 \n $DIMSD1 \n 70 \n 0 \n 9 \n $DIMSD2 \n 70 \n 0 \n 9 \n $DIMTOLJ \n 70 \n 0 \n 9 \n $DIMTZIN \n 70 \n 8 \n 9 \n $DIMALTZ \n 70 \n 0 \n 9 \n $DIMALTTZ \n 70 \n 0 \n 9 \n $DIMUPT \n 70 \n 0 \n 9 \n $DIMDEC \n 70 \n 2 \n 9 \n $DIMTDEC \n 70 \n 2 \n 9 \n $DIMALTU \n 70 \n 2 \n 9 \n $DIMALTTD \n 70 \n 3 \n 9 \n $DIMTXSTY \n 7 \n Standard \n 9 \n $DIMAUNIT \n 70 \n 0 \n 9 \n $DIMADEC \n 70 \n 0 \n 9 \n $DIMALTRND \n 40 \n 0.0 \n 9 \n $DIMAZIN \n 70 \n 0 \n 9 \n $DIMDSEP \n 70 \n 44 \n 9 \n $DIMATFIT \n 70 \n 3 \n 9 \n $DIMFRAC \n 70 \n 0 \n 9 \n $DIMLDRBLK \n 1  \n 9 \n $DIMLUNIT \n 70 \n 2 \n 9 \n $DIMLWD \n 70 \n -\n 2 \n 9 \n $DIMLWE \n 70 \n -\n 2 \n 9 \n $DIMTMOVE \n 70 \n 0 \n 9 \n $DIMFXL\n 40\n 1.0\n 9\n $DIMFXLON\n 70\n 0\n 9\n $DIMJOGANG\n 40\n 0.7853981633974483\n 9\n $DIMTFILL\n 70\n 0\n 9\n $DIMTFILLCLR\n 70\n 0\n 9\n $DIMARCSYM\n 70\n 0\n 9\n $DIMLTYPE\n 6\n \n 9\n $DIMLTEX1\n 6\n \n 9\n $DIMLTEX2\n 6\n \n 9\n $DIMTXTDIRECTION\n 70\n 0\n 9\n $LUNITS\n 70\n 2\n 9\n $LUPREC\n 70\n 4\n 9\n $SKETCHINC\n 40\n 1.0\n 9\n $FILLETRAD\n 40\n 0.0\n 9\n $AUNITS\n 70\n 0\n 9\n $AUPREC\n 70\n 0\n 9\n $MENU\n 1\n .\n 9\n $ELEVATION\n 40\n 0.0\n 9\n $PELEVATION\n 40\n 0.0\n 9\n $THICKNESS\n 40\n 0.0\n 9\n $LIMCHECK\n 70\n 0\n 9\n $CHAMFERA\n 40\n 0.0\n 9\n $CHAMFERB\n 40\n 0.0\n 9\n $CHAMFERC\n 40\n 0.0\n 9\n $CHAMFERD\n 40\n 0.0\n 9\n $SKPOLY\n 70\n 0\n 9\n $TDCREATE\n 40\n 2458561.624733796\n 9\n $TDUCREATE\n 40\n 2458561.291400463\n 9\n $TDUPDATE\n 40\n 2458561.625069445\n 9\n $TDUUPDATE\n 40\n 2458561.291736111\n 9\n $TDINDWG\n 40\n 0.0003356481\n 9\n $TDUSRTIMER\n 40\n 0.0003356481\n 9\n $USRTIMER\n 70\n 1\n 9\n $ANGBASE\n 50\n 0.0\n 9\n $ANGDIR\n 70\n 0\n 9\n $PDMODE\n 70\n 0\n 9\n $PDSIZE\n 40\n 0.0\n 9\n $PLINEWID\n 40\n 0.0\n 9\n $SPLFRAME\n 70\n 0\n 9\n $SPLINETYPE\n 70\n 6\n 9\n $SPLINESEGS\n 70\n 8\n 9\n $HANDSEED\n 5\n 297\n 9\n $SURFTAB1\n 70\n 6\n 9\n $SURFTAB2\n 70\n 6\n 9\n $SURFTYPE\n 70\n 6\n 9\n $SURFU\n 70\n 6\n 9\n $SURFV\n 70\n 6\n 9\n $UCSBASE\n 2\n \n 9\n $UCSNAME\n 2\n \n 9\n $UCSORG\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $UCSXDIR\n 10\n 1.0\n 20\n 0.0\n 30\n 0.0\n 9\n $UCSYDIR\n 10\n 0.0\n 20\n 1.0\n 30\n 0.0\n 9\n $UCSORTHOREF\n 2\n \n 9\n $UCSORTHOVIEW\n 70\n 0\n 9\n $UCSORGTOP\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $UCSORGBOTTOM\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $UCSORGLEFT\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $UCSORGRIGHT\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $UCSORGFRONT\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $UCSORGBACK\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PUCSBASE\n 2\n \n 9\n $PUCSNAME\n 2\n \n 9\n $PUCSORG\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PUCSXDIR\n 10\n 1.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PUCSYDIR\n 10\n 0.0\n 20\n 1.0\n 30\n 0.0\n 9\n $PUCSORTHOREF\n 2\n \n 9\n $PUCSORTHOVIEW\n 70\n 0\n 9\n $PUCSORGTOP\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PUCSORGBOTTOM\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PUCSORGLEFT\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PUCSORGRIGHT\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PUCSORGFRONT\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PUCSORGBACK\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $USERI1\n 70\n 0\n 9\n $USERI2\n 70\n 0\n 9\n $USERI3\n 70\n 0\n 9\n $USERI4\n 70\n 0\n 9\n $USERI5\n 70\n 0\n 9\n $USERR1\n 40\n 0.0\n 9\n $USERR2\n 40\n 0.0\n 9\n $USERR3\n 40\n 0.0\n 9\n $USERR4\n 40\n 0.0\n 9\n $USERR5\n 40\n 0.0\n 9\n $WORLDVIEW\n 70\n 1\n 9\n $SHADEDGE\n 70\n 3\n 9\n $SHADEDIF\n 70\n 70\n 9\n $TILEMODE\n 70\n 1\n 9\n $MAXACTVP\n 70\n 64\n 9\n $PINSBASE\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PLIMCHECK\n 70\n 0\n 9\n $PEXTMIN\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PEXTMAX\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 9\n $PLIMMIN\n 10\n 0.0\n 20\n 0.0\n 9\n $PLIMMAX\n 10\n 12.0\n 20\n 9.0\n 9\n $UNITMODE\n 70\n 0\n 9\n $VISRETAIN\n 70\n 1\n 9\n $PLINEGEN\n 70\n 0\n 9\n $PSLTSCALE\n 70\n 1\n 9\n $TREEDEPTH\n 70\n 3020\n 9\n $CMLSTYLE\n 2\n Standard\n 9\n $CMLJUST\n 70\n 0\n 9\n $CMLSCALE\n 40\n 20.0\n 9\n $PROXYGRAPHICS\n 70\n 1\n 9\n $MEASUREMENT\n 70\n 1\n 9\n $CELWEIGHT\n 370\n -\n 1\n 9\n $ENDCAPS\n 280\n 0\n 9\n $JOINSTYLE\n 280\n 0\n 9\n $LWDISPLAY\n 290\n 0\n 9\n $INSUNITS\n 70\n 4\n 9\n $HYPERLINKBASE\n 1\n \n 9\n $STYLESHEET\n 1\n \n 9\n $XEDIT\n 290\n 1\n 9\n $CEPSNTYPE\n 380\n 0\n 9\n $PSTYLEMODE\n 290\n 1\n 9\n $FINGERPRINTGUID\n 2 {\n 1 F87CA50 - E8B4 - 024 B - 9081 - 9879 C5869613\n }\n 9\n $VERSIONGUID\n 2 {\n CC1F163F - 1 FA0 - 8 C49 - 963E-532 C194471CD\n }\n 9\n $EXTNAMES\n 290\n 1\n 9\n $PSVPSCALE\n 40\n 0.0\n 9\n $OLESTARTUP\n 290\n 0\n 9\n $SORTENTS\n 280\n 127\n 9\n $INDEXCTL\n 280\n 0\n 9\n $HIDETEXT\n 280\n 1\n 9\n $XCLIPFRAME\n 280\n 2\n 9\n $HALOGAP\n 280\n 0\n 9\n $OBSCOLOR\n 70\n 257\n 9\n $OBSLTYPE\n 280\n 0\n 9\n $INTERSECTIONDISPLAY\n 280\n 0\n 9\n $INTERSECTIONCOLOR\n 70\n 257\n 9\n $DIMASSOC\n 280\n 2\n 9\n $PROJECTNAME\n 1\n \n 9\n $CAMERADISPLAY\n 290\n 0\n 9\n $LENSLENGTH\n 40\n 50.0\n 9\n $CAMERAHEIGHT\n 40\n 0.0\n 9\n $STEPSPERSEC\n 40\n 2.0\n 9\n $STEPSIZE\n 40\n 6.0\n 9\n $3DDWFPREC\n 40\n 2.0\n 9\n $PSOLWIDTH\n 40\n 5.0\n 9\n $PSOLHEIGHT\n 40\n 80.0\n 9\n $LOFTANG1\n 40\n 1.570796326794896\n 9\n $LOFTANG2\n 40\n 1.570796326794896\n 9\n $LOFTMAG1\n 40\n 0.0\n 9\n $LOFTMAG2\n 40\n 0.0\n 9\n $LOFTPARAM\n 70\n 7\n 9\n $LOFTNORMALS\n 280\n 1\n 9\n $LATITUDE\n 40\n 37.795\n 9\n $LONGITUDE\n 40\n -\n 122.394\n 9\n $NORTHDIRECTION\n 40\n 0.0\n 9\n $TIMEZONE\n 70\n -\n 8000\n 9\n $LIGHTGLYPHDISPLAY\n 280\n 1\n 9\n $TILEMODELIGHTSYNCH\n 280\n 1\n 9\n $CMATERIAL\n 347\n EC\n 9\n $SOLIDHIST\n 280\n 0\n 9\n $SHOWHIST\n 280\n 1\n 9\n $DWFFRAME\n 280\n 2\n 9\n $DGNFRAME\n 280\n 0\n 9\n $REALWORLDSCALE\n 290\n 1\n 9\n $INTERFERECOLOR\n 62\n 1\n 9\n $INTERFEREOBJVS\n 345\n F9\n 9\n $INTERFEREVPVS\n 346\n F6\n 9\n $CSHADOW\n 280\n 0\n 9\n $SHADOWPLANELOCATION\n 40\n 0.0\n 0\n ENDSEC\n 0\n SECTION\n 2\n CLASSES\n 0\n CLASS\n 1\n ACDBDICTIONARYWDFLT\n 2\n AcDbDictionaryWithDefault\n 3\n ObjectDBX Classes\n 90\n 0\n 91\n 1\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n DICTIONARYVAR\n 2\n AcDbDictionaryVar\n 3\n ObjectDBX Classes\n 90\n 0\n 91\n 11\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n TABLESTYLE\n 2\n AcDbTableStyle\n 3\n ObjectDBX Classes\n 90\n 4095\n 91\n 1\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n MATERIAL\n 2\n AcDbMaterial\n 3\n ObjectDBX Classes\n 90\n 1153\n 91\n 3\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n VISUALSTYLE\n 2\n AcDbVisualStyle\n 3\n ObjectDBX Classes\n 90\n 4095\n 91\n 24\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n SCALE\n 2\n AcDbScale\n 3\n ObjectDBX Classes\n 90\n 1153\n 91\n 17\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n MLEADERSTYLE\n 2\n AcDbMLeaderStyle\n 3\n ACDB_MLEADERSTYLE_CLASS\n 90\n 4095\n 91\n 2\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n CELLSTYLEMAP\n 2\n AcDbCellStyleMap\n 3\n ObjectDBX Classes\n 90\n 1152\n 91\n 1\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n EXACXREFPANELOBJECT\n 2\n ExAcXREFPanelObject\n 3\n EXAC_ESW\n 90\n 1025\n 91\n 0\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n NPOCOLLECTION\n 2\n AcDbImpNonPersistentObjectsCollection\n 3\n ObjectDBX Classes\n 90\n 1153\n 91\n 0\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n LAYER_INDEX\n 2\n AcDbLayerIndex\n 3\n ObjectDBX Classes\n 90\n 0\n 91\n 0\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n SPATIAL_INDEX\n 2\n AcDbSpatialIndex\n 3\n ObjectDBX Classes\n 90\n 0\n 91\n 0\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n IDBUFFER\n 2\n AcDbIdBuffer\n 3\n ObjectDBX Classes\n 90\n 0\n 91\n 0\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n ACDBSECTIONVIEWSTYLE\n 2\n AcDbSectionViewStyle\n 3\n ObjectDBX Classes\n 90\n 1025\n 91\n 1\n 280\n 0\n 281\n 0\n 0\n CLASS\n 1\n ACDBDETAILVIEWSTYLE\n 2\n AcDbDetailViewStyle\n 3\n ObjectDBX Classes\n 90\n 1025\n 91\n 1\n 280\n 0\n 281\n 0\n 0\n ENDSEC\n';
		
		s += '0\nSECTION\n';
		//name section as TABLES section
		s += '2\nTABLES\n';

		s += this._getDxfLtypeTable();
		//s += this._getDxfLayerTable();
		//end section
		s += '0\nENDSEC\n';
		
		//ENTITES section
		s += '0\nSECTION\n';
		
		//blocks
		s += '2\nBLOCKS\n0\nBLOCK\n5\n20\n330\n1F\n100\nAcDbEntity\n8\n0\n100\nAcDbBlockBegin\n 2\n *Model_Space\n 70\n 0\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 3\n *Model_Space\n 1\n \n 0\n ENDBLK\n 5\n 21\n 330\n 1F\n 100\n AcDbEntity\n 8\n 0\n 100\n AcDbBlockEnd\n 0\n BLOCK\n 5\n D4\n 330\n D2\n 100\n AcDbEntity\n 67\n 1\n 8\n 0\n 100\n AcDbBlockBegin\n 2\n *Paper_Space\n 70\n 0\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 3\n *Paper_Space\n 1\n \n 0\n ENDBLK\n 5\n D5\n 330\n D2\n 100\n AcDbEntity\n 67\n 1\n 8\n 0\n 100\n AcDbBlockEnd\n 0\n BLOCK\n 5\n D8\n 330\n D6\n 100\n AcDbEntity\n 67\n 1\n 8\n 0\n 100\n AcDbBlockBegin\n 2\n *Paper_Space0\n 70\n 0\n 10\n 0.0\n 20\n 0.0\n 30\n 0.0\n 3\n *Paper_Space0\n 1\n \n 0\n ENDBLK\n5\n D9\n 330\n D6\n 100\n AcDbEntity\n 67\n 1\n 8\n 0\n 100\n AcDbBlockEnd\n 0\n ENDSEC\n';
		
		//entity
		s += '0\nSECTION\n';
		
		s += '2\nENTITIES\n';

		for (let layerName in this.layers) {
			let layer = this.layers[layerName];
			s += layer.shapesToDxf();
			// let shapes = layer.getShapes();
		}

		s += '0\nENDSEC\n';
		//close file
		s += '0\nEOF';

		return s;
	}


}

Drawing.LAYERS = 
[
    {name: '0',  colorNumber: Drawing.ACI.WHITE, lineTypeName: 'CONTINUOUS'}
]
module.exports = Drawing;
