(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.StartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.txt = new cjs.Text("start/stop", "8px 'Exo 2'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 12;
	this.txt.lineWidth = 131;
	this.txt.parent = this;
	this.txt.setTransform(0,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(4));

	// skins
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.1,2,1).p("AABAAIgBAA");
	this.shape.setTransform(24.65,11.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AD3B4IgBAAIo9AAQgxAAgigkQgkgjAAgxQAAgwAkgkQAXgXAdgIQAPgEAQAAIKOAAQAxAAAkAjQAjAkAAAwQAAAxgjAjQgkAkgxAAg");
	this.shape_1.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-12,135.1,25);


(lib.SliderButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.1,2,1).p("AAAiUQAVAAAOAOQAPAPAAAVIAADFQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVIAAjFQAAgVAOgPQAPgOAUAAg");
	this.shape.setTransform(-0.1,-39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgjCGQgOgOAAgVIAAjFQAAgUAOgQQAQgOATAAQAUAAAPAOQAPAQAAAUIAADFQAAAVgPAOQgPAPgUAAQgTAAgQgPg");
	this.shape_1.setTransform(-0.1,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-55.4,12,31.799999999999997);


(lib.SliderBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Regions
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003E74").ss(0.1,2,1).p("Egn3gAuMBPvAAAIAABdMhPvAAAg");
	this.shape.setTransform(255.225,4.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4EFFC").s().p("Egn3AAuIAAhcMBPvAAAIAABcg");
	this.shape_1.setTransform(255.225,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderBar, new cjs.Rectangle(-1,-1,512.5,11.3), null);


(lib.shortbuildinggraphic = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AhFhQIAkAAIAjAAIAkAAIAkAAIAjAAIAnAAIAfAAIAAAqIAAApIAAAsIAABAAghgmIAAgqAhFgmIAkAAIAjAAIAAgqAhFgmIAAgqAiygmIAAgqIAAgZIFlAAIAAAZAiyhQIAmAAIAkAAIAjAAAhogmIAAgqAiygmIAmAAIAAgqAiMgmIAkAAIAjAAAiyAvIAAgsIAmAAIAkAAIAAgpAiMAvIAkAAIAAgsIAjAAIAkAAIAAgpAiyAvIAmAAIAAgsIAAgpAhFAvIAkAAIAAgsIAjAAIAkAAIAkAAIAAgpIAAgqAhFAvIAAgsIAAgpAiyADIAAgpAhoAvIAjAAACUgmIAfAAACUgmIAAgqABtgmIAAgqABtgmIAnAAAAmgmIAkAAIAjAAAAmgmIAAgqAACgmIAkAAAAmAvIAkAAIAAgsIAjAAIAnAAIAfAAAACAvIAkAAIAAgsIAAgpAACAvIAAgsIAAgpACUAvIAfAAABtAvIAnAAIAAgsIAAgpABtAvIAAgsIAAgpABKAvIAjAAAghAvIAjAAAiyBvIAAhAAACBKIAAAl");
	this.shape.setTransform(0,-11.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#ABABD9","#D7D7EC","#A3A3CE"],[0,0.525,1],-30.8,-39.4,17.4,-8.9).s().p("AACBgIAAglIAAAlIglAAIAAglIAlAAIAmAAIAAAlgACUAgIAAgqIAfAAIAAAqgABtAgIAAgqIAnAAIAAAqgABKAgIAAgqIAjAAIAAAqgABKAgIgkAAIAAgqIgkAAIAAgrIgiAAIAiAAIAAArIAkAAIAAAqIgkAAIAAgqIgiAAIAAgrIAAArIAiAAIAAAqIgiAAIAAgqIgkAAIAAgrIAAArIAkAAIAAAqIgkAAIAAgqIgkAAIAkAAIAAAqIgkAAIAAgqIAAgrIAkAAIgkAAIAAgqIAAAqIgkAAIAAArIgmAAIAmAAIAkAAIAAAqIgkAAIAAgqIAAAqIgmAAIAAgqIAAgrIAAgqIAmAAIAkAAIAkAAIAAAqIAkAAIgkAAIAAgqIAkAAIAiAAIAkAAIAkAAIAjAAIAnAAIAfAAIAAAqIgfAAIAAgqIAAAqIgnAAIAAgqIAAAqIgjAAIAAgqIAAAqIgkAAIAAgqIAAAqIgkAAIAAgqIAAAqIAkAAIAAArIAkAAIAAAqgAggg1IAAgqgAiMg1IAAgqIAAAqIgmAAIAmAAgACUgKIAAgrIAAArIgnAAIAAgrIAnAAIAfAAIAAArgACUgKgABKgKIAAgrIAjAAIAAArgABKgKgAAmgKIAAgrIAkAAIAAArgAAmgKgAhEgKgAhogKgAiMgKIAAgrIAkAAIAAArgAiMgKgACUg1gAACg1gAhog1g");
	this.shape_1.setTransform(0,-9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAoBsIAAglIgmAAIglAAIAAAlIiPAAIAAhAIAmAAIAkAAIAkAAIAkAAIAiAAIAkAAIAkAAIAjAAIAnAAIAfAAIAABAgACUhTIgnAAIgjAAIgkAAIgkAAIgiAAIgkAAIgkAAIgkAAIgmAAIAAgYIFlAAIAAAYg");
	this.shape_2.setTransform(0,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-22.6,37.8,23.6);


(lib.pointer = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape.setTransform(11.175,11.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pointer, new cjs.Rectangle(0,0,22.4,22.4), null);


(lib.tallbuildinggraphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("Ah5gKIDzAAIAAAVIjzAAg");
	this.shape.setTransform(0.75,-79.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AArGPIAAguIhWAAIAAAuIhrAAIAAhRIEtAAIAABRgAh2l4IAAgWIDyAAIAAAWg");
	this.shape_1.setTransform(0.475,-40.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("AAAFaIAAqz");
	this.shape_2.setTransform(0.45,-0.65,1,1,0,0,0,-3.2,42.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,0,4).p("AAAFaIAAqzAA7FaIAAqzAB5FaIAAqzABZFaIAAqzAhaFaIAAqzAg8FaIAAqzAh4FaIAAqzAgeFaIAAqz");
	this.shape_3.setTransform(0.775,-43.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,0,0,4).p("AiWFYIEtAAAiWEhIEtAAAiWDsIEtAAAiWgcIEtAAAiWC3IEtAAAiWCCIEtAAAiWAYIEtAAAiWBNIEtAAAiWhRIEtAAAiWiGIEtAAAiWi7IEtAAAiWjtIEtAAAiWkiIEtAAAiWlXIEtAA");
	this.shape_4.setTransform(0.475,-43.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,0,0,4).p("ACXmDIAACfIAAJjIktAAIAApjIAAif");
	this.shape_5.setTransform(0.475,-38.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#ABABD9","#D7D7EC","#A3A3CE"],[0,0.525,1],-25.8,-30.8,14.8,7.4).s().p("AiWEyIAApjIEtAAIAAJjg");
	this.shape_6.setTransform(0.475,-31.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#ABABD9","#D7D7EC","#A3A3CE"],[0,0.525,1],-25.8,-8,14.8,30.3).s().p("AiWBPIAAidIEtAAIAACdg");
	this.shape_7.setTransform(0.475,-69.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-81.4,32.2,81.80000000000001);


(lib.mediumbuildinggraphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaEKIAAgtIg1AAIAAAtIhBAAIAAhQIC5AAIAABQgAg7jzIAAgXIB6AAIAAAXg");
	this.shape.setTransform(0.05,-27.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("AAADYIAAmvAAeDYIAAmvABaDYIAAmvAA8DYIAAmvAgdDYIAAmvAg7DYIAAmvAhZDYIAAmv");
	this.shape_1.setTransform(0.05,-30.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("AhcjUIC5AAAhcg1IC5AAAhchqIC5AAAhcifIC5AAAhcAAIC5AAAhcA0IC5AAAhcBpIC5AAAhcDVIC5AAAhcCeIC5AA");
	this.shape_2.setTransform(0.05,-29.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,0,4).p("ABdAAIi5AA");
	this.shape_3.setTransform(0.05,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#ABABD9","#D7D7EC","#A3A3CE"],[0,0.525,1],-26,-35.9,14.6,2.4).s().p("AhcD/IAAn9IC5AAIAAH9g");
	this.shape_4.setTransform(0.05,-26.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-53.9,20.6,54.3);


(lib.sba11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shortbuildinggraphic("synched",0);
	this.instance.setTransform(0,0,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,rotation:0.0345,y:-11.1},0).wait(1).to({rotation:0,skewX:0.069},0).wait(1).to({skewX:0.1034},0).wait(1).to({skewX:0.1379,x:0.05},0).wait(1).to({skewX:0.1724},0).wait(1).to({skewX:0.2069},0).wait(1).to({skewX:0.2414},0).wait(1).to({skewX:0.2759},0).wait(1).to({skewX:0.3103},0).wait(1).to({skewX:0.3448},0).wait(1).to({skewX:0.3793},0).wait(1).to({skewX:0.4138,x:0.1},0).wait(1).to({skewX:0.4483},0).wait(1).to({skewX:0.4828},0).wait(1).to({skewX:0.5172},0).wait(1).to({skewX:0.5517},0).wait(1).to({skewX:0.5862},0).wait(1).to({skewX:0.6207},0).wait(1).to({skewX:0.6552,x:0.15},0).wait(1).to({skewX:0.6897},0).wait(1).to({skewX:0.7241},0).wait(1).to({skewX:0.7586},0).wait(1).to({skewX:0.7931},0).wait(1).to({skewX:0.8276},0).wait(1).to({skewX:0.8621},0).wait(1).to({skewX:0.8966},0).wait(1).to({skewX:0.931,x:0.2},0).wait(1).to({skewX:0.9655},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9667},0).wait(1).to({skewX:0.9333},0).wait(1).to({skewX:0.9,x:0.15},0).wait(1).to({skewX:0.8667},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7667},0).wait(1).to({skewX:0.7333},0).wait(1).to({skewX:0.7},0).wait(1).to({skewX:0.6667},0).wait(1).to({skewX:0.6333,x:0.1},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.5667},0).wait(1).to({skewX:0.5333},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.4667},0).wait(1).to({skewX:0.4333},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3667,x:0.05},0).wait(1).to({skewX:0.3333},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.2667},0).wait(1).to({skewX:0.2333},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1667},0).wait(1).to({skewX:0.1333},0).wait(1).to({skewX:0.1,x:0},0).wait(1).to({skewX:0.0667},0).wait(1).to({rotation:0.0333,skewX:0},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0333},0).wait(1).to({rotation:0,skewX:-0.0667},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.1333,x:-0.05},0).wait(1).to({skewX:-0.1667},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.2333},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3667},0).wait(1).to({skewX:-0.4,x:-0.1},0).wait(1).to({skewX:-0.4333},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.5333},0).wait(1).to({skewX:-0.5667},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.6333},0).wait(1).to({skewX:-0.6667,x:-0.15},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.7333},0).wait(1).to({skewX:-0.7667},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.8333},0).wait(1).to({skewX:-0.8667},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-0.9333,x:-0.2},0).wait(1).to({skewX:-0.9667},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9667},0).wait(1).to({skewX:-0.9333},0).wait(1).to({skewX:-0.9,x:-0.15},0).wait(1).to({skewX:-0.8667},0).wait(1).to({skewX:-0.8333},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7667},0).wait(1).to({skewX:-0.7333},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.6667},0).wait(1).to({skewX:-0.6333,x:-0.1},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.5667},0).wait(1).to({skewX:-0.5333},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.4333},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3667,x:-0.05},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.2333},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1667},0).wait(1).to({skewX:-0.1333},0).wait(1).to({skewX:-0.1,x:0},0).wait(1).to({skewX:-0.0667},0).wait(1).to({rotation:-0.0333,skewX:0},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-22.8,43.900000000000006,23.8);


(lib.sba10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shortbuildinggraphic("synched",0);
	this.instance.setTransform(0,0,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,skewX:0.0588,y:-11.1},0).wait(1).to({skewX:0.1176},0).wait(1).to({skewX:0.1765,x:0.05},0).wait(1).to({skewX:0.2353},0).wait(1).to({skewX:0.2941},0).wait(1).to({skewX:0.3529},0).wait(1).to({skewX:0.4118,x:0.1},0).wait(1).to({skewX:0.4706},0).wait(1).to({skewX:0.5294},0).wait(1).to({skewX:0.5882},0).wait(1).to({skewX:0.6471,x:0.15},0).wait(1).to({skewX:0.7059},0).wait(1).to({skewX:0.7647},0).wait(1).to({skewX:0.8235},0).wait(1).to({skewX:0.8824},0).wait(1).to({skewX:0.9412,x:0.2},0).wait(1).to({skewX:1},0).wait(1).to({skewX:1.0588},0).wait(1).to({skewX:1.1176},0).wait(1).to({skewX:1.1765,x:0.25},0).wait(1).to({skewX:1.2353},0).wait(1).to({skewX:1.2941},0).wait(1).to({skewX:1.3529},0).wait(1).to({skewX:1.4118},0).wait(1).to({skewX:1.4706,x:0.3},0).wait(1).to({skewX:1.5294},0).wait(1).to({skewX:1.5882},0).wait(1).to({skewX:1.6471},0).wait(1).to({skewX:1.7059,x:0.35},0).wait(1).to({skewX:1.7647},0).wait(1).to({skewX:1.8235},0).wait(1).to({skewX:1.8824},0).wait(1).to({skewX:1.9412,x:0.4},0).wait(1).to({skewX:2},0).wait(1).to({skewX:1.9429},0).wait(1).to({skewX:1.8857,x:0.35},0).wait(1).to({skewX:1.8286},0).wait(1).to({skewX:1.7714},0).wait(1).to({skewX:1.7143},0).wait(1).to({skewX:1.6571,x:0.3},0).wait(1).to({skewX:1.6},0).wait(1).to({skewX:1.5429},0).wait(1).to({skewX:1.4857},0).wait(1).to({skewX:1.4286},0).wait(1).to({skewX:1.3714,x:0.25},0).wait(1).to({skewX:1.3143},0).wait(1).to({skewX:1.2571},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.1429,x:0.2},0).wait(1).to({skewX:1.0857},0).wait(1).to({skewX:1.0286},0).wait(1).to({skewX:0.9714},0).wait(1).to({skewX:0.9143},0).wait(1).to({skewX:0.8571,x:0.15},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7429},0).wait(1).to({skewX:0.6857},0).wait(1).to({skewX:0.6286,x:0.1},0).wait(1).to({skewX:0.5714},0).wait(1).to({skewX:0.5143},0).wait(1).to({skewX:0.4571},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3429,x:0.05},0).wait(1).to({skewX:0.2857},0).wait(1).to({skewX:0.2286},0).wait(1).to({skewX:0.1714},0).wait(1).to({skewX:0.1143,x:0},0).wait(1).to({skewX:0.0571},0).wait(1).to({skewX:0},0).wait(1).to({skewX:-0.0571},0).wait(1).to({skewX:-0.1143},0).wait(1).to({skewX:-0.1714,x:-0.05},0).wait(1).to({skewX:-0.2286},0).wait(1).to({skewX:-0.2857},0).wait(1).to({skewX:-0.3429},0).wait(1).to({skewX:-0.4,x:-0.1},0).wait(1).to({skewX:-0.4571},0).wait(1).to({skewX:-0.5143},0).wait(1).to({skewX:-0.5714},0).wait(1).to({skewX:-0.6286},0).wait(1).to({skewX:-0.6857,x:-0.15},0).wait(1).to({skewX:-0.7429},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.8571},0).wait(1).to({skewX:-0.9143,x:-0.2},0).wait(1).to({skewX:-0.9714},0).wait(1).to({skewX:-1.0286},0).wait(1).to({skewX:-1.0857},0).wait(1).to({skewX:-1.1429},0).wait(1).to({skewX:-1.2,x:-0.25},0).wait(1).to({skewX:-1.2571},0).wait(1).to({skewX:-1.3143},0).wait(1).to({skewX:-1.3714},0).wait(1).to({skewX:-1.4286,x:-0.3},0).wait(1).to({skewX:-1.4857},0).wait(1).to({skewX:-1.5429},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.6571},0).wait(1).to({skewX:-1.7143,x:-0.35},0).wait(1).to({skewX:-1.7714},0).wait(1).to({skewX:-1.8286},0).wait(1).to({skewX:-1.8857},0).wait(1).to({skewX:-1.9429,x:-0.4},0).wait(1).to({skewX:-2},0).wait(1).to({skewX:-1.9429},0).wait(1).to({skewX:-1.8857,x:-0.35},0).wait(1).to({skewX:-1.8286},0).wait(1).to({skewX:-1.7714},0).wait(1).to({skewX:-1.7143},0).wait(1).to({skewX:-1.6571,x:-0.3},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.5429},0).wait(1).to({skewX:-1.4857},0).wait(1).to({skewX:-1.4286},0).wait(1).to({skewX:-1.3714,x:-0.25},0).wait(1).to({skewX:-1.3143},0).wait(1).to({skewX:-1.2571},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.1429,x:-0.2},0).wait(1).to({skewX:-1.0857},0).wait(1).to({skewX:-1.0286},0).wait(1).to({skewX:-0.9714},0).wait(1).to({skewX:-0.9143},0).wait(1).to({skewX:-0.8571,x:-0.15},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7429},0).wait(1).to({skewX:-0.6857},0).wait(1).to({skewX:-0.6286,x:-0.1},0).wait(1).to({skewX:-0.5714},0).wait(1).to({skewX:-0.5143},0).wait(1).to({skewX:-0.4571},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3429,x:-0.05},0).wait(1).to({skewX:-0.2857},0).wait(1).to({skewX:-0.2286},0).wait(1).to({skewX:-0.1714},0).wait(1).to({skewX:-0.1143,x:0},0).wait(1).to({skewX:-0.0571},0).wait(1).to({skewX:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22.8,44.6,23.8);


(lib.sba9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.shortbuildinggraphic("synched",0);
	this.instance.setTransform(0,0,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,rotation:0.0263,y:-11.1},0).wait(1).to({rotation:0,skewX:0.0526},0).wait(1).to({skewX:0.0789},0).wait(1).to({skewX:0.1053},0).wait(1).to({skewX:0.1316,x:0.05},0).wait(1).to({skewX:0.1579},0).wait(1).to({skewX:0.1842},0).wait(1).to({skewX:0.2105},0).wait(1).to({skewX:0.2368},0).wait(1).to({skewX:0.2632},0).wait(1).to({skewX:0.2895},0).wait(1).to({skewX:0.3158},0).wait(1).to({skewX:0.3421},0).wait(1).to({skewX:0.3684},0).wait(1).to({skewX:0.3947,x:0.1},0).wait(1).to({skewX:0.4211},0).wait(1).to({skewX:0.4474},0).wait(1).to({skewX:0.4737},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.475},0).wait(1).to({skewX:0.45},0).wait(1).to({skewX:0.425},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.375,x:0.05},0).wait(1).to({skewX:0.35},0).wait(1).to({skewX:0.325},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.275},0).wait(1).to({skewX:0.25},0).wait(1).to({skewX:0.225},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.175},0).wait(1).to({skewX:0.15},0).wait(1).to({skewX:0.125,x:0},0).wait(1).to({skewX:0.1},0).wait(1).to({skewX:0.075},0).wait(1).to({skewX:0.05},0).wait(1).to({rotation:0.025,skewX:0},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.025},0).wait(1).to({rotation:0,skewX:-0.05},0).wait(1).to({skewX:-0.075},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.15,x:-0.05},0).wait(1).to({skewX:-0.175},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.225},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.325},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.375},0).wait(1).to({skewX:-0.4,x:-0.1},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.475},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.475},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.375,x:-0.05},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.325},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.225},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.175},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.125,x:0},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.075},0).wait(1).to({skewX:-0.05},0).wait(1).to({rotation:-0.025,skewX:0},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-22.8,43.7,23.8);


(lib.sba8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.shortbuildinggraphic("synched",0);
	this.instance.setTransform(0,0,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,rotation:0.0417,y:-11.1},0).wait(1).to({rotation:0,skewX:0.0833},0).wait(1).to({skewX:0.125},0).wait(1).to({skewX:0.1667,x:0.05},0).wait(1).to({skewX:0.2083},0).wait(1).to({skewX:0.25},0).wait(1).to({skewX:0.2917},0).wait(1).to({skewX:0.3333},0).wait(1).to({skewX:0.375},0).wait(1).to({skewX:0.4167,x:0.1},0).wait(1).to({skewX:0.4583},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.5417},0).wait(1).to({skewX:0.5833},0).wait(1).to({skewX:0.625},0).wait(1).to({skewX:0.6667,x:0.15},0).wait(1).to({skewX:0.7083},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.7917},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.875},0).wait(1).to({skewX:0.9167,x:0.2},0).wait(1).to({skewX:0.9583},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.96},0).wait(1).to({skewX:0.92},0).wait(1).to({skewX:0.88,x:0.15},0).wait(1).to({skewX:0.84},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.76},0).wait(1).to({skewX:0.72},0).wait(1).to({skewX:0.68},0).wait(1).to({skewX:0.64,x:0.1},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.56},0).wait(1).to({skewX:0.52},0).wait(1).to({skewX:0.48},0).wait(1).to({skewX:0.44},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.36,x:0.05},0).wait(1).to({skewX:0.32},0).wait(1).to({skewX:0.28},0).wait(1).to({skewX:0.24},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.16},0).wait(1).to({skewX:0.12,x:0},0).wait(1).to({skewX:0.08},0).wait(1).to({rotation:0.04,skewX:0},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.04},0).wait(1).to({rotation:0,skewX:-0.08},0).wait(1).to({skewX:-0.12},0).wait(1).to({skewX:-0.16,x:-0.05},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.24},0).wait(1).to({skewX:-0.28},0).wait(1).to({skewX:-0.32},0).wait(1).to({skewX:-0.36},0).wait(1).to({skewX:-0.4,x:-0.1},0).wait(1).to({skewX:-0.44},0).wait(1).to({skewX:-0.48},0).wait(1).to({skewX:-0.52},0).wait(1).to({skewX:-0.56},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.64},0).wait(1).to({skewX:-0.68,x:-0.15},0).wait(1).to({skewX:-0.72},0).wait(1).to({skewX:-0.76},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.84},0).wait(1).to({skewX:-0.88},0).wait(1).to({skewX:-0.92,x:-0.2},0).wait(1).to({skewX:-0.96},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.96},0).wait(1).to({skewX:-0.92},0).wait(1).to({skewX:-0.88,x:-0.15},0).wait(1).to({skewX:-0.84},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.76},0).wait(1).to({skewX:-0.72},0).wait(1).to({skewX:-0.68},0).wait(1).to({skewX:-0.64,x:-0.1},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.56},0).wait(1).to({skewX:-0.52},0).wait(1).to({skewX:-0.48},0).wait(1).to({skewX:-0.44},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.36,x:-0.05},0).wait(1).to({skewX:-0.32},0).wait(1).to({skewX:-0.28},0).wait(1).to({skewX:-0.24},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.16},0).wait(1).to({skewX:-0.12,x:0},0).wait(1).to({skewX:-0.08},0).wait(1).to({rotation:-0.04,skewX:0},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-22.8,43.900000000000006,23.8);


