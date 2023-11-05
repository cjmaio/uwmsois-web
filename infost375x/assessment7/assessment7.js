(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"assessment7_atlas_1", frames: [[0,1282,1200,650],[0,0,1280,1280],[1202,1282,500,313]]},
		{name:"assessment7_atlas_2", frames: [[0,0,1280,1478]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.roadster = function() {
	this.initialize(ss["assessment7_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.stars = function() {
	this.initialize(ss["assessment7_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.volleyball = function() {
	this.initialize(ss["assessment7_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.winxpnew = function() {
	this.initialize(ss["assessment7_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Element_Roadster = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.roadster();
	this.instance.setTransform(0,0,0.2053,0.2053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Element_Roadster, new cjs.Rectangle(0,0,246.4,133.5), null);


(lib.Element_Ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.volleyball();
	this.instance.setTransform(0,0,0.0309,0.0309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Element_Ball, new cjs.Rectangle(0,0,39.6,39.6), null);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stars();
	this.instance.setTransform(550,0,0.4297,0.4297,180);

	this.instance_1 = new lib.winxpnew();
	this.instance_1.setTransform(0,1035.05,1.1,1.1);

	this.instance_2 = new lib.stars();
	this.instance_2.setTransform(0,0,0.4297,0.4297);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#004D7D","#000000"],[0,0.733],0,200,0,-200).s().p("Egq9AfQMAAAg+fMBV7AAAMAAAA+fg");
	this.shape.setTransform(275,835.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,-635,550,2014.4), null);


// stage content:
(lib.assessment7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ball
	this.instance = new lib.Element_Ball();
	this.instance.setTransform(36.05,100,1,1,0,0,0,19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.946,x:42.65,y:101.95},0).wait(1).to({rotation:3.8919,x:49.15,y:104.25},0).wait(1).to({rotation:5.8379,x:55.55,y:106.75},0).wait(1).to({rotation:7.7838,x:61.8,y:109.55},0).wait(1).to({rotation:9.7298,x:68,y:112.65},0).wait(1).to({rotation:11.6757,x:74.05,y:116.05},0).wait(1).to({rotation:13.6217,x:79.85,y:119.75},0).wait(1).to({rotation:15.5676,x:85.45,y:123.7},0).wait(1).to({rotation:17.5136,x:90.85,y:128.1},0).wait(1).to({rotation:19.4595,x:95.9,y:132.7},0).wait(1).to({rotation:21.4055,x:100.75,y:137.65},0).wait(1).to({rotation:23.3514,x:105.35,y:142.8},0).wait(1).to({rotation:25.2974,x:109.55,y:148.2},0).wait(1).to({rotation:27.2433,x:113.5,y:153.9},0).wait(1).to({rotation:29.1893,x:117.1,y:159.8},0).wait(1).to({rotation:31.1352,x:120.3,y:165.85},0).wait(1).to({rotation:33.0812,x:123.3,y:172.1},0).wait(1).to({rotation:35.0271,x:125.9,y:178.4},0).wait(1).to({rotation:36.9731,x:128.25,y:184.9},0).wait(1).to({rotation:38.919,x:130.3,y:191.55},0).wait(1).to({rotation:40.865,x:132.05,y:198.15},0).wait(1).to({rotation:42.811,x:133.65,y:204.9},0).wait(1).to({rotation:44.7569,x:134.85,y:211.7},0).wait(1).to({rotation:46.7029,x:135.95,y:218.5},0).wait(1).to({rotation:48.6488,x:136.75,y:225.35},0).wait(1).to({rotation:50.5948,x:137.3,y:232.2},0).wait(1).to({rotation:52.5407,x:137.75,y:239.1},0).wait(1).to({rotation:54.4867,x:138,y:245.95},0).wait(1).to({rotation:56.4326,x:138.05,y:252.9},0).wait(1).to({rotation:58.3786,x:138,y:259.8},0).wait(1).to({rotation:60.3245,x:137.75,y:266.65},0).wait(1).to({rotation:62.2705,x:140.2,y:262.05},0).wait(1).to({rotation:64.2164,x:142.75,y:257.35},0).wait(1).to({rotation:66.1624,x:145.4,y:252.65},0).wait(1).to({rotation:68.1083,x:148.05,y:248},0).wait(1).to({rotation:70.0543,x:150.6,y:243.3},0).wait(1).to({rotation:72.0002,x:153.15,y:238.7},0).wait(1).to({rotation:73.9462,x:155.8,y:234.1},0).wait(1).to({rotation:75.8921,x:158.45,y:229.4},0).wait(1).to({rotation:77.8381,x:161,y:224.7},0).wait(1).to({rotation:79.784,x:163.6,y:220.05},0).wait(1).to({rotation:81.73,x:166.25,y:215.45},0).wait(1).to({rotation:83.676,x:168.85,y:210.8},0).wait(1).to({rotation:85.6219,x:171.5,y:206.1},0).wait(1).to({rotation:87.5679,x:174.1,y:201.5},0).wait(1).to({rotation:89.5138,x:176.7,y:196.8},0).wait(1).to({rotation:91.4598,x:179.35,y:192.2},0).wait(1).to({rotation:93.4057,x:181.95,y:187.5},0).wait(1).to({rotation:95.3517,x:184.6,y:182.85},0).wait(1).to({rotation:97.2976,x:187.25,y:178.25},0).wait(1).to({rotation:99.2436,x:189.8,y:173.6},0).wait(1).to({rotation:101.1895,x:192.5,y:168.9},0).wait(1).to({rotation:103.1355,x:195.1,y:164.3},0).wait(1).to({rotation:105.0814,x:197.75,y:159.65},0).wait(1).to({rotation:107.0274,x:200.35,y:155.05},0).wait(1).to({rotation:108.9733,x:203,y:150.35},0).wait(1).to({rotation:110.9193,x:205.65,y:145.75},0).wait(1).to({rotation:112.8652,x:208.25,y:141.1},0).wait(1).to({rotation:114.8112,x:210.95,y:136.45},0).wait(1).to({scaleX:0.8342,rotation:116.7571,x:213.8,y:133.95},0).wait(1).to({scaleX:0.6683,rotation:118.7031,x:216.75,y:130.8},0).wait(1).to({scaleX:0.7966,rotation:120.649,x:205.85,y:132.55},0).wait(1).to({scaleX:0.9249,rotation:122.595,x:195.4,y:128.4},0).wait(1).to({rotation:124.541,x:185.05,y:123.7},0).wait(1).to({rotation:126.4869,x:174.5,y:119.5},0).wait(1).to({rotation:128.4329,x:163.9,y:115.4},0).wait(1).to({rotation:130.3788,x:153.2,y:111.45},0).wait(1).to({rotation:132.3248,x:142.5,y:107.65},0).wait(1).to({rotation:134.2708,x:131.8,y:103.8},0).wait(1).to({rotation:136.2167,x:121.55,y:99},0).wait(1).to({rotation:138.1627,x:111.75,y:93.2},0).wait(1).to({rotation:140.1086,x:102.85,y:86.2},0).wait(1).to({rotation:142.0546,x:95.3,y:77.75},0).wait(1).to({rotation:144.0006,x:90.95,y:67.35},0).wait(1).to({rotation:145.9465,x:84.65,y:57.9},0).wait(1).to({rotation:147.8925,x:77.8,y:48.85},0).wait(1).to({rotation:149.8384,x:70.5,y:40.1},0).wait(1).to({rotation:151.7844,x:62.85,y:31.7},0).wait(1).to({rotation:153.7304,x:54.8,y:23.7},0).wait(1).to({rotation:155.6763,x:46.2,y:16.25},0).wait(1).to({rotation:157.6223,x:37.05,y:9.45},0).wait(1).to({rotation:159.5682,x:27.2,y:3.9},0).wait(1).to({rotation:161.5142,x:16.3,y:0.8},0).wait(1).to({rotation:163.4602,x:5.1,y:-1},0).wait(1).to({rotation:165.4061,x:-5.15,y:-5.8},0).wait(1).to({rotation:167.3521,x:-14.25,y:-12.55},0).wait(1).to({rotation:169.298,x:-22.3,y:-20.5},0).wait(1).to({rotation:171.244,x:-29.55,y:-29.2},0).wait(1).to({rotation:173.1899,x:-29.6,y:-29.25},0).wait(1).to({rotation:175.1359},0).wait(1).to({rotation:177.0818,y:-29.2},0).wait(1).to({rotation:179.0277,y:-29.25},0).wait(1).to({rotation:180.9737,x:-29.55,y:-29.2},0).wait(1).to({rotation:182.9196,x:-29.6},0).wait(1).to({rotation:184.8656,x:-29.55,y:-29.25},0).wait(1).to({rotation:186.8115,x:-29.6,y:-29.2},0).wait(1).to({rotation:188.7574},0).wait(1).to({rotation:190.7034,x:-29.55},0).wait(1).to({rotation:192.6493},0).wait(1).to({rotation:194.5952},0).wait(1).to({rotation:196.5412,y:-29.25},0).wait(1).to({rotation:198.4871},0).wait(1).to({rotation:200.433,x:-29.6},0).wait(1).to({rotation:202.379,y:-29.2},0).wait(1).to({rotation:204.3249,y:-29.25},0).wait(1).to({rotation:206.2709,x:-29.55,y:-29.2},0).wait(1).to({rotation:208.2168,x:-29.6},0).wait(1).to({rotation:210.1627},0).wait(1).to({rotation:212.1087},0).wait(1).to({rotation:214.0546,x:-29.55},0).wait(1).to({rotation:216.0005},0).wait(1).to({rotation:217.9465},0).wait(1).to({rotation:219.8924,y:-29.25},0).wait(1).to({rotation:221.8383,x:-29.6,y:-29.2},0).wait(1).to({rotation:223.7843,x:-29.55},0).wait(1).to({rotation:225.7302},0).wait(1).to({rotation:227.6761,x:-29.6,y:-29.25},0).wait(1).to({rotation:229.6221,x:-29.55},0).wait(1).to({rotation:231.568,x:-29.6,y:-29.2},0).wait(1).to({rotation:233.514},0).wait(1).to({rotation:235.4599,y:-29.25},0).wait(1).to({rotation:237.4058,x:-29.55},0).wait(1).to({rotation:239.3518},0).wait(1).to({rotation:241.2977,x:-29.6,y:-29.2},0).wait(1).to({rotation:243.2436,x:-29.55},0).wait(1).to({rotation:245.1896,x:-29.6},0).wait(1).to({rotation:247.1355,x:-29.55},0).wait(1).to({rotation:249.0814,x:-29.6},0).wait(1).to({rotation:251.0274},0).wait(1).to({rotation:252.9733,x:-29.55},0).wait(1).to({rotation:254.9193,x:-29.6,y:-29.25},0).wait(1).to({rotation:256.8652,x:-29.55},0).wait(1).to({rotation:258.8111,x:-29.6,y:-29.2},0).wait(1).to({rotation:260.7571},0).wait(1).to({rotation:262.703},0).wait(1));

	// Layer_9
	this.instance_1 = new lib.Element_Roadster();
	this.instance_1.setTransform(402,-71.55,1,1,0,0,0,123.2,66.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(1).to({x:395.05,y:-55.65},0).wait(1).to({x:388.15,y:-39.8},0).wait(1).to({x:381.25,y:-23.9},0).wait(1).to({x:374.35,y:-8.05},0).wait(1).to({x:367.45,y:7.8},0).wait(1).to({x:360.5,y:23.7},0).wait(1).to({x:353.6,y:39.55},0).wait(1).to({x:346.7,y:55.45},0).wait(1).to({x:339.8,y:71.25},0).wait(1).to({x:332.9,y:87.15},0).wait(5).to({rotation:3.8303,x:327.85,y:94.6},0).wait(1).to({rotation:7.6605,x:322.85,y:102},0).wait(1).to({rotation:11.4908,x:317.85,y:109.5},0).wait(1).to({rotation:15.3211,x:312.85,y:116.95},0).wait(1).to({rotation:19.1514,x:307.85,y:124.4},0).wait(1).to({rotation:22.9816,x:302.8,y:131.85},0).wait(1).to({rotation:26.8119,x:297.8,y:139.35},0).wait(1).to({rotation:30.6422,x:292.85,y:146.8},0).wait(1).to({rotation:34.4724,x:287.8,y:154.25},0).wait(1).to({rotation:38.3027,x:282.85,y:161.7},0).wait(1).to({rotation:42.133,x:277.8,y:169.15},0).wait(1).to({rotation:45.9633,x:272.8,y:176.6},0).wait(1).to({rotation:49.7935,x:267.8,y:184.05},0).wait(1).to({rotation:53.6238,x:262.8,y:191.5},0).wait(1).to({rotation:57.4541,x:257.8,y:199},0).wait(1).to({rotation:61.2844,x:252.8,y:206.45},0).wait(1).to({rotation:65.1146,x:247.8,y:213.85},0).wait(1).to({rotation:68.9449,x:242.75,y:221.3},0).wait(1).to({rotation:72.7752,x:237.8,y:228.75},0).wait(1).to({rotation:76.6054,x:232.75,y:236.25},0).wait(1).to({rotation:80.4357,x:227.75,y:243.75},0).wait(1).to({rotation:84.266,x:222.75,y:251.15},0).wait(1).to({rotation:88.0963,x:217.75,y:258.6},0).wait(1).to({rotation:91.9265,x:212.75,y:266.1},0).wait(1).to({rotation:95.7568,x:207.75,y:273.55},0).wait(1).to({rotation:91.2087,x:191.75,y:279.25},0).wait(1).to({rotation:86.6607,x:175.85,y:285.05},0).wait(1).to({rotation:82.1126,x:159.9,y:290.8},0).wait(1).to({rotation:77.5645,x:144,y:296.5},0).wait(1).to({rotation:73.0165,x:128.05,y:302.35},0).wait(1).to({rotation:68.4684,x:112.1,y:308.05},0).wait(1).to({rotation:63.9203,x:96.15,y:313.75},0).wait(1).to({rotation:59.3723,x:80.2,y:319.55},0).wait(1).to({rotation:54.8242,x:64.3,y:325.3},0).wait(1).to({rotation:50.2761,x:48.35,y:331.1},0).wait(1).to({rotation:45.7281,x:32.45,y:336.8},0).wait(1).to({rotation:41.18,x:16.55,y:342.55},0).wait(1).to({rotation:36.6319,x:0.55,y:348.35},0).wait(1).to({rotation:32.0839,x:-15.35,y:354.05},0).wait(1).to({rotation:27.5358,x:-31.3,y:359.8},0).wait(1).to({rotation:22.9877,x:-47.25,y:365.55},0).wait(1).to({rotation:18.4397,x:-63.2,y:371.35},0).wait(1).to({rotation:13.8916,x:-79.1,y:377.1},0).wait(1).to({rotation:9.3436,x:-95.1,y:382.8},0).wait(1).to({rotation:4.7955,x:-111.05,y:388.55},0).wait(1).to({rotation:0.2474,x:-126.95,y:394.35},0).wait(1).to({rotation:0,skewX:-24.1992,skewY:155.8008,x:-127.05},0).wait(3).to({x:-90.25,y:386.05},0).wait(1).to({x:-53.5,y:377.8},0).wait(1).to({x:-16.7,y:369.5},0).wait(1).to({x:20.05,y:361.2},0).wait(1).to({x:56.85,y:352.95},0).wait(1).to({x:93.65,y:344.65},0).wait(1).to({x:130.4,y:336.35},0).wait(1).to({x:167.2,y:328.1},0).wait(1).to({x:204,y:319.8},0).wait(1).to({x:240.8,y:311.5},0).wait(1).to({x:277.55,y:303.2},0).wait(1).to({x:314.35,y:294.95},0).wait(1).to({x:351.15,y:286.65},0).wait(1).to({x:387.95,y:278.35},0).wait(1).to({x:424.7,y:270.1},0).wait(1).to({x:461.5,y:261.8},0).wait(1).to({x:498.3,y:253.5},0).wait(1).to({x:535.1,y:245.25},0).wait(1).to({x:571.85,y:236.95},0).wait(1).to({x:608.65,y:228.65},0).wait(1).to({x:645.45,y:220.35},0).wait(1).to({x:682.25,y:212.1},0).wait(1).to({x:719,y:203.8},0).wait(1));

	// Background
	this.instance_2 = new lib.Background();
	this.instance_2.setTransform(275,-289.75,1,1,0,0,0,275,689.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:372.2,y:-607.15},0).wait(31).to({y:-589.95},0).wait(1).to({y:-572.75},0).wait(1).to({y:-555.6},0).wait(1).to({y:-538.4},0).wait(1).to({y:-521.2},0).wait(1).to({y:-504.05},0).wait(1).to({y:-486.85},0).wait(1).to({y:-469.65},0).wait(1).to({y:-452.5},0).wait(1).to({y:-435.3},0).wait(1).to({y:-418.15},0).wait(1).to({y:-400.95},0).wait(1).to({y:-383.75},0).wait(1).to({y:-366.6},0).wait(1).to({y:-349.4},0).wait(1).to({y:-332.2},0).wait(1).to({y:-315.05},0).wait(1).to({y:-297.85},0).wait(1).to({y:-280.7},0).wait(1).to({y:-263.5},0).wait(1).to({y:-246.3},0).wait(1).to({y:-229.15},0).wait(1).to({y:-211.95},0).wait(1).to({y:-194.75},0).wait(1).to({y:-177.6},0).wait(1).to({y:-160.4},0).wait(1).to({y:-143.2},0).wait(1).to({y:-126.05},0).wait(1).to({y:-108.85},0).wait(1).to({y:-91.7},0).wait(1).to({y:-74.5},0).wait(1).to({y:-57.3},0).wait(1).to({y:-40.15},0).wait(1).to({y:-22.95},0).wait(1).to({y:-5.75},0).wait(1).to({y:11.4},0).wait(1).to({y:28.6},0).wait(1).to({y:45.75},0).wait(1).to({y:62.95},0).wait(1).to({y:80.15},0).wait(1).to({y:97.3},0).wait(1).to({y:114.5},0).wait(1).to({y:131.7},0).wait(1).to({y:148.85},0).wait(1).to({y:166.05},0).wait(1).to({y:183.25},0).wait(1).to({y:200.4},0).wait(1).to({y:217.6},0).wait(1).to({y:234.75},0).wait(1).to({y:251.95},0).wait(1).to({y:269.15},0).wait(1).to({y:286.3},0).wait(1).to({y:303.5},0).wait(1).to({y:320.7},0).wait(1).to({y:337.85},0).wait(1).to({y:355.05},0).wait(1).to({y:372.2},0).wait(48));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(8.3,-1414.4,850.5,2793.8);
// library properties:
lib.properties = {
	id: '654652AC42A21C4F9CD5FA218823158C',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/assessment7_atlas_1.png?1699139424043", id:"assessment7_atlas_1"},
		{src:"images/assessment7_atlas_2.png?1699139424043", id:"assessment7_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['654652AC42A21C4F9CD5FA218823158C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;