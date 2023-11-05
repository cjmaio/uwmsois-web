(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"assessment5_atlas_1", frames: [[0,1049,1260,144],[0,0,1255,284],[0,1195,1110,144],[0,286,600,400],[602,672,500,375],[602,286,512,384],[0,688,119,119]]}
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



(lib.CachedBmp_6 = function() {
	this.initialize(ss["assessment5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["assessment5_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["assessment5_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.GoldLine = function() {
	this.initialize(ss["assessment5_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.LosAngeles = function() {
	this.initialize(ss["assessment5_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.losangelessolarpalm = function() {
	this.initialize(ss["assessment5_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.stamp = function() {
	this.initialize(ss["assessment5_atlas_1"]);
	this.gotoAndStop(6);
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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.stamp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,119,119), null);


(lib.LA3Text = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LA3Text, new cjs.Rectangle(0,0,630,72), null);


(lib.LA3Image = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.losangelessolarpalm();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LA3Image, new cjs.Rectangle(0,0,512,384), null);


(lib.LA2Text = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LA2Text, new cjs.Rectangle(0,0,627.5,142), null);


(lib.LA2Image = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GoldLine();
	this.instance.setTransform(0,0,1.0439,1.0439);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LA2Image, new cjs.Rectangle(0,0,626.4,417.6), null);


(lib.LA1Text = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LA1Text, new cjs.Rectangle(0,0,555,72), null);


(lib.LA1Image = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LosAngeles();
	this.instance.setTransform(0,0,1.16,1.16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LA1Image, new cjs.Rectangle(0,0,580,435), null);


(lib.VisitLA3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LA3Text
	this.instance = new lib.LA3Text();
	this.instance.setTransform(315,36,1,1,0,0,0,315,36);
	this.instance.alpha = 0;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,634,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(25).to({rotation:7.5,x:345.7},0).wait(1).to({rotation:15,x:376.4,y:35.95},0).wait(1).to({rotation:22.5,x:407.1,y:36},0).wait(1).to({rotation:30,x:437.85,y:36.05},0).wait(1).to({rotation:37.5,x:468.6,y:36},0).wait(1).to({rotation:45,x:499.35},0).wait(1).to({rotation:52.5,x:530.05},0).wait(1).to({rotation:60,x:560.75},0).wait(1).to({rotation:67.5,x:591.5},0).wait(1).to({rotation:75,x:622.2,y:35.95},0).wait(1).to({rotation:82.5,x:652.9,y:36},0).wait(1).to({rotation:90,x:683.7,y:35.95},0).wait(1).to({rotation:97.5,x:714.4},0).wait(1).to({rotation:105,x:745.2},0).wait(1).to({rotation:112.5,x:775.85,y:35.9},0).wait(1).to({rotation:120,x:806.6,y:35.95},0).wait(1).to({rotation:127.5,x:837.35},0).wait(1).to({rotation:135,x:868.05},0).wait(1).to({rotation:142.5,x:898.8},0).wait(1).to({rotation:150,x:929.55,y:35.9},0).wait(1).to({rotation:157.5,x:960.25,y:35.95},0).wait(1).to({rotation:165,x:991.05,y:35.9},0).wait(1).to({rotation:172.5,x:1021.75,y:35.85},0).wait(1).to({rotation:180,x:1052.5,y:35.9},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,5.42553191,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,10.85106383,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,16.27659574,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,21.70212766,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,27.12765957,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,32.55319149,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,37.9787234,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,43.40425532,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,48.82978723,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,54.25531915,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,59.68085106,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,65.10638298,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,70.53191489,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,75.95744681,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,81.38297872,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,86.80851064,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,92.23404255,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,97.65957447,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,103.08510638,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,108.5106383,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,113.93617021,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,119.36170213,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,124.78723404,0,0), 0).wait(1).to(new cjs.ColorFilter(0.96875,0.875,0.9625,1,6.25,130.21276596,0,0), 0).wait(1).to(new cjs.ColorFilter(0.9375,0.75,0.925,1,12.5,135.63829787,0,0), 0).wait(1).to(new cjs.ColorFilter(0.90625,0.625,0.8875,1,18.75,141.06382979,0,0), 0).wait(1).to(new cjs.ColorFilter(0.875,0.5,0.85,1,25,146.4893617,0,0), 0).wait(1).to(new cjs.ColorFilter(0.84375,0.375,0.8125,1,31.25,151.91489362,0,0), 0).wait(1).to(new cjs.ColorFilter(0.8125,0.25,0.775,1,37.5,157.34042553,0,0), 0).wait(1).to(new cjs.ColorFilter(0.78125,0.125,0.7375,1,43.75,162.76595745,0,0), 0).wait(1).to(new cjs.ColorFilter(0.75,0,0.7,1,50,168.19148936,0,0), 0).wait(1).to(new cjs.ColorFilter(0.65625,0.0625,0.7,1,75.625,173.61702128,0,0), 0).wait(1).to(new cjs.ColorFilter(0.5625,0.125,0.7,1,101.25,179.04255319,0,0), 0).wait(1).to(new cjs.ColorFilter(0.46875,0.1875,0.7,1,126.875,184.46808511,0,0), 0).wait(1).to(new cjs.ColorFilter(0.375,0.25,0.7,1,152.5,189.89361702,0,0), 0).wait(1).to(new cjs.ColorFilter(0.28125,0.3125,0.7,1,178.125,195.31914894,0,0), 0).wait(1).to(new cjs.ColorFilter(0.1875,0.375,0.7,1,203.75,200.74468085,0,0), 0).wait(1).to(new cjs.ColorFilter(0.09375,0.4375,0.7,1,229.375,206.17021277,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,255,211.59574468,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,223.125,217.0212766,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,191.25,222.44680851,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,159.375,227.87234043,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,127.5,233.29787234,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,95.625,238.72340426,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,63.75,244.14893617,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,31.875,249.57446809,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0.5,0.7,1,0,255,0,0), 0).wait(25));

	// LA3Image
	this.instance_1 = new lib.LA3Image();
	this.instance_1.setTransform(323.8,684.9,1,1,0,0,0,256,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:666.95},0).wait(1).to({y:649},0).wait(1).to({y:631.05},0).wait(1).to({y:613.15},0).wait(1).to({y:595.2},0).wait(1).to({y:577.25},0).wait(1).to({y:559.35},0).wait(1).to({y:541.4},0).wait(1).to({y:523.45},0).wait(1).to({y:505.55},0).wait(1).to({y:487.6},0).wait(1).to({y:469.65},0).wait(1).to({y:451.7},0).wait(1).to({y:433.8},0).wait(1).to({y:415.85},0).wait(1).to({y:397.9},0).wait(1).to({y:380},0).wait(1).to({y:362.05},0).wait(1).to({y:344.1},0).wait(1).to({y:326.2},0).wait(1).to({y:308.25},0).wait(1).to({y:290.3},0).wait(1).to({y:272.4},0).wait(25).to({rotation:7.5,x:295.15,y:272.35},0).wait(1).to({rotation:15,x:266.45},0).wait(1).to({rotation:22.5,x:237.85,y:272.4},0).wait(1).to({rotation:30,x:209.2},0).wait(1).to({rotation:37.5,x:180.55},0).wait(1).to({rotation:45,x:151.9},0).wait(1).to({rotation:52.5,x:123.3,y:272.45},0).wait(1).to({rotation:60,x:94.65,y:272.4},0).wait(1).to({rotation:67.5,x:65.95},0).wait(1).to({rotation:75,x:37.3},0).wait(1).to({rotation:82.5,x:8.65},0).wait(1).to({rotation:90,x:-19.95},0).wait(1).to({rotation:97.5,x:-48.6},0).wait(1).to({rotation:105,x:-77.25,y:272.35},0).wait(1).to({rotation:112.5,x:-105.9,y:272.4},0).wait(1).to({rotation:120,x:-134.55,y:272.35},0).wait(1).to({rotation:127.5,x:-163.2},0).wait(1).to({rotation:135,x:-191.8},0).wait(1).to({rotation:142.5,x:-220.5,y:272.4},0).wait(1).to({rotation:150,x:-249.15},0).wait(1).to({rotation:157.5,x:-277.75,y:272.35},0).wait(1).to({rotation:165,x:-306.35,y:272.4},0).wait(1).to({rotation:172.5,x:-335,y:272.35},0).wait(1).to({rotation:180,x:-363.7,y:272.4},0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:2, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:4, endFrame:4, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:5, endFrame:5, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:6, endFrame:6, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:7, endFrame:7, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:8, endFrame:8, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:9, endFrame:9, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:10, endFrame:10, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:11, endFrame:11, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:12, endFrame:12, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:13, endFrame:13, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:14, endFrame:14, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:15, endFrame:15, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:16, endFrame:16, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:17, endFrame:17, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:18, endFrame:18, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:19, endFrame:19, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:20, endFrame:20, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:21, endFrame:21, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:22, endFrame:22, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:23, endFrame:23, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:24, endFrame:24, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:25, endFrame:25, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:26, endFrame:26, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:27, endFrame:27, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:28, endFrame:28, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:29, endFrame:29, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:30, endFrame:30, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:31, endFrame:31, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:32, endFrame:32, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:33, endFrame:33, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:34, endFrame:34, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:35, endFrame:35, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:36, endFrame:36, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:37, endFrame:37, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:38, endFrame:38, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:39, endFrame:39, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:40, endFrame:40, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:41, endFrame:41, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:42, endFrame:42, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:43, endFrame:43, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:44, endFrame:44, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:45, endFrame:45, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:46, endFrame:46, x:-2, y:-2, w:634, h:76});
	this.filterCacheList.push({instance: this.instance, startFrame:47, endFrame:47, x:-2, y:-2, w:634, h:76});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-619.7,-281,1987.2,1157.9);


(lib.VisitLA2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LA2Text
	this.instance = new lib.LA2Text();
	this.instance.setTransform(-219.5,70.9,1,1,0,0,0,313.7,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:313.8,regY:71,x:-196.2,y:71},0).wait(1).to({x:-173},0).wait(1).to({x:-149.85},0).wait(1).to({x:-126.65},0).wait(1).to({x:-103.45},0).wait(1).to({x:-80.3},0).wait(1).to({x:-57.1},0).wait(1).to({x:-33.9},0).wait(1).to({x:-10.75},0).wait(1).to({x:12.45},0).wait(1).to({x:35.65},0).wait(1).to({x:58.8},0).wait(1).to({x:82},0).wait(1).to({x:105.2},0).wait(1).to({x:128.35},0).wait(1).to({x:151.55},0).wait(1).to({x:174.75},0).wait(1).to({x:197.9},0).wait(1).to({x:221.1},0).wait(1).to({x:244.3},0).wait(1).to({x:267.45},0).wait(1).to({x:290.65},0).wait(1).to({x:313.8},0).wait(25).to({x:347.1},0).wait(1).to({x:380.45},0).wait(1).to({x:413.75},0).wait(1).to({x:447.1},0).wait(1).to({x:480.4},0).wait(1).to({x:513.75},0).wait(1).to({x:547.05},0).wait(1).to({x:580.4},0).wait(1).to({x:613.7},0).wait(1).to({x:647.05},0).wait(1).to({x:680.35},0).wait(1).to({x:713.7},0).wait(1).to({x:747},0).wait(1).to({x:780.35},0).wait(1).to({x:813.65},0).wait(1).to({x:847},0).wait(1).to({x:880.3},0).wait(1).to({x:913.65},0).wait(1).to({x:946.95},0).wait(1).to({x:980.3},0).wait(1).to({x:1013.6},0).wait(1).to({x:1046.95},0).wait(1).to({x:1080.25},0).wait(1).to({x:1113.6},0).wait(1));

	// LA2Image
	this.instance_1 = new lib.LA2Image();
	this.instance_1.setTransform(380.7,361.45,1,1,0,0,0,313.2,208.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(25).to({x:353.35},0).wait(1).to({x:326},0).wait(1).to({x:298.75},0).wait(1).to({x:271.4},0).wait(1).to({x:244.1},0).wait(1).to({x:216.75},0).wait(1).to({x:189.45},0).wait(1).to({x:162.1},0).wait(1).to({x:134.8},0).wait(1).to({x:107.45},0).wait(1).to({x:80.15},0).wait(1).to({x:52.8},0).wait(1).to({x:25.45},0).wait(1).to({x:-1.85},0).wait(1).to({x:-29.2},0).wait(1).to({x:-56.5},0).wait(1).to({x:-83.85},0).wait(1).to({x:-111.15},0).wait(1).to({x:-138.5},0).wait(1).to({x:-165.8},0).wait(1).to({x:-193.15},0).wait(1).to({x:-220.45},0).wait(1).to({x:-247.8},0).wait(1).to({x:-275.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-588.3,0,2015.6,570.2);


(lib.VisitLA1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Come_Visit_LA_
	this.instance = new lib.LA1Text();
	this.instance.setTransform(277.4,36,1,1,0,0,0,277.4,36);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:277.5,x:277.5,alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(25).to({alpha:0.9583},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.0417},0).wait(1).to({alpha:0},0).wait(2));

	// Los_Angeles_jpg
	this.instance_1 = new lib.LA1Image();
	this.instance_1.setTransform(871.25,556.5,0.0485,0.0485,0,0,0,289.7,217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:290,scaleX:0.0899,scaleY:0.0899,x:856.75,y:545.45},0).wait(1).to({scaleX:0.1312,scaleY:0.1312,x:842.3,y:534.45},0).wait(1).to({scaleX:0.1726,scaleY:0.1726,x:827.85,y:523.4},0).wait(1).to({scaleX:0.214,scaleY:0.214,x:813.4,y:512.4},0).wait(1).to({scaleX:0.2554,scaleY:0.2554,x:798.95,y:501.35},0).wait(1).to({scaleX:0.2967,scaleY:0.2967,x:784.5,y:490.35},0).wait(1).to({scaleX:0.3381,scaleY:0.3381,x:770.05,y:479.3},0).wait(1).to({scaleX:0.3795,scaleY:0.3795,x:755.6,y:468.3},0).wait(1).to({scaleX:0.4208,scaleY:0.4208,x:741.15,y:457.25},0).wait(1).to({scaleX:0.4622,scaleY:0.4622,x:726.7,y:446.25},0).wait(1).to({scaleX:0.5036,scaleY:0.5036,x:712.25,y:435.15},0).wait(1).to({scaleX:0.5449,scaleY:0.5449,x:697.8,y:424.15},0).wait(1).to({scaleX:0.5863,scaleY:0.5863,x:683.35,y:413.1},0).wait(1).to({scaleX:0.6277,scaleY:0.6277,x:668.85,y:402.1},0).wait(1).to({scaleX:0.669,scaleY:0.669,x:654.4,y:391.05},0).wait(1).to({scaleX:0.7104,scaleY:0.7104,x:639.95,y:380.05},0).wait(1).to({scaleX:0.7518,scaleY:0.7518,x:625.5,y:369},0).wait(1).to({scaleX:0.7932,scaleY:0.7932,x:611.05,y:358},0).wait(1).to({scaleX:0.8345,scaleY:0.8345,x:596.6,y:346.95},0).wait(1).to({scaleX:0.8759,scaleY:0.8759,x:582.15,y:335.95},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:567.7,y:324.9},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:553.25,y:313.9},0).wait(1).to({scaleX:1,scaleY:1,x:538.8,y:302.9},0).wait(25).to({alpha:0.9583},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.0417},0).wait(1).to({alpha:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,885.4,567.1);


(lib.Stamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// StampImage
	this.instance = new lib.Symbol1();
	this.instance.setTransform(59.5,59.5,1,1,0,0,0,59.5,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0058,scaleY:1.0058,x:59.55,y:59.55},0).wait(1).to({scaleX:1.0117,scaleY:1.0117},0).wait(1).to({scaleX:1.0175,scaleY:1.0175,x:59.6,y:59.6},0).wait(1).to({scaleX:1.0234,scaleY:1.0234},0).wait(1).to({scaleX:1.0292,scaleY:1.0292,x:59.65,y:59.65},0).wait(1).to({scaleX:1.0351,scaleY:1.0351},0).wait(1).to({scaleX:1.0409,scaleY:1.0409,x:59.7,y:59.7},0).wait(1).to({scaleX:1.0468,scaleY:1.0468},0).wait(1).to({scaleX:1.0526,scaleY:1.0526,x:59.75,y:59.75},0).wait(1).to({scaleX:1.0585,scaleY:1.0585},0).wait(1).to({scaleX:1.0643,scaleY:1.0643,x:59.8,y:59.8},0).wait(1).to({scaleX:1.0702,scaleY:1.0702,x:59.75,y:59.75},0).wait(1).to({scaleX:1.076,scaleY:1.076,x:59.8,y:59.8},0).wait(1).to({scaleX:1.0818,scaleY:1.0818},0).wait(1).to({scaleX:1.0877,scaleY:1.0877,x:59.85,y:59.85},0).wait(1).to({scaleX:1.0935,scaleY:1.0935},0).wait(1).to({scaleX:1.0994,scaleY:1.0994,x:59.9,y:59.9},0).wait(1).to({scaleX:1.1052,scaleY:1.1052},0).wait(1).to({scaleX:1.1111,scaleY:1.1111,x:59.95,y:59.95},0).wait(1).to({scaleX:1.1169,scaleY:1.1169},0).wait(1).to({scaleX:1.1228,scaleY:1.1228,x:60,y:60},0).wait(1).to({scaleX:1.1286,scaleY:1.1286},0).wait(1).to({scaleX:1.1345,scaleY:1.1345},0).wait(1).to({scaleX:1.1257,scaleY:1.1257,x:60.05},0).wait(1).to({scaleX:1.117,scaleY:1.117,x:60,y:59.95},0).wait(1).to({scaleX:1.1082,scaleY:1.1082},0).wait(1).to({scaleX:1.0994,scaleY:1.0994,x:59.95,y:59.9},0).wait(1).to({scaleX:1.0907,scaleY:1.0907},0).wait(1).to({scaleX:1.0819,scaleY:1.0819,x:59.9,y:59.85},0).wait(1).to({scaleX:1.0732,scaleY:1.0732},0).wait(1).to({scaleX:1.0644,scaleY:1.0644},0).wait(1).to({scaleX:1.0557,scaleY:1.0557,x:59.85,y:59.8},0).wait(1).to({scaleX:1.0469,scaleY:1.0469},0).wait(1).to({scaleX:1.0382,scaleY:1.0382,x:59.8},0).wait(1).to({scaleX:1.0294,scaleY:1.0294},0).wait(1).to({scaleX:1.0207,scaleY:1.0207},0).wait(1).to({scaleX:1.0119,scaleY:1.0119,x:59.75,y:59.75},0).wait(1).to({scaleX:1.0031,scaleY:1.0031,x:59.7,y:59.7},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,x:59.65,y:59.65},0).wait(1).to({scaleX:0.9856,scaleY:0.9856},0).wait(1).to({scaleX:0.9769,scaleY:0.9769,x:59.6,y:59.6},0).wait(1).to({scaleX:0.9681,scaleY:0.9681},0).wait(1).to({scaleX:0.9594,scaleY:0.9594},0).wait(1).to({scaleX:0.9506,scaleY:0.9506,x:59.55,y:59.55},0).wait(1).to({scaleX:0.9419,scaleY:0.9419},0).wait(1).to({scaleX:0.9331,scaleY:0.9331,x:59.5,y:59.5},0).wait(1).to({scaleX:0.9244,scaleY:0.9244,x:59.55},0).wait(1).to({scaleX:0.9275,scaleY:0.9275},0).wait(1).to({scaleX:0.9307,scaleY:0.9307,x:59.5,y:59.45},0).wait(1).to({scaleX:0.9338,scaleY:0.9338},0).wait(1).to({scaleX:0.937,scaleY:0.937,y:59.5},0).wait(1).to({scaleX:0.9401,scaleY:0.9401,x:59.55},0).wait(1).to({scaleX:0.9433,scaleY:0.9433,x:59.5,y:59.45},0).wait(1).to({scaleX:0.9464,scaleY:0.9464},0).wait(1).to({scaleX:0.9496,scaleY:0.9496,y:59.5},0).wait(1).to({scaleX:0.9527,scaleY:0.9527},0).wait(1).to({scaleX:0.9559,scaleY:0.9559,y:59.45},0).wait(1).to({scaleX:0.959,scaleY:0.959},0).wait(1).to({scaleX:0.9622,scaleY:0.9622,y:59.5},0).wait(1).to({scaleX:0.9653,scaleY:0.9653},0).wait(1).to({scaleX:0.9685,scaleY:0.9685,x:59.45,y:59.45},0).wait(1).to({scaleX:0.9716,scaleY:0.9716,x:59.5},0).wait(1).to({scaleX:0.9748,scaleY:0.9748,y:59.5},0).wait(1).to({scaleX:0.9779,scaleY:0.9779},0).wait(1).to({scaleX:0.9811,scaleY:0.9811,x:59.45,y:59.45},0).wait(1).to({scaleX:0.9842,scaleY:0.9842},0).wait(1).to({scaleX:0.9874,scaleY:0.9874,x:59.5,y:59.5},0).wait(1).to({scaleX:0.9905,scaleY:0.9905},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,x:59.45,y:59.45},0).wait(1).to({scaleX:0.9968,scaleY:0.9968},0).wait(1).to({scaleX:1,scaleY:1,x:59.5,y:59.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.4,135,135);


// stage content:
(lib.assessment5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Stamp
	this.instance = new lib.Stamp();
	this.instance.setTransform(721.55,82.65,1,1,0,0,0,59.5,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216));

	// VisitLA1
	this.instance_1 = new lib.VisitLA1();
	this.instance_1.setTransform(374.2,328.3,1,1,0,0,0,414.2,260.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},72).wait(144));

	// VisitLA2
	this.instance_2 = new lib.VisitLA2();
	this.instance_2.setTransform(295.85,299.25,1,1,0,0,0,346.9,285.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({_off:true},74).wait(72));

	// VisitLA3
	this.instance_3 = new lib.VisitLA3();
	this.instance_3.setTransform(401.15,349.05,1,1,0,0,0,315,232.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140).to({_off:false},0).to({_off:true},72).wait(4));
	this.instance_3.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-184.2,314.2,1029.6,679.5999999999999);
// library properties:
lib.properties = {
	id: 'B2FD8352C039B346ADB1490C15997B3A',
	width: 800,
	height: 600,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/assessment5_atlas_1.png?1695595390032", id:"assessment5_atlas_1"}
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
an.compositions['B2FD8352C039B346ADB1490C15997B3A'] = {
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