(lib.sba7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shortbuildinggraphic("synched",0);
	this.instance.setTransform(0.1,0.15,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,skewX:0.0926,y:-10.95},0).wait(1).to({skewX:0.1852,x:0.15},0).wait(1).to({skewX:0.2778},0).wait(1).to({skewX:0.3704},0).wait(1).to({skewX:0.463,x:0.2},0).wait(1).to({skewX:0.5556},0).wait(1).to({skewX:0.6481,x:0.25},0).wait(1).to({skewX:0.7407},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.9259,x:0.3},0).wait(1).to({skewX:1.0185},0).wait(1).to({skewX:1.1111},0).wait(1).to({skewX:1.2037,x:0.35},0).wait(1).to({skewX:1.2963},0).wait(1).to({skewX:1.3889},0).wait(1).to({skewX:1.4815,x:0.4},0).wait(1).to({skewX:1.5741},0).wait(1).to({skewX:1.6667},0).wait(1).to({skewX:1.7593,x:0.45},0).wait(1).to({skewX:1.8519},0).wait(1).to({skewX:1.9444,x:0.5},0).wait(1).to({skewX:2.037},0).wait(1).to({skewX:2.1296},0).wait(1).to({skewX:2.2222,x:0.55},0).wait(1).to({skewX:2.3148},0).wait(1).to({skewX:2.4074},0).wait(1).to({skewX:2.5,x:0.6},0).wait(1).to({skewX:2.5926},0).wait(1).to({skewX:2.6852},0).wait(1).to({skewX:2.7778,x:0.65},0).wait(1).to({skewX:2.8704},0).wait(1).to({skewX:2.963},0).wait(1).to({skewX:3.0556,x:0.7},0).wait(1).to({skewX:3.1481},0).wait(1).to({skewX:3.2407,x:0.75},0).wait(1).to({skewX:3.3333},0).wait(1).to({skewX:3.4259},0).wait(1).to({skewX:3.5185,x:0.8},0).wait(1).to({skewX:3.6111,y:-10.9},0).wait(1).to({skewX:3.7037},0).wait(1).to({skewX:3.7963,x:0.85},0).wait(1).to({skewX:3.8889},0).wait(1).to({skewX:3.9815},0).wait(1).to({skewX:4.0741,x:0.9},0).wait(1).to({skewX:4.1667},0).wait(1).to({skewX:4.2593},0).wait(1).to({skewX:4.3519,x:0.95},0).wait(1).to({skewX:4.4444},0).wait(1).to({skewX:4.537,x:1},0).wait(1).to({skewX:4.6296},0).wait(1).to({skewX:4.7222},0).wait(1).to({skewX:4.8148,x:1.05},0).wait(1).to({skewX:4.9074},0).wait(1).to({skewX:5},0).wait(1).to({skewX:4.9091},0).wait(1).to({skewX:4.8182},0).wait(1).to({skewX:4.7273,x:1},0).wait(1).to({skewX:4.6364},0).wait(1).to({skewX:4.5455},0).wait(1).to({skewX:4.4545,x:0.95},0).wait(1).to({skewX:4.3636},0).wait(1).to({skewX:4.2727},0).wait(1).to({skewX:4.1818,x:0.9},0).wait(1).to({skewX:4.0909},0).wait(1).to({skewX:4,x:0.85},0).wait(1).to({skewX:3.9091},0).wait(1).to({skewX:3.8182},0).wait(1).to({skewX:3.7273,x:0.8},0).wait(1).to({skewX:3.6364},0).wait(1).to({skewX:3.5455,y:-10.95},0).wait(1).to({skewX:3.4545,x:0.75},0).wait(1).to({skewX:3.3636},0).wait(1).to({skewX:3.2727},0).wait(1).to({skewX:3.1818,x:0.7},0).wait(1).to({skewX:3.0909},0).wait(1).to({skewX:3},0).wait(1).to({skewX:2.9091,x:0.65},0).wait(1).to({skewX:2.8182},0).wait(1).to({skewX:2.7273},0).wait(1).to({skewX:2.6364,x:0.6},0).wait(1).to({skewX:2.5455},0).wait(1).to({skewX:2.4545},0).wait(1).to({skewX:2.3636,x:0.55},0).wait(1).to({skewX:2.2727},0).wait(1).to({skewX:2.1818,x:0.5},0).wait(1).to({skewX:2.0909},0).wait(1).to({skewX:2},0).wait(1).to({skewX:1.9091,x:0.45},0).wait(1).to({skewX:1.8182},0).wait(1).to({skewX:1.7273},0).wait(1).to({skewX:1.6364,x:0.4},0).wait(1).to({skewX:1.5455},0).wait(1).to({skewX:1.4545},0).wait(1).to({skewX:1.3636,x:0.35},0).wait(1).to({skewX:1.2727},0).wait(1).to({skewX:1.1818},0).wait(1).to({skewX:1.0909,x:0.3},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9091},0).wait(1).to({skewX:0.8182,x:0.25},0).wait(1).to({skewX:0.7273},0).wait(1).to({skewX:0.6364,x:0.2},0).wait(1).to({skewX:0.5455},0).wait(1).to({skewX:0.4545},0).wait(1).to({skewX:0.3636,x:0.15},0).wait(1).to({skewX:0.2727},0).wait(1).to({skewX:0.1818},0).wait(1).to({skewX:0.0909,x:0.1},0).wait(1).to({skewX:0},0).wait(1).to({skewX:-0.0909},0).wait(1).to({skewX:-0.1818,x:0.05},0).wait(1).to({skewX:-0.2727},0).wait(1).to({skewX:-0.3636},0).wait(1).to({skewX:-0.4545,x:0},0).wait(1).to({skewX:-0.5455},0).wait(1).to({skewX:-0.6364},0).wait(1).to({skewX:-0.7273,x:-0.05},0).wait(1).to({skewX:-0.8182},0).wait(1).to({skewX:-0.9091,x:-0.1},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-1.0909},0).wait(1).to({skewX:-1.1818,x:-0.15},0).wait(1).to({skewX:-1.2727},0).wait(1).to({skewX:-1.3636},0).wait(1).to({skewX:-1.4545,x:-0.2},0).wait(1).to({skewX:-1.5455},0).wait(1).to({skewX:-1.6364},0).wait(1).to({skewX:-1.7273,x:-0.25},0).wait(1).to({skewX:-1.8182},0).wait(1).to({skewX:-1.9091},0).wait(1).to({skewX:-2,x:-0.3},0).wait(1).to({skewX:-2.0909},0).wait(1).to({skewX:-2.1818},0).wait(1).to({skewX:-2.2727,x:-0.35},0).wait(1).to({skewX:-2.3636},0).wait(1).to({skewX:-2.4545,x:-0.4},0).wait(1).to({skewX:-2.5455},0).wait(1).to({skewX:-2.6364},0).wait(1).to({skewX:-2.7273,x:-0.45},0).wait(1).to({skewX:-2.8182},0).wait(1).to({skewX:-2.9091},0).wait(1).to({skewX:-3,x:-0.5},0).wait(1).to({skewX:-3.0909},0).wait(1).to({skewX:-3.1818},0).wait(1).to({skewX:-3.2727,x:-0.55},0).wait(1).to({skewX:-3.3636},0).wait(1).to({skewX:-3.4545},0).wait(1).to({skewX:-3.5455,x:-0.6},0).wait(1).to({skewX:-3.6364,y:-10.9},0).wait(1).to({skewX:-3.7273},0).wait(1).to({skewX:-3.8182,x:-0.65},0).wait(1).to({skewX:-3.9091},0).wait(1).to({skewX:-4},0).wait(1).to({skewX:-4.0909,x:-0.7},0).wait(1).to({skewX:-4.1818},0).wait(1).to({skewX:-4.2727,x:-0.75},0).wait(1).to({skewX:-4.3636},0).wait(1).to({skewX:-4.4545},0).wait(1).to({skewX:-4.5455,x:-0.8},0).wait(1).to({skewX:-4.6364},0).wait(1).to({skewX:-4.7273},0).wait(1).to({skewX:-4.8182,x:-0.85},0).wait(1).to({skewX:-4.9091},0).wait(1).to({skewX:-5},0).wait(1).to({skewX:-4.9091},0).wait(1).to({skewX:-4.8182},0).wait(1).to({skewX:-4.7273,x:-0.8},0).wait(1).to({skewX:-4.6364},0).wait(1).to({skewX:-4.5455},0).wait(1).to({skewX:-4.4545,x:-0.75},0).wait(1).to({skewX:-4.3636},0).wait(1).to({skewX:-4.2727},0).wait(1).to({skewX:-4.1818,x:-0.7},0).wait(1).to({skewX:-4.0909},0).wait(1).to({skewX:-4,x:-0.65},0).wait(1).to({skewX:-3.9091},0).wait(1).to({skewX:-3.8182},0).wait(1).to({skewX:-3.7273,x:-0.6},0).wait(1).to({skewX:-3.6364},0).wait(1).to({skewX:-3.5455,y:-10.95},0).wait(1).to({skewX:-3.4545,x:-0.55},0).wait(1).to({skewX:-3.3636},0).wait(1).to({skewX:-3.2727},0).wait(1).to({skewX:-3.1818,x:-0.5},0).wait(1).to({skewX:-3.0909},0).wait(1).to({skewX:-3},0).wait(1).to({skewX:-2.9091,x:-0.45},0).wait(1).to({skewX:-2.8182},0).wait(1).to({skewX:-2.7273},0).wait(1).to({skewX:-2.6364,x:-0.4},0).wait(1).to({skewX:-2.5455},0).wait(1).to({skewX:-2.4545},0).wait(1).to({skewX:-2.3636,x:-0.35},0).wait(1).to({skewX:-2.2727},0).wait(1).to({skewX:-2.1818,x:-0.3},0).wait(1).to({skewX:-2.0909},0).wait(1).to({skewX:-2},0).wait(1).to({skewX:-1.9091,x:-0.25},0).wait(1).to({skewX:-1.8182},0).wait(1).to({skewX:-1.7273},0).wait(1).to({skewX:-1.6364,x:-0.2},0).wait(1).to({skewX:-1.5455},0).wait(1).to({skewX:-1.4545},0).wait(1).to({skewX:-1.3636,x:-0.15},0).wait(1).to({skewX:-1.2727},0).wait(1).to({skewX:-1.1818},0).wait(1).to({skewX:-1.0909,x:-0.1},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9091},0).wait(1).to({skewX:-0.8182,x:-0.05},0).wait(1).to({skewX:-0.7273},0).wait(1).to({skewX:-0.6364,x:0},0).wait(1).to({skewX:-0.5455},0).wait(1).to({skewX:-0.4545},0).wait(1).to({skewX:-0.3636,x:0.05},0).wait(1).to({skewX:-0.2727},0).wait(1).to({skewX:-0.1818},0).wait(1).to({skewX:-0.0909,x:0.1},0).wait(1).to({skewX:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-22.6,44.7,23.8);


(lib.sba4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shortbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.1,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,skewX:0.1224,y:-11},0).wait(1).to({skewX:0.2449,x:0.1},0).wait(1).to({skewX:0.3673},0).wait(1).to({skewX:0.4898,x:0.15},0).wait(1).to({skewX:0.6122},0).wait(1).to({skewX:0.7347,x:0.2},0).wait(1).to({skewX:0.8571},0).wait(1).to({skewX:0.9796,x:0.25},0).wait(1).to({skewX:1.102},0).wait(1).to({skewX:1.2245,x:0.3},0).wait(1).to({skewX:1.3469},0).wait(1).to({skewX:1.4694,x:0.35},0).wait(1).to({skewX:1.5918},0).wait(1).to({skewX:1.7143,x:0.4},0).wait(1).to({skewX:1.8367},0).wait(1).to({skewX:1.9592,x:0.45},0).wait(1).to({skewX:2.0816},0).wait(1).to({skewX:2.2041,x:0.5},0).wait(1).to({skewX:2.3265},0).wait(1).to({skewX:2.449},0).wait(1).to({skewX:2.5714,x:0.55},0).wait(1).to({skewX:2.6939},0).wait(1).to({skewX:2.8163,x:0.6},0).wait(1).to({skewX:2.9388},0).wait(1).to({skewX:3.0612,x:0.65},0).wait(1).to({skewX:3.1837},0).wait(1).to({skewX:3.3061,x:0.7},0).wait(1).to({skewX:3.4286},0).wait(1).to({skewX:3.551,x:0.75},0).wait(1).to({skewX:3.6735,y:-10.95},0).wait(1).to({skewX:3.7959,x:0.8},0).wait(1).to({skewX:3.9184},0).wait(1).to({skewX:4.0408,x:0.85},0).wait(1).to({skewX:4.1633},0).wait(1).to({skewX:4.2857,x:0.9},0).wait(1).to({skewX:4.4082},0).wait(1).to({skewX:4.5306,x:0.95},0).wait(1).to({skewX:4.6531},0).wait(1).to({skewX:4.7755},0).wait(1).to({skewX:4.898,x:1},0).wait(1).to({skewX:5.0204},0).wait(1).to({skewX:5.1429,x:1.05},0).wait(1).to({skewX:5.2653},0).wait(1).to({skewX:5.3878,x:1.1},0).wait(1).to({skewX:5.5102},0).wait(1).to({skewX:5.6327,x:1.15},0).wait(1).to({skewX:5.7551},0).wait(1).to({skewX:5.8776,x:1.2},0).wait(1).to({skewX:6},0).wait(1).to({skewX:5.88},0).wait(1).to({skewX:5.76,x:1.15},0).wait(1).to({skewX:5.64},0).wait(1).to({skewX:5.52,x:1.1},0).wait(1).to({skewX:5.4},0).wait(1).to({skewX:5.28,x:1.05},0).wait(1).to({skewX:5.16},0).wait(1).to({skewX:5.04,x:1},0).wait(1).to({skewX:4.92},0).wait(1).to({skewX:4.8},0).wait(1).to({skewX:4.68,x:0.95},0).wait(1).to({skewX:4.56},0).wait(1).to({skewX:4.44,x:0.9},0).wait(1).to({skewX:4.32},0).wait(1).to({skewX:4.2,x:0.85},0).wait(1).to({skewX:4.08},0).wait(1).to({skewX:3.96,x:0.8},0).wait(1).to({skewX:3.84},0).wait(1).to({skewX:3.72,x:0.75},0).wait(1).to({skewX:3.6},0).wait(1).to({skewX:3.48,x:0.7,y:-11},0).wait(1).to({skewX:3.36},0).wait(1).to({skewX:3.24},0).wait(1).to({skewX:3.12,x:0.65},0).wait(1).to({skewX:3},0).wait(1).to({skewX:2.88,x:0.6},0).wait(1).to({skewX:2.76},0).wait(1).to({skewX:2.64,x:0.55},0).wait(1).to({skewX:2.52},0).wait(1).to({skewX:2.4,x:0.5},0).wait(1).to({skewX:2.28},0).wait(1).to({skewX:2.16,x:0.45},0).wait(1).to({skewX:2.04},0).wait(1).to({skewX:1.92,x:0.4},0).wait(1).to({skewX:1.8},0).wait(1).to({skewX:1.68},0).wait(1).to({skewX:1.56,x:0.35},0).wait(1).to({skewX:1.44},0).wait(1).to({skewX:1.32,x:0.3},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.08,x:0.25},0).wait(1).to({skewX:0.96},0).wait(1).to({skewX:0.84,x:0.2},0).wait(1).to({skewX:0.72},0).wait(1).to({skewX:0.6,x:0.15},0).wait(1).to({skewX:0.48},0).wait(1).to({skewX:0.36,x:0.1},0).wait(1).to({skewX:0.24},0).wait(1).to({skewX:0.12,x:0.05},0).wait(1).to({skewX:0},0).wait(1).to({skewX:-0.12},0).wait(1).to({skewX:-0.24,x:0},0).wait(1).to({skewX:-0.36},0).wait(1).to({skewX:-0.48,x:-0.05},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.72,x:-0.1},0).wait(1).to({skewX:-0.84},0).wait(1).to({skewX:-0.96,x:-0.15},0).wait(1).to({skewX:-1.08},0).wait(1).to({skewX:-1.2,x:-0.2},0).wait(1).to({skewX:-1.32},0).wait(1).to({skewX:-1.44,x:-0.25},0).wait(1).to({skewX:-1.56},0).wait(1).to({skewX:-1.68,x:-0.3},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.92},0).wait(1).to({skewX:-2.04,x:-0.35},0).wait(1).to({skewX:-2.16},0).wait(1).to({skewX:-2.28,x:-0.4},0).wait(1).to({skewX:-2.4},0).wait(1).to({skewX:-2.52,x:-0.45},0).wait(1).to({skewX:-2.64},0).wait(1).to({skewX:-2.76,x:-0.5},0).wait(1).to({skewX:-2.88},0).wait(1).to({skewX:-3,x:-0.55},0).wait(1).to({skewX:-3.12},0).wait(1).to({skewX:-3.24,x:-0.6},0).wait(1).to({skewX:-3.36},0).wait(1).to({skewX:-3.48},0).wait(1).to({skewX:-3.6,x:-0.65,y:-10.95},0).wait(1).to({skewX:-3.72},0).wait(1).to({skewX:-3.84,x:-0.7},0).wait(1).to({skewX:-3.96},0).wait(1).to({skewX:-4.08,x:-0.75},0).wait(1).to({skewX:-4.2},0).wait(1).to({skewX:-4.32,x:-0.8},0).wait(1).to({skewX:-4.44},0).wait(1).to({skewX:-4.56,x:-0.85},0).wait(1).to({skewX:-4.68},0).wait(1).to({skewX:-4.8,x:-0.9},0).wait(1).to({skewX:-4.92},0).wait(1).to({skewX:-5.04},0).wait(1).to({skewX:-5.16,x:-0.95},0).wait(1).to({skewX:-5.28},0).wait(1).to({skewX:-5.4,x:-1},0).wait(1).to({skewX:-5.52},0).wait(1).to({skewX:-5.64,x:-1.05},0).wait(1).to({skewX:-5.76},0).wait(1).to({skewX:-5.88,x:-1.1},0).wait(1).to({skewX:-6},0).wait(1).to({skewX:-5.88},0).wait(1).to({skewX:-5.76,x:-1.05},0).wait(1).to({skewX:-5.64},0).wait(1).to({skewX:-5.52,x:-1},0).wait(1).to({skewX:-5.4},0).wait(1).to({skewX:-5.28,x:-0.95},0).wait(1).to({skewX:-5.16},0).wait(1).to({skewX:-5.04,x:-0.9},0).wait(1).to({skewX:-4.92},0).wait(1).to({skewX:-4.8},0).wait(1).to({skewX:-4.68,x:-0.85},0).wait(1).to({skewX:-4.56},0).wait(1).to({skewX:-4.44,x:-0.8},0).wait(1).to({skewX:-4.32},0).wait(1).to({skewX:-4.2,x:-0.75},0).wait(1).to({skewX:-4.08},0).wait(1).to({skewX:-3.96,x:-0.7},0).wait(1).to({skewX:-3.84},0).wait(1).to({skewX:-3.72,x:-0.65},0).wait(1).to({skewX:-3.6},0).wait(1).to({skewX:-3.48,x:-0.6,y:-11},0).wait(1).to({skewX:-3.36},0).wait(1).to({skewX:-3.24},0).wait(1).to({skewX:-3.12,x:-0.55},0).wait(1).to({skewX:-3},0).wait(1).to({skewX:-2.88,x:-0.5},0).wait(1).to({skewX:-2.76},0).wait(1).to({skewX:-2.64,x:-0.45},0).wait(1).to({skewX:-2.52},0).wait(1).to({skewX:-2.4,x:-0.4},0).wait(1).to({skewX:-2.28},0).wait(1).to({skewX:-2.16,x:-0.35},0).wait(1).to({skewX:-2.04},0).wait(1).to({skewX:-1.92,x:-0.3},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.68},0).wait(1).to({skewX:-1.56,x:-0.25},0).wait(1).to({skewX:-1.44},0).wait(1).to({skewX:-1.32,x:-0.2},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.08,x:-0.15},0).wait(1).to({skewX:-0.96},0).wait(1).to({skewX:-0.84,x:-0.1},0).wait(1).to({skewX:-0.72},0).wait(1).to({skewX:-0.6,x:-0.05},0).wait(1).to({skewX:-0.48},0).wait(1).to({skewX:-0.36,x:0},0).wait(1).to({skewX:-0.24},0).wait(1).to({skewX:-0.12,x:0.05},0).wait(1).to({skewX:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-22.6,44.599999999999994,23.8);


(lib.sba2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shortbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,skewX:0.0678,y:-11.1},0).wait(1).to({skewX:0.1356,x:0.1},0).wait(1).to({skewX:0.2034},0).wait(1).to({skewX:0.2712},0).wait(1).to({skewX:0.339},0).wait(1).to({skewX:0.4068,x:0.15},0).wait(1).to({skewX:0.4746},0).wait(1).to({skewX:0.5424},0).wait(1).to({skewX:0.6102},0).wait(1).to({skewX:0.678,x:0.2},0).wait(1).to({skewX:0.7458},0).wait(1).to({skewX:0.8136},0).wait(1).to({skewX:0.8814},0).wait(1).to({skewX:0.9492,x:0.25},0).wait(1).to({skewX:1.0169},0).wait(1).to({skewX:1.0847},0).wait(1).to({skewX:1.1525},0).wait(1).to({skewX:1.2203,x:0.3},0).wait(1).to({skewX:1.2881},0).wait(1).to({skewX:1.3559},0).wait(1).to({skewX:1.4237,x:0.35},0).wait(1).to({skewX:1.4915},0).wait(1).to({skewX:1.5593},0).wait(1).to({skewX:1.6271},0).wait(1).to({skewX:1.6949,x:0.4},0).wait(1).to({skewX:1.7627},0).wait(1).to({skewX:1.8305},0).wait(1).to({skewX:1.8983},0).wait(1).to({skewX:1.9661,x:0.45},0).wait(1).to({skewX:2.0339},0).wait(1).to({skewX:2.1017},0).wait(1).to({skewX:2.1695},0).wait(1).to({skewX:2.2373,x:0.5},0).wait(1).to({skewX:2.3051},0).wait(1).to({skewX:2.3729},0).wait(1).to({skewX:2.4407},0).wait(1).to({skewX:2.5085,x:0.55},0).wait(1).to({skewX:2.5763},0).wait(1).to({skewX:2.6441},0).wait(1).to({skewX:2.7119},0).wait(1).to({skewX:2.7797,x:0.6},0).wait(1).to({skewX:2.8475},0).wait(1).to({skewX:2.9153},0).wait(1).to({skewX:2.9831,x:0.65},0).wait(1).to({skewX:3.0508},0).wait(1).to({skewX:3.1186},0).wait(1).to({skewX:3.1864},0).wait(1).to({skewX:3.2542,x:0.7},0).wait(1).to({skewX:3.322},0).wait(1).to({skewX:3.3898},0).wait(1).to({skewX:3.4576},0).wait(1).to({skewX:3.5254,x:0.75},0).wait(1).to({skewX:3.5932,y:-11.05},0).wait(1).to({skewX:3.661},0).wait(1).to({skewX:3.7288},0).wait(1).to({skewX:3.7966,x:0.8},0).wait(1).to({skewX:3.8644},0).wait(1).to({skewX:3.9322},0).wait(1).to({skewX:4},0).wait(1).to({skewX:3.9333},0).wait(1).to({skewX:3.8667},0).wait(1).to({skewX:3.8},0).wait(1).to({skewX:3.7333,x:0.75},0).wait(1).to({skewX:3.6667},0).wait(1).to({skewX:3.6},0).wait(1).to({skewX:3.5333,y:-11.1},0).wait(1).to({skewX:3.4667,x:0.7},0).wait(1).to({skewX:3.4},0).wait(1).to({skewX:3.3333},0).wait(1).to({skewX:3.2667},0).wait(1).to({skewX:3.2,x:0.65},0).wait(1).to({skewX:3.1333},0).wait(1).to({skewX:3.0667},0).wait(1).to({skewX:3},0).wait(1).to({skewX:2.9333,x:0.6},0).wait(1).to({skewX:2.8667},0).wait(1).to({skewX:2.8},0).wait(1).to({skewX:2.7333},0).wait(1).to({skewX:2.6667,x:0.55},0).wait(1).to({skewX:2.6},0).wait(1).to({skewX:2.5333},0).wait(1).to({skewX:2.4667},0).wait(1).to({skewX:2.4,x:0.5},0).wait(1).to({skewX:2.3333},0).wait(1).to({skewX:2.2667},0).wait(1).to({skewX:2.2},0).wait(1).to({skewX:2.1333,x:0.45},0).wait(1).to({skewX:2.0667},0).wait(1).to({skewX:2},0).wait(1).to({skewX:1.9333,x:0.4},0).wait(1).to({skewX:1.8667},0).wait(1).to({skewX:1.8},0).wait(1).to({skewX:1.7333},0).wait(1).to({skewX:1.6667,x:0.35},0).wait(1).to({skewX:1.6},0).wait(1).to({skewX:1.5333},0).wait(1).to({skewX:1.4667},0).wait(1).to({skewX:1.4,x:0.3},0).wait(1).to({skewX:1.3333},0).wait(1).to({skewX:1.2667},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.1333,x:0.25},0).wait(1).to({skewX:1.0667},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9333},0).wait(1).to({skewX:0.8667,x:0.2},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7333},0).wait(1).to({skewX:0.6667},0).wait(1).to({skewX:0.6,x:0.15},0).wait(1).to({skewX:0.5333},0).wait(1).to({skewX:0.4667},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3333,x:0.1},0).wait(1).to({skewX:0.2667},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1333},0).wait(1).to({skewX:0.0667,x:0.05},0).wait(1).to({skewX:0},0).wait(1).to({skewX:-0.0667},0).wait(1).to({skewX:-0.1333,x:0},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.5333},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.6667,x:-0.1},0).wait(1).to({skewX:-0.7333},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.8667},0).wait(1).to({skewX:-0.9333,x:-0.15},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-1.0667},0).wait(1).to({skewX:-1.1333},0).wait(1).to({skewX:-1.2,x:-0.2},0).wait(1).to({skewX:-1.2667},0).wait(1).to({skewX:-1.3333},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.4667,x:-0.25},0).wait(1).to({skewX:-1.5333},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.6667},0).wait(1).to({skewX:-1.7333,x:-0.3},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.8667},0).wait(1).to({skewX:-1.9333},0).wait(1).to({skewX:-2,x:-0.35},0).wait(1).to({skewX:-2.0667},0).wait(1).to({skewX:-2.1333},0).wait(1).to({skewX:-2.2,x:-0.4},0).wait(1).to({skewX:-2.2667},0).wait(1).to({skewX:-2.3333},0).wait(1).to({skewX:-2.4},0).wait(1).to({skewX:-2.4667,x:-0.45},0).wait(1).to({skewX:-2.5333},0).wait(1).to({skewX:-2.6},0).wait(1).to({skewX:-2.6667},0).wait(1).to({skewX:-2.7333,x:-0.5},0).wait(1).to({skewX:-2.8},0).wait(1).to({skewX:-2.8667},0).wait(1).to({skewX:-2.9333},0).wait(1).to({skewX:-3,x:-0.55},0).wait(1).to({skewX:-3.0667},0).wait(1).to({skewX:-3.1333},0).wait(1).to({skewX:-3.2},0).wait(1).to({skewX:-3.2667,x:-0.6},0).wait(1).to({skewX:-3.3333},0).wait(1).to({skewX:-3.4},0).wait(1).to({skewX:-3.4667},0).wait(1).to({skewX:-3.5333,x:-0.65},0).wait(1).to({skewX:-3.6,y:-11.05},0).wait(1).to({skewX:-3.6667},0).wait(1).to({skewX:-3.7333},0).wait(1).to({skewX:-3.8,x:-0.7},0).wait(1).to({skewX:-3.8667},0).wait(1).to({skewX:-3.9333},0).wait(1).to({skewX:-4},0).wait(1).to({skewX:-3.9333},0).wait(1).to({skewX:-3.8667},0).wait(1).to({skewX:-3.8},0).wait(1).to({skewX:-3.7333,x:-0.65},0).wait(1).to({skewX:-3.6667},0).wait(1).to({skewX:-3.6},0).wait(1).to({skewX:-3.5333,y:-11.1},0).wait(1).to({skewX:-3.4667,x:-0.6},0).wait(1).to({skewX:-3.4},0).wait(1).to({skewX:-3.3333},0).wait(1).to({skewX:-3.2667},0).wait(1).to({skewX:-3.2,x:-0.55},0).wait(1).to({skewX:-3.1333},0).wait(1).to({skewX:-3.0667},0).wait(1).to({skewX:-3},0).wait(1).to({skewX:-2.9333,x:-0.5},0).wait(1).to({skewX:-2.8667},0).wait(1).to({skewX:-2.8},0).wait(1).to({skewX:-2.7333},0).wait(1).to({skewX:-2.6667,x:-0.45},0).wait(1).to({skewX:-2.6},0).wait(1).to({skewX:-2.5333},0).wait(1).to({skewX:-2.4667},0).wait(1).to({skewX:-2.4,x:-0.4},0).wait(1).to({skewX:-2.3333},0).wait(1).to({skewX:-2.2667},0).wait(1).to({skewX:-2.2},0).wait(1).to({skewX:-2.1333,x:-0.35},0).wait(1).to({skewX:-2.0667},0).wait(1).to({skewX:-2},0).wait(1).to({skewX:-1.9333,x:-0.3},0).wait(1).to({skewX:-1.8667},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.7333},0).wait(1).to({skewX:-1.6667,x:-0.25},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.5333},0).wait(1).to({skewX:-1.4667},0).wait(1).to({skewX:-1.4,x:-0.2},0).wait(1).to({skewX:-1.3333},0).wait(1).to({skewX:-1.2667},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.1333,x:-0.15},0).wait(1).to({skewX:-1.0667},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9333},0).wait(1).to({skewX:-0.8667,x:-0.1},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7333},0).wait(1).to({skewX:-0.6667},0).wait(1).to({skewX:-0.6,x:-0.05},0).wait(1).to({skewX:-0.5333},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3333,x:0},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1333},0).wait(1).to({skewX:-0.0667,x:0.05},0).wait(1).to({skewX:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-22.8,44.7,23.8);


(lib.sba1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shortbuildinggraphic("synched",0);
	this.instance.setTransform(0,0,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,rotation:0.0469,y:-11.1},0).wait(1).to({rotation:0,skewX:0.0938},0).wait(1).to({skewX:0.1406,x:0.05},0).wait(1).to({skewX:0.1875},0).wait(1).to({skewX:0.2344},0).wait(1).to({skewX:0.2813},0).wait(1).to({skewX:0.3281},0).wait(1).to({skewX:0.375},0).wait(1).to({skewX:0.4219,x:0.1},0).wait(1).to({skewX:0.4688},0).wait(1).to({skewX:0.5156},0).wait(1).to({skewX:0.5625},0).wait(1).to({skewX:0.6094},0).wait(1).to({skewX:0.6563,x:0.15},0).wait(1).to({skewX:0.7031},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.7969},0).wait(1).to({skewX:0.8438},0).wait(1).to({skewX:0.8906},0).wait(1).to({skewX:0.9375,x:0.2},0).wait(1).to({skewX:0.9844},0).wait(1).to({skewX:1.0313},0).wait(1).to({skewX:1.0781},0).wait(1).to({skewX:1.125},0).wait(1).to({skewX:1.1719,x:0.25},0).wait(1).to({skewX:1.2188},0).wait(1).to({skewX:1.2656},0).wait(1).to({skewX:1.3125},0).wait(1).to({skewX:1.3594},0).wait(1).to({skewX:1.4063},0).wait(1).to({skewX:1.4531,x:0.3},0).wait(1).to({skewX:1.5},0).wait(1).to({skewX:1.5469},0).wait(1).to({skewX:1.5938},0).wait(1).to({skewX:1.6406},0).wait(1).to({skewX:1.6875,x:0.35},0).wait(1).to({skewX:1.7344},0).wait(1).to({skewX:1.7813},0).wait(1).to({skewX:1.8281},0).wait(1).to({skewX:1.875},0).wait(1).to({skewX:1.9219},0).wait(1).to({skewX:1.9688,x:0.4},0).wait(1).to({skewX:2.0156},0).wait(1).to({skewX:2.0625},0).wait(1).to({skewX:2.1094},0).wait(1).to({skewX:2.1563},0).wait(1).to({skewX:2.2031,x:0.45},0).wait(1).to({skewX:2.25},0).wait(1).to({skewX:2.2969},0).wait(1).to({skewX:2.3438},0).wait(1).to({skewX:2.3906},0).wait(1).to({skewX:2.4375},0).wait(1).to({skewX:2.4844,x:0.5},0).wait(1).to({skewX:2.5313},0).wait(1).to({skewX:2.5781},0).wait(1).to({skewX:2.625},0).wait(1).to({skewX:2.6719},0).wait(1).to({skewX:2.7188,x:0.55},0).wait(1).to({skewX:2.7656},0).wait(1).to({skewX:2.8125},0).wait(1).to({skewX:2.8594},0).wait(1).to({skewX:2.9063},0).wait(1).to({skewX:2.9531},0).wait(1).to({skewX:3,x:0.6},0).wait(1).to({skewX:2.9538,x:0.55},0).wait(1).to({skewX:2.9077},0).wait(1).to({skewX:2.8615},0).wait(1).to({skewX:2.8154},0).wait(1).to({skewX:2.7692},0).wait(1).to({skewX:2.7231},0).wait(1).to({skewX:2.6769,x:0.5},0).wait(1).to({skewX:2.6308},0).wait(1).to({skewX:2.5846},0).wait(1).to({skewX:2.5385},0).wait(1).to({skewX:2.4923},0).wait(1).to({skewX:2.4462,x:0.45},0).wait(1).to({skewX:2.4},0).wait(1).to({skewX:2.3538},0).wait(1).to({skewX:2.3077},0).wait(1).to({skewX:2.2615},0).wait(1).to({skewX:2.2154},0).wait(1).to({skewX:2.1692,x:0.4},0).wait(1).to({skewX:2.1231},0).wait(1).to({skewX:2.0769},0).wait(1).to({skewX:2.0308},0).wait(1).to({skewX:1.9846},0).wait(1).to({skewX:1.9385},0).wait(1).to({skewX:1.8923,x:0.35},0).wait(1).to({skewX:1.8462},0).wait(1).to({skewX:1.8},0).wait(1).to({skewX:1.7538},0).wait(1).to({skewX:1.7077},0).wait(1).to({skewX:1.6615,x:0.3},0).wait(1).to({skewX:1.6154},0).wait(1).to({skewX:1.5692},0).wait(1).to({skewX:1.5231},0).wait(1).to({skewX:1.4769},0).wait(1).to({skewX:1.4308},0).wait(1).to({skewX:1.3846,x:0.25},0).wait(1).to({skewX:1.3385},0).wait(1).to({skewX:1.2923},0).wait(1).to({skewX:1.2462},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.1538,x:0.2},0).wait(1).to({skewX:1.1077},0).wait(1).to({skewX:1.0615},0).wait(1).to({skewX:1.0154},0).wait(1).to({skewX:0.9692},0).wait(1).to({skewX:0.9231},0).wait(1).to({skewX:0.8769,x:0.15},0).wait(1).to({skewX:0.8308},0).wait(1).to({skewX:0.7846},0).wait(1).to({skewX:0.7385},0).wait(1).to({skewX:0.6923},0).wait(1).to({skewX:0.6462,x:0.1},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.5538},0).wait(1).to({skewX:0.5077},0).wait(1).to({skewX:0.4615},0).wait(1).to({skewX:0.4154},0).wait(1).to({skewX:0.3692,x:0.05},0).wait(1).to({skewX:0.3231},0).wait(1).to({skewX:0.2769},0).wait(1).to({skewX:0.2308},0).wait(1).to({skewX:0.1846},0).wait(1).to({skewX:0.1385},0).wait(1).to({skewX:0.0923,x:0},0).wait(1).to({rotation:0.0462,skewX:0},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0462},0).wait(1).to({rotation:0,skewX:-0.0923},0).wait(1).to({skewX:-0.1385,x:-0.05},0).wait(1).to({skewX:-0.1846},0).wait(1).to({skewX:-0.2308},0).wait(1).to({skewX:-0.2769},0).wait(1).to({skewX:-0.3231},0).wait(1).to({skewX:-0.3692},0).wait(1).to({skewX:-0.4154,x:-0.1},0).wait(1).to({skewX:-0.4615},0).wait(1).to({skewX:-0.5077},0).wait(1).to({skewX:-0.5538},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.6462},0).wait(1).to({skewX:-0.6923,x:-0.15},0).wait(1).to({skewX:-0.7385},0).wait(1).to({skewX:-0.7846},0).wait(1).to({skewX:-0.8308},0).wait(1).to({skewX:-0.8769},0).wait(1).to({skewX:-0.9231,x:-0.2},0).wait(1).to({skewX:-0.9692},0).wait(1).to({skewX:-1.0154},0).wait(1).to({skewX:-1.0615},0).wait(1).to({skewX:-1.1077},0).wait(1).to({skewX:-1.1538},0).wait(1).to({skewX:-1.2,x:-0.25},0).wait(1).to({skewX:-1.2462},0).wait(1).to({skewX:-1.2923},0).wait(1).to({skewX:-1.3385},0).wait(1).to({skewX:-1.3846},0).wait(1).to({skewX:-1.4308,x:-0.3},0).wait(1).to({skewX:-1.4769},0).wait(1).to({skewX:-1.5231},0).wait(1).to({skewX:-1.5692},0).wait(1).to({skewX:-1.6154},0).wait(1).to({skewX:-1.6615},0).wait(1).to({skewX:-1.7077,x:-0.35},0).wait(1).to({skewX:-1.7538},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.8462},0).wait(1).to({skewX:-1.8923},0).wait(1).to({skewX:-1.9385,x:-0.4},0).wait(1).to({skewX:-1.9846},0).wait(1).to({skewX:-2.0308},0).wait(1).to({skewX:-2.0769},0).wait(1).to({skewX:-2.1231},0).wait(1).to({skewX:-2.1692},0).wait(1).to({skewX:-2.2154,x:-0.45},0).wait(1).to({skewX:-2.2615},0).wait(1).to({skewX:-2.3077},0).wait(1).to({skewX:-2.3538},0).wait(1).to({skewX:-2.4},0).wait(1).to({skewX:-2.4462},0).wait(1).to({skewX:-2.4923,x:-0.5},0).wait(1).to({skewX:-2.5385},0).wait(1).to({skewX:-2.5846},0).wait(1).to({skewX:-2.6308},0).wait(1).to({skewX:-2.6769},0).wait(1).to({skewX:-2.7231,x:-0.55},0).wait(1).to({skewX:-2.7692},0).wait(1).to({skewX:-2.8154},0).wait(1).to({skewX:-2.8615},0).wait(1).to({skewX:-2.9077},0).wait(1).to({skewX:-2.9538},0).wait(1).to({skewX:-3,x:-0.6},0).wait(1).to({skewX:-2.9538,x:-0.55},0).wait(1).to({skewX:-2.9077},0).wait(1).to({skewX:-2.8615},0).wait(1).to({skewX:-2.8154},0).wait(1).to({skewX:-2.7692},0).wait(1).to({skewX:-2.7231},0).wait(1).to({skewX:-2.6769,x:-0.5},0).wait(1).to({skewX:-2.6308},0).wait(1).to({skewX:-2.5846},0).wait(1).to({skewX:-2.5385},0).wait(1).to({skewX:-2.4923},0).wait(1).to({skewX:-2.4462,x:-0.45},0).wait(1).to({skewX:-2.4},0).wait(1).to({skewX:-2.3538},0).wait(1).to({skewX:-2.3077},0).wait(1).to({skewX:-2.2615},0).wait(1).to({skewX:-2.2154},0).wait(1).to({skewX:-2.1692,x:-0.4},0).wait(1).to({skewX:-2.1231},0).wait(1).to({skewX:-2.0769},0).wait(1).to({skewX:-2.0308},0).wait(1).to({skewX:-1.9846},0).wait(1).to({skewX:-1.9385},0).wait(1).to({skewX:-1.8923,x:-0.35},0).wait(1).to({skewX:-1.8462},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.7538},0).wait(1).to({skewX:-1.7077},0).wait(1).to({skewX:-1.6615,x:-0.3},0).wait(1).to({skewX:-1.6154},0).wait(1).to({skewX:-1.5692},0).wait(1).to({skewX:-1.5231},0).wait(1).to({skewX:-1.4769},0).wait(1).to({skewX:-1.4308},0).wait(1).to({skewX:-1.3846,x:-0.25},0).wait(1).to({skewX:-1.3385},0).wait(1).to({skewX:-1.2923},0).wait(1).to({skewX:-1.2462},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.1538,x:-0.2},0).wait(1).to({skewX:-1.1077},0).wait(1).to({skewX:-1.0615},0).wait(1).to({skewX:-1.0154},0).wait(1).to({skewX:-0.9692},0).wait(1).to({skewX:-0.9231},0).wait(1).to({skewX:-0.8769,x:-0.15},0).wait(1).to({skewX:-0.8308},0).wait(1).to({skewX:-0.7846},0).wait(1).to({skewX:-0.7385},0).wait(1).to({skewX:-0.6923},0).wait(1).to({skewX:-0.6462,x:-0.1},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.5538},0).wait(1).to({skewX:-0.5077},0).wait(1).to({skewX:-0.4615},0).wait(1).to({skewX:-0.4154},0).wait(1).to({skewX:-0.3692,x:-0.05},0).wait(1).to({skewX:-0.3231},0).wait(1).to({skewX:-0.2769},0).wait(1).to({skewX:-0.2308},0).wait(1).to({skewX:-0.1846},0).wait(1).to({skewX:-0.1385},0).wait(1).to({skewX:-0.0923,x:0},0).wait(1).to({rotation:-0.0462,skewX:0},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-22.8,44.7,23.8);


(lib.sb_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZA5QgJgCgDgGQgEgFAAgKQAAgHADgEQADgFAIgEQgDgCgCgDIgCgHQAAgDACgEQACgDADgCQgFgDgDgGQgCgFAAgIQgBgKAEgFQADgGAIgDQAIgDANAAQALAAAHACIAaAAIgBAIIgMABQAEAGAAAKQgBAOgHAGQgIAGgTAAQgLAAgGgCQgCAEgBADQABACACACIAFADIAfAFQALABAFAGQAEAFAAALQAAAKgDAFQgEAGgJACQgIADgOAAQgPAAgJgDgAgZAZQgCADAAAFQAAAGACADQACADAGABIAQABIAOgBQAGgBACgDQACgDAAgGIgBgGQgBgCgDgCIgJgCIgbgEQgFAEgCAEgAgTgsQgFADAAAJQAAAIAFAEQAEADANAAQALAAAFgDQAFgEAAgIQAAgJgFgDQgEgEgMAAQgNAAgEAEg");
	this.shape.setTransform(-173.3,-18.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWArIAAg6QAAgHgDgEQgDgDgGAAQgHAAgGADIgSAKIAAA7IgOAAIAAhTIAMAAIABAOQATgQARAAQALAAAGAHQAFAFAAAMIAAA9g");
	this.shape_1.setTransform(-183.075,-19.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgoQgEAAAAgEIAAgJIABgEIADgBIAGAAQAFAAAAAFIAAAJQAAAEgFAAg");
	this.shape_2.setTransform(-190.125,-21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAyQgHgLAAgWQAAgQADgJQADgJAHgEQAHgEALgBQAPAAANAIIAAgQIAAgaIAOAAIAAB3IgLAAIgBgNQgQAOgQABQgPAAgHgLgAgNgKQgFADgCAGQgBAGAAALQAAANABAGQACAHAFADQAEADAHAAQAFAAAFgDQAGgCAJgHIAAgsIgOgDIgLgBQgHAAgEACg");
	this.shape_3.setTransform(-197.275,-21.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA3QgGgGAAgKIAAhiIAPAAIgBBfQAAAFADADQACADAGAAIAIAAIACALIgHACIgJAAQgIAAgFgFg");
	this.shape_4.setTransform(-203.825,-21.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgoQgEAAAAgEIAAgJIABgEIADgBIAGAAQAFAAAAAFIAAAJQAAAEgFAAg");
	this.shape_5.setTransform(-209.025,-21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAlQgFgGAAgLIAAg+IAOAAIAAA6QAAAHADAEQADADAHAAQAGAAAGgDIAQgJIAAg8IAOAAIAABTIgLAAIgBgNQgKAIgIADQgIADgJABQgLgBgGgFg");
	this.shape_6.setTransform(-215.975,-19.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVA8IgSgBIAAh1IAQgBIAWAAQANAAAJADQAIACAEAHQAEAHAAAMQAAAMgFAHQgFAGgKACIAAAAQANABAFAHQAFAHAAAPQAAANgDAGQgEAGgIAEQgIACgOAAgAgZAvIAaAAQAJAAAFgCQAGgCACgDQACgFAAgJQAAgJgCgEQgDgGgFgBQgGgCgJAAIgZAAgAgZgHIAZAAQAIAAAFgCQAFgCACgEQACgEAAgIQAAgIgCgEQgCgEgGgCQgFgCgJABIgXAAg");
	this.shape_7.setTransform(-225.775,-21.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAxQgFgGAAgLIAAgyIgPAAIAAgKIAPgBIAAgYIANAAIAAAYIAbAAIAAALIgbAAIAAAwQAAAGADACQACADAHAAIAMAAIACALIgKACIgJAAQgJAAgGgFg");
	this.shape_8.setTransform(-238.25,-20.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZArIAAhTIALAAIACAOQASgQAQAAIAEAAIgCAPIgFAAQgGgBgHADIgRAIIAAA8g");
	this.shape_9.setTransform(-244.375,-19.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWAnQgIgEgEgJQgEgJAAgRQAAgPAEgJQAEgJAIgFQAJgEANgBQAPABAIAEQAIAFAEAJQAEAJAAAPQAAARgEAJQgEAJgIAEQgIAFgPAAQgNAAgJgFgAgNgbQgFADgDAGQgCAHAAALQAAAMACAHQADAHAFACQAFADAIABQAJgBAFgDQAGgCACgHQACgHAAgMQAAgLgCgHQgCgGgGgDQgFgDgJAAQgIAAgFADg");
	this.shape_10.setTransform(-253.125,-19.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWA8IAAg7QAAgGgDgEQgDgDgGAAQgHAAgGADQgHADgLAGIAAA8IgOAAIAAh3IAOAAIAAAhIgBARQAKgIAJgDQAIgFAJAAQALAAAGAHQAFAFAAAMIAAA9g");
	this.shape_11.setTransform(-262.825,-21.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkA6IABgLIAMAAIATAAIARgBQAFgBADgEQACgEAAgJQAAgGgBgEQgBgEgDgCQgEgCgFgBIgYgGQgMgDgGgHQgEgIgBgOQABgNAEgHQADgGAIgCQAIgDAOAAQAUABAPADIgCALIghgBIgOABQgEABgCADQgCAEgBAJQABAJADAEQADAEAJACIAWAGQANADAFAHQAGAIgBAOQAAANgDAHQgFAHgIACQgIADgOAAQgSAAgSgDg");
	this.shape_12.setTransform(-272.5,-21.475);

	this.instance = new lib.pointer();
	this.instance.setTransform(-290.5,-21.35,1,1,0,0,0,11.2,11.2);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,0,255,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(280));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(280));

	// Layer_7
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,0,0,4).p("A8LAAIAMAAAyYABMAukAAA");
	this.shape_13.setTransform(-229.4,-42.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(280));

	// Layer_11
	this.tallb = new lib.sba1();
	this.tallb.name = "tallb";
	this.tallb.setTransform(-202.95,-42.55,3.9447,3.9435);

	this.tallb_1 = new lib.sba2();
	this.tallb_1.name = "tallb_1";
	this.tallb_1.setTransform(-202.95,-42.55,3.9447,3.9435);

	this.tallb_2 = new lib.sba7();
	this.tallb_2.name = "tallb_2";
	this.tallb_2.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.tallb_3 = new lib.sba4();
	this.tallb_3.name = "tallb_3";
	this.tallb_3.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.tallb_4 = new lib.sba8();
	this.tallb_4.name = "tallb_4";
	this.tallb_4.setTransform(-202.95,-42.95,3.9447,3.9447,0,0,0,0,-0.1);

	this.tallb_5 = new lib.sba9();
	this.tallb_5.name = "tallb_5";
	this.tallb_5.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.instance_1 = new lib.sba10();
	this.instance_1.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.tallb_6 = new lib.sba11();
	this.tallb_6.name = "tallb_6";
	this.tallb_6.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.tallb_7 = new lib.shortbuildinggraphic("synched",0);
	this.tallb_7.name = "tallb_7";
	this.tallb_7.setTransform(-202.95,-42.55,3.9447,3.9435);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallb}]}).to({state:[{t:this.tallb_1}]},19).to({state:[{t:this.tallb_2}]},20).to({state:[{t:this.tallb_3}]},20).to({state:[{t:this.tallb_4,p:{regY:-0.1,y:-42.95}}]},20).to({state:[{t:this.tallb_5,p:{scaleX:3.9447,scaleY:3.9447,rotation:0}}]},20).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.tallb_6}]},20).to({state:[{t:this.tallb_4,p:{regY:0,y:-42.55}}]},20).to({state:[{t:this.tallb_5,p:{scaleX:3.9444,scaleY:3.9444,rotation:0.002}}]},20).to({state:[{t:this.tallb_7}]},20).wait(81));

	// Layer_2
	this.instance_2 = new lib.pointer();
	this.instance_2.setTransform(4.9,166.45,1,1,0,0,0,11.2,11.2);
	var instance_2Filter_2 = new cjs.ColorFilter(0,0,0,1,0,255,0,0);
	this.instance_2.filters = [instance_2Filter_2];
	this.instance_2.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[5,166.4,5.7,165,10.4,159.4,32.3,133.9,55.7,127.3,57.3,126.8,58.9,126.5,64.9,125,71.1,124.9,71.7,124.8,72.3,124.8,73,124.8,73.5,124.9,105.3,125.8,134.3,159.4,149.3,176.9,157.7,194.5,160.7,199.9,163.7,205.4,171.7,218.6,181,229.5,209.9,263.3,241.7,264.2,242.2,264.2,242.9,264.2,243.5,264.2,244.1,264.2,245.9,264.1,350.6,264.3]}},279).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_2).wait(280));

	// Layer_3 copy
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00FF00").ss(4,0,0,4).p("A66kYQAHgPAwg3QDaj/DrhEQAPgEAQgEQA9gOA9gCQAHAAAGAAQAGAAAGAAQE9AJEiFSQCWCvBUCvIA9BtQBQCEBdBtQEgFRE+AJQAGABAHAAQAGAAAGgBQARAAQgAC");
	this.shape_14.setTransform(177.1274,194.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(280));

	// Layer_3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("ALGHBQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTHBQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGFJQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTFJQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGDRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTDRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGBZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTBZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGgeQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTgeQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGiWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTiWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGkOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTkOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGmGQgDgDAAgEIAAgsQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAsQAAAEgDADQgDADgEAAQgEAAgDgDgArTmGQgDgDAAgEIAAgsQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAsQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_15.setTransform(-202.5,-86.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(280));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.7,-131.5,772.5,407.1);


(lib.tba11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:1.25,x:1.05,y:-39.9},0).wait(1).to({skewX:2.5,x:1.9,y:-39.85},0).wait(1).to({skewX:3.75,x:2.8,y:-39.8},0).wait(1).to({skewX:5,x:3.7,y:-39.75},0).wait(1).to({skewX:4,x:3,y:-39.8},0).wait(1).to({skewX:3,x:2.25,y:-39.85},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:1,x:0.85,y:-39.9},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-2,x:-1.25,y:-39.85},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-4,x:-2.7,y:-39.8},0).wait(1).to({skewX:-5,x:-3.4,y:-39.75},0).wait(1).to({skewX:-4,x:-2.7,y:-39.8},0).wait(1).to({skewX:-3,x:-1.95,y:-39.85},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-1,x:-0.55,y:-39.9},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-80.7,49.599999999999994,82.8);


(lib.tba10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.3,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.6667,x:0.65,y:-39.9},0).wait(1).to({skewX:1.3333,x:1.15},0).wait(1).to({skewX:2,x:1.6,y:-39.85},0).wait(1).to({skewX:2.6667,x:2.1},0).wait(1).to({skewX:3.3333,x:2.55,y:-39.8},0).wait(1).to({skewX:4,x:3.05},0).wait(1).to({skewX:4.6667,x:3.5,y:-39.75},0).wait(1).to({skewX:5.3333,x:3.95,y:-39.7},0).wait(1).to({skewX:6,x:4.45,y:-39.65},0).wait(1).to({skewX:5.4,x:4,y:-39.7},0).wait(1).to({skewX:4.8,x:3.6,y:-39.75},0).wait(1).to({skewX:4.2,x:3.15,y:-39.8},0).wait(1).to({skewX:3.6,x:2.75},0).wait(1).to({skewX:3,x:2.3,y:-39.85},0).wait(1).to({skewX:2.4,x:1.9},0).wait(1).to({skewX:1.8,x:1.45},0).wait(1).to({skewX:1.2,x:1.05,y:-39.9},0).wait(1).to({skewX:0.6,x:0.6},0).wait(1).to({skewX:0,x:0.2},0).wait(1).to({skewX:-0.6,x:-0.2},0).wait(1).to({skewX:-1.2,x:-0.65},0).wait(1).to({skewX:-1.8,x:-1.05,y:-39.85},0).wait(1).to({skewX:-2.4,x:-1.5},0).wait(1).to({skewX:-3,x:-1.9},0).wait(1).to({skewX:-3.6,x:-2.35,y:-39.8},0).wait(1).to({skewX:-4.2,x:-2.75},0).wait(1).to({skewX:-4.8,x:-3.2,y:-39.75},0).wait(1).to({skewX:-5.4,x:-3.6,y:-39.7},0).wait(1).to({skewX:-6,x:-4.05,y:-39.65},0).wait(1).to({skewX:-5.4,x:-3.6,y:-39.7},0).wait(1).to({skewX:-4.8,x:-3.2,y:-39.75},0).wait(1).to({skewX:-4.2,x:-2.75,y:-39.8},0).wait(1).to({skewX:-3.6,x:-2.35},0).wait(1).to({skewX:-3,x:-1.9,y:-39.85},0).wait(1).to({skewX:-2.4,x:-1.5},0).wait(1).to({skewX:-1.8,x:-1.05},0).wait(1).to({skewX:-1.2,x:-0.65,y:-39.9},0).wait(1).to({skewX:-0.6,x:-0.2},0).wait(1).to({skewX:0,x:0.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-80.8,60.5,82.89999999999999);


(lib.tba9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.2105,x:0.3,y:-39.9},0).wait(1).to({skewX:0.4211,x:0.45},0).wait(1).to({skewX:0.6316,x:0.6},0).wait(1).to({skewX:0.8421,x:0.75},0).wait(1).to({skewX:1.0526,x:0.9},0).wait(1).to({skewX:1.2632,x:1.05},0).wait(1).to({skewX:1.4737,x:1.2,y:-39.85},0).wait(1).to({skewX:1.6842,x:1.35},0).wait(1).to({skewX:1.8947,x:1.5},0).wait(1).to({skewX:2.1053,x:1.65},0).wait(1).to({skewX:2.3158,x:1.8},0).wait(1).to({skewX:2.5263,x:1.95},0).wait(1).to({skewX:2.7368,x:2.1},0).wait(1).to({skewX:2.9474,x:2.25},0).wait(1).to({skewX:3.1579,x:2.4},0).wait(1).to({skewX:3.3684,x:2.55,y:-39.8},0).wait(1).to({skewX:3.5789,x:2.7},0).wait(1).to({skewX:3.7895,x:2.85},0).wait(1).to({skewX:4,x:3},0).wait(1).to({skewX:3.8,x:2.85},0).wait(1).to({skewX:3.6,x:2.7},0).wait(1).to({skewX:3.4,x:2.55},0).wait(1).to({skewX:3.2,x:2.4},0).wait(1).to({skewX:3,x:2.25,y:-39.85},0).wait(1).to({skewX:2.8,x:2.15},0).wait(1).to({skewX:2.6,x:2},0).wait(1).to({skewX:2.4,x:1.85},0).wait(1).to({skewX:2.2,x:1.7},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.6,x:1.3},0).wait(1).to({skewX:1.4,x:1.15},0).wait(1).to({skewX:1.2,x:1,y:-39.9},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:0.8,x:0.7},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.4,x:0.45},0).wait(1).to({skewX:0.2,x:0.3},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.2,x:0},0).wait(1).to({skewX:-0.4,x:-0.15},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.8,x:-0.4},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.4,x:-0.85,y:-39.85},0).wait(1).to({skewX:-1.6,x:-1},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-2.2,x:-1.4},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.6,x:-1.7},0).wait(1).to({skewX:-2.8,x:-1.85},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-3.2,x:-2.1,y:-39.8},0).wait(1).to({skewX:-3.4,x:-2.25},0).wait(1).to({skewX:-3.6,x:-2.4},0).wait(1).to({skewX:-3.8,x:-2.55},0).wait(1).to({skewX:-4,x:-2.7},0).wait(1).to({skewX:-3.8,x:-2.55},0).wait(1).to({skewX:-3.6,x:-2.4},0).wait(1).to({skewX:-3.4,x:-2.25},0).wait(1).to({skewX:-3.2,x:-2.1},0).wait(1).to({skewX:-3,x:-1.95,y:-39.85},0).wait(1).to({skewX:-2.8,x:-1.85},0).wait(1).to({skewX:-2.6,x:-1.7},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.2,x:-1.4},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.6,x:-1},0).wait(1).to({skewX:-1.4,x:-0.85},0).wait(1).to({skewX:-1.2,x:-0.7,y:-39.9},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-0.8,x:-0.4},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.4,x:-0.15},0).wait(1).to({skewX:-0.2,x:0},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


(lib.tba8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.125,x:0.25,y:-39.9},0).wait(1).to({skewX:0.25,x:0.35},0).wait(1).to({skewX:0.375,x:0.4},0).wait(1).to({skewX:0.5,x:0.5},0).wait(1).to({skewX:0.625,x:0.6},0).wait(1).to({skewX:0.75,x:0.7},0).wait(1).to({skewX:0.875,x:0.75},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:1.125,x:0.95},0).wait(1).to({skewX:1.25,x:1.05},0).wait(1).to({skewX:1.375,x:1.1},0).wait(1).to({skewX:1.5,x:1.2,y:-39.85},0).wait(1).to({skewX:1.625,x:1.3},0).wait(1).to({skewX:1.75,x:1.4},0).wait(1).to({skewX:1.875,x:1.5},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:2.125,x:1.65},0).wait(1).to({skewX:2.25,x:1.75},0).wait(1).to({skewX:2.375,x:1.85},0).wait(1).to({skewX:2.5,x:1.9},0).wait(1).to({skewX:2.625,x:2},0).wait(1).to({skewX:2.75,x:2.1},0).wait(1).to({skewX:2.875,x:2.2},0).wait(1).to({skewX:3,x:2.25},0).wait(1).to({skewX:2.88,x:2.2},0).wait(1).to({skewX:2.76,x:2.1},0).wait(1).to({skewX:2.64,x:2},0).wait(1).to({skewX:2.52,x:1.95},0).wait(1).to({skewX:2.4,x:1.85},0).wait(1).to({skewX:2.28,x:1.75},0).wait(1).to({skewX:2.16,x:1.7},0).wait(1).to({skewX:2.04,x:1.6},0).wait(1).to({skewX:1.92,x:1.5},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.68,x:1.35},0).wait(1).to({skewX:1.56,x:1.25},0).wait(1).to({skewX:1.44,x:1.15},0).wait(1).to({skewX:1.32,x:1.1,y:-39.9},0).wait(1).to({skewX:1.2,x:1},0).wait(1).to({skewX:1.08,x:0.9},0).wait(1).to({skewX:0.96,x:0.85},0).wait(1).to({skewX:0.84,x:0.75},0).wait(1).to({skewX:0.72,x:0.65},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.48,x:0.5},0).wait(1).to({skewX:0.36,x:0.4},0).wait(1).to({skewX:0.24,x:0.3},0).wait(1).to({skewX:0.12,x:0.25},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.12,x:0.05},0).wait(1).to({skewX:-0.24,x:0},0).wait(1).to({skewX:-0.36,x:-0.1},0).wait(1).to({skewX:-0.48,x:-0.2},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.72,x:-0.35},0).wait(1).to({skewX:-0.84,x:-0.45},0).wait(1).to({skewX:-0.96,x:-0.55},0).wait(1).to({skewX:-1.08,x:-0.6},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.32,x:-0.8},0).wait(1).to({skewX:-1.44,x:-0.85,y:-39.85},0).wait(1).to({skewX:-1.56,x:-0.95},0).wait(1).to({skewX:-1.68,x:-1.05},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.92,x:-1.2},0).wait(1).to({skewX:-2.04,x:-1.3},0).wait(1).to({skewX:-2.16,x:-1.4},0).wait(1).to({skewX:-2.28,x:-1.45},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.52,x:-1.65},0).wait(1).to({skewX:-2.64,x:-1.7},0).wait(1).to({skewX:-2.76,x:-1.8},0).wait(1).to({skewX:-2.88,x:-1.9},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-2.88,x:-1.9},0).wait(1).to({skewX:-2.76,x:-1.8},0).wait(1).to({skewX:-2.64,x:-1.7},0).wait(1).to({skewX:-2.52,x:-1.65},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.28,x:-1.45},0).wait(1).to({skewX:-2.16,x:-1.4},0).wait(1).to({skewX:-2.04,x:-1.3},0).wait(1).to({skewX:-1.92,x:-1.2},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.68,x:-1.05},0).wait(1).to({skewX:-1.56,x:-0.95},0).wait(1).to({skewX:-1.44,x:-0.85},0).wait(1).to({skewX:-1.32,x:-0.8,y:-39.9},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.08,x:-0.6},0).wait(1).to({skewX:-0.96,x:-0.55},0).wait(1).to({skewX:-0.84,x:-0.45},0).wait(1).to({skewX:-0.72,x:-0.35},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.48,x:-0.2},0).wait(1).to({skewX:-0.36,x:-0.1},0).wait(1).to({skewX:-0.24,x:0},0).wait(1).to({skewX:-0.12,x:0.05},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


(lib.tba7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.069,x:0.2,y:-39.9},0).wait(1).to({skewX:0.1379,x:0.25},0).wait(1).to({skewX:0.2069,x:0.3},0).wait(1).to({skewX:0.2759,x:0.35},0).wait(1).to({skewX:0.3448,x:0.4},0).wait(1).to({skewX:0.4138,x:0.45},0).wait(1).to({skewX:0.4828,x:0.5},0).wait(1).to({skewX:0.5517,x:0.55},0).wait(1).to({skewX:0.6207,x:0.6},0).wait(1).to({skewX:0.6897,x:0.65},0).wait(1).to({skewX:0.7586,x:0.7},0).wait(1).to({skewX:0.8276,x:0.75},0).wait(1).to({skewX:0.8966,x:0.8},0).wait(1).to({skewX:0.9655,x:0.85},0).wait(1).to({skewX:1.0345,x:0.9},0).wait(1).to({skewX:1.1034,x:0.95},0).wait(1).to({skewX:1.1724,x:1},0).wait(1).to({skewX:1.2414,x:1.05},0).wait(1).to({skewX:1.3103,x:1.1},0).wait(1).to({skewX:1.3793,x:1.15},0).wait(1).to({skewX:1.4483,x:1.2,y:-39.85},0).wait(1).to({skewX:1.5172},0).wait(1).to({skewX:1.5862,x:1.25},0).wait(1).to({skewX:1.6552,x:1.3},0).wait(1).to({skewX:1.7241,x:1.35},0).wait(1).to({skewX:1.7931,x:1.4},0).wait(1).to({skewX:1.8621,x:1.45},0).wait(1).to({skewX:1.931,x:1.5},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:1.9333,x:1.5},0).wait(1).to({skewX:1.8667,x:1.45},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.7333},0).wait(1).to({skewX:1.6667,x:1.35},0).wait(1).to({skewX:1.6,x:1.3},0).wait(1).to({skewX:1.5333,x:1.25},0).wait(1).to({skewX:1.4667,x:1.2},0).wait(1).to({skewX:1.4,x:1.15},0).wait(1).to({skewX:1.3333,x:1.1,y:-39.9},0).wait(1).to({skewX:1.2667,x:1.05},0).wait(1).to({skewX:1.2,x:1},0).wait(1).to({skewX:1.1333,x:0.95},0).wait(1).to({skewX:1.0667,x:0.9},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:0.9333,x:0.8},0).wait(1).to({skewX:0.8667,x:0.75},0).wait(1).to({skewX:0.8,x:0.7},0).wait(1).to({skewX:0.7333,x:0.65},0).wait(1).to({skewX:0.6667,x:0.6},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.5333},0).wait(1).to({skewX:0.4667,x:0.5},0).wait(1).to({skewX:0.4,x:0.45},0).wait(1).to({skewX:0.3333,x:0.4},0).wait(1).to({skewX:0.2667,x:0.35},0).wait(1).to({skewX:0.2,x:0.3},0).wait(1).to({skewX:0.1333,x:0.25},0).wait(1).to({skewX:0.0667,x:0.2},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.0667,x:0.1},0).wait(1).to({skewX:-0.1333,x:0.05},0).wait(1).to({skewX:-0.2,x:0},0).wait(1).to({skewX:-0.2667,x:-0.05},0).wait(1).to({skewX:-0.3333,x:-0.1},0).wait(1).to({skewX:-0.4,x:-0.15},0).wait(1).to({skewX:-0.4667,x:-0.2},0).wait(1).to({skewX:-0.5333,x:-0.25},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.6667,x:-0.3},0).wait(1).to({skewX:-0.7333,x:-0.35},0).wait(1).to({skewX:-0.8,x:-0.4},0).wait(1).to({skewX:-0.8667,x:-0.45},0).wait(1).to({skewX:-0.9333,x:-0.5},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-1.0667,x:-0.6},0).wait(1).to({skewX:-1.1333,x:-0.65},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.2667,x:-0.75},0).wait(1).to({skewX:-1.3333,x:-0.8},0).wait(1).to({skewX:-1.4,x:-0.85,y:-39.85},0).wait(1).to({skewX:-1.4667,x:-0.9},0).wait(1).to({skewX:-1.5333,x:-0.95},0).wait(1).to({skewX:-1.6,x:-1},0).wait(1).to({skewX:-1.6667,x:-1.05},0).wait(1).to({skewX:-1.7333,x:-1.1},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.8667,x:-1.15},0).wait(1).to({skewX:-1.9333,x:-1.2},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-1.9355,x:-1.2},0).wait(1).to({skewX:-1.871,x:-1.15},0).wait(1).to({skewX:-1.8065},0).wait(1).to({skewX:-1.7419,x:-1.1},0).wait(1).to({skewX:-1.6774,x:-1.05},0).wait(1).to({skewX:-1.6129,x:-1},0).wait(1).to({skewX:-1.5484,x:-0.95},0).wait(1).to({skewX:-1.4839,x:-0.9},0).wait(1).to({skewX:-1.4194,x:-0.85},0).wait(1).to({skewX:-1.3548,x:-0.8,y:-39.9},0).wait(1).to({skewX:-1.2903,x:-0.75},0).wait(1).to({skewX:-1.2258,x:-0.7},0).wait(1).to({skewX:-1.1613,x:-0.65},0).wait(1).to({skewX:-1.0968},0).wait(1).to({skewX:-1.0323,x:-0.6},0).wait(1).to({skewX:-0.9677,x:-0.55},0).wait(1).to({skewX:-0.9032,x:-0.5},0).wait(1).to({skewX:-0.8387,x:-0.45},0).wait(1).to({skewX:-0.7742,x:-0.4},0).wait(1).to({skewX:-0.7097,x:-0.35},0).wait(1).to({skewX:-0.6452,x:-0.3},0).wait(1).to({skewX:-0.5806,x:-0.25},0).wait(1).to({skewX:-0.5161,x:-0.2},0).wait(1).to({skewX:-0.4516,x:-0.15},0).wait(1).to({skewX:-0.3871,x:-0.1},0).wait(1).to({skewX:-0.3226},0).wait(1).to({skewX:-0.2581,x:-0.05},0).wait(1).to({skewX:-0.1935,x:0},0).wait(1).to({skewX:-0.129,x:0.05},0).wait(1).to({skewX:-0.0645,x:0.1},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


(lib.tba6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,rotation:0.0114,x:0.15,y:-39.9},0).wait(1).to({rotation:0.0227},0).wait(1).to({rotation:0.0341},0).wait(1).to({rotation:0.0455,x:0.2},0).wait(1).to({rotation:0,skewX:0.0568},0).wait(1).to({skewX:0.0682},0).wait(1).to({skewX:0.0795},0).wait(1).to({skewX:0.0909},0).wait(1).to({skewX:0.1023},0).wait(1).to({skewX:0.1136,x:0.25},0).wait(1).to({skewX:0.125},0).wait(1).to({skewX:0.1364},0).wait(1).to({skewX:0.1477},0).wait(1).to({skewX:0.1591},0).wait(1).to({skewX:0.1705},0).wait(1).to({skewX:0.1818,x:0.3},0).wait(1).to({skewX:0.1932},0).wait(1).to({skewX:0.2045},0).wait(1).to({skewX:0.2159},0).wait(1).to({skewX:0.2273},0).wait(1).to({skewX:0.2386},0).wait(1).to({skewX:0.25,x:0.35},0).wait(1).to({skewX:0.2614},0).wait(1).to({skewX:0.2727},0).wait(1).to({skewX:0.2841},0).wait(1).to({skewX:0.2955},0).wait(1).to({skewX:0.3068},0).wait(1).to({skewX:0.3182},0).wait(1).to({skewX:0.3295,x:0.4},0).wait(1).to({skewX:0.3409},0).wait(1).to({skewX:0.3523},0).wait(1).to({skewX:0.3636},0).wait(1).to({skewX:0.375},0).wait(1).to({skewX:0.3864},0).wait(1).to({skewX:0.3977,x:0.45},0).wait(1).to({skewX:0.4091},0).wait(1).to({skewX:0.4205},0).wait(1).to({skewX:0.4318},0).wait(1).to({skewX:0.4432},0).wait(1).to({skewX:0.4545},0).wait(1).to({skewX:0.4659,x:0.5},0).wait(1).to({skewX:0.4773},0).wait(1).to({skewX:0.4886},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.4889},0).wait(1).to({skewX:0.4778},0).wait(1).to({skewX:0.4667},0).wait(1).to({skewX:0.4556,x:0.45},0).wait(1).to({skewX:0.4444},0).wait(1).to({skewX:0.4333},0).wait(1).to({skewX:0.4222},0).wait(1).to({skewX:0.4111},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3889},0).wait(1).to({skewX:0.3778,x:0.4},0).wait(1).to({skewX:0.3667},0).wait(1).to({skewX:0.3556},0).wait(1).to({skewX:0.3444},0).wait(1).to({skewX:0.3333},0).wait(1).to({skewX:0.3222},0).wait(1).to({skewX:0.3111,x:0.35},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.2889},0).wait(1).to({skewX:0.2778},0).wait(1).to({skewX:0.2667},0).wait(1).to({skewX:0.2556},0).wait(1).to({skewX:0.2444,x:0.3},0).wait(1).to({skewX:0.2333},0).wait(1).to({skewX:0.2222},0).wait(1).to({skewX:0.2111},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1889},0).wait(1).to({skewX:0.1778},0).wait(1).to({skewX:0.1667,x:0.25},0).wait(1).to({skewX:0.1556},0).wait(1).to({skewX:0.1444},0).wait(1).to({skewX:0.1333},0).wait(1).to({skewX:0.1222},0).wait(1).to({skewX:0.1111},0).wait(1).to({skewX:0.1,x:0.2},0).wait(1).to({skewX:0.0889},0).wait(1).to({skewX:0.0778},0).wait(1).to({skewX:0.0667},0).wait(1).to({skewX:0.0556},0).wait(1).to({rotation:0.0444,skewX:0},0).wait(1).to({rotation:0.0333,x:0.15},0).wait(1).to({rotation:0.0222},0).wait(1).to({rotation:0.0111},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0111},0).wait(1).to({rotation:-0.0222},0).wait(1).to({rotation:-0.0333},0).wait(1).to({rotation:-0.0444,x:0.1},0).wait(1).to({rotation:0,skewX:-0.0556},0).wait(1).to({skewX:-0.0667},0).wait(1).to({skewX:-0.0778},0).wait(1).to({skewX:-0.0889},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.1111,x:0.05},0).wait(1).to({skewX:-0.1222},0).wait(1).to({skewX:-0.1333},0).wait(1).to({skewX:-0.1444},0).wait(1).to({skewX:-0.1556},0).wait(1).to({skewX:-0.1667},0).wait(1).to({skewX:-0.1778,x:0},0).wait(1).to({skewX:-0.1889},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.2111},0).wait(1).to({skewX:-0.2222},0).wait(1).to({skewX:-0.2333},0).wait(1).to({skewX:-0.2444},0).wait(1).to({skewX:-0.2556,x:-0.05},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.2778},0).wait(1).to({skewX:-0.2889},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.3111},0).wait(1).to({skewX:-0.3222,x:-0.1},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3444},0).wait(1).to({skewX:-0.3556},0).wait(1).to({skewX:-0.3667},0).wait(1).to({skewX:-0.3778},0).wait(1).to({skewX:-0.3889,x:-0.15},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.4111},0).wait(1).to({skewX:-0.4222},0).wait(1).to({skewX:-0.4333},0).wait(1).to({skewX:-0.4444},0).wait(1).to({skewX:-0.4556},0).wait(1).to({skewX:-0.4667,x:-0.2},0).wait(1).to({skewX:-0.4778},0).wait(1).to({skewX:-0.4889},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4889},0).wait(1).to({skewX:-0.4778},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.4556,x:-0.15},0).wait(1).to({skewX:-0.4444},0).wait(1).to({skewX:-0.4333},0).wait(1).to({skewX:-0.4222},0).wait(1).to({skewX:-0.4111},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3889},0).wait(1).to({skewX:-0.3778,x:-0.1},0).wait(1).to({skewX:-0.3667},0).wait(1).to({skewX:-0.3556},0).wait(1).to({skewX:-0.3444},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3222},0).wait(1).to({skewX:-0.3111,x:-0.05},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.2889},0).wait(1).to({skewX:-0.2778},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.2556},0).wait(1).to({skewX:-0.2444,x:0},0).wait(1).to({skewX:-0.2333},0).wait(1).to({skewX:-0.2222},0).wait(1).to({skewX:-0.2111},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1889},0).wait(1).to({skewX:-0.1778},0).wait(1).to({skewX:-0.1667,x:0.05},0).wait(1).to({skewX:-0.1556},0).wait(1).to({skewX:-0.1444},0).wait(1).to({skewX:-0.1333},0).wait(1).to({skewX:-0.1222},0).wait(1).to({skewX:-0.1111},0).wait(1).to({skewX:-0.1,x:0.1},0).wait(1).to({skewX:-0.0889},0).wait(1).to({skewX:-0.0778},0).wait(1).to({skewX:-0.0667},0).wait(1).to({skewX:-0.0556},0).wait(1).to({rotation:-0.0444,skewX:0},0).wait(1).to({rotation:-0.0333,x:0.15},0).wait(1).to({rotation:-0.0222},0).wait(1).to({rotation:-0.0111},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


(lib.tba5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:1.5,x:1.2,y:-39.85},0).wait(1).to({skewX:3,x:2.25},0).wait(1).to({skewX:1.5,x:1.2},0).wait(1).to({skewX:0,x:0.15,y:-39.9},0).wait(1).to({skewX:-1.5,x:-0.9,y:-39.85},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-1.5,x:-0.9},0).wait(1).to({skewX:0,x:0.15,y:-39.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-80.8,40.2,82.8);


(lib.tba4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,rotation:0.0441,x:0.2,y:-39.9},0).wait(1).to({rotation:0,skewX:0.0882},0).wait(1).to({skewX:0.1324,x:0.25},0).wait(1).to({skewX:0.1765},0).wait(1).to({skewX:0.2206,x:0.3},0).wait(1).to({skewX:0.2647,x:0.35},0).wait(1).to({skewX:0.3088},0).wait(1).to({skewX:0.3529,x:0.4},0).wait(1).to({skewX:0.3971,x:0.45},0).wait(1).to({skewX:0.4412},0).wait(1).to({skewX:0.4853,x:0.5},0).wait(1).to({skewX:0.5294},0).wait(1).to({skewX:0.5735,x:0.55},0).wait(1).to({skewX:0.6176,x:0.6},0).wait(1).to({skewX:0.6618},0).wait(1).to({skewX:0.7059,x:0.65},0).wait(1).to({skewX:0.75,x:0.7},0).wait(1).to({skewX:0.7941},0).wait(1).to({skewX:0.8382,x:0.75},0).wait(1).to({skewX:0.8824},0).wait(1).to({skewX:0.9265,x:0.8},0).wait(1).to({skewX:0.9706,x:0.85},0).wait(1).to({skewX:1.0147},0).wait(1).to({skewX:1.0588,x:0.9},0).wait(1).to({skewX:1.1029,x:0.95},0).wait(1).to({skewX:1.1471},0).wait(1).to({skewX:1.1912,x:1},0).wait(1).to({skewX:1.2353},0).wait(1).to({skewX:1.2794,x:1.05},0).wait(1).to({skewX:1.3235,x:1.1},0).wait(1).to({skewX:1.3676},0).wait(1).to({skewX:1.4118,x:1.15,y:-39.85},0).wait(1).to({skewX:1.4559,x:1.2},0).wait(1).to({skewX:1.5},0).wait(1).to({skewX:1.4571},0).wait(1).to({skewX:1.4143,x:1.15},0).wait(1).to({skewX:1.3714,x:1.1,y:-39.9},0).wait(1).to({skewX:1.3286},0).wait(1).to({skewX:1.2857,x:1.05},0).wait(1).to({skewX:1.2429},0).wait(1).to({skewX:1.2,x:1},0).wait(1).to({skewX:1.1571,x:0.95},0).wait(1).to({skewX:1.1143},0).wait(1).to({skewX:1.0714,x:0.9},0).wait(1).to({skewX:1.0286},0).wait(1).to({skewX:0.9857,x:0.85},0).wait(1).to({skewX:0.9429,x:0.8},0).wait(1).to({skewX:0.9},0).wait(1).to({skewX:0.8571,x:0.75},0).wait(1).to({skewX:0.8143},0).wait(1).to({skewX:0.7714,x:0.7},0).wait(1).to({skewX:0.7286,x:0.65},0).wait(1).to({skewX:0.6857},0).wait(1).to({skewX:0.6429,x:0.6},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.5571},0).wait(1).to({skewX:0.5143,x:0.5},0).wait(1).to({skewX:0.4714},0).wait(1).to({skewX:0.4286,x:0.45},0).wait(1).to({skewX:0.3857,x:0.4},0).wait(1).to({skewX:0.3429},0).wait(1).to({skewX:0.3,x:0.35},0).wait(1).to({skewX:0.2571},0).wait(1).to({skewX:0.2143,x:0.3},0).wait(1).to({skewX:0.1714,x:0.25},0).wait(1).to({skewX:0.1286},0).wait(1).to({skewX:0.0857,x:0.2},0).wait(1).to({rotation:0.0429,skewX:0},0).wait(1).to({rotation:0,x:0.15},0).wait(1).to({rotation:-0.0429,x:0.1},0).wait(1).to({rotation:0,skewX:-0.0857},0).wait(1).to({skewX:-0.1286,x:0.05},0).wait(1).to({skewX:-0.1714},0).wait(1).to({skewX:-0.2143,x:0},0).wait(1).to({skewX:-0.2571,x:-0.05},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.3429,x:-0.1},0).wait(1).to({skewX:-0.3857},0).wait(1).to({skewX:-0.4286,x:-0.15},0).wait(1).to({skewX:-0.4714,x:-0.2},0).wait(1).to({skewX:-0.5143},0).wait(1).to({skewX:-0.5571,x:-0.25},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.6429,x:-0.3},0).wait(1).to({skewX:-0.6857,x:-0.35},0).wait(1).to({skewX:-0.7286},0).wait(1).to({skewX:-0.7714,x:-0.4},0).wait(1).to({skewX:-0.8143,x:-0.45},0).wait(1).to({skewX:-0.8571},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-0.9429},0).wait(1).to({skewX:-0.9857,x:-0.55},0).wait(1).to({skewX:-1.0286,x:-0.6},0).wait(1).to({skewX:-1.0714},0).wait(1).to({skewX:-1.1143,x:-0.65},0).wait(1).to({skewX:-1.1571},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.2429,x:-0.75},0).wait(1).to({skewX:-1.2857},0).wait(1).to({skewX:-1.3286,x:-0.8},0).wait(1).to({skewX:-1.3714},0).wait(1).to({skewX:-1.4143,x:-0.85,y:-39.85},0).wait(1).to({skewX:-1.4571,x:-0.9},0).wait(1).to({skewX:-1.5},0).wait(1).to({skewX:-1.4571},0).wait(1).to({skewX:-1.4143,x:-0.85},0).wait(1).to({skewX:-1.3714,x:-0.8,y:-39.9},0).wait(1).to({skewX:-1.3286},0).wait(1).to({skewX:-1.2857,x:-0.75},0).wait(1).to({skewX:-1.2429},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.1571,x:-0.65},0).wait(1).to({skewX:-1.1143},0).wait(1).to({skewX:-1.0714,x:-0.6},0).wait(1).to({skewX:-1.0286},0).wait(1).to({skewX:-0.9857,x:-0.55},0).wait(1).to({skewX:-0.9429,x:-0.5},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-0.8571,x:-0.45},0).wait(1).to({skewX:-0.8143},0).wait(1).to({skewX:-0.7714,x:-0.4},0).wait(1).to({skewX:-0.7286,x:-0.35},0).wait(1).to({skewX:-0.6857},0).wait(1).to({skewX:-0.6429,x:-0.3},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.5571},0).wait(1).to({skewX:-0.5143,x:-0.2},0).wait(1).to({skewX:-0.4714},0).wait(1).to({skewX:-0.4286,x:-0.15},0).wait(1).to({skewX:-0.3857,x:-0.1},0).wait(1).to({skewX:-0.3429},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.2571},0).wait(1).to({skewX:-0.2143,x:0},0).wait(1).to({skewX:-0.1714,x:0.05},0).wait(1).to({skewX:-0.1286},0).wait(1).to({skewX:-0.0857,x:0.1},0).wait(1).to({rotation:-0.0429,skewX:0},0).wait(1).to({rotation:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


(lib.tba3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,rotation:0.0256,x:0.15,y:-39.9},0).wait(1).to({rotation:0,skewX:0.0513,x:0.2},0).wait(1).to({skewX:0.0769},0).wait(1).to({skewX:0.1026},0).wait(1).to({skewX:0.1282,x:0.25},0).wait(1).to({skewX:0.1538},0).wait(1).to({skewX:0.1795,x:0.3},0).wait(1).to({skewX:0.2051},0).wait(1).to({skewX:0.2308},0).wait(1).to({skewX:0.2564,x:0.35},0).wait(1).to({skewX:0.2821},0).wait(1).to({skewX:0.3077},0).wait(1).to({skewX:0.3333,x:0.4},0).wait(1).to({skewX:0.359},0).wait(1).to({skewX:0.3846},0).wait(1).to({skewX:0.4103,x:0.45},0).wait(1).to({skewX:0.4359},0).wait(1).to({skewX:0.4615,x:0.5},0).wait(1).to({skewX:0.4872},0).wait(1).to({skewX:0.5128},0).wait(1).to({skewX:0.5385,x:0.55},0).wait(1).to({skewX:0.5641},0).wait(1).to({skewX:0.5897},0).wait(1).to({skewX:0.6154,x:0.6},0).wait(1).to({skewX:0.641},0).wait(1).to({skewX:0.6667},0).wait(1).to({skewX:0.6923,x:0.65},0).wait(1).to({skewX:0.7179},0).wait(1).to({skewX:0.7436,x:0.7},0).wait(1).to({skewX:0.7692},0).wait(1).to({skewX:0.7949},0).wait(1).to({skewX:0.8205,x:0.75},0).wait(1).to({skewX:0.8462},0).wait(1).to({skewX:0.8718},0).wait(1).to({skewX:0.8974,x:0.8},0).wait(1).to({skewX:0.9231},0).wait(1).to({skewX:0.9487},0).wait(1).to({skewX:0.9744,x:0.85},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.975},0).wait(1).to({skewX:0.95,x:0.8},0).wait(1).to({skewX:0.925},0).wait(1).to({skewX:0.9},0).wait(1).to({skewX:0.875,x:0.75},0).wait(1).to({skewX:0.85},0).wait(1).to({skewX:0.825},0).wait(1).to({skewX:0.8,x:0.7},0).wait(1).to({skewX:0.775},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.725,x:0.65},0).wait(1).to({skewX:0.7},0).wait(1).to({skewX:0.675},0).wait(1).to({skewX:0.65,x:0.6},0).wait(1).to({skewX:0.625},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.575},0).wait(1).to({skewX:0.55},0).wait(1).to({skewX:0.525,x:0.5},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.475},0).wait(1).to({skewX:0.45,x:0.45},0).wait(1).to({skewX:0.425},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.375,x:0.4},0).wait(1).to({skewX:0.35},0).wait(1).to({skewX:0.325},0).wait(1).to({skewX:0.3,x:0.35},0).wait(1).to({skewX:0.275},0).wait(1).to({skewX:0.25},0).wait(1).to({skewX:0.225,x:0.3},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.175,x:0.25},0).wait(1).to({skewX:0.15},0).wait(1).to({skewX:0.125},0).wait(1).to({skewX:0.1,x:0.2},0).wait(1).to({skewX:0.075},0).wait(1).to({skewX:0.05},0).wait(1).to({rotation:0.025,skewX:0,x:0.15},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.025},0).wait(1).to({rotation:-0.05,x:0.1},0).wait(1).to({rotation:0,skewX:-0.075},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.125,x:0.05},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.175},0).wait(1).to({skewX:-0.2,x:0},0).wait(1).to({skewX:-0.225},0).wait(1).to({skewX:-0.25,x:-0.05},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.325,x:-0.1},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.375},0).wait(1).to({skewX:-0.4,x:-0.15},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.475,x:-0.2},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.525},0).wait(1).to({skewX:-0.55,x:-0.25},0).wait(1).to({skewX:-0.575},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.625,x:-0.3},0).wait(1).to({skewX:-0.65},0).wait(1).to({skewX:-0.675,x:-0.35},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.725},0).wait(1).to({skewX:-0.75,x:-0.4},0).wait(1).to({skewX:-0.775},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.825,x:-0.45},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.875},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-0.925},0).wait(1).to({skewX:-0.95},0).wait(1).to({skewX:-0.975,x:-0.55},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.975},0).wait(1).to({skewX:-0.95,x:-0.5},0).wait(1).to({skewX:-0.925},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-0.875,x:-0.45},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.825},0).wait(1).to({skewX:-0.8,x:-0.4},0).wait(1).to({skewX:-0.775},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.725,x:-0.35},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.675},0).wait(1).to({skewX:-0.65,x:-0.3},0).wait(1).to({skewX:-0.625},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.575},0).wait(1).to({skewX:-0.55},0).wait(1).to({skewX:-0.525,x:-0.2},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.475},0).wait(1).to({skewX:-0.45,x:-0.15},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.375,x:-0.1},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.325},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.225,x:0},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.175,x:0.05},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.1,x:0.1},0).wait(1).to({skewX:-0.075},0).wait(1).to({rotation:-0.05,skewX:0},0).wait(1).to({rotation:-0.025,x:0.15},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


(lib.tba2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:1.3333,x:1.1,y:-39.9},0).wait(1).to({skewX:2.6667,x:2.05,y:-39.85},0).wait(1).to({skewX:4,x:3,y:-39.8},0).wait(1).to({skewX:2.6667,x:2.05,y:-39.85},0).wait(1).to({skewX:1.3333,x:1.1,y:-39.9},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-1.3333,x:-0.8},0).wait(1).to({skewX:-2.6667,x:-1.75,y:-39.85},0).wait(1).to({skewX:-4,x:-2.7,y:-39.8},0).wait(1).to({skewX:-2.6667,x:-1.75,y:-39.85},0).wait(1).to({skewX:-1.3333,x:-0.8,y:-39.9},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-80.7,45,82.8);


(lib.tba1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tallbuildinggraphic("synched",0);
	this.instance.setTransform(-0.35,0.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.3571,x:0.4,y:-39.9},0).wait(1).to({skewX:0.7143,x:0.65},0).wait(1).to({skewX:1.0714,x:0.9},0).wait(1).to({skewX:1.4286,x:1.15,y:-39.85},0).wait(1).to({skewX:1.7857,x:1.4},0).wait(1).to({skewX:2.1429,x:1.65},0).wait(1).to({skewX:2.5,x:1.9},0).wait(1).to({skewX:2.8571,x:2.15},0).wait(1).to({skewX:3.2143,x:2.45,y:-39.8},0).wait(1).to({skewX:3.5714,x:2.7},0).wait(1).to({skewX:3.9286,x:2.95},0).wait(1).to({skewX:4.2857,x:3.2,y:-39.75},0).wait(1).to({skewX:4.6429,x:3.45},0).wait(1).to({skewX:5,x:3.7},0).wait(1).to({skewX:4.6667,x:3.45},0).wait(1).to({skewX:4.3333,x:3.2},0).wait(1).to({skewX:4,x:3,y:-39.8},0).wait(1).to({skewX:3.6667,x:2.75},0).wait(1).to({skewX:3.3333,x:2.5},0).wait(1).to({skewX:3,x:2.25,y:-39.85},0).wait(1).to({skewX:2.6667,x:2.05},0).wait(1).to({skewX:2.3333,x:1.8},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:1.6667,x:1.35},0).wait(1).to({skewX:1.3333,x:1.1,y:-39.9},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:0.6667,x:0.6},0).wait(1).to({skewX:0.3333,x:0.4},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.3333,x:-0.1},0).wait(1).to({skewX:-0.6667,x:-0.3},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-1.3333,x:-0.8},0).wait(1).to({skewX:-1.6667,x:-1.05,y:-39.85},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-2.3333,x:-1.5},0).wait(1).to({skewX:-2.6667,x:-1.75},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-3.3333,x:-2.2,y:-39.8},0).wait(1).to({skewX:-3.6667,x:-2.45},0).wait(1).to({skewX:-4,x:-2.7},0).wait(1).to({skewX:-4.3333,x:-2.9,y:-39.75},0).wait(1).to({skewX:-4.6667,x:-3.15},0).wait(1).to({skewX:-5,x:-3.4},0).wait(1).to({skewX:-4.6667,x:-3.15},0).wait(1).to({skewX:-4.3333,x:-2.9},0).wait(1).to({skewX:-4,x:-2.7,y:-39.8},0).wait(1).to({skewX:-3.6667,x:-2.45},0).wait(1).to({skewX:-3.3333,x:-2.2},0).wait(1).to({skewX:-3,x:-1.95,y:-39.85},0).wait(1).to({skewX:-2.6667,x:-1.75},0).wait(1).to({skewX:-2.3333,x:-1.5},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-1.6667,x:-1.05},0).wait(1).to({skewX:-1.3333,x:-0.8,y:-39.9},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-0.6667,x:-0.3},0).wait(1).to({skewX:-0.3333,x:-0.1},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-80.8,90.3,82.89999999999999);


(lib.Tb_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZA5QgIgCgEgGQgEgFAAgKQAAgHADgEQADgFAIgEQgEgCgBgDIgCgHQAAgDACgEQACgDADgCQgGgDgCgGQgCgFAAgIQAAgKADgFQAEgGAHgDQAIgDANAAQALAAAHACIAaAAIgBAIIgMABQADAGAAAKQAAAOgHAGQgJAGgSAAQgLAAgGgCQgDAEAAADQAAACADACIAFADIAfAFQALABAEAGQAGAFAAALQgBAKgDAFQgEAGgJACQgIADgOAAQgPAAgJgDgAgZAZQgCADAAAFQAAAGADADQABADAGABIAQABIAOgBQAGgBACgDQACgDAAgGIgBgGQgBgCgDgCIgJgCIgbgEQgFAEgCAEgAgTgsQgFADAAAJQAAAIAFAEQAEADANAAQALAAAFgDQAFgEAAgIQAAgJgFgDQgEgEgMAAQgNAAgEAEg");
	this.shape.setTransform(549.75,-17.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWArIAAg6QAAgHgDgEQgDgDgGAAQgHAAgGADIgSAKIAAA7IgOAAIAAhSIAMAAIABANQATgPARgBQALABAGAFQAFAGAAALIAAA+g");
	this.shape_1.setTransform(539.975,-19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgoQgEABAAgFIAAgJIABgEIADgBIAGAAQAFAAAAAFIAAAJQAAAFgFgBg");
	this.shape_2.setTransform(532.925,-20.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAyQgHgLAAgWQAAgQADgJQADgJAHgEQAHgFALAAQAPAAANAIIAAgQIAAgZIAOAAIAAB2IgLAAIgBgMQgQAOgQgBQgPAAgHgKgAgNgKQgFACgCAHQgBAFAAAMQAAANABAGQACAIAFACQAEADAHAAQAFAAAFgDQAGgCAJgHIAAgsIgOgEIgLAAQgHgBgEADg");
	this.shape_3.setTransform(525.775,-20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA3QgGgGAAgKIAAhiIAPAAIgBBfQAAAFADADQACADAGAAIAIAAIACALIgHACIgJAAQgIAAgFgFg");
	this.shape_4.setTransform(519.225,-20.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgoQgEABAAgFIAAgJIABgEIADgBIAGAAQAFAAAAAFIAAAJQAAAFgFgBg");
	this.shape_5.setTransform(514.025,-20.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAlQgFgGAAgLIAAg9IAOAAIAAA5QAAAHADAEQADADAHAAQAGAAAGgDIAQgJIAAg7IAOAAIAABSIgLAAIgBgMQgKAGgIAEQgIADgJAAQgLAAgGgFg");
	this.shape_6.setTransform(507.075,-19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVA7IgSAAIAAh1IAQgBIAWAAQANAAAJACQAIADAEAHQAEAGAAAMQAAANgFAHQgFAGgKABIAAABQANABAFAHQAFAHAAAQQAAAMgDAGQgEAHgIADQgIACgOAAgAgZAvIAaAAQAJAAAFgCQAGgCACgDQACgFAAgJQAAgIgCgFQgDgGgFgCQgGgBgJAAIgZAAgAgZgHIAZAAQAIAAAFgCQAFgBACgEQACgFAAgIQAAgIgCgEQgCgEgGgCQgFgBgJgBIgXAAg");
	this.shape_7.setTransform(497.275,-20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLA3QgGgGAAgKIAAhiIAPAAIgBBfQAAAFADADQACADAGAAIAIAAIACALIgHACIgJAAQgIAAgFgFg");
	this.shape_8.setTransform(486.125,-20.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLA3QgGgGAAgKIAAhiIAPAAIgBBfQAAAFADADQACADAGAAIAIAAIACALIgHACIgJAAQgIAAgFgFg");
	this.shape_9.setTransform(481.125,-20.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAlQgHgGAAgLIAAgJQAAgKAGgEQAGgFALAAIAhAAIAAgIQAAgHgDgEQgEgDgJAAIgjACIgBgKQAWgEARAAQAOAAAHAGQAHAGAAAOIAAA6IgLAAIgCgOQgGAGgJAFQgIAEgKAAQgMAAgGgGgAgSAFQgCADAAAFIAAAFQAAAHADADQADADAHAAQAHAAAHgDQAIgEAGgGIAAgQIgfAAQgFAAgDADg");
	this.shape_10.setTransform(473.175,-19.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA7IAAhnIgmAAIAAgOIBZAAIAAAOIglAAIAABng");
	this.shape_11.setTransform(463.775,-20.825);

	this.instance = new lib.pointer();
	this.instance.setTransform(439.1,-20.7,1,1,0,0,0,11.2,11.2);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,255,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(280));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(280));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,0,0,4).p("A3XAAMAuvAAA");
	this.shape_12.setTransform(494.825,-41.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(280));

	// Layer_11
	this.tallb = new lib.tallbuildinggraphic("synched",0);
	this.tallb.name = "tallb";
	this.tallb.setTransform(486.5,-39.4,3.9447,3.9435);

	this.tallb_1 = new lib.tba6();
	this.tallb_1.name = "tallb_1";
	this.tallb_1.setTransform(489.6,-39.4,3.9447,3.9447,0,0,0,0.7,0.7);

	this.tallb_2 = new lib.tba3();
	this.tallb_2.name = "tallb_2";
	this.tallb_2.setTransform(486.85,-42.15,3.9447,3.9447);

	this.instance_1 = new lib.tba4();
	this.instance_1.setTransform(486.85,-42.15,3.9447,3.9447);

	this.tallb_3 = new lib.tba7();
	this.tallb_3.name = "tallb_3";
	this.tallb_3.setTransform(486.9,-42.55,3.9447,3.9447,0,0,0,0,-0.1);

	this.tallb_4 = new lib.tba8();
	this.tallb_4.name = "tallb_4";
	this.tallb_4.setTransform(490.05,-42.15,3.9447,3.9447);

	this.tallb_5 = new lib.tba9();
	this.tallb_5.name = "tallb_5";
	this.tallb_5.setTransform(490.05,-42.15,3.9447,3.9447);

	this.tallb_6 = new lib.tba1();
	this.tallb_6.name = "tallb_6";
	this.tallb_6.setTransform(487.25,-42.55,3.9447,3.9435,0,0,0,0.1,-0.1);

	this.tallb_7 = new lib.tba10();
	this.tallb_7.name = "tallb_7";
	this.tallb_7.setTransform(487,-42.15,3.9447,3.9447);

	this.tallb_8 = new lib.tba11();
	this.tallb_8.name = "tallb_8";
	this.tallb_8.setTransform(486.45,-41.75,3.9447,3.9447,0,0,0,-0.1,0.1);

	this.tallb_9 = new lib.tba2();
	this.tallb_9.name = "tallb_9";
	this.tallb_9.setTransform(486.85,-42.15,3.9447,3.9447);

	this.tallb_10 = new lib.tba5();
	this.tallb_10.name = "tallb_10";
	this.tallb_10.setTransform(486.9,-42.15,3.9447,3.9447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallb}]}).to({state:[{t:this.tallb_1}]},79).to({state:[{t:this.tallb_2}]},20).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.tallb_3}]},20).to({state:[{t:this.tallb_4}]},21).to({state:[{t:this.tallb_5}]},19).to({state:[{t:this.tallb_6}]},20).to({state:[{t:this.tallb_7}]},20).to({state:[{t:this.tallb_8}]},20).to({state:[{t:this.tallb_9}]},20).to({state:[{t:this.tallb_10}]},20).wait(1));

	// Layer_2
	this.instance_2 = new lib.pointer();
	this.instance_2.setTransform(3.75,264.2,1,1,0,0,0,11.2,11.2);
	var instance_2Filter_2 = new cjs.ColorFilter(0,0,0,1,255,0,0,0);
	this.instance_2.filters = [instance_2Filter_2];
	this.instance_2.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[3.8,264.2,106.8,264.2,107.4,264.3,108,264.3,108.6,264.3,109.2,264.3,109.8,264.3,141.5,263.3,170.5,229.6,185.3,212.2,193.6,194.9,193.7,194.7,193.8,194.5,202.2,177,217.3,159.5,239.1,134,262.6,127.3,264.1,126.9,265.7,126.5,271.8,125.1,277.9,124.9,278.6,124.9,279.2,124.9,279.8,124.9,280.4,124.9,308.9,125.7,335.2,153,341.7,159.4,346.5,167,347.6,168.7,348.8,170.5]}},268).to({x:349.3,y:171.05},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_2).wait(280));

	// Layer_3 copy
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(4,0,0,4).p("A7eK5QQxAAAHABQAFAAAGAAQAGAAAGAAQE+gKEhlRQCUiuBUitQABgCAAgCQBViuCWivQDbj/DqhEQAQgEAQgEQA8gOA+gCQAGAAAGAAQAHAAAFAAQDhAGDTCrQCCBmBeCJQAQAXAPAY");
	this.shape_13.setTransform(175.265,194.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(280));

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AJMXMQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZW+QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMVUQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZVGQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMTcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZTOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMRkQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZRWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMPsQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZPeQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMN0QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZNmQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJML8QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZLuQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMKEQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZJ2QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMIMQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZH+QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMGUQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZGGQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMEcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZEOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMCkQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZCWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMAsQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgApZAeQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAJMhLQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZhZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMjDQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZjRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMk7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZlJQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMmzQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZnBQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMorQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZo5QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMqjQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZqxQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMsbQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZspQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMuTQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZuhQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMwLQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZwZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMyDQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZyRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMz7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZ0JQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJM1zQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZ2BQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_14.setTransform(487.375,-197.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(280));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-358.6,652.9,634);


(lib.mba11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.65,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.25,x:0.25,y:-26.35},0).wait(1).to({skewX:0.5,x:0.4},0).wait(1).to({skewX:0.75,x:0.5},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.8,x:0.55},0).wait(1).to({skewX:0.6,x:0.45},0).wait(1).to({skewX:0.4,x:0.35},0).wait(1).to({skewX:0.2,x:0.25},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-53.2,22.3,54.300000000000004);


(lib.mba10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.6,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.2222,x:0.25,y:-26.4},0).wait(1).to({skewX:0.4444,x:0.35},0).wait(1).to({skewX:0.6667,x:0.45},0).wait(1).to({skewX:0.8889,x:0.55},0).wait(1).to({skewX:1.1111,x:0.65},0).wait(1).to({skewX:1.3333,x:0.8},0).wait(1).to({skewX:1.5556,x:0.9},0).wait(1).to({skewX:1.7778,x:1},0).wait(1).to({skewX:2,x:1.1,y:-26.35},0).wait(1).to({skewX:1.8,x:1,y:-26.4},0).wait(1).to({skewX:1.6,x:0.9},0).wait(1).to({skewX:1.4,x:0.8},0).wait(1).to({skewX:1.2,x:0.7},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.8,x:0.55},0).wait(1).to({skewX:0.6,x:0.45},0).wait(1).to({skewX:0.4,x:0.35},0).wait(1).to({skewX:0.2,x:0.25},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.8,x:-0.7},0).wait(1).to({skewX:-2,x:-0.8,y:-26.35},0).wait(1).to({skewX:-1.8,x:-0.7,y:-26.4},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-53.3,24.1,54.4);


(lib.mba9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.65,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.2143,x:0.25,y:-26.35},0).wait(1).to({skewX:0.4286,x:0.35},0).wait(1).to({skewX:0.6429,x:0.45},0).wait(1).to({skewX:0.8571,x:0.55},0).wait(1).to({skewX:1.0714,x:0.65},0).wait(1).to({skewX:1.2857,x:0.75},0).wait(1).to({skewX:1.5,x:0.85},0).wait(1).to({skewX:1.7143,x:0.95},0).wait(1).to({skewX:1.9286,x:1.05},0).wait(1).to({skewX:2.1429,x:1.15,y:-26.3},0).wait(1).to({skewX:2.3571,x:1.25},0).wait(1).to({skewX:2.5714,x:1.35},0).wait(1).to({skewX:2.7857,x:1.45},0).wait(1).to({skewX:3,x:1.55},0).wait(1).to({skewX:2.8,x:1.45},0).wait(1).to({skewX:2.6,x:1.35},0).wait(1).to({skewX:2.4,x:1.3},0).wait(1).to({skewX:2.2,x:1.2},0).wait(1).to({skewX:2,x:1.1},0).wait(1).to({skewX:1.8,x:1,y:-26.35},0).wait(1).to({skewX:1.6,x:0.9},0).wait(1).to({skewX:1.4,x:0.8},0).wait(1).to({skewX:1.2,x:0.7},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.8,x:0.55},0).wait(1).to({skewX:0.6,x:0.45},0).wait(1).to({skewX:0.4,x:0.35},0).wait(1).to({skewX:0.2,x:0.25},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.8,x:-0.7},0).wait(1).to({skewX:-2,x:-0.8,y:-26.3},0).wait(1).to({skewX:-2.2,x:-0.9},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.6,x:-1.05},0).wait(1).to({skewX:-2.8,x:-1.15},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-2.8,x:-1.15},0).wait(1).to({skewX:-2.6,x:-1.05},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.2,x:-0.9},0).wait(1).to({skewX:-2,x:-0.8},0).wait(1).to({skewX:-1.8,x:-0.7,y:-26.35},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-53.2,25.9,54.300000000000004);


(lib.mba8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.65,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.2105,x:0.25,y:-26.35},0).wait(1).to({skewX:0.4211,x:0.35},0).wait(1).to({skewX:0.6316,x:0.45},0).wait(1).to({skewX:0.8421,x:0.55},0).wait(1).to({skewX:1.0526,x:0.65},0).wait(1).to({skewX:1.2632,x:0.75},0).wait(1).to({skewX:1.4737,x:0.85},0).wait(1).to({skewX:1.6842,x:0.95},0).wait(1).to({skewX:1.8947,x:1.05},0).wait(1).to({skewX:2.1053,x:1.15,y:-26.3},0).wait(1).to({skewX:2.3158,x:1.25},0).wait(1).to({skewX:2.5263,x:1.35},0).wait(1).to({skewX:2.7368,x:1.45},0).wait(1).to({skewX:2.9474,x:1.55},0).wait(1).to({skewX:3.1579,x:1.65},0).wait(1).to({skewX:3.3684,x:1.75},0).wait(1).to({skewX:3.5789,x:1.85},0).wait(1).to({skewX:3.7895,x:1.95},0).wait(1).to({skewX:4,x:2.05},0).wait(1).to({skewX:3.8,x:1.95},0).wait(1).to({skewX:3.6,x:1.85},0).wait(1).to({skewX:3.4,x:1.75},0).wait(1).to({skewX:3.2,x:1.65},0).wait(1).to({skewX:3,x:1.55},0).wait(1).to({skewX:2.8,x:1.45},0).wait(1).to({skewX:2.6,x:1.35},0).wait(1).to({skewX:2.4,x:1.3},0).wait(1).to({skewX:2.2,x:1.2},0).wait(1).to({skewX:2,x:1.1},0).wait(1).to({skewX:1.8,x:1,y:-26.35},0).wait(1).to({skewX:1.6,x:0.9},0).wait(1).to({skewX:1.4,x:0.8},0).wait(1).to({skewX:1.2,x:0.7},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.8,x:0.55},0).wait(1).to({skewX:0.6,x:0.45},0).wait(1).to({skewX:0.4,x:0.35},0).wait(1).to({skewX:0.2,x:0.25},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.8,x:-0.7},0).wait(1).to({skewX:-2,x:-0.8,y:-26.3},0).wait(1).to({skewX:-2.2,x:-0.9},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.6,x:-1.05},0).wait(1).to({skewX:-2.8,x:-1.15},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-3.2,x:-1.35},0).wait(1).to({skewX:-3.4,x:-1.45},0).wait(1).to({skewX:-3.6,x:-1.55},0).wait(1).to({skewX:-3.8,x:-1.65},0).wait(1).to({skewX:-4,x:-1.75},0).wait(1).to({skewX:-3.8,x:-1.65},0).wait(1).to({skewX:-3.6,x:-1.55},0).wait(1).to({skewX:-3.4,x:-1.45},0).wait(1).to({skewX:-3.2,x:-1.35},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-2.8,x:-1.15},0).wait(1).to({skewX:-2.6,x:-1.05},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.2,x:-0.9},0).wait(1).to({skewX:-2,x:-0.8},0).wait(1).to({skewX:-1.8,x:-0.7,y:-26.35},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-53.2,27.7,54.300000000000004);


(lib.mba7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.1,0,1,0.9997,0,0,0,0,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.2083,x:0.25,y:-26.45},0).wait(1).to({skewX:0.4167,x:0.35},0).wait(1).to({skewX:0.625,x:0.45},0).wait(1).to({skewX:0.8333,x:0.55},0).wait(1).to({skewX:1.0417,x:0.65},0).wait(1).to({skewX:1.25,x:0.75},0).wait(1).to({skewX:1.4583,x:0.85},0).wait(1).to({skewX:1.6667,x:0.95},0).wait(1).to({skewX:1.875,x:1.05},0).wait(1).to({skewX:2.0833,x:1.15,y:-26.4},0).wait(1).to({skewX:2.2917,x:1.25},0).wait(1).to({skewX:2.5,x:1.35},0).wait(1).to({skewX:2.7083,x:1.45},0).wait(1).to({skewX:2.9167,x:1.5},0).wait(1).to({skewX:3.125,x:1.6},0).wait(1).to({skewX:3.3333,x:1.7},0).wait(1).to({skewX:3.5417,x:1.8},0).wait(1).to({skewX:3.75,x:1.9},0).wait(1).to({skewX:3.9583,x:2},0).wait(1).to({skewX:4.1667,x:2.1,y:-26.35},0).wait(1).to({skewX:4.375,x:2.2},0).wait(1).to({skewX:4.5833,x:2.3},0).wait(1).to({skewX:4.7917,x:2.4},0).wait(1).to({skewX:5,x:2.5},0).wait(1).to({skewX:4.8,x:2.4},0).wait(1).to({skewX:4.6,x:2.3},0).wait(1).to({skewX:4.4,x:2.2},0).wait(1).to({skewX:4.2,x:2.15},0).wait(1).to({skewX:4,x:2.05,y:-26.4},0).wait(1).to({skewX:3.8,x:1.95},0).wait(1).to({skewX:3.6,x:1.85},0).wait(1).to({skewX:3.4,x:1.75},0).wait(1).to({skewX:3.2,x:1.65},0).wait(1).to({skewX:3,x:1.55},0).wait(1).to({skewX:2.8,x:1.45},0).wait(1).to({skewX:2.6,x:1.35},0).wait(1).to({skewX:2.4,x:1.3},0).wait(1).to({skewX:2.2,x:1.2},0).wait(1).to({skewX:2,x:1.1},0).wait(1).to({skewX:1.8,x:1,y:-26.45},0).wait(1).to({skewX:1.6,x:0.9},0).wait(1).to({skewX:1.4,x:0.8},0).wait(1).to({skewX:1.2,x:0.7},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.8,x:0.55},0).wait(1).to({skewX:0.6,x:0.45},0).wait(1).to({skewX:0.4,x:0.35},0).wait(1).to({skewX:0.2,x:0.25},0).wait(1).to({skewX:0,x:0.2,y:-26.4},0).wait(1).to({skewX:-0.2,x:0.1,y:-26.45},0).wait(1).to({skewX:-0.4,x:0},0).wait(1).to({skewX:-0.6,x:-0.1},0).wait(1).to({skewX:-0.8,x:-0.2},0).wait(1).to({skewX:-1,x:-0.25},0).wait(1).to({skewX:-1.2,x:-0.35},0).wait(1).to({skewX:-1.4,x:-0.45},0).wait(1).to({skewX:-1.6,x:-0.55},0).wait(1).to({skewX:-1.8,x:-0.65},0).wait(1).to({skewX:-2,x:-0.75,y:-26.4},0).wait(1).to({skewX:-2.2,x:-0.85},0).wait(1).to({skewX:-2.4,x:-0.95},0).wait(1).to({skewX:-2.6,x:-1},0).wait(1).to({skewX:-2.8,x:-1.1},0).wait(1).to({skewX:-3,x:-1.2},0).wait(1).to({skewX:-3.2,x:-1.3},0).wait(1).to({skewX:-3.4,x:-1.4},0).wait(1).to({skewX:-3.6,x:-1.5},0).wait(1).to({skewX:-3.8,x:-1.6},0).wait(1).to({skewX:-4,x:-1.7},0).wait(1).to({skewX:-4.2,x:-1.8,y:-26.35},0).wait(1).to({skewX:-4.4,x:-1.85},0).wait(1).to({skewX:-4.6,x:-1.95},0).wait(1).to({skewX:-4.8,x:-2.05},0).wait(1).to({skewX:-5,x:-2.15},0).wait(1).to({skewX:-4.8,x:-2.05},0).wait(1).to({skewX:-4.6,x:-1.95},0).wait(1).to({skewX:-4.4,x:-1.85},0).wait(1).to({skewX:-4.2,x:-1.8},0).wait(1).to({skewX:-4,x:-1.7,y:-26.4},0).wait(1).to({skewX:-3.8,x:-1.6},0).wait(1).to({skewX:-3.6,x:-1.5},0).wait(1).to({skewX:-3.4,x:-1.4},0).wait(1).to({skewX:-3.2,x:-1.3},0).wait(1).to({skewX:-3,x:-1.2},0).wait(1).to({skewX:-2.8,x:-1.1},0).wait(1).to({skewX:-2.6,x:-1},0).wait(1).to({skewX:-2.4,x:-0.95},0).wait(1).to({skewX:-2.2,x:-0.85},0).wait(1).to({skewX:-2,x:-0.75},0).wait(1).to({skewX:-1.8,x:-0.65,y:-26.45},0).wait(1).to({skewX:-1.6,x:-0.55},0).wait(1).to({skewX:-1.4,x:-0.45},0).wait(1).to({skewX:-1.2,x:-0.35},0).wait(1).to({skewX:-1,x:-0.25},0).wait(1).to({skewX:-0.8,x:-0.2},0).wait(1).to({skewX:-0.6,x:-0.1},0).wait(1).to({skewX:-0.4,x:0},0).wait(1).to({skewX:-0.2,x:0.1},0).wait(1).to({skewX:0,x:0.2,y:-26.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-53.3,29.4,54.3);


(lib.mba6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.1,0.65,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.1026,x:0.25,y:-26.35},0).wait(1).to({skewX:0.2051,x:0.3},0).wait(1).to({skewX:0.3077,x:0.35},0).wait(1).to({skewX:0.4103,x:0.4},0).wait(1).to({skewX:0.5128,x:0.45},0).wait(1).to({skewX:0.6154,x:0.5},0).wait(1).to({skewX:0.7179,x:0.55},0).wait(1).to({skewX:0.8205,x:0.6},0).wait(1).to({skewX:0.9231,x:0.65},0).wait(1).to({skewX:1.0256,x:0.7},0).wait(1).to({skewX:1.1282,x:0.75},0).wait(1).to({skewX:1.2308,x:0.8},0).wait(1).to({skewX:1.3333,x:0.85},0).wait(1).to({skewX:1.4359,x:0.9},0).wait(1).to({skewX:1.5385},0).wait(1).to({skewX:1.641,x:0.95},0).wait(1).to({skewX:1.7436,x:1},0).wait(1).to({skewX:1.8462,x:1.05},0).wait(1).to({skewX:1.9487,x:1.1},0).wait(1).to({skewX:2.0513,x:1.15,y:-26.3},0).wait(1).to({skewX:2.1538,x:1.2},0).wait(1).to({skewX:2.2564,x:1.25},0).wait(1).to({skewX:2.359,x:1.3},0).wait(1).to({skewX:2.4615,x:1.35},0).wait(1).to({skewX:2.5641,x:1.4},0).wait(1).to({skewX:2.6667,x:1.45},0).wait(1).to({skewX:2.7692,x:1.5},0).wait(1).to({skewX:2.8718,x:1.55},0).wait(1).to({skewX:2.9744,x:1.6},0).wait(1).to({skewX:3.0769,x:1.65},0).wait(1).to({skewX:3.1795,x:1.7},0).wait(1).to({skewX:3.2821,x:1.75},0).wait(1).to({skewX:3.3846,x:1.8},0).wait(1).to({skewX:3.4872,x:1.85},0).wait(1).to({skewX:3.5897,x:1.9},0).wait(1).to({skewX:3.6923,x:1.95},0).wait(1).to({skewX:3.7949,x:2},0).wait(1).to({skewX:3.8974,x:2.05},0).wait(1).to({skewX:4,x:2.1},0).wait(1).to({skewX:3.9,x:2.05},0).wait(1).to({skewX:3.8,x:2},0).wait(1).to({skewX:3.7,x:1.95},0).wait(1).to({skewX:3.6,x:1.9},0).wait(1).to({skewX:3.5,x:1.85},0).wait(1).to({skewX:3.4,x:1.8},0).wait(1).to({skewX:3.3,x:1.75},0).wait(1).to({skewX:3.2,x:1.7},0).wait(1).to({skewX:3.1,x:1.65},0).wait(1).to({skewX:3,x:1.6},0).wait(1).to({skewX:2.9,x:1.55},0).wait(1).to({skewX:2.8,x:1.5},0).wait(1).to({skewX:2.7,x:1.45},0).wait(1).to({skewX:2.6,x:1.4},0).wait(1).to({skewX:2.5},0).wait(1).to({skewX:2.4,x:1.35},0).wait(1).to({skewX:2.3,x:1.3},0).wait(1).to({skewX:2.2,x:1.25},0).wait(1).to({skewX:2.1,x:1.2},0).wait(1).to({skewX:2,x:1.15},0).wait(1).to({skewX:1.9,x:1.1,y:-26.35},0).wait(1).to({skewX:1.8,x:1.05},0).wait(1).to({skewX:1.7,x:1},0).wait(1).to({skewX:1.6,x:0.95},0).wait(1).to({skewX:1.5,x:0.9},0).wait(1).to({skewX:1.4,x:0.85},0).wait(1).to({skewX:1.3,x:0.8},0).wait(1).to({skewX:1.2,x:0.75},0).wait(1).to({skewX:1.1,x:0.7},0).wait(1).to({skewX:1,x:0.65},0).wait(1).to({skewX:0.9,x:0.6},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7,x:0.55},0).wait(1).to({skewX:0.6,x:0.5},0).wait(1).to({skewX:0.5,x:0.45},0).wait(1).to({skewX:0.4,x:0.4},0).wait(1).to({skewX:0.3,x:0.35},0).wait(1).to({skewX:0.2,x:0.3},0).wait(1).to({skewX:0.1,x:0.25},0).wait(1).to({skewX:0,x:0.2},0).wait(1).to({skewX:-0.1,x:0.15},0).wait(1).to({skewX:-0.2,x:0.1},0).wait(1).to({skewX:-0.3,x:0.05},0).wait(1).to({skewX:-0.4,x:0},0).wait(1).to({skewX:-0.5,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.1},0).wait(1).to({skewX:-0.7,x:-0.15},0).wait(1).to({skewX:-0.8,x:-0.2},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-1,x:-0.25},0).wait(1).to({skewX:-1.1,x:-0.3},0).wait(1).to({skewX:-1.2,x:-0.35},0).wait(1).to({skewX:-1.3,x:-0.4},0).wait(1).to({skewX:-1.4,x:-0.45},0).wait(1).to({skewX:-1.5,x:-0.5},0).wait(1).to({skewX:-1.6,x:-0.55},0).wait(1).to({skewX:-1.7,x:-0.6},0).wait(1).to({skewX:-1.8,x:-0.65},0).wait(1).to({skewX:-1.9,x:-0.7},0).wait(1).to({skewX:-2,x:-0.75,y:-26.3},0).wait(1).to({skewX:-2.1,x:-0.8},0).wait(1).to({skewX:-2.2,x:-0.85},0).wait(1).to({skewX:-2.3,x:-0.9},0).wait(1).to({skewX:-2.4,x:-0.95},0).wait(1).to({skewX:-2.5,x:-1},0).wait(1).to({skewX:-2.6},0).wait(1).to({skewX:-2.7,x:-1.05},0).wait(1).to({skewX:-2.8,x:-1.1},0).wait(1).to({skewX:-2.9,x:-1.15},0).wait(1).to({skewX:-3,x:-1.2},0).wait(1).to({skewX:-3.1,x:-1.25},0).wait(1).to({skewX:-3.2,x:-1.3},0).wait(1).to({skewX:-3.3,x:-1.35},0).wait(1).to({skewX:-3.4,x:-1.4},0).wait(1).to({skewX:-3.5,x:-1.45},0).wait(1).to({skewX:-3.6,x:-1.5},0).wait(1).to({skewX:-3.7,x:-1.55},0).wait(1).to({skewX:-3.8,x:-1.6},0).wait(1).to({skewX:-3.9,x:-1.65},0).wait(1).to({skewX:-4,x:-1.7},0).wait(1).to({skewX:-3.9,x:-1.65},0).wait(1).to({skewX:-3.8,x:-1.6},0).wait(1).to({skewX:-3.7,x:-1.55},0).wait(1).to({skewX:-3.6,x:-1.5},0).wait(1).to({skewX:-3.5,x:-1.45},0).wait(1).to({skewX:-3.4,x:-1.4},0).wait(1).to({skewX:-3.3,x:-1.35},0).wait(1).to({skewX:-3.2,x:-1.3},0).wait(1).to({skewX:-3.1,x:-1.25},0).wait(1).to({skewX:-3,x:-1.2},0).wait(1).to({skewX:-2.9,x:-1.15},0).wait(1).to({skewX:-2.8,x:-1.1},0).wait(1).to({skewX:-2.7,x:-1.05},0).wait(1).to({skewX:-2.6,x:-1},0).wait(1).to({skewX:-2.5},0).wait(1).to({skewX:-2.4,x:-0.95},0).wait(1).to({skewX:-2.3,x:-0.9},0).wait(1).to({skewX:-2.2,x:-0.85},0).wait(1).to({skewX:-2.1,x:-0.8},0).wait(1).to({skewX:-2,x:-0.75},0).wait(1).to({skewX:-1.9,x:-0.7,y:-26.35},0).wait(1).to({skewX:-1.8,x:-0.65},0).wait(1).to({skewX:-1.7,x:-0.6},0).wait(1).to({skewX:-1.6,x:-0.55},0).wait(1).to({skewX:-1.5,x:-0.5},0).wait(1).to({skewX:-1.4,x:-0.45},0).wait(1).to({skewX:-1.3,x:-0.4},0).wait(1).to({skewX:-1.2,x:-0.35},0).wait(1).to({skewX:-1.1,x:-0.3},0).wait(1).to({skewX:-1,x:-0.25},0).wait(1).to({skewX:-0.9,x:-0.2},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7,x:-0.15},0).wait(1).to({skewX:-0.6,x:-0.1},0).wait(1).to({skewX:-0.5,x:-0.05},0).wait(1).to({skewX:-0.4,x:0},0).wait(1).to({skewX:-0.3,x:0.05},0).wait(1).to({skewX:-0.2,x:0.1},0).wait(1).to({skewX:-0.1,x:0.15},0).wait(1).to({skewX:0,x:0.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-53.2,27.7,54.300000000000004);


(lib.mba5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.65,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.0682,x:0.2,y:-26.35},0).wait(1).to({skewX:0.1364},0).wait(1).to({skewX:0.2045,x:0.25},0).wait(1).to({skewX:0.2727,x:0.3},0).wait(1).to({skewX:0.3409},0).wait(1).to({skewX:0.4091,x:0.35},0).wait(1).to({skewX:0.4773},0).wait(1).to({skewX:0.5455,x:0.4},0).wait(1).to({skewX:0.6136,x:0.45},0).wait(1).to({skewX:0.6818},0).wait(1).to({skewX:0.75,x:0.5},0).wait(1).to({skewX:0.8182,x:0.55},0).wait(1).to({skewX:0.8864},0).wait(1).to({skewX:0.9545,x:0.6},0).wait(1).to({skewX:1.0227,x:0.65},0).wait(1).to({skewX:1.0909},0).wait(1).to({skewX:1.1591,x:0.7},0).wait(1).to({skewX:1.2273,x:0.75},0).wait(1).to({skewX:1.2955},0).wait(1).to({skewX:1.3636,x:0.8},0).wait(1).to({skewX:1.4318},0).wait(1).to({skewX:1.5,x:0.85},0).wait(1).to({skewX:1.5682,x:0.9},0).wait(1).to({skewX:1.6364},0).wait(1).to({skewX:1.7045,x:0.95},0).wait(1).to({skewX:1.7727,x:1},0).wait(1).to({skewX:1.8409},0).wait(1).to({skewX:1.9091,x:1.05},0).wait(1).to({skewX:1.9773,x:1.1},0).wait(1).to({skewX:2.0455,y:-26.3},0).wait(1).to({skewX:2.1136,x:1.15},0).wait(1).to({skewX:2.1818,x:1.2},0).wait(1).to({skewX:2.25},0).wait(1).to({skewX:2.3182,x:1.25},0).wait(1).to({skewX:2.3864},0).wait(1).to({skewX:2.4545,x:1.3},0).wait(1).to({skewX:2.5227,x:1.35},0).wait(1).to({skewX:2.5909},0).wait(1).to({skewX:2.6591,x:1.4},0).wait(1).to({skewX:2.7273,x:1.45},0).wait(1).to({skewX:2.7955},0).wait(1).to({skewX:2.8636,x:1.5},0).wait(1).to({skewX:2.9318,x:1.55},0).wait(1).to({skewX:3},0).wait(1).to({skewX:2.9333},0).wait(1).to({skewX:2.8667,x:1.5},0).wait(1).to({skewX:2.8,x:1.45},0).wait(1).to({skewX:2.7333},0).wait(1).to({skewX:2.6667,x:1.4},0).wait(1).to({skewX:2.6,x:1.35},0).wait(1).to({skewX:2.5333},0).wait(1).to({skewX:2.4667,x:1.3},0).wait(1).to({skewX:2.4},0).wait(1).to({skewX:2.3333,x:1.25},0).wait(1).to({skewX:2.2667,x:1.2},0).wait(1).to({skewX:2.2},0).wait(1).to({skewX:2.1333,x:1.15},0).wait(1).to({skewX:2.0667,x:1.1},0).wait(1).to({skewX:2},0).wait(1).to({skewX:1.9333,x:1.05,y:-26.35},0).wait(1).to({skewX:1.8667},0).wait(1).to({skewX:1.8,x:1},0).wait(1).to({skewX:1.7333,x:0.95},0).wait(1).to({skewX:1.6667},0).wait(1).to({skewX:1.6,x:0.9},0).wait(1).to({skewX:1.5333,x:0.85},0).wait(1).to({skewX:1.4667},0).wait(1).to({skewX:1.4,x:0.8},0).wait(1).to({skewX:1.3333},0).wait(1).to({skewX:1.2667,x:0.75},0).wait(1).to({skewX:1.2,x:0.7},0).wait(1).to({skewX:1.1333},0).wait(1).to({skewX:1.0667,x:0.65},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.9333},0).wait(1).to({skewX:0.8667,x:0.55},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7333,x:0.5},0).wait(1).to({skewX:0.6667,x:0.45},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.5333,x:0.4},0).wait(1).to({skewX:0.4667,x:0.35},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3333,x:0.3},0).wait(1).to({skewX:0.2667},0).wait(1).to({skewX:0.2,x:0.25},0).wait(1).to({skewX:0.1333,x:0.2},0).wait(1).to({skewX:0.0667},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.0667,x:0.1},0).wait(1).to({skewX:-0.1333},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:-0.2667,x:0},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.5333,x:-0.1},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.6667},0).wait(1).to({skewX:-0.7333,x:-0.2},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-0.8667},0).wait(1).to({skewX:-0.9333,x:-0.3},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-1.0667,x:-0.35},0).wait(1).to({skewX:-1.1333,x:-0.4},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.2667,x:-0.45},0).wait(1).to({skewX:-1.3333,x:-0.5},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.4667,x:-0.55},0).wait(1).to({skewX:-1.5333},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.6667,x:-0.65},0).wait(1).to({skewX:-1.7333},0).wait(1).to({skewX:-1.8,x:-0.7},0).wait(1).to({skewX:-1.8667,x:-0.75},0).wait(1).to({skewX:-1.9333},0).wait(1).to({skewX:-2,x:-0.8,y:-26.3},0).wait(1).to({skewX:-2.0667},0).wait(1).to({skewX:-2.1333,x:-0.85},0).wait(1).to({skewX:-2.2,x:-0.9},0).wait(1).to({skewX:-2.2667},0).wait(1).to({skewX:-2.3333,x:-0.95},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.4667},0).wait(1).to({skewX:-2.5333,x:-1.05},0).wait(1).to({skewX:-2.6},0).wait(1).to({skewX:-2.6667,x:-1.1},0).wait(1).to({skewX:-2.7333,x:-1.15},0).wait(1).to({skewX:-2.8},0).wait(1).to({skewX:-2.8667,x:-1.2},0).wait(1).to({skewX:-2.9333,x:-1.25},0).wait(1).to({skewX:-3},0).wait(1).to({skewX:-2.9333},0).wait(1).to({skewX:-2.8667,x:-1.2},0).wait(1).to({skewX:-2.8,x:-1.15},0).wait(1).to({skewX:-2.7333},0).wait(1).to({skewX:-2.6667,x:-1.1},0).wait(1).to({skewX:-2.6,x:-1.05},0).wait(1).to({skewX:-2.5333},0).wait(1).to({skewX:-2.4667,x:-1},0).wait(1).to({skewX:-2.4},0).wait(1).to({skewX:-2.3333,x:-0.95},0).wait(1).to({skewX:-2.2667,x:-0.9},0).wait(1).to({skewX:-2.2},0).wait(1).to({skewX:-2.1333,x:-0.85},0).wait(1).to({skewX:-2.0667,x:-0.8},0).wait(1).to({skewX:-2},0).wait(1).to({skewX:-1.9333,x:-0.75,y:-26.35},0).wait(1).to({skewX:-1.8667},0).wait(1).to({skewX:-1.8,x:-0.7},0).wait(1).to({skewX:-1.7333,x:-0.65},0).wait(1).to({skewX:-1.6667},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.5333,x:-0.55},0).wait(1).to({skewX:-1.4667},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.3333},0).wait(1).to({skewX:-1.2667,x:-0.45},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.1333},0).wait(1).to({skewX:-1.0667,x:-0.35},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.9333},0).wait(1).to({skewX:-0.8667,x:-0.25},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7333,x:-0.2},0).wait(1).to({skewX:-0.6667,x:-0.15},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.5333,x:-0.1},0).wait(1).to({skewX:-0.4667,x:-0.05},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3333,x:0},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:-0.1333,x:0.1},0).wait(1).to({skewX:-0.0667},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-53.2,25.9,54.300000000000004);


(lib.mba4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.65,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.2069,x:0.25,y:-26.35},0).wait(1).to({skewX:0.4138,x:0.35},0).wait(1).to({skewX:0.6207,x:0.45},0).wait(1).to({skewX:0.8276,x:0.55},0).wait(1).to({skewX:1.0345,x:0.65},0).wait(1).to({skewX:1.2414,x:0.75},0).wait(1).to({skewX:1.4483,x:0.85},0).wait(1).to({skewX:1.6552,x:0.95},0).wait(1).to({skewX:1.8621,x:1.05},0).wait(1).to({skewX:2.069,x:1.1,y:-26.3},0).wait(1).to({skewX:2.2759,x:1.2},0).wait(1).to({skewX:2.4828,x:1.3},0).wait(1).to({skewX:2.6897,x:1.4},0).wait(1).to({skewX:2.8966,x:1.5},0).wait(1).to({skewX:3.1034,x:1.6},0).wait(1).to({skewX:3.3103,x:1.7},0).wait(1).to({skewX:3.5172,x:1.8},0).wait(1).to({skewX:3.7241,x:1.9},0).wait(1).to({skewX:3.931,x:2},0).wait(1).to({skewX:4.1379,x:2.1,y:-26.25},0).wait(1).to({skewX:4.3448,x:2.2},0).wait(1).to({skewX:4.5517,x:2.3},0).wait(1).to({skewX:4.7586,x:2.4},0).wait(1).to({skewX:4.9655,x:2.5},0).wait(1).to({skewX:5.1724,x:2.6},0).wait(1).to({skewX:5.3793,x:2.7,y:-26.2},0).wait(1).to({skewX:5.5862,x:2.8},0).wait(1).to({skewX:5.7931,x:2.85},0).wait(1).to({skewX:6,x:2.95},0).wait(1).to({skewX:5.8,x:2.9},0).wait(1).to({skewX:5.6,x:2.8},0).wait(1).to({skewX:5.4,x:2.7},0).wait(1).to({skewX:5.2,x:2.6,y:-26.25},0).wait(1).to({skewX:5,x:2.5},0).wait(1).to({skewX:4.8,x:2.4},0).wait(1).to({skewX:4.6,x:2.3},0).wait(1).to({skewX:4.4,x:2.2},0).wait(1).to({skewX:4.2,x:2.15},0).wait(1).to({skewX:4,x:2.05,y:-26.3},0).wait(1).to({skewX:3.8,x:1.95},0).wait(1).to({skewX:3.6,x:1.85},0).wait(1).to({skewX:3.4,x:1.75},0).wait(1).to({skewX:3.2,x:1.65},0).wait(1).to({skewX:3,x:1.55},0).wait(1).to({skewX:2.8,x:1.45},0).wait(1).to({skewX:2.6,x:1.35},0).wait(1).to({skewX:2.4,x:1.3},0).wait(1).to({skewX:2.2,x:1.2},0).wait(1).to({skewX:2,x:1.1},0).wait(1).to({skewX:1.8,x:1,y:-26.35},0).wait(1).to({skewX:1.6,x:0.9},0).wait(1).to({skewX:1.4,x:0.8},0).wait(1).to({skewX:1.2,x:0.7},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.8,x:0.55},0).wait(1).to({skewX:0.6,x:0.45},0).wait(1).to({skewX:0.4,x:0.35},0).wait(1).to({skewX:0.2,x:0.25},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.8,x:-0.7},0).wait(1).to({skewX:-2,x:-0.8,y:-26.3},0).wait(1).to({skewX:-2.2,x:-0.9},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.6,x:-1.05},0).wait(1).to({skewX:-2.8,x:-1.15},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-3.2,x:-1.35},0).wait(1).to({skewX:-3.4,x:-1.45},0).wait(1).to({skewX:-3.6,x:-1.55},0).wait(1).to({skewX:-3.8,x:-1.65},0).wait(1).to({skewX:-4,x:-1.75},0).wait(1).to({skewX:-4.2,x:-1.85,y:-26.25},0).wait(1).to({skewX:-4.4,x:-1.9},0).wait(1).to({skewX:-4.6,x:-2},0).wait(1).to({skewX:-4.8,x:-2.1},0).wait(1).to({skewX:-5,x:-2.2},0).wait(1).to({skewX:-5.2,x:-2.3},0).wait(1).to({skewX:-5.4,x:-2.4,y:-26.2},0).wait(1).to({skewX:-5.6,x:-2.5},0).wait(1).to({skewX:-5.8,x:-2.6},0).wait(1).to({skewX:-6,x:-2.65},0).wait(1).to({skewX:-5.8,x:-2.6},0).wait(1).to({skewX:-5.6,x:-2.5},0).wait(1).to({skewX:-5.4,x:-2.4},0).wait(1).to({skewX:-5.2,x:-2.3,y:-26.25},0).wait(1).to({skewX:-5,x:-2.2},0).wait(1).to({skewX:-4.8,x:-2.1},0).wait(1).to({skewX:-4.6,x:-2},0).wait(1).to({skewX:-4.4,x:-1.9},0).wait(1).to({skewX:-4.2,x:-1.85},0).wait(1).to({skewX:-4,x:-1.75,y:-26.3},0).wait(1).to({skewX:-3.8,x:-1.65},0).wait(1).to({skewX:-3.6,x:-1.55},0).wait(1).to({skewX:-3.4,x:-1.45},0).wait(1).to({skewX:-3.2,x:-1.35},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-2.8,x:-1.15},0).wait(1).to({skewX:-2.6,x:-1.05},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.2,x:-0.9},0).wait(1).to({skewX:-2,x:-0.8},0).wait(1).to({skewX:-1.8,x:-0.7,y:-26.35},0).wait(1).to({skewX:-1.6,x:-0.6},0).wait(1).to({skewX:-1.4,x:-0.5},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.4,x:-0.05},0).wait(1).to({skewX:-0.2,x:0.05},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-53.2,31.3,54.300000000000004);


(lib.mba3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.65,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.1471,x:0.2,y:-26.35},0).wait(1).to({skewX:0.2941,x:0.3},0).wait(1).to({skewX:0.4412,x:0.35},0).wait(1).to({skewX:0.5882,x:0.45},0).wait(1).to({skewX:0.7353,x:0.5},0).wait(1).to({skewX:0.8824,x:0.55},0).wait(1).to({skewX:1.0294,x:0.65},0).wait(1).to({skewX:1.1765,x:0.7},0).wait(1).to({skewX:1.3235,x:0.75},0).wait(1).to({skewX:1.4706,x:0.85},0).wait(1).to({skewX:1.6176,x:0.9},0).wait(1).to({skewX:1.7647,x:1},0).wait(1).to({skewX:1.9118,x:1.05},0).wait(1).to({skewX:2.0588,x:1.1,y:-26.3},0).wait(1).to({skewX:2.2059,x:1.2},0).wait(1).to({skewX:2.3529,x:1.25},0).wait(1).to({skewX:2.5,x:1.35},0).wait(1).to({skewX:2.6471,x:1.4},0).wait(1).to({skewX:2.7941,x:1.45},0).wait(1).to({skewX:2.9412,x:1.55},0).wait(1).to({skewX:3.0882,x:1.6},0).wait(1).to({skewX:3.2353,x:1.65},0).wait(1).to({skewX:3.3824,x:1.75},0).wait(1).to({skewX:3.5294,x:1.8},0).wait(1).to({skewX:3.6765,x:1.9},0).wait(1).to({skewX:3.8235,x:1.95},0).wait(1).to({skewX:3.9706,x:2},0).wait(1).to({skewX:4.1176,x:2.1,y:-26.25},0).wait(1).to({skewX:4.2647,x:2.15},0).wait(1).to({skewX:4.4118,x:2.25},0).wait(1).to({skewX:4.5588,x:2.3},0).wait(1).to({skewX:4.7059,x:2.35},0).wait(1).to({skewX:4.8529,x:2.45},0).wait(1).to({skewX:5,x:2.5},0).wait(1).to({skewX:4.8571,x:2.45},0).wait(1).to({skewX:4.7143,x:2.35},0).wait(1).to({skewX:4.5714,x:2.3},0).wait(1).to({skewX:4.4286,x:2.25},0).wait(1).to({skewX:4.2857,x:2.15},0).wait(1).to({skewX:4.1429,x:2.1},0).wait(1).to({skewX:4,x:2.05,y:-26.3},0).wait(1).to({skewX:3.8571,x:1.95},0).wait(1).to({skewX:3.7143,x:1.9},0).wait(1).to({skewX:3.5714,x:1.85},0).wait(1).to({skewX:3.4286,x:1.75},0).wait(1).to({skewX:3.2857,x:1.7},0).wait(1).to({skewX:3.1429,x:1.65},0).wait(1).to({skewX:3,x:1.55},0).wait(1).to({skewX:2.8571,x:1.5},0).wait(1).to({skewX:2.7143,x:1.45},0).wait(1).to({skewX:2.5714,x:1.35},0).wait(1).to({skewX:2.4286,x:1.3},0).wait(1).to({skewX:2.2857,x:1.25},0).wait(1).to({skewX:2.1429,x:1.15},0).wait(1).to({skewX:2,x:1.1},0).wait(1).to({skewX:1.8571,x:1,y:-26.35},0).wait(1).to({skewX:1.7143,x:0.95},0).wait(1).to({skewX:1.5714,x:0.9},0).wait(1).to({skewX:1.4286,x:0.8},0).wait(1).to({skewX:1.2857,x:0.75},0).wait(1).to({skewX:1.1429,x:0.7},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.8571,x:0.55},0).wait(1).to({skewX:0.7143,x:0.5},0).wait(1).to({skewX:0.5714,x:0.4},0).wait(1).to({skewX:0.4286,x:0.35},0).wait(1).to({skewX:0.2857,x:0.3},0).wait(1).to({skewX:0.1429,x:0.2},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.1429,x:0.1},0).wait(1).to({skewX:-0.2857,x:0},0).wait(1).to({skewX:-0.4286,x:-0.05},0).wait(1).to({skewX:-0.5714,x:-0.1},0).wait(1).to({skewX:-0.7143,x:-0.2},0).wait(1).to({skewX:-0.8571,x:-0.25},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-1.1429,x:-0.4},0).wait(1).to({skewX:-1.2857,x:-0.45},0).wait(1).to({skewX:-1.4286,x:-0.5},0).wait(1).to({skewX:-1.5714,x:-0.6},0).wait(1).to({skewX:-1.7143,x:-0.65},0).wait(1).to({skewX:-1.8571,x:-0.7},0).wait(1).to({skewX:-2,x:-0.8,y:-26.3},0).wait(1).to({skewX:-2.1429,x:-0.85},0).wait(1).to({skewX:-2.2857,x:-0.95},0).wait(1).to({skewX:-2.4286,x:-1},0).wait(1).to({skewX:-2.5714,x:-1.05},0).wait(1).to({skewX:-2.7143,x:-1.15},0).wait(1).to({skewX:-2.8571,x:-1.2},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-3.1429,x:-1.35},0).wait(1).to({skewX:-3.2857,x:-1.4},0).wait(1).to({skewX:-3.4286,x:-1.45},0).wait(1).to({skewX:-3.5714,x:-1.55},0).wait(1).to({skewX:-3.7143,x:-1.6},0).wait(1).to({skewX:-3.8571,x:-1.65},0).wait(1).to({skewX:-4,x:-1.75},0).wait(1).to({skewX:-4.1429,x:-1.8,y:-26.25},0).wait(1).to({skewX:-4.2857,x:-1.85},0).wait(1).to({skewX:-4.4286,x:-1.95},0).wait(1).to({skewX:-4.5714,x:-2},0).wait(1).to({skewX:-4.7143,x:-2.05},0).wait(1).to({skewX:-4.8571,x:-2.15},0).wait(1).to({skewX:-5,x:-2.2},0).wait(1).to({skewX:-4.8889,x:-2.15},0).wait(1).to({skewX:-4.7778,x:-2.1},0).wait(1).to({skewX:-4.6667,x:-2.05},0).wait(1).to({skewX:-4.5556,x:-2},0).wait(1).to({skewX:-4.4444,x:-1.95},0).wait(1).to({skewX:-4.3333,x:-1.9},0).wait(1).to({skewX:-4.2222,x:-1.85},0).wait(1).to({skewX:-4.1111,x:-1.8},0).wait(1).to({skewX:-4,x:-1.75,y:-26.3},0).wait(1).to({skewX:-3.8889,x:-1.7},0).wait(1).to({skewX:-3.7778,x:-1.65},0).wait(1).to({skewX:-3.6667,x:-1.6},0).wait(1).to({skewX:-3.5556,x:-1.5},0).wait(1).to({skewX:-3.4444,x:-1.45},0).wait(1).to({skewX:-3.3333,x:-1.4},0).wait(1).to({skewX:-3.2222,x:-1.35},0).wait(1).to({skewX:-3.1111,x:-1.3},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-2.8889,x:-1.2},0).wait(1).to({skewX:-2.7778,x:-1.15},0).wait(1).to({skewX:-2.6667,x:-1.1},0).wait(1).to({skewX:-2.5556,x:-1.05},0).wait(1).to({skewX:-2.4444,x:-1},0).wait(1).to({skewX:-2.3333,x:-0.95},0).wait(1).to({skewX:-2.2222,x:-0.9},0).wait(1).to({skewX:-2.1111,x:-0.85},0).wait(1).to({skewX:-2,x:-0.8},0).wait(1).to({skewX:-1.8889,x:-0.75,y:-26.35},0).wait(1).to({skewX:-1.7778,x:-0.7},0).wait(1).to({skewX:-1.6667,x:-0.65},0).wait(1).to({skewX:-1.5556,x:-0.6},0).wait(1).to({skewX:-1.4444,x:-0.55},0).wait(1).to({skewX:-1.3333,x:-0.5},0).wait(1).to({skewX:-1.2222,x:-0.45},0).wait(1).to({skewX:-1.1111,x:-0.35},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.8889,x:-0.25},0).wait(1).to({skewX:-0.7778,x:-0.2},0).wait(1).to({skewX:-0.6667,x:-0.15},0).wait(1).to({skewX:-0.5556,x:-0.1},0).wait(1).to({skewX:-0.4444,x:-0.05},0).wait(1).to({skewX:-0.3333,x:0},0).wait(1).to({skewX:-0.2222,x:0.05},0).wait(1).to({skewX:-0.1111,x:0.1},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-53.2,29.5,54.300000000000004);


(lib.mba2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(-0.05,0.6,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,rotation:0.0408,x:0.05,y:-26.4},0).wait(1).to({rotation:0,skewX:0.0816,x:0.1},0).wait(1).to({skewX:0.1224},0).wait(1).to({skewX:0.1633,x:0.15},0).wait(1).to({skewX:0.2041},0).wait(1).to({skewX:0.2449},0).wait(1).to({skewX:0.2857,x:0.2},0).wait(1).to({skewX:0.3265},0).wait(1).to({skewX:0.3673},0).wait(1).to({skewX:0.4082,x:0.25},0).wait(1).to({skewX:0.449},0).wait(1).to({skewX:0.4898,x:0.3},0).wait(1).to({skewX:0.5306},0).wait(1).to({skewX:0.5714},0).wait(1).to({skewX:0.6122,x:0.35},0).wait(1).to({skewX:0.6531},0).wait(1).to({skewX:0.6939,x:0.4},0).wait(1).to({skewX:0.7347},0).wait(1).to({skewX:0.7755},0).wait(1).to({skewX:0.8163,x:0.45},0).wait(1).to({skewX:0.8571},0).wait(1).to({skewX:0.898},0).wait(1).to({skewX:0.9388,x:0.5},0).wait(1).to({skewX:0.9796},0).wait(1).to({skewX:1.0204,x:0.55},0).wait(1).to({skewX:1.0612},0).wait(1).to({skewX:1.102},0).wait(1).to({skewX:1.1429,x:0.6},0).wait(1).to({skewX:1.1837},0).wait(1).to({skewX:1.2245,x:0.65},0).wait(1).to({skewX:1.2653},0).wait(1).to({skewX:1.3061},0).wait(1).to({skewX:1.3469,x:0.7},0).wait(1).to({skewX:1.3878},0).wait(1).to({skewX:1.4286},0).wait(1).to({skewX:1.4694,x:0.75},0).wait(1).to({skewX:1.5102},0).wait(1).to({skewX:1.551,x:0.8},0).wait(1).to({skewX:1.5918},0).wait(1).to({skewX:1.6327},0).wait(1).to({skewX:1.6735,x:0.85},0).wait(1).to({skewX:1.7143},0).wait(1).to({skewX:1.7551,x:0.9},0).wait(1).to({skewX:1.7959},0).wait(1).to({skewX:1.8367},0).wait(1).to({skewX:1.8776,x:0.95},0).wait(1).to({skewX:1.9184},0).wait(1).to({skewX:1.9592},0).wait(1).to({skewX:2,x:1,y:-26.35},0).wait(1).to({skewX:1.96,x:0.95,y:-26.4},0).wait(1).to({skewX:1.92},0).wait(1).to({skewX:1.88},0).wait(1).to({skewX:1.84,x:0.9},0).wait(1).to({skewX:1.8},0).wait(1).to({skewX:1.76},0).wait(1).to({skewX:1.72,x:0.85},0).wait(1).to({skewX:1.68},0).wait(1).to({skewX:1.64,x:0.8},0).wait(1).to({skewX:1.6},0).wait(1).to({skewX:1.56},0).wait(1).to({skewX:1.52,x:0.75},0).wait(1).to({skewX:1.48},0).wait(1).to({skewX:1.44},0).wait(1).to({skewX:1.4,x:0.7},0).wait(1).to({skewX:1.36},0).wait(1).to({skewX:1.32,x:0.65},0).wait(1).to({skewX:1.28},0).wait(1).to({skewX:1.24},0).wait(1).to({skewX:1.2,x:0.6},0).wait(1).to({skewX:1.16},0).wait(1).to({skewX:1.12},0).wait(1).to({skewX:1.08,x:0.55},0).wait(1).to({skewX:1.04},0).wait(1).to({skewX:1,x:0.5},0).wait(1).to({skewX:0.96},0).wait(1).to({skewX:0.92},0).wait(1).to({skewX:0.88,x:0.45},0).wait(1).to({skewX:0.84},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.76,x:0.4},0).wait(1).to({skewX:0.72},0).wait(1).to({skewX:0.68,x:0.35},0).wait(1).to({skewX:0.64},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.56,x:0.3},0).wait(1).to({skewX:0.52},0).wait(1).to({skewX:0.48},0).wait(1).to({skewX:0.44,x:0.25},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.36,x:0.2},0).wait(1).to({skewX:0.32},0).wait(1).to({skewX:0.28},0).wait(1).to({skewX:0.24,x:0.15},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.16,x:0.1},0).wait(1).to({skewX:0.12},0).wait(1).to({skewX:0.08},0).wait(1).to({rotation:0.04,skewX:0,x:0.05},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.04},0).wait(1).to({rotation:0,skewX:-0.08,x:0},0).wait(1).to({skewX:-0.12},0).wait(1).to({skewX:-0.16},0).wait(1).to({skewX:-0.2,x:-0.05},0).wait(1).to({skewX:-0.24},0).wait(1).to({skewX:-0.28,x:-0.1},0).wait(1).to({skewX:-0.32},0).wait(1).to({skewX:-0.36},0).wait(1).to({skewX:-0.4,x:-0.15},0).wait(1).to({skewX:-0.44},0).wait(1).to({skewX:-0.48,x:-0.2},0).wait(1).to({skewX:-0.52},0).wait(1).to({skewX:-0.56},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.64},0).wait(1).to({skewX:-0.68},0).wait(1).to({skewX:-0.72,x:-0.3},0).wait(1).to({skewX:-0.76},0).wait(1).to({skewX:-0.8,x:-0.35},0).wait(1).to({skewX:-0.84},0).wait(1).to({skewX:-0.88},0).wait(1).to({skewX:-0.92,x:-0.4},0).wait(1).to({skewX:-0.96},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-1.04,x:-0.45},0).wait(1).to({skewX:-1.08},0).wait(1).to({skewX:-1.12,x:-0.5},0).wait(1).to({skewX:-1.16},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.24,x:-0.55},0).wait(1).to({skewX:-1.28},0).wait(1).to({skewX:-1.32},0).wait(1).to({skewX:-1.36,x:-0.6},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.44,x:-0.65},0).wait(1).to({skewX:-1.48},0).wait(1).to({skewX:-1.52},0).wait(1).to({skewX:-1.56,x:-0.7},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.64},0).wait(1).to({skewX:-1.68,x:-0.75},0).wait(1).to({skewX:-1.72},0).wait(1).to({skewX:-1.76,x:-0.8},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.84},0).wait(1).to({skewX:-1.88,x:-0.85},0).wait(1).to({skewX:-1.92},0).wait(1).to({skewX:-1.96},0).wait(1).to({skewX:-2,x:-0.9,y:-26.35},0).wait(1).to({skewX:-1.96,x:-0.85,y:-26.4},0).wait(1).to({skewX:-1.92},0).wait(1).to({skewX:-1.88},0).wait(1).to({skewX:-1.84,x:-0.8},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.76},0).wait(1).to({skewX:-1.72,x:-0.75},0).wait(1).to({skewX:-1.68},0).wait(1).to({skewX:-1.64,x:-0.7},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.56},0).wait(1).to({skewX:-1.52,x:-0.65},0).wait(1).to({skewX:-1.48},0).wait(1).to({skewX:-1.44},0).wait(1).to({skewX:-1.4,x:-0.6},0).wait(1).to({skewX:-1.36},0).wait(1).to({skewX:-1.32,x:-0.55},0).wait(1).to({skewX:-1.28},0).wait(1).to({skewX:-1.24},0).wait(1).to({skewX:-1.2,x:-0.5},0).wait(1).to({skewX:-1.16},0).wait(1).to({skewX:-1.12},0).wait(1).to({skewX:-1.08,x:-0.45},0).wait(1).to({skewX:-1.04},0).wait(1).to({skewX:-1,x:-0.4},0).wait(1).to({skewX:-0.96},0).wait(1).to({skewX:-0.92},0).wait(1).to({skewX:-0.88,x:-0.35},0).wait(1).to({skewX:-0.84},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.76,x:-0.3},0).wait(1).to({skewX:-0.72},0).wait(1).to({skewX:-0.68,x:-0.25},0).wait(1).to({skewX:-0.64},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.56,x:-0.2},0).wait(1).to({skewX:-0.52},0).wait(1).to({skewX:-0.48},0).wait(1).to({skewX:-0.44,x:-0.15},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.36,x:-0.1},0).wait(1).to({skewX:-0.32},0).wait(1).to({skewX:-0.28},0).wait(1).to({skewX:-0.24,x:-0.05},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.16,x:0},0).wait(1).to({skewX:-0.12},0).wait(1).to({skewX:-0.08},0).wait(1).to({rotation:-0.04,skewX:0,x:0.05},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-53.3,24.2,54.4);


(lib.mba1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(0.05,0.65,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,rotation:0.0185,x:0.15,y:-26.35},0).wait(1).to({rotation:0.037},0).wait(1).to({rotation:0,skewX:0.0556,x:0.2},0).wait(1).to({skewX:0.0741},0).wait(1).to({skewX:0.0926},0).wait(1).to({skewX:0.1111},0).wait(1).to({skewX:0.1296},0).wait(1).to({skewX:0.1481},0).wait(1).to({skewX:0.1667,x:0.25},0).wait(1).to({skewX:0.1852},0).wait(1).to({skewX:0.2037},0).wait(1).to({skewX:0.2222},0).wait(1).to({skewX:0.2407},0).wait(1).to({skewX:0.2593},0).wait(1).to({skewX:0.2778,x:0.3},0).wait(1).to({skewX:0.2963},0).wait(1).to({skewX:0.3148},0).wait(1).to({skewX:0.3333},0).wait(1).to({skewX:0.3519},0).wait(1).to({skewX:0.3704},0).wait(1).to({skewX:0.3889,x:0.35},0).wait(1).to({skewX:0.4074},0).wait(1).to({skewX:0.4259},0).wait(1).to({skewX:0.4444},0).wait(1).to({skewX:0.463},0).wait(1).to({skewX:0.4815,x:0.4},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.5185},0).wait(1).to({skewX:0.537},0).wait(1).to({skewX:0.5556},0).wait(1).to({skewX:0.5741},0).wait(1).to({skewX:0.5926,x:0.45},0).wait(1).to({skewX:0.6111},0).wait(1).to({skewX:0.6296},0).wait(1).to({skewX:0.6481},0).wait(1).to({skewX:0.6667},0).wait(1).to({skewX:0.6852},0).wait(1).to({skewX:0.7037,x:0.5},0).wait(1).to({skewX:0.7222},0).wait(1).to({skewX:0.7407},0).wait(1).to({skewX:0.7593},0).wait(1).to({skewX:0.7778},0).wait(1).to({skewX:0.7963},0).wait(1).to({skewX:0.8148,x:0.55},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.8519},0).wait(1).to({skewX:0.8704},0).wait(1).to({skewX:0.8889},0).wait(1).to({skewX:0.9074,x:0.6},0).wait(1).to({skewX:0.9259},0).wait(1).to({skewX:0.9444},0).wait(1).to({skewX:0.963},0).wait(1).to({skewX:0.9815},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9818},0).wait(1).to({skewX:0.9636},0).wait(1).to({skewX:0.9455},0).wait(1).to({skewX:0.9273},0).wait(1).to({skewX:0.9091},0).wait(1).to({skewX:0.8909,x:0.55},0).wait(1).to({skewX:0.8727},0).wait(1).to({skewX:0.8545},0).wait(1).to({skewX:0.8364},0).wait(1).to({skewX:0.8182},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7818,x:0.5},0).wait(1).to({skewX:0.7636},0).wait(1).to({skewX:0.7455},0).wait(1).to({skewX:0.7273},0).wait(1).to({skewX:0.7091},0).wait(1).to({skewX:0.6909},0).wait(1).to({skewX:0.6727,x:0.45},0).wait(1).to({skewX:0.6545},0).wait(1).to({skewX:0.6364},0).wait(1).to({skewX:0.6182},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.5818,x:0.4},0).wait(1).to({skewX:0.5636},0).wait(1).to({skewX:0.5455},0).wait(1).to({skewX:0.5273},0).wait(1).to({skewX:0.5091},0).wait(1).to({skewX:0.4909},0).wait(1).to({skewX:0.4727,x:0.35},0).wait(1).to({skewX:0.4545},0).wait(1).to({skewX:0.4364},0).wait(1).to({skewX:0.4182},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3818},0).wait(1).to({skewX:0.3636,x:0.3},0).wait(1).to({skewX:0.3455},0).wait(1).to({skewX:0.3273},0).wait(1).to({skewX:0.3091},0).wait(1).to({skewX:0.2909},0).wait(1).to({skewX:0.2727},0).wait(1).to({skewX:0.2545,x:0.25},0).wait(1).to({skewX:0.2364},0).wait(1).to({skewX:0.2182},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1818},0).wait(1).to({skewX:0.1636},0).wait(1).to({skewX:0.1455,x:0.2},0).wait(1).to({skewX:0.1273},0).wait(1).to({skewX:0.1091},0).wait(1).to({skewX:0.0909},0).wait(1).to({skewX:0.0727},0).wait(1).to({skewX:0.0545},0).wait(1).to({rotation:0.0364,skewX:0,x:0.15},0).wait(1).to({rotation:0.0182},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0182},0).wait(1).to({rotation:-0.0364},0).wait(1).to({rotation:0,skewX:-0.0545,x:0.1},0).wait(1).to({skewX:-0.0727},0).wait(1).to({skewX:-0.0909},0).wait(1).to({skewX:-0.1091},0).wait(1).to({skewX:-0.1273},0).wait(1).to({skewX:-0.1455},0).wait(1).to({skewX:-0.1636,x:0.05},0).wait(1).to({skewX:-0.1818},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.2182},0).wait(1).to({skewX:-0.2364},0).wait(1).to({skewX:-0.2545},0).wait(1).to({skewX:-0.2727,x:0},0).wait(1).to({skewX:-0.2909},0).wait(1).to({skewX:-0.3091},0).wait(1).to({skewX:-0.3273},0).wait(1).to({skewX:-0.3455},0).wait(1).to({skewX:-0.3636},0).wait(1).to({skewX:-0.3818,x:-0.05},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.4182},0).wait(1).to({skewX:-0.4364},0).wait(1).to({skewX:-0.4545},0).wait(1).to({skewX:-0.4727},0).wait(1).to({skewX:-0.4909,x:-0.1},0).wait(1).to({skewX:-0.5091},0).wait(1).to({skewX:-0.5273},0).wait(1).to({skewX:-0.5455},0).wait(1).to({skewX:-0.5636},0).wait(1).to({skewX:-0.5818},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.6182},0).wait(1).to({skewX:-0.6364},0).wait(1).to({skewX:-0.6545},0).wait(1).to({skewX:-0.6727},0).wait(1).to({skewX:-0.6909,x:-0.2},0).wait(1).to({skewX:-0.7091},0).wait(1).to({skewX:-0.7273},0).wait(1).to({skewX:-0.7455},0).wait(1).to({skewX:-0.7636},0).wait(1).to({skewX:-0.7818},0).wait(1).to({skewX:-0.8,x:-0.25},0).wait(1).to({skewX:-0.8182},0).wait(1).to({skewX:-0.8364},0).wait(1).to({skewX:-0.8545},0).wait(1).to({skewX:-0.8727},0).wait(1).to({skewX:-0.8909},0).wait(1).to({skewX:-0.9091,x:-0.3},0).wait(1).to({skewX:-0.9273},0).wait(1).to({skewX:-0.9455},0).wait(1).to({skewX:-0.9636},0).wait(1).to({skewX:-0.9818},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9818},0).wait(1).to({skewX:-0.9636},0).wait(1).to({skewX:-0.9455},0).wait(1).to({skewX:-0.9273},0).wait(1).to({skewX:-0.9091},0).wait(1).to({skewX:-0.8909,x:-0.25},0).wait(1).to({skewX:-0.8727},0).wait(1).to({skewX:-0.8545},0).wait(1).to({skewX:-0.8364},0).wait(1).to({skewX:-0.8182},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7818,x:-0.2},0).wait(1).to({skewX:-0.7636},0).wait(1).to({skewX:-0.7455},0).wait(1).to({skewX:-0.7273},0).wait(1).to({skewX:-0.7091},0).wait(1).to({skewX:-0.6909},0).wait(1).to({skewX:-0.6727,x:-0.15},0).wait(1).to({skewX:-0.6545},0).wait(1).to({skewX:-0.6364},0).wait(1).to({skewX:-0.6182},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.5818,x:-0.1},0).wait(1).to({skewX:-0.5636},0).wait(1).to({skewX:-0.5455},0).wait(1).to({skewX:-0.5273},0).wait(1).to({skewX:-0.5091},0).wait(1).to({skewX:-0.4909},0).wait(1).to({skewX:-0.4727,x:-0.05},0).wait(1).to({skewX:-0.4545},0).wait(1).to({skewX:-0.4364},0).wait(1).to({skewX:-0.4182},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3818},0).wait(1).to({skewX:-0.3636,x:0},0).wait(1).to({skewX:-0.3455},0).wait(1).to({skewX:-0.3273},0).wait(1).to({skewX:-0.3091},0).wait(1).to({skewX:-0.2909},0).wait(1).to({skewX:-0.2727},0).wait(1).to({skewX:-0.2545,x:0.05},0).wait(1).to({skewX:-0.2364},0).wait(1).to({skewX:-0.2182},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1818},0).wait(1).to({skewX:-0.1636},0).wait(1).to({skewX:-0.1455,x:0.1},0).wait(1).to({skewX:-0.1273},0).wait(1).to({skewX:-0.1091},0).wait(1).to({skewX:-0.0909},0).wait(1).to({skewX:-0.0727},0).wait(1).to({skewX:-0.0545},0).wait(1).to({rotation:-0.0364,skewX:0,x:0.15},0).wait(1).to({rotation:-0.0182},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-53.2,22.3,54.300000000000004);


(lib.mba0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mediumbuildinggraphic("synched",0);
	this.instance.setTransform(-0.05,0.6,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,rotation:0.0169,x:0.05,y:-26.4},0).wait(1).to({rotation:0.0339},0).wait(1).to({rotation:0,skewX:0.0508},0).wait(1).to({skewX:0.0678,x:0.1},0).wait(1).to({skewX:0.0847},0).wait(1).to({skewX:0.1017},0).wait(1).to({skewX:0.1186},0).wait(1).to({skewX:0.1356},0).wait(1).to({skewX:0.1525},0).wait(1).to({skewX:0.1695,x:0.15},0).wait(1).to({skewX:0.1864},0).wait(1).to({skewX:0.2034},0).wait(1).to({skewX:0.2203},0).wait(1).to({skewX:0.2373},0).wait(1).to({skewX:0.2542},0).wait(1).to({skewX:0.2712,x:0.2},0).wait(1).to({skewX:0.2881},0).wait(1).to({skewX:0.3051},0).wait(1).to({skewX:0.322},0).wait(1).to({skewX:0.339},0).wait(1).to({skewX:0.3559},0).wait(1).to({skewX:0.3729,x:0.25},0).wait(1).to({skewX:0.3898},0).wait(1).to({skewX:0.4068},0).wait(1).to({skewX:0.4237},0).wait(1).to({skewX:0.4407},0).wait(1).to({skewX:0.4576},0).wait(1).to({skewX:0.4746},0).wait(1).to({skewX:0.4915,x:0.3},0).wait(1).to({skewX:0.5085},0).wait(1).to({skewX:0.5254},0).wait(1).to({skewX:0.5424},0).wait(1).to({skewX:0.5593},0).wait(1).to({skewX:0.5763},0).wait(1).to({skewX:0.5932,x:0.35},0).wait(1).to({skewX:0.6102},0).wait(1).to({skewX:0.6271},0).wait(1).to({skewX:0.6441},0).wait(1).to({skewX:0.661},0).wait(1).to({skewX:0.678},0).wait(1).to({skewX:0.6949,x:0.4},0).wait(1).to({skewX:0.7119},0).wait(1).to({skewX:0.7288},0).wait(1).to({skewX:0.7458},0).wait(1).to({skewX:0.7627},0).wait(1).to({skewX:0.7797},0).wait(1).to({skewX:0.7966},0).wait(1).to({skewX:0.8136,x:0.45},0).wait(1).to({skewX:0.8305},0).wait(1).to({skewX:0.8475},0).wait(1).to({skewX:0.8644},0).wait(1).to({skewX:0.8814},0).wait(1).to({skewX:0.8983},0).wait(1).to({skewX:0.9153,x:0.5},0).wait(1).to({skewX:0.9322},0).wait(1).to({skewX:0.9492},0).wait(1).to({skewX:0.9661},0).wait(1).to({skewX:0.9831},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9833},0).wait(1).to({skewX:0.9667},0).wait(1).to({skewX:0.95},0).wait(1).to({skewX:0.9333},0).wait(1).to({skewX:0.9167},0).wait(1).to({skewX:0.9,x:0.45},0).wait(1).to({skewX:0.8833},0).wait(1).to({skewX:0.8667},0).wait(1).to({skewX:0.85},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.8167},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7833,x:0.4},0).wait(1).to({skewX:0.7667},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.7333},0).wait(1).to({skewX:0.7167},0).wait(1).to({skewX:0.7},0).wait(1).to({skewX:0.6833,x:0.35},0).wait(1).to({skewX:0.6667},0).wait(1).to({skewX:0.65},0).wait(1).to({skewX:0.6333},0).wait(1).to({skewX:0.6167},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.5833,x:0.3},0).wait(1).to({skewX:0.5667},0).wait(1).to({skewX:0.55},0).wait(1).to({skewX:0.5333},0).wait(1).to({skewX:0.5167},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.4833},0).wait(1).to({skewX:0.4667,x:0.25},0).wait(1).to({skewX:0.45},0).wait(1).to({skewX:0.4333},0).wait(1).to({skewX:0.4167},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3833},0).wait(1).to({skewX:0.3667,x:0.2},0).wait(1).to({skewX:0.35},0).wait(1).to({skewX:0.3333},0).wait(1).to({skewX:0.3167},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.2833},0).wait(1).to({skewX:0.2667},0).wait(1).to({skewX:0.25,x:0.15},0).wait(1).to({skewX:0.2333},0).wait(1).to({skewX:0.2167},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1833},0).wait(1).to({skewX:0.1667},0).wait(1).to({skewX:0.15,x:0.1},0).wait(1).to({skewX:0.1333},0).wait(1).to({skewX:0.1167},0).wait(1).to({skewX:0.1},0).wait(1).to({skewX:0.0833},0).wait(1).to({skewX:0.0667},0).wait(1).to({skewX:0.05,x:0.05},0).wait(1).to({rotation:0.0333,skewX:0},0).wait(1).to({rotation:0.0167},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0167},0).wait(1).to({rotation:-0.0333},0).wait(1).to({rotation:-0.05},0).wait(1).to({rotation:0,skewX:-0.0667,x:0},0).wait(1).to({skewX:-0.0833},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.1167},0).wait(1).to({skewX:-0.1333},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.1667,x:-0.05},0).wait(1).to({skewX:-0.1833},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.2167},0).wait(1).to({skewX:-0.2333},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.2667,x:-0.1},0).wait(1).to({skewX:-0.2833},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.3167},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.3667},0).wait(1).to({skewX:-0.3833,x:-0.15},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.4167},0).wait(1).to({skewX:-0.4333},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.4833,x:-0.2},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.5167},0).wait(1).to({skewX:-0.5333},0).wait(1).to({skewX:-0.55},0).wait(1).to({skewX:-0.5667},0).wait(1).to({skewX:-0.5833},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.6167},0).wait(1).to({skewX:-0.6333},0).wait(1).to({skewX:-0.65},0).wait(1).to({skewX:-0.6667},0).wait(1).to({skewX:-0.6833},0).wait(1).to({skewX:-0.7,x:-0.3},0).wait(1).to({skewX:-0.7167},0).wait(1).to({skewX:-0.7333},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.7667},0).wait(1).to({skewX:-0.7833},0).wait(1).to({skewX:-0.8,x:-0.35},0).wait(1).to({skewX:-0.8167},0).wait(1).to({skewX:-0.8333},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.8667},0).wait(1).to({skewX:-0.8833},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-0.9167,x:-0.4},0).wait(1).to({skewX:-0.9333},0).wait(1).to({skewX:-0.95},0).wait(1).to({skewX:-0.9667},0).wait(1).to({skewX:-0.9833},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9833},0).wait(1).to({skewX:-0.9667},0).wait(1).to({skewX:-0.95},0).wait(1).to({skewX:-0.9333},0).wait(1).to({skewX:-0.9167},0).wait(1).to({skewX:-0.9,x:-0.35},0).wait(1).to({skewX:-0.8833},0).wait(1).to({skewX:-0.8667},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.8333},0).wait(1).to({skewX:-0.8167},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7833,x:-0.3},0).wait(1).to({skewX:-0.7667},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.7333},0).wait(1).to({skewX:-0.7167},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.6833,x:-0.25},0).wait(1).to({skewX:-0.6667},0).wait(1).to({skewX:-0.65},0).wait(1).to({skewX:-0.6333},0).wait(1).to({skewX:-0.6167},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.5833,x:-0.2},0).wait(1).to({skewX:-0.5667},0).wait(1).to({skewX:-0.55},0).wait(1).to({skewX:-0.5333},0).wait(1).to({skewX:-0.5167},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4833},0).wait(1).to({skewX:-0.4667,x:-0.15},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.4333},0).wait(1).to({skewX:-0.4167},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3833},0).wait(1).to({skewX:-0.3667,x:-0.1},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3167},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.2833},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.25,x:-0.05},0).wait(1).to({skewX:-0.2333},0).wait(1).to({skewX:-0.2167},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1833},0).wait(1).to({skewX:-0.1667},0).wait(1).to({skewX:-0.15,x:0},0).wait(1).to({skewX:-0.1333},0).wait(1).to({skewX:-0.1167},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.0833},0).wait(1).to({skewX:-0.0667},0).wait(1).to({skewX:-0.05,x:0.05},0).wait(1).to({rotation:-0.0333,skewX:0},0).wait(1).to({rotation:-0.0167},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-53.3,22.4,54.4);


(lib.mb_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZA5QgJgCgDgGQgEgFAAgKQAAgHADgEQADgFAIgEQgDgCgCgDIgCgHQAAgDACgEQACgDADgCQgFgDgDgGQgCgFAAgIQgBgKAEgFQADgGAIgDQAIgDANAAQALAAAHACIAaAAIgBAIIgMABQAEAGAAAKQgBAOgHAGQgIAGgTAAQgLAAgGgCQgCAEgBADQABACACACIAFADIAfAFQALABAFAGQAEAFAAALQAAAKgDAFQgEAGgJACQgIADgOAAQgPAAgJgDgAgZAZQgCADAAAFQAAAGACADQACADAGABIAQABIAOgBQAGgBACgDQACgDAAgGIgBgGQgBgCgDgCIgJgCIgbgEQgFAEgCAEgAgTgsQgFADAAAJQAAAIAFAEQAEADANAAQALAAAFgDQAFgEAAgIQAAgJgFgDQgEgEgMAAQgNAAgEAEg");
	this.shape.setTransform(248.35,-16.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAqIAAg5QAAgIgDgDQgDgDgGAAQgHAAgGADIgSAKIAAA6IgOAAIAAhSIAMAAIABAOQATgQARAAQALAAAGAHQAFAFAAAMIAAA8g");
	this.shape_1.setTransform(238.575,-17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEgBAAgEIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAEgFABg");
	this.shape_2.setTransform(231.525,-19.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAyQgHgLAAgWQAAgQADgJQADgJAHgEQAHgEALgBQAPABANAHIAAgQIAAgaIAOAAIAAB2IgLAAIgBgMQgQAPgQAAQgPAAgHgLgAgNgKQgFACgCAHQgBAGAAAMQAAAMABAHQACAGAFADQAEADAHAAQAFAAAFgDQAGgCAJgHIAAgsIgOgDIgLgCQgHAAgEADg");
	this.shape_3.setTransform(224.375,-19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA3QgGgGAAgKIAAhiIAPAAIgBBfQAAAFADADQACADAGAAIAIAAIACALIgHACIgJAAQgIAAgFgFg");
	this.shape_4.setTransform(217.825,-19.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEgBAAgEIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAEgFABg");
	this.shape_5.setTransform(212.625,-19.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAlQgFgGAAgLIAAg+IAOAAIAAA6QAAAIADADQADADAHAAQAGAAAGgDIAQgJIAAg8IAOAAIAABSIgLAAIgBgMQgKAIgIADQgIAEgJAAQgLAAgGgGg");
	this.shape_6.setTransform(205.675,-17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVA8IgSgCIAAh0IAQgBIAWAAQANAAAJADQAIACAEAHQAEAHAAAMQAAAMgFAHQgFAGgKACIAAAAQANABAFAHQAFAIAAAOQAAAMgDAHQgEAGgIADQgIADgOAAgAgZAvIAaAAQAJAAAFgCQAGgBACgFQACgEAAgIQAAgJgCgGQgDgEgFgCQgGgDgJAAIgZAAgAgZgHIAZAAQAIAAAFgCQAFgBACgFQACgEAAgIQAAgIgCgEQgCgEgGgCQgFgBgJAAIgXAAg");
	this.shape_7.setTransform(195.875,-19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAvAqIAAg5QAAgHgDgDQgDgEgHAAQgGAAgFADIgQAKIAAA6IgNAAIAAg5QAAgIgDgCQgDgEgHAAQgGAAgFADIgQAKIAAA6IgOAAIAAhSIALAAIABAOQAJgIAIgEQAJgEAIAAQAQABAEAPQARgPAQgBQALAAAGAHQAFAFAAAMIAAA8g");
	this.shape_8.setTransform(179.225,-17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAlQgFgGAAgLIAAg+IAOAAIAAA6QAAAIADADQADADAHAAQAGAAAGgDIAQgJIAAg8IAOAAIAABSIgLAAIgBgMQgKAIgIADQgIAEgJAAQgLAAgGgGg");
	this.shape_9.setTransform(166.925,-17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEgBAAgEIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAEgFABg");
	this.shape_10.setTransform(160.025,-19.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAyQgHgLAAgWQAAgQADgJQADgJAHgEQAHgEALgBQAPABANAHIAAgQIAAgaIAOAAIAAB2IgLAAIgBgMQgQAPgQAAQgPAAgHgLgAgNgKQgFACgCAHQgBAGAAAMQAAAMABAHQACAGAFADQAEADAHAAQAFAAAFgDQAGgCAJgHIAAgsIgOgDIgLgCQgHAAgEADg");
	this.shape_11.setTransform(152.875,-19.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAnQgJgEgEgJQgEgKAAgQQAAgPAEgKQAEgJAIgFQAJgEAMAAQATAAAIAIQAJAGAAANQAAAMgFAFQgFAGgKAAIglAAQAAAKADAFQADAFAFACQAFACAJAAQAOAAAPgCIABAKIgPAEIgRABQgNAAgJgFgAgLgbQgFACgCAGQgDAFABALIAiAAQAIAAABgNQgBgIgFgCQgEgEgLAAQgIAAgFADg");
	this.shape_12.setTransform(143.7,-17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAvA7IgEhoIgDAAIgbBVQgBAFgFAAIgMAAQgGAAgBgFIgahVIgEAAIgEBoIgPAAIAFhuQAAgHAGAAIARAAQAEAAACAGIAWBGIADAKIABAGIACAAIACgHIADgJIAWhGQABgGAFAAIARAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIAFBug");
	this.shape_13.setTransform(131.65,-19.425);

	this.instance = new lib.pointer();
	this.instance.setTransform(107.3,-19.3,1,1,0,0,0,11.2,11.2);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,0,0,255,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(280));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(280));

	// Layer_7
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,0,0,4).p("A3XAAMAuvAAA");
	this.shape_14.setTransform(163.025,-41.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(280));

	// Layer_11
	this.tallb = new lib.mediumbuildinggraphic("synched",0);
	this.tallb.name = "tallb";
	this.tallb.setTransform(154.75,-39.25,3.9447,3.9435);

	this.tallb_1 = new lib.mba0();
	this.tallb_1.name = "tallb_1";
	this.tallb_1.setTransform(154.75,-42.15,3.9447,3.9435);

	this.tallb_2 = new lib.mba1();
	this.tallb_2.name = "tallb_2";
	this.tallb_2.setTransform(154.55,-42.15,3.9447,3.9447);

	this.tallb_3 = new lib.mba2();
	this.tallb_3.name = "tallb_3";
	this.tallb_3.setTransform(154.95,-41.95,3.9447,3.9447);

	this.tallb_4 = new lib.mba5();
	this.tallb_4.name = "tallb_4";
	this.tallb_4.setTransform(154.55,-42.95,3.9447,3.9447,0,0,0,0,-0.2);

	this.tallb_5 = new lib.mba6();
	this.tallb_5.name = "tallb_5";
	this.tallb_5.setTransform(154.35,-42.15,3.9447,3.9447);

	this.tallb_6 = new lib.mba3();
	this.tallb_6.name = "tallb_6";
	this.tallb_6.setTransform(154.75,-42.95,3.9447,3.9447,0,0,0,0,-0.2);

	this.instance_1 = new lib.mba4();
	this.instance_1.setTransform(154.55,-41.8,3.9447,3.9447);

	this.tallb_7 = new lib.mba7();
	this.tallb_7.name = "tallb_7";
	this.tallb_7.setTransform(154.35,-41.95,3.9447,3.9447);

	this.tallb_8 = new lib.mba8();
	this.tallb_8.name = "tallb_8";
	this.tallb_8.setTransform(154.55,-42.15,3.9447,3.9447);

	this.tallb_9 = new lib.mba9();
	this.tallb_9.name = "tallb_9";
	this.tallb_9.setTransform(154.55,-41.8,3.9447,3.9447);

	this.tallb_10 = new lib.mba10();
	this.tallb_10.name = "tallb_10";
	this.tallb_10.setTransform(154.55,-41.95,3.9447,3.9447);

	this.tallb_11 = new lib.mba11();
	this.tallb_11.name = "tallb_11";
	this.tallb_11.setTransform(154.55,-42.15,3.9447,3.9447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallb,p:{regY:0,x:154.75,y:-39.25}}]}).to({state:[{t:this.tallb_1}]},19).to({state:[{t:this.tallb_2}]},20).to({state:[{t:this.tallb_3}]},20).to({state:[{t:this.tallb_4}]},20).to({state:[{t:this.tallb_5}]},20).to({state:[{t:this.tallb_6}]},20).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.tallb_7}]},20).to({state:[{t:this.tallb_8}]},21).to({state:[{t:this.tallb_9}]},19).to({state:[{t:this.tallb_10}]},20).to({state:[{t:this.tallb_11}]},20).to({state:[{t:this.tallb,p:{regY:-0.6,x:154.95,y:-41.95}}]},20).wait(21));

	// Layer_2
	this.instance_2 = new lib.pointer();
	this.instance_2.setTransform(3.75,264.2,1,1,0,0,0,11.2,11.2);
	var instance_2Filter_2 = new cjs.ColorFilter(0,0,0,1,0,0,255,0);
	this.instance_2.filters = [instance_2Filter_2];
	this.instance_2.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[3.8,264.3,4.2,264.3,4.6,264.3,5.2,264.3,5.8,264.3,37.6,263.3,66.5,229.6,81.4,212.2,89.8,194.9,89.9,194.7,89.9,194.5,98.4,177,113.4,159.5,135.3,134,158.7,127.3,160.3,126.9,161.9,126.5,167.9,125.1,174.1,124.9,174.7,124.9,175.2,124.9,175.9,124.9,176.4,124.9,208.2,125.8,237.2,159.5,252.2,177,260.6,194.5,263.6,200,266.6,205.5,274.6,218.7,284,229.6,312.9,263.3,344.7,264.2,345.2,264.3,345.9,264.3,346.5,264.3,347.1,264.2,348.2,264.2,349.3,264.1]}},279).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_2).wait(280));

	// Layer_3 copy
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0000FF").ss(4,0,0,4).p("A7NK5QAFAAAHABQAFAAAGAAQAGAAAGAAQE+gKEhlRQCViuBUitQABgCAAgCQBViuCWivQDbj/DqhEQAQgEAQgEQA8gOA+gCQAGAAAGAAQAHAAAEAAQE+AJEiFSQCWCvBUCuIA8BuQBQCEBeBtQEhFRE+AJQAFABAHAAQAGAAAGgBQASAAARgC");
	this.shape_15.setTransform(176.375,194.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(280));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AFnPlQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0PlQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnNtQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0NtQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnL1QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0L1QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnJ9QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0J9QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnIFQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0IFQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnGNQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0GNQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnEVQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0EVQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnCdQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0CdQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnAlQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAl0AlQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAFnhSQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0hSQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnjKQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0jKQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnlCQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0lCQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnm6QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0m6QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnoyQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0oyQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnqqQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0qqQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnsiQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0siQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnuaQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0uaQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_16.setTransform(155.05,-140.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(280));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-252.3,367.9,527.7);


// stage content:
(lib.resonance = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// Enable touch events while allowing the touch events to bubble up to the document.
		
		createjs.Touch.enable(stage, false, true);
		
		// Don't let the stage to automatically prevent default touch events.
		
		stage.preventSelection = false;
		
		this.graph1.stop()
		this.graph2.stop()
		this.graph3.stop()
		this.button.on("mousedown", function (e)
		
			{
		
				e.target.offsetX = (e.stageX / stage.scaleX) - e.target.x;
		
			}.bind(this));
		
		this.button.on("pressmove", function (e)
		
			{
		
				e.target.x = this.clamp((e.stageX / stage.scaleX) - e.target.offsetX, this.bar.x, this.bar.x + this.bar.nominalBounds.width);
		
				this.setProportion();
				this.controlTower1();
		
			}.bind(this));
		
		this.setProportion = function ()
		
		{
			var prop = (this.button.x - this.bar.x) / this.bar.nominalBounds.width;
			//this.txt.x = this.button.x;
			//this.txt.text = Math.round(prop * 100) + "%";
			this.graph1.gotoAndStop(Math.floor(this.graph1.timeline.duration * prop))
			this.graph2.gotoAndStop(Math.floor(this.graph2.timeline.duration * prop))
			this.graph3.gotoAndStop(Math.floor(this.graph3.timeline.duration * prop))
		}.bind(this);
		
		this.clamp = function (value, min, max)
		
		{
		
			if (value < min)
		
				return min;
		
			else if (value > max)
		
				return max;
		
			else
		
				return value;
		
		}
		
		setTimeout(this.setProportion, 0);
		
		
		
		//buttons
		this.shortBBtn.txt.text = "Hide Short Building";
		this.shortBBtn.addEventListener("click", shortBBtnfunction.bind(this));
		
		
		//create function to start/stop animation and toggle button text
		function shortBBtnfunction() {
			if (this.shortBBtn.txt.text == "Hide Short Building") {
				this.shortBBtn.txt.text = "Show Short Building";
				this.graph1.visible = false;
			} else {
		
				this.shortBBtn.txt.text = "Hide Short Building";
				this.graph1.visible = true;
			}
		}
		
		this.mediumBBtn.txt.text = "Hide Medium Building";
		this.mediumBBtn.addEventListener("click", mediumBBtnfunction.bind(this));
		
		
		//create function to start/stop animation and toggle button text
		function mediumBBtnfunction() {
			if (this.mediumBBtn.txt.text == "Hide Medium Building") {
				this.mediumBBtn.txt.text = "Show Medium Building";
				this.graph2.visible = false;
			} else {
		
				this.mediumBBtn.txt.text = "Hide Medium Building";
				this.graph2.visible = true;
			}
		}
		
		this.tallBBtn.txt.text = "Hide Tall Building";
		this.tallBBtn.addEventListener("click", tallBBtnfunction.bind(this));
		
		
		//create function to start/stop animation and toggle button text
		function tallBBtnfunction() {
			if (this.tallBBtn.txt.text == "Hide Tall Building") {
				this.tallBBtn.txt.text = "Show Tall Building";
				this.graph3.visible = false;
			} else {
		
				this.tallBBtn.txt.text = "Hide Tall Building";
				this.graph3.visible = true;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// JS
	this.shortBBtn = new lib.StartBtn();
	this.shortBBtn.name = "shortBBtn";
	this.shortBBtn.setTransform(470.85,237);
	new cjs.ButtonHelper(this.shortBBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.mediumBBtn = new lib.StartBtn();
	this.mediumBBtn.name = "mediumBBtn";
	this.mediumBBtn.setTransform(470.85,272.05);
	new cjs.ButtonHelper(this.mediumBBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.tallBBtn = new lib.StartBtn();
	this.tallBBtn.name = "tallBBtn";
	this.tallBBtn.setTransform(470.85,307.1);
	new cjs.ButtonHelper(this.tallBBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallBBtn},{t:this.mediumBBtn},{t:this.shortBBtn}]}).wait(1));

	// graph1
	this.graph1 = new lib.sb_anim();
	this.graph1.name = "graph1";
	this.graph1.setTransform(291.6,184.25,0.524,0.524,0,0,0,171.8,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.graph1).wait(1));
	this.graph1.addEventListener("tick", AdobeAn.handleFilterCache);

	// graph2
	this.graph2 = new lib.mb_anim();
	this.graph2.name = "graph2";
	this.graph2.setTransform(293.8,262.75,0.5237,0.5237,0,0,0,174.8,132.7);

	this.timeline.addTween(cjs.Tween.get(this.graph2).wait(1));
	this.graph2.addEventListener("tick", AdobeAn.handleFilterCache);

	// graph3
	this.graph3 = new lib.Tb_anim();
	this.graph3.name = "graph3";
	this.graph3.setTransform(292.25,184.05,0.524,0.524,0,0,0,171.8,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.graph3).wait(1));
	this.graph3.addEventListener("tick", AdobeAn.handleFilterCache);

	// Bar
	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.setTransform(20.75,403.45);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.SliderButton(), 3);

	this.bar = new lib.SliderBar();
	this.bar.name = "bar";
	this.bar.setTransform(20.65,359.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.button}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E74").s().p("AgNAYQAFgBADgDIAEgGIAAgCIgBAAIgCgBIgBgBIgPgmIAIAAIALAdIABAFIABAAIACgFIAKgdIAIAAIgRAqQgEAOgNABg");
	this.shape.setTransform(324.55,344.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgIAUQgEgDgCgFQgCgEAAgIQAAgHACgFQACgEAEgCQAFgCAGgBIAHABIAGABIgBAFIgLAAIgHABQgDACgBADQgBADAAAFQAAAGABAEQABADADABQADABAEAAIAMgBIABAGQgGABgIAAQgGAAgFgBg");
	this.shape_1.setTransform(320.425,343.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E74").s().p("AALAVIAAgcQAAgEgBgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgGACIgJAEIAAAdIgHAAIAAgoIAGAAIAAAHQAKgIAIAAQAFAAADADQADADAAAFIAAAeg");
	this.shape_2.setTransform(315.9,343.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E74").s().p("AgJAUQgEgDgCgFQgCgEAAgIQAAgHACgFQACgEAEgDQAEgCAGAAQAJABAEADQAEAEAAAGQAAAFgCADQgDACgFABIgSAAQABAEABADQACACACABIAGABIAOgBIABAFIgHACIgJAAQgGAAgEgBgAgFgNQgCABgBADQgCADAAAFIAQAAQAFAAAAgGQAAgEgCgCQgDgBgFAAIgGABg");
	this.shape_3.setTransform(311.225,343.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E74").s().p("AgOASQgCgDAAgFIAAgeIAHAAIAAAcQAAADABADQACABADAAIAFgBIAIgFIAAgdIAHAAIAAAoIgFAAIgBgGIgJAFIgHACQgGAAgDgDg");
	this.shape_4.setTransform(306.575,343.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E74").s().p("AAMAeIgBgPIABgIQgIAGgHAAQgIABgDgGQgDgEgBgLQAAgHACgFQACgFAEgCQAEgCAGgBIAJABIAJADIAAA3gAgFgVQgDACgBADIgBAKQAAAGACAEQABAEAGgBQADAAACgBIAIgEIAAgXIgMgBIgFABg");
	this.shape_5.setTransform(301.75,344.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E74").s().p("AgJAUQgEgDgCgFQgCgEAAgIQAAgHACgFQACgEAEgDQAEgCAGAAQAJABAEADQAEAEAAAGQAAAFgCADQgDACgFABIgSAAQABAEABADQACACACABIAGABIAOgBIABAFIgHACIgJAAQgGAAgEgBgAgFgNQgCABgBADQgCADAAAFIAQAAQAFAAAAgGQAAgEgCgCQgDgBgFAAIgGABg");
	this.shape_6.setTransform(297.275,343.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E74").s().p("AgMAVIAAgoIAGAAIABAHQAIgIAIAAIACAAIgBAHIgCAAIgHABIgIAEIAAAdg");
	this.shape_7.setTransform(293.575,343.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E74").s().p("AgHAeIAAgiIgHAAIAAgFIAHgBIAAgHQAAgGADgDQADgDAFAAIALABIAAAFIgJAAQgEAAgBACQgBABAAADIAAAHIAMAAIAAAGIgMAAIAAAig");
	this.shape_8.setTransform(290.275,342.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E74").s().p("AgMAcQgEgBgCgDQgCgDAAgEQAAgEACgCIAFgEIgCgDIgBgDIABgDIACgCQgDgCgBgDQgBgDAAgDQAAgFACgDQABgDAEgBQAEgBAGgBIAJABIANAAIgBAFIgGAAQACADAAAFQAAAHgEADQgEACgJAAIgIAAIgBADIABACIADABIAOACQAGABACADQACACAAAGQAAAEgCADQgBADgFABQgEABgGABQgIgBgEgBgAgMAMIgBAEIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIAIAAIAHAAIADgCIABgFIAAgDIgCgBIgFgBIgNgDIgDAEgAgJgVQgDABAAAFQAAAEADABQACACAGAAQAFAAADgCQACgBAAgEQAAgFgCgBQgDgCgFAAQgGAAgCACg");
	this.shape_9.setTransform(284.425,344.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E74").s().p("AALAVIAAgcQAAgEgCgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgGACIgJAEIAAAdIgHAAIAAgoIAGAAIABAHQAKgIAHAAQAGAAACADQADADAAAFIAAAeg");
	this.shape_10.setTransform(279.6,343.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E74").s().p("AgCAdIAAgoIAGAAIAAAogAgBgTQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgFIABgCIABAAIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAAFQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_11.setTransform(276.125,343.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E74").s().p("AgIAUQgEgDgCgFQgCgEAAgIQAAgHACgFQACgEAEgCQAFgCAGgBIAHABIAGABIgBAFIgLAAIgHABQgDACgBADQgBADAAAFQAAAGABAEQABADADABQADABAEAAIAMgBIABAGQgGABgIAAQgGAAgFgBg");
	this.shape_12.setTransform(273.125,343.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E74").s().p("AgMAVIAAgoIAGAAIABAHQAIgIAIAAIACAAIgBAHIgCAAIgHABIgIAEIAAAdg");
	this.shape_13.setTransform(269.575,343.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E74").s().p("AgKAUQgEgCgCgFQgCgFAAgIQAAgGACgGQACgEAEgCQAEgCAGgBQAHABAEACQAEACACAEQACAGAAAGQAAAIgCAFQgCAFgEACQgEABgHAAQgGAAgEgBgAgGgNQgDACgBADIgBAIIABAKQABADADABQADABADAAQAFAAACgBQADgBABgDIABgKIgBgIQgBgDgDgCIgHgBIgGABg");
	this.shape_14.setTransform(265.275,343.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E74").s().p("AgQAdIAAgvQAAgEACgDQADgDAFAAIAYAAIAAAHIgWAAIgDABQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAAOIAXAAIAAAEIgXAAIAAAbg");
	this.shape_15.setTransform(260.85,343.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E74").s().p("AgMAQQgEgCgCgEQgCgEgBgGQAAgJAEgEQAEgEAGAAQAGAAACACQACADAAAFIAAASQAFgBADgBQACgCABgCIACgGIgCgOIAFgBIACAHIAAAJQAAAGgCAEQgCAEgFACQgEACgIAAQgHAAgFgCgAgNgIQgBADAAAFIABAGQABACADABQADACAFAAIAAgQQAAgFgGAAQgEAAgCACg");
	this.shape_16.setTransform(194.25,246.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003E74").s().p("AgQAQQgCgCgBgDIgCgJIABgIIABgJIAFABIAAAEIAAAFIAAAHIAAAFIABACIAEABIADgBIABgBIACgEIADgLQAAgFACgCQADgCAFAAQAEAAADACQACABABAEIABAJIgBAQIgFAAIABgMIAAgCIgBgHIgCgDIgDgBQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAFIgDALQgBAFgBACQgDACgFAAQgEAAgDgBg");
	this.shape_17.setTransform(194.25,250.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003E74").s().p("AgTASIAAgGIAHgBQgIgKAAgHQAAgGADgCQADgDAFAAIAeAAIAAAHIgcAAQgEAAgBACQAAAAgBAAQAAABAAAAQAAABAAABQAAAAAAABIABAGIAEAJIAdAAIAAAHg");
	this.shape_18.setTransform(194.2,255.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003E74").s().p("AgMARQgEgCgCgEQgDgEAAgHQAAgGADgEQACgEAEgCQAGgCAGAAQAIAAAFACQAEACACAEQACAEAAAGQAAAHgCAEQgCAEgEACQgFACgIAAQgGAAgGgCgAgIgKQgDABgCADIgBAGIABAHQACADADABIAIABIAKgBQADgBABgDQACgDAAgEQAAgEgCgCQgBgDgDgBIgKgBIgIABg");
	this.shape_19.setTransform(194.25,259.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003E74").s().p("AgbATIAAgGIAGgBQgDgDgCgFQgCgEgBgEQAAgHAGgDQAFgEAMAAQAGAAAFACQAEACACADQACADAAAGQAAAHgDAHIAIAAIALAAIAAAHgAgQgJQgDAAgCACQgBACAAAEIABAFIAFAIIAVAAIABgEIABgFIABgDQAAgEgCgCQgBgCgDgBIgIgBIgKABg");
	this.shape_20.setTransform(195.05,264.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003E74").s().p("AgQAQQgCgCgBgDIgCgJIABgIIABgJIAFABIAAAEIAAAFIAAAHIAAAFIABACIAEABIADgBIABgBIACgEIADgLQAAgFACgCQADgCAFAAQAEAAADACQACABABAEIABAJIgBAQIgFAAIABgMIAAgCIgBgHIgCgDIgDgBQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAFIgDALQgBAFgBACQgDACgFAAQgEAAgDgBg");
	this.shape_21.setTransform(194.25,269.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003E74").s().p("AgMAQQgEgCgCgEQgCgEgBgGQAAgJAEgEQAEgEAGAAQAGAAACACQACADAAAFIAAASQAFgBADgBQACgCABgCIACgGIgCgOIAFgBIACAHIAAAJQAAAGgCAEQgCAEgFACQgEACgIAAQgHAAgFgCgAgNgIQgBADAAAFIABAGQABACADABQADACAFAAIAAgQQAAgFgGAAQgEAAgCACg");
	this.shape_22.setTransform(194.25,273.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003E74").s().p("AgcAUIAAgIIAAgLQAAgGABgEQACgEADgCQAEgCAGAAQAHAAAEACQADADAAAFIABAAIACgEIAGgDIASgFIAAAIIgSAFQgDABgBACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAANIAYAAIAAAHgAgSgJQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABIgBAGIAAAMIAWAAIAAgMIgBgGQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBIgGgBIgHABg");
	this.shape_23.setTransform(193.375,278.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#003E74").ss(2,1,1).p("AOUKrIABAAQABAAACAAIADAAAOdKrIACAAAOqKrIABABIgkAbAOGKQIAjAaAuqqhIAcglIAbAlAuCKrIgMAAIAA1xAORKrI8BAA");
	this.shape_24.setTransform(293.325,264.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,0,0,4).p("AOKAAIAGAAQACAAACAAIABABAODABQAAgBABAAQABAAABAAQABAAABAAAN/ABIgDAAAuXABIAGAAQACAAAEAAQADAAADAA");
	this.shape_25.setTransform(295.4286,332.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(261.7,205.3,278.50000000000006,174.59999999999997);
// library properties:
lib.properties = {
	id: '4B93EBDA609CD5499832C33DCA53321E',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['4B93EBDA609CD5499832C33DCA53321E'] = {
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