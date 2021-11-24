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


(lib.wf = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,0,4).p("AszgOQAPgcAQgcQAOgXASgUQASgXAXgRQASgOAWgIQAJgEAKAAQAKAAAKAFQAWAHATAOQAYARATAXQASAUAPAYQARAbAPAdQALAVAKAWQANAeAQAbQARAdAVAZQAYAcAkAIQAQADAQgFQASgFAOgKQASgNAOgRQALgNALgOQASgZAQgbQAUgfAQgiQAJgTAKgTQASghAWgdQAVgcAggUQAhgWAkAMQAXAIASAOQAYARATAXQAYAcATAhQASAdAPAeQANAeAPAeQAHARAKAQQASAhAcAZQAdAZAmgGQARgEANgJQAegWAWgeQAXgfASgkQALgVALgVQAQgeARgdQAOgZASgYQAPgTAQgSQAagcAkgLQAQgEAPADQAjAKAZAZQAWAXARAbQAKAQAJARQALASAJAT");
	this.shape.setTransform(82,18.1188);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAGIiJAAIAAgLICJAAIAAgEIBSAJIhSAKg");
	this.shape_1.setTransform(152.55,23.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,2,0,4).p("AAAAcIAAg3");
	this.shape_2.setTransform(148.8,-5.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,2,0,4).p("AAAAcIAAg3");
	this.shape_3.setTransform(82,-6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAcIAAgtIgQAAIAAgJIAsAAIAAAJIgRAAIAAAtg");
	this.shape_4.setTransform(114.8,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAcAGIiJAAIAAgLICJAAIAAgEIBSAJIhSAKg");
	this.shape_5.setTransform(96.7,-2.725,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAQIAAgTIgEAAIAJgMIAKAMIgEAAIAAATg");
	this.shape_6.setTransform(37.975,13.1813,1,1.4423,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAQIAAgTIgEAAIAJgMIAKAMIgEAAIAAATg");
	this.shape_7.setTransform(37.925,1.3187,1,1.4423);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAcAGIiJAAIAAgLICJAAIAAgEIBSAJIhSAKg");
	this.shape_8.setTransform(134.05,-2.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAXQgDgDAAgGIAAgUIgHAAIAAgHIAHgBIAAgLIALAAIAAALIALAAIAAAIIgLAAIAAASQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIADABIAFAAIACAIIgGABIgFABQgFAAgDgDg");
	this.shape_9.setTransform(166.975,22.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJATQgEgCgCgFQgBgFAAgHQAAgHABgEQACgEAEgCQAEgCAFAAQAJAAAEADQAEADAAAGQAAAFgCADQgCACgFAAIgRAAQAAAFACACQAAABAAABQABAAAAABQABAAAAAAQABABAAAAIAGAAIAOAAIAAAFIgHABIgIAAQgGAAgEgBgAgFgNQgCACgBADIgBAHIAPAAQAEAAAAgGQAAgDgCgCQgCgBgFgBIgGABg");
	this.shape_10.setTransform(166.925,31.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAUIAAgbQAAgDgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgFABIgIAFIAAAbIgFAAIAAgbQAAgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGABIgHAFIAAAbIgHAAIAAgmIAGAAIAAAGIAIgFQAEgCAEAAQAHAAACAHQAIgHAHAAQAFAAADADQADACAAAGIAAAcg");
	this.shape_11.setTransform(161.275,31.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAcIAAgmIAGAAIAAAmgAAAgSQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgFIABgBIACgBIACAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAFQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_12.setTransform(156.8,30.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAcIAAgwIgRAAIAAgGIApAAIAAAGIgSAAIAAAwg");
	this.shape_13.setTransform(153.525,31);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGAdIAAghIgIAAIAAgFIAIAAIAAgHQAAgGACgDQADgDAFAAIALABIgBAFIgIAAQgEAAgBABQgBACAAAEIAAAGIAMAAIAAAFIgMAAIAAAhg");
	this.shape_14.setTransform(160.225,-15.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCAJIACgJIgCAAIgBgCIAAgEIABgCIACgBIABAAIACABIAAACIAAAEQABAHgDAFg");
	this.shape_15.setTransform(155.9,-12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAXQAFgBACgDQADgCACgEIAAgCIgBAAIgCAAIgBgCIgOgkIAHAAIALAcIABAFIAAAAIACgFIAKgcIAIAAIgQAoQgEAOgMABg");
	this.shape_16.setTransform(152.925,-13.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHASQgEgBgCgFQgCgFAAgHQAAgHACgEQACgFAEgCQAEgCAGAAIAGABIAGABIgBAFIgKAAIgHABQgCABgCADIgBAIIABAJQACADACACIAHAAIALAAIABAEQgGADgHAAQgGAAgEgDg");
	this.shape_17.setTransform(148.925,-14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAKAUIAAgbIgBgFQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgFABIgIAFIAAAbIgHAAIAAgmIAFAAIABAGQAKgHAGAAQAGAAACADQADADAAAFIAAAcg");
	this.shape_18.setTransform(144.65,-14.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJASQgEgBgCgFQgBgFAAgHQAAgHABgEQACgFAEgCQAEgCAFAAQAJAAAEADQAEAEAAAHQAAAEgCACQgCAEgFAAIgRAAQAAAEACADQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAIAGAAIAOAAIAAAEIgHACIgIABQgGAAgEgDgAgFgMQgCAAgBADIgBAIIAPAAQAEAAAAgFQAAgEgCgCQgCgCgFABIgGABg");
	this.shape_19.setTransform(140.225,-14.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNASQgDgEAAgFIAAgcIAHAAIAAAbQAAADABABQACACADAAIAFgBIAIgEIAAgcIAHAAIAAAmIgGAAIAAgGIgJAFIgHACQgFAAgDgCg");
	this.shape_20.setTransform(135.775,-14.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AALAcIAAgOIABgIQgJAHgGAAQgHAAgEgFQgCgFAAgJQgBgIACgEQACgEAEgCQAEgDAFAAIAJABIAJACIAAA0gAgFgUQgDACAAADIgBAJQAAAGABAEQACADAFAAIAFgBIAHgEIAAgWIgKgBIgGABg");
	this.shape_21.setTransform(131.15,-13.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgJASQgEgBgCgFQgBgFAAgHQAAgHABgEQACgFAEgCQAEgCAFAAQAJAAAEADQAEAEAAAHQAAAEgCACQgCAEgFAAIgRAAQAAAEACADQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAIAGAAIAOAAIAAAEIgHACIgIABQgGAAgEgDgAgFgMQgCAAgBADIgBAIIAPAAQAEAAAAgFQAAgEgCgCQgCgCgFABIgGABg");
	this.shape_22.setTransform(126.875,-14.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgLAUIAAgmIAFAAIAAAGQAJgHAHAAIACAAIgBAGIgCAAIgGABIgIAFIAAAbg");
	this.shape_23.setTransform(123.35,-14.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAcIAAgtQAAgEADgDQADgDAFAAIAWABIgBAFIgUAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABIgBAEIAAANIAWAAIAAAEIgWAAIAAAag");
	this.shape_24.setTransform(119.575,-15.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRAeIAeg7IAFAAIgdA7g");
	this.shape_25.setTransform(115.15,-15.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AADAcIAAgrIABgFIgNAEIAAgFIAMgGIAHAAIAAA3g");
	this.shape_26.setTransform(111.2,-15.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgRALIAAgFIAiAAIAAAFgAgRgFIAAgFIAiAAIAAAFg");
	this.shape_27.setTransform(105.9,-14.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgDAcIAAgxIgRAAIAAgGIApAAIAAAGIgSAAIAAAxg");
	this.shape_28.setTransform(99.525,-15.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgBAJIABgJIgCAAIAAgCIAAgEIAAgCIACgBIABAAIACABIAAACIAAAEQAAAHgCAFg");
	this.shape_29.setTransform(94.55,-12.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgOAXQgDgEAAgLQABgIABgDQACgFADgCQADgCAFAAQAHABAGADIgBgHIAAgNIAIAAIAAA4IgGAAIgBgGQgHAHgHAAQgHgBgEgFgAgGgEQgCABAAADIgBAIIABAJIACAEQACABAEAAIAEAAIAGgFIAAgVIgGgBIgEAAIgGABg");
	this.shape_30.setTransform(91.3,-15.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgKASQgEgBgCgFQgBgFAAgHQAAgHABgEQACgFAEgCQAEgCAGAAQAHAAAEACQAEACACAFQABAEAAAHQAAAHgBAFQgCAFgEABQgEADgHAAQgGAAgEgDgAgGgMQgCABgBADIgBAIIABAJQABADACACQADABADAAQAEAAADgBQACgCABgDIABgJIgBgIQgBgDgCgBIgHgBIgGABg");
	this.shape_31.setTransform(86.875,-14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgCAcIAAgmIAFAAIAAAmgAAAgSQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAgFIAAgBIACgBIABAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAAFQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_32.setTransform(83.65,-15.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgLAUIAAgmIAFAAIAAAGQAIgHAIAAIACAAIgBAGIgCAAIgGABIgIAFIAAAbg");
	this.shape_33.setTransform(81.3,-14.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgJASQgEgBgCgFQgBgFAAgHQAAgHABgEQACgFAEgCQAEgCAFAAQAJAAAEADQAEAEAAAHQAAAEgCACQgCAEgFAAIgRAAQAAAEACADQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAIAGAAIAOAAIAAAEIgHACIgIABQgGAAgEgDgAgFgMQgCAAgBADIgBAIIAPAAQAEAAAAgFQAAgEgCgCQgCgCgFABIgGABg");
	this.shape_34.setTransform(77.375,-14.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgRAcIAAg2IAIgBIAKAAQAGAAAEABQAEACACAEQABADAAAIQAAAGgBADQgCAEgDABQgEACgHAAIgLgBIAAAWgAgKAAIALAAIAGAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIABgGIgBgIQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgGgBIgLAAg");
	this.shape_35.setTransform(73.025,-15.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgJASQgEgBgCgFQgBgFAAgHQAAgHABgEQACgFAEgCQAEgCAFAAQAJAAAEADQAEAEAAAHQAAAEgCACQgCAEgFAAIgRAAQAAAEACADQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAIAGABIAOgBIAAAEIgHACIgIABQgGAAgEgDgAgFgMQgCAAgBADIgBAIIAPAAQAEAAAAgFQAAgEgCgCQgCgCgFABIgGABg");
	this.shape_36.setTransform(66.375,7.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOAXQgCgEAAgLQgBgIACgDQACgFADgCQADgCAFAAQAGABAHADIAAgHIAAgNIAHAAIAAA4IgGAAIgBgGQgHAHgHAAQgHgBgEgFgAgFgEQgCABgBADIgBAIIABAJIACAEQACABAEABIAEgBIAHgFIAAgVIgHgBIgEAAIgFABg");
	this.shape_37.setTransform(61.85,6.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgNASQgDgEAAgFIAAgcIAHAAIAAAbQAAADABABQACACADAAIAFgBIAIgEIAAgcIAHAAIAAAmIgGAAIAAgGIgJAFIgHACQgFAAgDgCg");
	this.shape_38.setTransform(57.375,7.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAEAZQgEABgCgDQgDgCAAgGIAAgXIgHAAIAAgEIAHgBIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAXIABADIAEABIAGAAIABAGIgFAAg");
	this.shape_39.setTransform(53.625,6.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgDAcIAAgmIAGAAIAAAmgAAAgSQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIAAgFIABgBIACgBIABAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAAFQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_40.setTransform(51.15,6.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AABAcQgDAAgDgCQgCgDAAgEIAAguIAGAAIAAAsQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAIADAAIABAFIgDABg");
	this.shape_41.setTransform(49.275,6.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgRAcIAAg2IAGAAIAAAGQADgDAFgCQADgCAEAAQAHAAADAFQAEAFAAALQAAAGgCAEQgCAFgDACQgDACgFAAQgHAAgGgEIAAAIIAAALgAgDgUIgHAFIAAATIADABIAFABIADABIAGgBQACgBABgDIABgIIgBgJIgDgFQgCgBgDAAIgFABg");
	this.shape_42.setTransform(45.625,7.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWAUIAAgbQAAgDgBgCQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgFABIgIAFIAAAbIgFAAIAAgbQAAgDgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgGABIgHAFIAAAbIgHAAIAAgmIAGAAIAAAGIAIgFQAEgCAEAAQAHAAACAHQAIgHAHAAQAFAAADADQADADAAAFIAAAcg");
	this.shape_43.setTransform(39.725,7.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAQAcIgEgSIgXAAIgFASIgHAAIASg1IABgBIABgBIAHAAIABABIABABIASA1gAAKAEIgHgVIgCgFIgBAAIgCAFIgHAVIATAAg");
	this.shape_44.setTransform(33.75,6.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,2,0,4).p("AqZi+IDpAAAtSgGIarAAAtYDUIAAmn");
	this.shape_45.setTransform(85.125,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-22.5,173.6,62);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGTVQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGRdQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGPlQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGNtQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGL1QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGJ9QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGIFQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGGNQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGEVQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGCdQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGAlQgDgDAAgEIAAg7QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgDAAgDgDgAgGhSQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGjKQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGlCQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGm6QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGoyQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGqqQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGsiQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGuaQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGwSQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGyKQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(0,145.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,22,2,248);


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
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AiyhQIAAgZIFlAAIAAAZIAAAqIAAApIAAAsIAABAACUgmIAfAAACUhQIAfAAACUgmIAAgqABthQIAnAAABtgmIAAgqABtgmIAnAAAAmhQIAkAAIAjAAABKgmIAAgqAAmgmIAkAAIAjAAAAmgmIAAgqAACgmIAAgqIAkAAAACgmIAkAAAAmADIAkAAIAAgpAACADIAkAAIAAgpAAmAvIAkAAIAAgsIAjAAIAnAAIAfAAAACAvIAkAAIAAgsAACAvIAAgsIAAgpACUAvIAfAAABtAvIAnAAIAAgsIAAgpABtAvIAAgsIAAgpABKAvIAjAAAACBKIAAAlAhFhQIAkAAIAAAqIAjAAAhFgmIAkAAAhFgmIAAgqAiygmIAAgqIAmAAIAkAAIAjAAAhogmIAAgqAiygmIAmAAIAAgqAiMgmIAkAAIAjAAAiyAvIAAgsIAmAAIAkAAIAAgpAiMAvIAkAAIAAgsIAjAAIAkAAIAAgpAiyAvIAmAAIAAgsIAAgpAhFAvIAkAAIAAgsIAjAAAhFAvIAAgsIAAgpAiyADIAAgpAhoAvIAjAAAiyBvIAAhAAghhQIAjAAAghAvIAjAA");
	this.shape.setTransform(0,-11.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#ABABD9","#D7D7EC","#A3A3CE"],[0,0.525,1],-30.8,-39.4,17.4,-8.9).s().p("AACBgIAAglIAAAlIglAAIAAglIAlAAIAmAAIAAAlgACUAgIAAgqIAfAAIAAAqgABtAgIAAgqIAnAAIAAAqgABKAgIAAgqIAAgrIAjAAIAAArIgjAAIAjAAIAAAqgAAmAgIAAgqIAAAqIgkAAIAAgqIgiAAIAAgrIAiAAIAAArIAAgrIAkAAIAAArIAkAAIAAAqgAAmgKIgkAAgAggAgIAAgqIgkAAIAAgrIAAArIAkAAIAAAqIgkAAIAAgqIgkAAIAkAAIAAAqIgkAAIAAgqIAAgrIAkAAIgkAAIAAgqIAAAqIgkAAIAAArIgmAAIAmAAIAkAAIAAAqIgkAAIAAgqIAAAqIgmAAIAAgqIAAgrIAAgqIAmAAIAkAAIAkAAIAAAqIAkAAIgkAAIAAgqIAkAAIAiAAIAAAqIAAgqIAkAAIAkAAIAjAAIAnAAIAAAqIAAgqIAfAAIAAAqIgfAAIAfAAIAAArIgfAAIAAgrIAAArIgnAAIAAgrIAnAAIgnAAIAAgqIAAAqIgjAAIAAgqIAAAqIgkAAIAAgqIAAAqIgkAAIgiAAIAAgqIAAAqIAAArIAiAAIAAAqgAiMg1IAAgqIAAAqIgmAAIAmAAgACUgKgABtgKgAAmgKIAAgrIAkAAIAAArgAACgKgAhEgKgAhogKgAiMgKIAAgrIAkAAIAAArgAiMgKgABtg1gABKg1gAAmg1gAACg1gAhog1g");
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
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("AA8DYIAAmvABaDYIAAmvAAeDYIAAmvAAADYIAAmvAhZDYIAAmvAg7DYIAAmvAgdDYIAAmv");
	this.shape_1.setTransform(0.05,-30.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("AhcCeIC5AAAhcDVIC5AAAhcBpIC5AAAhcA0IC5AAAhcAAIC5AAAhcifIC5AAAhchqIC5AAAhcg1IC5AAAhcjUIC5AA");
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,skewX:0.2105,x:0.05,y:-11.1},0).wait(1).to({skewX:0.4211,x:0.1},0).wait(1).to({skewX:0.6316},0).wait(1).to({skewX:0.8421,x:0.15},0).wait(1).to({skewX:1.0526,x:0.2},0).wait(1).to({skewX:1.2632,x:0.25},0).wait(1).to({skewX:1.4737,x:0.3},0).wait(1).to({skewX:1.6842,x:0.35},0).wait(1).to({skewX:1.8947},0).wait(1).to({skewX:2.1053,x:0.4},0).wait(1).to({skewX:2.3158,x:0.45},0).wait(1).to({skewX:2.5263,x:0.5},0).wait(1).to({skewX:2.7368,x:0.55},0).wait(1).to({skewX:2.9474},0).wait(1).to({skewX:3.1579,x:0.6},0).wait(1).to({skewX:3.3684,x:0.65},0).wait(1).to({skewX:3.5789,x:0.7,y:-11.05},0).wait(1).to({skewX:3.7895,x:0.75},0).wait(1).to({skewX:4},0).wait(1).to({skewX:3.8},0).wait(1).to({skewX:3.6,x:0.7},0).wait(1).to({skewX:3.4,x:0.65,y:-11.1},0).wait(1).to({skewX:3.2,x:0.6},0).wait(1).to({skewX:3},0).wait(1).to({skewX:2.8,x:0.55},0).wait(1).to({skewX:2.6,x:0.5},0).wait(1).to({skewX:2.4,x:0.45},0).wait(1).to({skewX:2.2},0).wait(1).to({skewX:2,x:0.4},0).wait(1).to({skewX:1.8,x:0.35},0).wait(1).to({skewX:1.6,x:0.3},0).wait(1).to({skewX:1.4,x:0.25},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1,x:0.2},0).wait(1).to({skewX:0.8,x:0.15},0).wait(1).to({skewX:0.6,x:0.1},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.2,x:0.05},0).wait(1).to({skewX:0,x:0},0).wait(1).to({skewX:-0.2,x:-0.05},0).wait(1).to({skewX:-0.4,x:-0.1},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.8,x:-0.15},0).wait(1).to({skewX:-1,x:-0.2},0).wait(1).to({skewX:-1.2,x:-0.25},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.6,x:-0.3},0).wait(1).to({skewX:-1.8,x:-0.35},0).wait(1).to({skewX:-2,x:-0.4},0).wait(1).to({skewX:-2.2,x:-0.45},0).wait(1).to({skewX:-2.4},0).wait(1).to({skewX:-2.6,x:-0.5},0).wait(1).to({skewX:-2.8,x:-0.55},0).wait(1).to({skewX:-3,x:-0.6},0).wait(1).to({skewX:-3.2},0).wait(1).to({skewX:-3.4,x:-0.65},0).wait(1).to({skewX:-3.6,x:-0.7,y:-11.05},0).wait(1).to({skewX:-3.8,x:-0.75},0).wait(1).to({skewX:-4},0).wait(1).to({skewX:-3.8},0).wait(1).to({skewX:-3.6,x:-0.7},0).wait(1).to({skewX:-3.4,x:-0.65,y:-11.1},0).wait(1).to({skewX:-3.2,x:-0.6},0).wait(1).to({skewX:-3},0).wait(1).to({skewX:-2.8,x:-0.55},0).wait(1).to({skewX:-2.6,x:-0.5},0).wait(1).to({skewX:-2.4,x:-0.45},0).wait(1).to({skewX:-2.2},0).wait(1).to({skewX:-2,x:-0.4},0).wait(1).to({skewX:-1.8,x:-0.35},0).wait(1).to({skewX:-1.6,x:-0.3},0).wait(1).to({skewX:-1.4,x:-0.25},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1,x:-0.2},0).wait(1).to({skewX:-0.8,x:-0.15},0).wait(1).to({skewX:-0.6,x:-0.1},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.2,x:-0.05},0).wait(1).to({skewX:0,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-22.8,52.2,23.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,skewX:0.0641,y:-11.1},0).wait(1).to({skewX:0.1282},0).wait(1).to({skewX:0.1923,x:0.05},0).wait(1).to({skewX:0.2564},0).wait(1).to({skewX:0.3205},0).wait(1).to({skewX:0.3846},0).wait(1).to({skewX:0.4487,x:0.1},0).wait(1).to({skewX:0.5128},0).wait(1).to({skewX:0.5769},0).wait(1).to({skewX:0.641},0).wait(1).to({skewX:0.7051,x:0.15},0).wait(1).to({skewX:0.7692},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.8974},0).wait(1).to({skewX:0.9615,x:0.2},0).wait(1).to({skewX:1.0256},0).wait(1).to({skewX:1.0897},0).wait(1).to({skewX:1.1538},0).wait(1).to({skewX:1.2179,x:0.25},0).wait(1).to({skewX:1.2821},0).wait(1).to({skewX:1.3462},0).wait(1).to({skewX:1.4103},0).wait(1).to({skewX:1.4744,x:0.3},0).wait(1).to({skewX:1.5385},0).wait(1).to({skewX:1.6026},0).wait(1).to({skewX:1.6667},0).wait(1).to({skewX:1.7308,x:0.35},0).wait(1).to({skewX:1.7949},0).wait(1).to({skewX:1.859},0).wait(1).to({skewX:1.9231},0).wait(1).to({skewX:1.9872,x:0.4},0).wait(1).to({skewX:2.0513},0).wait(1).to({skewX:2.1154},0).wait(1).to({skewX:2.1795},0).wait(1).to({skewX:2.2436,x:0.45},0).wait(1).to({skewX:2.3077},0).wait(1).to({skewX:2.3718},0).wait(1).to({skewX:2.4359},0).wait(1).to({skewX:2.5,x:0.5},0).wait(1).to({skewX:2.4375,x:0.45},0).wait(1).to({skewX:2.375},0).wait(1).to({skewX:2.3125},0).wait(1).to({skewX:2.25},0).wait(1).to({skewX:2.1875,x:0.4},0).wait(1).to({skewX:2.125},0).wait(1).to({skewX:2.0625},0).wait(1).to({skewX:2},0).wait(1).to({skewX:1.9375},0).wait(1).to({skewX:1.875,x:0.35},0).wait(1).to({skewX:1.8125},0).wait(1).to({skewX:1.75},0).wait(1).to({skewX:1.6875},0).wait(1).to({skewX:1.625,x:0.3},0).wait(1).to({skewX:1.5625},0).wait(1).to({skewX:1.5},0).wait(1).to({skewX:1.4375},0).wait(1).to({skewX:1.375,x:0.25},0).wait(1).to({skewX:1.3125},0).wait(1).to({skewX:1.25},0).wait(1).to({skewX:1.1875},0).wait(1).to({skewX:1.125,x:0.2},0).wait(1).to({skewX:1.0625},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9375},0).wait(1).to({skewX:0.875,x:0.15},0).wait(1).to({skewX:0.8125},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.6875},0).wait(1).to({skewX:0.625,x:0.1},0).wait(1).to({skewX:0.5625},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.4375},0).wait(1).to({skewX:0.375,x:0.05},0).wait(1).to({skewX:0.3125},0).wait(1).to({skewX:0.25},0).wait(1).to({skewX:0.1875},0).wait(1).to({skewX:0.125,x:0},0).wait(1).to({skewX:0.0625},0).wait(1).to({skewX:0},0).wait(1).to({skewX:-0.0625},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.1875,x:-0.05},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.3125},0).wait(1).to({skewX:-0.375},0).wait(1).to({skewX:-0.4375,x:-0.1},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.5625},0).wait(1).to({skewX:-0.625},0).wait(1).to({skewX:-0.6875,x:-0.15},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.8125},0).wait(1).to({skewX:-0.875},0).wait(1).to({skewX:-0.9375,x:-0.2},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-1.0625},0).wait(1).to({skewX:-1.125},0).wait(1).to({skewX:-1.1875,x:-0.25},0).wait(1).to({skewX:-1.25},0).wait(1).to({skewX:-1.3125},0).wait(1).to({skewX:-1.375},0).wait(1).to({skewX:-1.4375,x:-0.3},0).wait(1).to({skewX:-1.5},0).wait(1).to({skewX:-1.5625},0).wait(1).to({skewX:-1.625},0).wait(1).to({skewX:-1.6875,x:-0.35},0).wait(1).to({skewX:-1.75},0).wait(1).to({skewX:-1.8125},0).wait(1).to({skewX:-1.875},0).wait(1).to({skewX:-1.9375,x:-0.4},0).wait(1).to({skewX:-2},0).wait(1).to({skewX:-2.0625},0).wait(1).to({skewX:-2.125},0).wait(1).to({skewX:-2.1875},0).wait(1).to({skewX:-2.25,x:-0.45},0).wait(1).to({skewX:-2.3125},0).wait(1).to({skewX:-2.375},0).wait(1).to({skewX:-2.4375},0).wait(1).to({skewX:-2.5,x:-0.5},0).wait(1).to({skewX:-2.4375,x:-0.45},0).wait(1).to({skewX:-2.375},0).wait(1).to({skewX:-2.3125},0).wait(1).to({skewX:-2.25},0).wait(1).to({skewX:-2.1875,x:-0.4},0).wait(1).to({skewX:-2.125},0).wait(1).to({skewX:-2.0625},0).wait(1).to({skewX:-2},0).wait(1).to({skewX:-1.9375},0).wait(1).to({skewX:-1.875,x:-0.35},0).wait(1).to({skewX:-1.8125},0).wait(1).to({skewX:-1.75},0).wait(1).to({skewX:-1.6875},0).wait(1).to({skewX:-1.625,x:-0.3},0).wait(1).to({skewX:-1.5625},0).wait(1).to({skewX:-1.5},0).wait(1).to({skewX:-1.4375},0).wait(1).to({skewX:-1.375,x:-0.25},0).wait(1).to({skewX:-1.3125},0).wait(1).to({skewX:-1.25},0).wait(1).to({skewX:-1.1875},0).wait(1).to({skewX:-1.125,x:-0.2},0).wait(1).to({skewX:-1.0625},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9375},0).wait(1).to({skewX:-0.875,x:-0.15},0).wait(1).to({skewX:-0.8125},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.6875},0).wait(1).to({skewX:-0.625,x:-0.1},0).wait(1).to({skewX:-0.5625},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4375},0).wait(1).to({skewX:-0.375,x:-0.05},0).wait(1).to({skewX:-0.3125},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.1875},0).wait(1).to({skewX:-0.125,x:0},0).wait(1).to({skewX:-0.0625},0).wait(1).to({skewX:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-22.8,52,23.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,skewX:0.1667,x:0.05,y:-11.1},0).wait(1).to({skewX:0.3333},0).wait(1).to({skewX:0.5,x:0.1},0).wait(1).to({skewX:0.6667,x:0.15},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:1,x:0.2},0).wait(1).to({skewX:1.1667,x:0.25},0).wait(1).to({skewX:1.3333},0).wait(1).to({skewX:1.5,x:0.3},0).wait(1).to({skewX:1.35,x:0.25},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.05,x:0.2},0).wait(1).to({skewX:0.9,x:0.15},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.6,x:0.1},0).wait(1).to({skewX:0.45},0).wait(1).to({skewX:0.3,x:0.05},0).wait(1).to({skewX:0.15},0).wait(1).to({skewX:0,x:0},0).wait(1).to({skewX:-0.15,x:-0.05},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.45,x:-0.1},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.75,x:-0.15},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-1.05,x:-0.2},0).wait(1).to({skewX:-1.2,x:-0.25},0).wait(1).to({skewX:-1.35},0).wait(1).to({skewX:-1.5,x:-0.3},0).wait(1).to({skewX:-1.35,x:-0.25},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.05,x:-0.2},0).wait(1).to({skewX:-0.9,x:-0.15},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.6,x:-0.1},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:0,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-22.8,51.6,23.8);


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

	
	var _tweenStr_0 = cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,rotation:0.042,y:-10.95},0).wait(1).to({rotation:0,skewX:0.084},0).wait(1).to({skewX:0.1261},0).wait(1).to({skewX:0.1681,x:0.15},0).wait(1).to({skewX:0.2101},0).wait(1).to({skewX:0.2521},0).wait(1).to({skewX:0.2941},0).wait(1).to({skewX:0.3361},0).wait(1).to({skewX:0.3782},0).wait(1).to({skewX:0.4202,x:0.2},0).wait(1).to({skewX:0.4622},0).wait(1).to({skewX:0.5042},0).wait(1).to({skewX:0.5462},0).wait(1).to({skewX:0.5882},0).wait(1).to({skewX:0.6303},0).wait(1).to({skewX:0.6723,x:0.25},0).wait(1).to({skewX:0.7143},0).wait(1).to({skewX:0.7563},0).wait(1).to({skewX:0.7983},0).wait(1).to({skewX:0.8403},0).wait(1).to({skewX:0.8824},0).wait(1).to({skewX:0.9244,x:0.3},0).wait(1).to({skewX:0.9664},0).wait(1).to({skewX:1.0084},0).wait(1).to({skewX:1.0504},0).wait(1).to({skewX:1.0924},0).wait(1).to({skewX:1.1345},0).wait(1).to({skewX:1.1765,x:0.35},0).wait(1).to({skewX:1.2185},0).wait(1).to({skewX:1.2605},0).wait(1).to({skewX:1.3025},0).wait(1).to({skewX:1.3445},0).wait(1).to({skewX:1.3866},0).wait(1).to({skewX:1.4286,x:0.4},0).wait(1).to({skewX:1.4706},0).wait(1).to({skewX:1.5126},0).wait(1).to({skewX:1.5546},0).wait(1).to({skewX:1.5966},0).wait(1).to({skewX:1.6387},0).wait(1).to({skewX:1.6807,x:0.45},0).wait(1).to({skewX:1.7227},0).wait(1).to({skewX:1.7647},0).wait(1).to({skewX:1.8067},0).wait(1).to({skewX:1.8487},0).wait(1).to({skewX:1.8908},0).wait(1).to({skewX:1.9328},0).wait(1).to({skewX:1.9748,x:0.5},0).wait(1).to({skewX:2.0168},0).wait(1).to({skewX:2.0588},0).wait(1).to({skewX:2.1008},0).wait(1).to({skewX:2.1429},0).wait(1).to({skewX:2.1849},0).wait(1).to({skewX:2.2269,x:0.55},0).wait(1).to({skewX:2.2689},0).wait(1).to({skewX:2.3109},0).wait(1).to({skewX:2.3529},0).wait(1).to({skewX:2.395},0).wait(1).to({skewX:2.437},0).wait(1).to({skewX:2.479,x:0.6},0).wait(1).to({skewX:2.521},0).wait(1).to({skewX:2.563},0).wait(1).to({skewX:2.605},0).wait(1).to({skewX:2.6471},0).wait(1).to({skewX:2.6891},0).wait(1).to({skewX:2.7311,x:0.65},0).wait(1).to({skewX:2.7731},0).wait(1).to({skewX:2.8151},0).wait(1).to({skewX:2.8571},0).wait(1).to({skewX:2.8992},0).wait(1).to({skewX:2.9412},0).wait(1).to({skewX:2.9832,x:0.7},0).wait(1).to({skewX:3.0252},0).wait(1).to({skewX:3.0672},0).wait(1).to({skewX:3.1092},0).wait(1).to({skewX:3.1513},0).wait(1).to({skewX:3.1933},0).wait(1).to({skewX:3.2353,x:0.75},0).wait(1).to({skewX:3.2773},0).wait(1).to({skewX:3.3193},0).wait(1).to({skewX:3.3613},0).wait(1).to({skewX:3.4034},0).wait(1).to({skewX:3.4454},0).wait(1).to({skewX:3.4874},0).wait(1).to({skewX:3.5294,x:0.8},0).wait(1).to({skewX:3.5714,y:-10.9},0).wait(1).to({skewX:3.6134},0).wait(1).to({skewX:3.6555},0).wait(1).to({skewX:3.6975},0).wait(1).to({skewX:3.7395},0).wait(1).to({skewX:3.7815,x:0.85},0).wait(1).to({skewX:3.8235},0).wait(1).to({skewX:3.8655},0).wait(1).to({skewX:3.9076},0).wait(1).to({skewX:3.9496},0).wait(1).to({skewX:3.9916},0).wait(1).to({skewX:4.0336,x:0.9},0).wait(1).to({skewX:4.0756},0).wait(1).to({skewX:4.1176},0).wait(1).to({skewX:4.1597},0).wait(1).to({skewX:4.2017},0).wait(1).to({skewX:4.2437},0).wait(1).to({skewX:4.2857,x:0.95},0).wait(1).to({skewX:4.3277},0).wait(1).to({skewX:4.3697},0).wait(1).to({skewX:4.4118},0).wait(1).to({skewX:4.4538},0).wait(1).to({skewX:4.4958},0).wait(1).to({skewX:4.5378,x:1},0).wait(1).to({skewX:4.5798},0).wait(1).to({skewX:4.6218},0).wait(1).to({skewX:4.6639},0).wait(1).to({skewX:4.7059},0).wait(1).to({skewX:4.7479},0).wait(1).to({skewX:4.7899,x:1.05},0).wait(1).to({skewX:4.8319},0).wait(1).to({skewX:4.8739},0).wait(1).to({skewX:4.916},0).wait(1).to({skewX:4.958},0).wait(1).to({skewX:5},0).wait(1).to({skewX:0.3,x:0.15,y:-10.95},0).wait(1).to({skewX:0.2975},0).wait(1).to({skewX:0.295},0).wait(1).to({skewX:0.2924},0).wait(1).to({skewX:0.2899},0).wait(1).to({skewX:0.2874},0).wait(1).to({skewX:0.2849},0).wait(1).to({skewX:0.2824},0).wait(1).to({skewX:0.2798},0).wait(1).to({skewX:0.2773},0).wait(1).to({skewX:0.2748},0).wait(1).to({skewX:0.2723},0).wait(1).to({skewX:0.2697},0).wait(1).to({skewX:0.2672},0).wait(1).to({skewX:0.2647},0).wait(1).to({skewX:0.2622},0).wait(1).to({skewX:0.2597},0).wait(1).to({skewX:0.2571},0).wait(1).to({skewX:0.2546},0).wait(1).to({skewX:0.2521},0).wait(1).to({skewX:0.2496},0).wait(1).to({skewX:0.2471},0).wait(1).to({skewX:0.2445},0).wait(1).to({skewX:0.242},0).wait(1).to({skewX:0.2395},0).wait(1).to({skewX:0.237},0).wait(1).to({skewX:0.2345},0).wait(1).to({skewX:0.2319},0).wait(1).to({skewX:0.2294},0).wait(1).to({skewX:0.2269},0).wait(1).to({skewX:0.2244},0).wait(1).to({skewX:0.2218},0).wait(1).to({skewX:0.2193},0).wait(1).to({skewX:0.2168},0).wait(1).to({skewX:0.2143},0).wait(1).to({skewX:0.2118},0).wait(1).to({skewX:0.2092},0).wait(1).to({skewX:0.2067},0).wait(1).to({skewX:0.2042},0).wait(1).to({skewX:0.2017},0).wait(1).to({skewX:0.1992},0).wait(1).to({skewX:0.1966},0).wait(1).to({skewX:0.1941},0).wait(1).to({skewX:0.1916},0).wait(1).to({skewX:0.1891},0).wait(1).to({skewX:0.1866},0).wait(1).to({skewX:0.184},0).wait(1).to({skewX:0.1815},0).wait(1).to({skewX:0.179},0).wait(1).to({skewX:0.1765},0).wait(1).to({skewX:0.1739},0).wait(1).to({skewX:0.1714},0).wait(1).to({skewX:0.1689},0).wait(1).to({skewX:0.1664},0).wait(1).to({skewX:0.1639},0).wait(1).to({skewX:0.1613},0).wait(1).to({skewX:0.1588},0).wait(1).to({skewX:0.1563},0).wait(1).to({skewX:0.1538},0).wait(1).to({skewX:0.1513},0).wait(1).to({skewX:0.1487},0).wait(1).to({skewX:0.1462},0).wait(1).to({skewX:0.1437},0).wait(1).to({skewX:0.1412},0).wait(1).to({skewX:0.1387},0).wait(1).to({skewX:0.1361},0).wait(1).to({skewX:0.1336},0).wait(1).to({skewX:0.1311},0).wait(1).to({skewX:0.1286,x:0.1},0).wait(1).to({skewX:0.1261},0).wait(1).to({skewX:0.1235},0).wait(1).to({skewX:0.121},0).wait(1).to({skewX:0.1185},0).wait(1).to({skewX:0.116},0).wait(1).to({skewX:0.1134},0).wait(1).to({skewX:0.1109},0).wait(1).to({skewX:0.1084},0).wait(1).to({skewX:0.1059},0).wait(1).to({skewX:0.1034},0).wait(1).to({skewX:0.1008},0).wait(1).to({skewX:0.0983},0).wait(1).to({skewX:0.0958},0).wait(1).to({skewX:0.0933},0).wait(1).to({skewX:0.0908},0).wait(1).to({skewX:0.0882},0).wait(1).to({skewX:0.0857},0).wait(1).to({skewX:0.0832},0).wait(1).to({skewX:0.0807},0).wait(1).to({skewX:0.0782},0).wait(1).to({skewX:0.0756},0).wait(1).to({skewX:0.0731},0).wait(1).to({skewX:0.0706},0).wait(1).to({skewX:0.0681},0).wait(1).to({skewX:0.0655},0).wait(1).to({skewX:0.063},0).wait(1).to({skewX:0.0605},0).wait(1).to({skewX:0.058},0).wait(1).to({skewX:0.0555},0).wait(1).to({skewX:0.0529},0).wait(1).to({skewX:0.0504},0).wait(1).to({rotation:0.0479,skewX:0},0).wait(1).to({rotation:0.0454},0).wait(1).to({rotation:0.0429},0).wait(1).to({rotation:0.0403},0).wait(1).to({rotation:0.0378},0).wait(1).to({rotation:0.0353},0).wait(1).to({rotation:0.0328},0).wait(1).to({rotation:0.0303},0).wait(1).to({rotation:0.0277},0).wait(1).to({rotation:0.0252},0).wait(1).to({rotation:0.0227},0).wait(1).to({rotation:0.0202},0).wait(1).to({rotation:0.0176},0).wait(1).to({rotation:0.0151},0).wait(1).to({rotation:0.0126},0).wait(1).to({rotation:0.0101},0).wait(1).to({rotation:0.0076},0).wait(1).to({rotation:0.005},0).wait(1).to({rotation:0.0025},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0025},0).wait(1).to({rotation:-0.005},0).wait(1).to({rotation:-0.0074},0).wait(1).to({rotation:-0.0099},0).wait(1).to({rotation:-0.0124},0).wait(1).to({rotation:-0.0149},0).wait(1).to({rotation:-0.0174},0).wait(1).to({rotation:-0.0198},0).wait(1).to({rotation:-0.0223},0).wait(1).to({rotation:-0.0248},0).wait(1).to({rotation:-0.0273},0).wait(1).to({rotation:-0.0298},0).wait(1).to({rotation:-0.0322},0).wait(1).to({rotation:-0.0347},0).wait(1).to({rotation:-0.0372},0).wait(1).to({rotation:-0.0397},0).wait(1).to({rotation:-0.0421},0).wait(1).to({rotation:-0.0446},0).wait(1).to({rotation:-0.0471},0).wait(1).to({rotation:-0.0496},0).wait(1).to({rotation:0,skewX:-0.0521},0).wait(1).to({skewX:-0.0545},0).wait(1).to({skewX:-0.057},0).wait(1).to({skewX:-0.0595},0).wait(1).to({skewX:-0.062},0).wait(1).to({skewX:-0.0645},0).wait(1).to({skewX:-0.0669},0).wait(1).to({skewX:-0.0694},0).wait(1).to({skewX:-0.0719},0).wait(1).to({skewX:-0.0744},0).wait(1).to({skewX:-0.0769},0).wait(1).to({skewX:-0.0793},0).wait(1).to({skewX:-0.0818},0).wait(1).to({skewX:-0.0843},0).wait(1).to({skewX:-0.0868},0).wait(1).to({skewX:-0.0893},0).wait(1).to({skewX:-0.0917},0).wait(1).to({skewX:-0.0942},0).wait(1).to({skewX:-0.0967},0).wait(1).to({skewX:-0.0992},0).wait(1).to({skewX:-0.1017},0).wait(1).to({skewX:-0.1041},0).wait(1).to({skewX:-0.1066},0).wait(1).to({skewX:-0.1091},0).wait(1).to({skewX:-0.1116},0).wait(1).to({skewX:-0.114},0).wait(1).to({skewX:-0.1165},0).wait(1).to({skewX:-0.119},0).wait(1).to({skewX:-0.1215},0).wait(1).to({skewX:-0.124},0).wait(1).to({skewX:-0.1264},0).wait(1).to({skewX:-0.1289},0).wait(1).to({skewX:-0.1314,x:0.05},0).wait(1).to({skewX:-0.1339},0).wait(1).to({skewX:-0.1364},0).wait(1).to({skewX:-0.1388},0).wait(1).to({skewX:-0.1413},0).wait(1).to({skewX:-0.1438},0).wait(1).to({skewX:-0.1463},0).wait(1).to({skewX:-0.1488},0).wait(1).to({skewX:-0.1512},0).wait(1).to({skewX:-0.1537},0).wait(1).to({skewX:-0.1562},0).wait(1).to({skewX:-0.1587},0).wait(1).to({skewX:-0.1612},0).wait(1).to({skewX:-0.1636},0).wait(1).to({skewX:-0.1661},0).wait(1).to({skewX:-0.1686},0).wait(1).to({skewX:-0.1711},0).wait(1).to({skewX:-0.1736},0).wait(1).to({skewX:-0.176},0).wait(1).to({skewX:-0.1785},0).wait(1).to({skewX:-0.181},0).wait(1).to({skewX:-0.1835},0).wait(1).to({skewX:-0.186},0).wait(1).to({skewX:-0.1884},0).wait(1).to({skewX:-0.1909},0).wait(1).to({skewX:-0.1934},0).wait(1).to({skewX:-0.1959},0).wait(1).to({skewX:-0.1983},0).wait(1).to({skewX:-0.2008},0).wait(1).to({skewX:-0.2033},0).wait(1).to({skewX:-0.2058},0).wait(1).to({skewX:-0.2083},0).wait(1).to({skewX:-0.2107},0).wait(1).to({skewX:-0.2132},0).wait(1).to({skewX:-0.2157},0).wait(1).to({skewX:-0.2182},0).wait(1).to({skewX:-0.2207},0).wait(1).to({skewX:-0.2231},0).wait(1).to({skewX:-0.2256},0).wait(1).to({skewX:-0.2281},0).wait(1).to({skewX:-0.2306},0).wait(1).to({skewX:-0.2331},0).wait(1).to({skewX:-0.2355},0).wait(1).to({skewX:-0.238},0).wait(1).to({skewX:-0.2405},0).wait(1).to({skewX:-0.243},0).wait(1).to({skewX:-0.2455},0).wait(1).to({skewX:-0.2479},0).wait(1).to({skewX:-0.2504},0).wait(1).to({skewX:-0.2529},0).wait(1).to({skewX:-0.2554},0).wait(1).to({skewX:-0.2579},0).wait(1).to({skewX:-0.2603},0).wait(1).to({skewX:-0.2628},0).wait(1).to({skewX:-0.2653},0).wait(1).to({skewX:-0.2678},0).wait(1).to({skewX:-0.2702},0).wait(1).to({skewX:-0.2727},0).wait(1).to({skewX:-0.2752},0).wait(1).to({skewX:-0.2777},0).wait(1).to({skewX:-0.2802},0).wait(1).to({skewX:-0.2826},0).wait(1).to({skewX:-0.2851},0).wait(1).to({skewX:-0.2876},0).wait(1).to({skewX:-0.2901},0).wait(1).to({skewX:-0.2926},0).wait(1).to({skewX:-0.295},0).wait(1).to({skewX:-0.2975},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.2975},0).wait(1).to({skewX:-0.295},0).wait(1).to({skewX:-0.2925},0).wait(1).to({skewX:-0.29},0).wait(1).to({skewX:-0.2875},0).wait(1).to({skewX:-0.285},0).wait(1).to({skewX:-0.2825},0).wait(1).to({skewX:-0.28},0).wait(1).to({skewX:-0.2775},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.2725},0).wait(1).to({skewX:-0.27},0).wait(1).to({skewX:-0.2675},0).wait(1).to({skewX:-0.265},0).wait(1).to({skewX:-0.2625},0).wait(1).to({skewX:-0.26},0).wait(1).to({skewX:-0.2575},0).wait(1).to({skewX:-0.255},0).wait(1).to({skewX:-0.2525},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.2475},0).wait(1).to({skewX:-0.245},0).wait(1).to({skewX:-0.2425},0).wait(1).to({skewX:-0.24},0).wait(1).to({skewX:-0.2375},0).wait(1).to({skewX:-0.235},0).wait(1).to({skewX:-0.2325},0).wait(1).to({skewX:-0.23},0).wait(1).to({skewX:-0.2275},0).wait(1).to({skewX:-0.225},0).wait(1).to({skewX:-0.2225},0).wait(1).to({skewX:-0.22},0).wait(1).to({skewX:-0.2175},0).wait(1).to({skewX:-0.215},0).wait(1).to({skewX:-0.2125},0).wait(1).to({skewX:-0.21},0).wait(1).to({skewX:-0.2075},0).wait(1).to({skewX:-0.205},0).wait(1);
	this.timeline.addTween(_tweenStr_0.to({skewX:-0.2025},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1975},0).wait(1).to({skewX:-0.195},0).wait(1).to({skewX:-0.1925},0).wait(1).to({skewX:-0.19},0).wait(1).to({skewX:-0.1875},0).wait(1).to({skewX:-0.185},0).wait(1).to({skewX:-0.1825},0).wait(1).to({skewX:-0.18},0).wait(1).to({skewX:-0.1775},0).wait(1).to({skewX:-0.175},0).wait(1).to({skewX:-0.1725},0).wait(1).to({skewX:-0.17},0).wait(1).to({skewX:-0.1675},0).wait(1).to({skewX:-0.165},0).wait(1).to({skewX:-0.1625},0).wait(1).to({skewX:-0.16},0).wait(1).to({skewX:-0.1575},0).wait(1).to({skewX:-0.155},0).wait(1).to({skewX:-0.1525},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.1475},0).wait(1).to({skewX:-0.145},0).wait(1).to({skewX:-0.1425},0).wait(1).to({skewX:-0.14},0).wait(1).to({skewX:-0.1375},0).wait(1).to({skewX:-0.135},0).wait(1).to({skewX:-0.1325},0).wait(1).to({skewX:-0.13},0).wait(1).to({skewX:-0.1275,x:0.1},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.1225},0).wait(1).to({skewX:-0.12},0).wait(1).to({skewX:-0.1175},0).wait(1).to({skewX:-0.115},0).wait(1).to({skewX:-0.1125},0).wait(1).to({skewX:-0.11},0).wait(1).to({skewX:-0.1075},0).wait(1).to({skewX:-0.105},0).wait(1).to({skewX:-0.1025},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.0975},0).wait(1).to({skewX:-0.095},0).wait(1).to({skewX:-0.0925},0).wait(1).to({skewX:-0.09},0).wait(1).to({skewX:-0.0875},0).wait(1).to({skewX:-0.085},0).wait(1).to({skewX:-0.0825},0).wait(1).to({skewX:-0.08},0).wait(1).to({skewX:-0.0775},0).wait(1).to({skewX:-0.075},0).wait(1).to({skewX:-0.0725},0).wait(1).to({skewX:-0.07},0).wait(1).to({skewX:-0.0675},0).wait(1).to({skewX:-0.065},0).wait(1).to({skewX:-0.0625},0).wait(1).to({skewX:-0.06},0).wait(1).to({skewX:-0.0575},0).wait(1).to({skewX:-0.055},0).wait(1).to({skewX:-0.0525},0).wait(1).to({rotation:-0.05,skewX:0},0).wait(1).to({rotation:-0.0475},0).wait(1).to({rotation:-0.045},0).wait(1).to({rotation:-0.0425},0).wait(1).to({rotation:-0.04},0).wait(1).to({rotation:-0.0375},0).wait(1).to({rotation:-0.035},0).wait(1).to({rotation:-0.0325},0).wait(1).to({rotation:-0.03},0).wait(1).to({rotation:-0.0275},0).wait(1).to({rotation:-0.025},0).wait(1).to({rotation:-0.0225},0).wait(1).to({rotation:-0.02},0).wait(1).to({rotation:-0.0175},0).wait(1).to({rotation:-0.015},0).wait(1).to({rotation:-0.0125},0).wait(1).to({rotation:-0.01},0).wait(1).to({rotation:-0.0075},0).wait(1).to({rotation:-0.005},0).wait(1).to({rotation:-0.0025},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-22.6,51.4,23.8);


(lib.sba3 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(11.25,9.7,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,rotation:0.005,x:11.2,y:-1.4},0).wait(1).to({rotation:0.0099},0).wait(1).to({rotation:0.0149},0).wait(1).to({rotation:0.0198},0).wait(1).to({rotation:0.0248},0).wait(1).to({rotation:0.0297},0).wait(1).to({rotation:0.0347},0).wait(1).to({rotation:0.0396},0).wait(1).to({rotation:0.0446},0).wait(1).to({rotation:0.0495},0).wait(1).to({rotation:0,skewX:0.0545},0).wait(1).to({skewX:0.0594},0).wait(1).to({skewX:0.0644},0).wait(1).to({skewX:0.0693},0).wait(1).to({skewX:0.0743},0).wait(1).to({skewX:0.0792},0).wait(1).to({skewX:0.0842},0).wait(1).to({skewX:0.0891},0).wait(1).to({skewX:0.0941},0).wait(1).to({skewX:0.099},0).wait(1).to({skewX:0.104,y:-1.35},0).wait(1).to({skewX:0.1089},0).wait(1).to({skewX:0.1139},0).wait(1).to({skewX:0.1188},0).wait(1).to({skewX:0.1238},0).wait(1).to({skewX:0.1287},0).wait(1).to({skewX:0.1337,x:11.25},0).wait(1).to({skewX:0.1386},0).wait(1).to({skewX:0.1436},0).wait(1).to({skewX:0.1485},0).wait(1).to({skewX:0.1535},0).wait(1).to({skewX:0.1584},0).wait(1).to({skewX:0.1634},0).wait(1).to({skewX:0.1683},0).wait(1).to({skewX:0.1733},0).wait(1).to({skewX:0.1782},0).wait(1).to({skewX:0.1832},0).wait(1).to({skewX:0.1881},0).wait(1).to({skewX:0.1931},0).wait(1).to({skewX:0.198},0).wait(1).to({skewX:0.203,y:-1.3},0).wait(1).to({skewX:0.2079},0).wait(1).to({skewX:0.2129},0).wait(1).to({skewX:0.2178},0).wait(1).to({skewX:0.2228},0).wait(1).to({skewX:0.2277},0).wait(1).to({skewX:0.2327},0).wait(1).to({skewX:0.2376},0).wait(1).to({skewX:0.2426},0).wait(1).to({skewX:0.2475},0).wait(1).to({skewX:0.2525},0).wait(1).to({skewX:0.2574},0).wait(1).to({skewX:0.2624},0).wait(1).to({skewX:0.2673},0).wait(1).to({skewX:0.2723},0).wait(1).to({skewX:0.2772},0).wait(1).to({skewX:0.2822},0).wait(1).to({skewX:0.2871},0).wait(1).to({skewX:0.2921},0).wait(1).to({skewX:0.297},0).wait(1).to({skewX:0.302,y:-1.25},0).wait(1).to({skewX:0.3069},0).wait(1).to({skewX:0.3119},0).wait(1).to({skewX:0.3168},0).wait(1).to({skewX:0.3218},0).wait(1).to({skewX:0.3267},0).wait(1).to({skewX:0.3317},0).wait(1).to({skewX:0.3366},0).wait(1).to({skewX:0.3416},0).wait(1).to({skewX:0.3465},0).wait(1).to({skewX:0.3515},0).wait(1).to({skewX:0.3564},0).wait(1).to({skewX:0.3614},0).wait(1).to({skewX:0.3663},0).wait(1).to({skewX:0.3713},0).wait(1).to({skewX:0.3762},0).wait(1).to({skewX:0.3812},0).wait(1).to({skewX:0.3861},0).wait(1).to({skewX:0.3911,x:11.3},0).wait(1).to({skewX:0.396},0).wait(1).to({skewX:0.401,y:-1.2},0).wait(1).to({skewX:0.4059},0).wait(1).to({skewX:0.4109},0).wait(1).to({skewX:0.4158},0).wait(1).to({skewX:0.4208},0).wait(1).to({skewX:0.4257},0).wait(1).to({skewX:0.4307},0).wait(1).to({skewX:0.4356},0).wait(1).to({skewX:0.4406},0).wait(1).to({skewX:0.4455},0).wait(1).to({skewX:0.4505},0).wait(1).to({skewX:0.4554},0).wait(1).to({skewX:0.4604},0).wait(1).to({skewX:0.4653},0).wait(1).to({skewX:0.4703},0).wait(1).to({skewX:0.4752},0).wait(1).to({skewX:0.4802},0).wait(1).to({skewX:0.4851},0).wait(1).to({skewX:0.4901},0).wait(1).to({skewX:0.495},0).wait(1).to({skewX:0.5,y:-1.15},0).wait(1).to({skewX:0.4949},0).wait(1).to({skewX:0.4898},0).wait(1).to({skewX:0.4847},0).wait(1).to({skewX:0.4796},0).wait(1).to({skewX:0.4745},0).wait(1).to({skewX:0.4694},0).wait(1).to({skewX:0.4643},0).wait(1).to({skewX:0.4592},0).wait(1).to({skewX:0.4541},0).wait(1).to({skewX:0.449},0).wait(1).to({skewX:0.4439},0).wait(1).to({skewX:0.4388},0).wait(1).to({skewX:0.4337},0).wait(1).to({skewX:0.4286},0).wait(1).to({skewX:0.4235},0).wait(1).to({skewX:0.4184},0).wait(1).to({skewX:0.4133},0).wait(1).to({skewX:0.4082},0).wait(1).to({skewX:0.4031},0).wait(1).to({skewX:0.398},0).wait(1).to({skewX:0.3929},0).wait(1).to({skewX:0.3878},0).wait(1).to({skewX:0.3827,x:11.25},0).wait(1).to({skewX:0.3776},0).wait(1).to({skewX:0.3724},0).wait(1).to({skewX:0.3673},0).wait(1).to({skewX:0.3622},0).wait(1).to({skewX:0.3571},0).wait(1).to({skewX:0.352},0).wait(1).to({skewX:0.3469},0).wait(1).to({skewX:0.3418},0).wait(1).to({skewX:0.3367},0).wait(1).to({skewX:0.3316},0).wait(1).to({skewX:0.3265},0).wait(1).to({skewX:0.3214},0).wait(1).to({skewX:0.3163},0).wait(1).to({skewX:0.3112},0).wait(1).to({skewX:0.3061},0).wait(1).to({skewX:0.301},0).wait(1).to({skewX:0.2959},0).wait(1).to({skewX:0.2908},0).wait(1).to({skewX:0.2857},0).wait(1).to({skewX:0.2806},0).wait(1).to({skewX:0.2755},0).wait(1).to({skewX:0.2704},0).wait(1).to({skewX:0.2653},0).wait(1).to({skewX:0.2602},0).wait(1).to({skewX:0.2551},0).wait(1).to({skewX:0.25},0).wait(1).to({skewX:0.2449},0).wait(1).to({skewX:0.2398},0).wait(1).to({skewX:0.2347},0).wait(1).to({skewX:0.2296},0).wait(1).to({skewX:0.2245},0).wait(1).to({skewX:0.2194},0).wait(1).to({skewX:0.2143},0).wait(1).to({skewX:0.2092},0).wait(1).to({skewX:0.2041},0).wait(1).to({skewX:0.199},0).wait(1).to({skewX:0.1939},0).wait(1).to({skewX:0.1888},0).wait(1).to({skewX:0.1837},0).wait(1).to({skewX:0.1786},0).wait(1).to({skewX:0.1735},0).wait(1).to({skewX:0.1684},0).wait(1).to({skewX:0.1633},0).wait(1).to({skewX:0.1582},0).wait(1).to({skewX:0.1531},0).wait(1).to({skewX:0.148},0).wait(1).to({skewX:0.1429},0).wait(1).to({skewX:0.1378},0).wait(1).to({skewX:0.1327},0).wait(1).to({skewX:0.1276,x:11.2},0).wait(1).to({skewX:0.1224},0).wait(1).to({skewX:0.1173},0).wait(1).to({skewX:0.1122},0).wait(1).to({skewX:0.1071},0).wait(1).to({skewX:0.102},0).wait(1).to({skewX:0.0969},0).wait(1).to({skewX:0.0918},0).wait(1).to({skewX:0.0867},0).wait(1).to({skewX:0.0816},0).wait(1).to({skewX:0.0765},0).wait(1).to({skewX:0.0714},0).wait(1).to({skewX:0.0663},0).wait(1).to({skewX:0.0612},0).wait(1).to({skewX:0.0561},0).wait(1).to({skewX:0.051},0).wait(1).to({rotation:0.0459,skewX:0},0).wait(1).to({rotation:0.0408},0).wait(1).to({rotation:0.0357},0).wait(1).to({rotation:0.0306},0).wait(1).to({rotation:0.0255},0).wait(1).to({rotation:0.0204},0).wait(1).to({rotation:0.0153},0).wait(1).to({rotation:0.0102},0).wait(1).to({rotation:0.0051},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0078},0).wait(1).to({rotation:-0.0156},0).wait(1).to({rotation:-0.0234},0).wait(1).to({rotation:-0.0312},0).wait(1).to({rotation:-0.0391},0).wait(1).to({rotation:-0.0469},0).wait(1).to({rotation:0,skewX:-0.0547},0).wait(1).to({skewX:-0.0625},0).wait(1).to({skewX:-0.0703},0).wait(1).to({skewX:-0.0781},0).wait(1).to({skewX:-0.0859},0).wait(1).to({skewX:-0.0937},0).wait(1).to({skewX:-0.1016},0).wait(1).to({skewX:-0.1094},0).wait(1).to({skewX:-0.1172},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.1328,x:11.15},0).wait(1).to({skewX:-0.1406},0).wait(1).to({skewX:-0.1484},0).wait(1).to({skewX:-0.1562},0).wait(1).to({skewX:-0.1641},0).wait(1).to({skewX:-0.1719},0).wait(1).to({skewX:-0.1797},0).wait(1).to({skewX:-0.1875},0).wait(1).to({skewX:-0.1953},0).wait(1).to({skewX:-0.2031},0).wait(1).to({skewX:-0.2109},0).wait(1).to({skewX:-0.2187},0).wait(1).to({skewX:-0.2266},0).wait(1).to({skewX:-0.2344},0).wait(1).to({skewX:-0.2422},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.2578},0).wait(1).to({skewX:-0.2656},0).wait(1).to({skewX:-0.2734},0).wait(1).to({skewX:-0.2812},0).wait(1).to({skewX:-0.2891},0).wait(1).to({skewX:-0.2969},0).wait(1).to({skewX:-0.3047},0).wait(1).to({skewX:-0.3125},0).wait(1).to({skewX:-0.3203},0).wait(1).to({skewX:-0.3281},0).wait(1).to({skewX:-0.3359},0).wait(1).to({skewX:-0.3437},0).wait(1).to({skewX:-0.3516},0).wait(1).to({skewX:-0.3594},0).wait(1).to({skewX:-0.3672},0).wait(1).to({skewX:-0.375},0).wait(1).to({skewX:-0.3828},0).wait(1).to({skewX:-0.3906,x:11.1},0).wait(1).to({skewX:-0.3984},0).wait(1).to({skewX:-0.4062},0).wait(1).to({skewX:-0.4141},0).wait(1).to({skewX:-0.4219},0).wait(1).to({skewX:-0.4297},0).wait(1).to({skewX:-0.4375},0).wait(1).to({skewX:-0.4453},0).wait(1).to({skewX:-0.4531},0).wait(1).to({skewX:-0.4609},0).wait(1).to({skewX:-0.4687},0).wait(1).to({skewX:-0.4766},0).wait(1).to({skewX:-0.4844},0).wait(1).to({skewX:-0.4922},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4861},0).wait(1).to({skewX:-0.4722},0).wait(1).to({skewX:-0.4583},0).wait(1).to({skewX:-0.4444},0).wait(1).to({skewX:-0.4306},0).wait(1).to({skewX:-0.4167},0).wait(1).to({skewX:-0.4028},0).wait(1).to({skewX:-0.3889},0).wait(1).to({skewX:-0.375,x:11.15},0).wait(1).to({skewX:-0.3611},0).wait(1).to({skewX:-0.3472},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3194},0).wait(1).to({skewX:-0.3056},0).wait(1).to({skewX:-0.2917},0).wait(1).to({skewX:-0.2778},0).wait(1).to({skewX:-0.2639},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.2361},0).wait(1).to({skewX:-0.2222},0).wait(1).to({skewX:-0.2083},0).wait(1).to({skewX:-0.1944},0).wait(1).to({skewX:-0.1806},0).wait(1).to({skewX:-0.1667},0).wait(1).to({skewX:-0.1528},0).wait(1).to({skewX:-0.1389},0).wait(1).to({skewX:-0.125,x:11.2},0).wait(1).to({skewX:-0.1111},0).wait(1).to({skewX:-0.0972},0).wait(1).to({skewX:-0.0833},0).wait(1).to({skewX:-0.0694},0).wait(1).to({skewX:-0.0556},0).wait(1).to({rotation:-0.0417,skewX:0},0).wait(1).to({rotation:-0.0278},0).wait(1).to({rotation:-0.0139},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-13,51,24);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,skewX:0.375,x:0.1,y:-11.1},0).wait(1).to({skewX:0.75,x:0.2},0).wait(1).to({skewX:1.125,x:0.25},0).wait(1).to({skewX:1.5,x:0.35},0).wait(1).to({skewX:1.15,x:0.25},0).wait(1).to({skewX:0.8,x:0.2},0).wait(1).to({skewX:0.45,x:0.15},0).wait(1).to({skewX:0.1,x:0.05},0).wait(1).to({skewX:-0.25,x:0},0).wait(1).to({skewX:-0.5,x:-0.05},0).wait(1).to({skewX:-0.75,x:-0.1},0).wait(1).to({skewX:-1,x:-0.15},0).wait(1).to({skewX:-1.25,x:-0.2},0).wait(1).to({skewX:-1.5,x:-0.25},0).wait(1).to({skewX:-1.2,x:-0.2},0).wait(1).to({skewX:-0.9,x:-0.1},0).wait(1).to({skewX:-0.6,x:-0.05},0).wait(1).to({skewX:-0.3,x:0},0).wait(1).to({skewX:0,x:0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-22.8,51.599999999999994,23.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-11.1,rotation:0.0127,y:-11.1},0).wait(1).to({rotation:0.0253},0).wait(1).to({rotation:0.038},0).wait(1).to({rotation:0,skewX:0.0506},0).wait(1).to({skewX:0.0633},0).wait(1).to({skewX:0.0759},0).wait(1).to({skewX:0.0886},0).wait(1).to({skewX:0.1013},0).wait(1).to({skewX:0.1139},0).wait(1).to({skewX:0.1266},0).wait(1).to({skewX:0.1392,x:0.05},0).wait(1).to({skewX:0.1519},0).wait(1).to({skewX:0.1646},0).wait(1).to({skewX:0.1772},0).wait(1).to({skewX:0.1899},0).wait(1).to({skewX:0.2025},0).wait(1).to({skewX:0.2152},0).wait(1).to({skewX:0.2278},0).wait(1).to({skewX:0.2405},0).wait(1).to({skewX:0.2532},0).wait(1).to({skewX:0.2658},0).wait(1).to({skewX:0.2785},0).wait(1).to({skewX:0.2911},0).wait(1).to({skewX:0.3038},0).wait(1).to({skewX:0.3165},0).wait(1).to({skewX:0.3291},0).wait(1).to({skewX:0.3418},0).wait(1).to({skewX:0.3544},0).wait(1).to({skewX:0.3671},0).wait(1).to({skewX:0.3797},0).wait(1).to({skewX:0.3924,x:0.1},0).wait(1).to({skewX:0.4051},0).wait(1).to({skewX:0.4177},0).wait(1).to({skewX:0.4304},0).wait(1).to({skewX:0.443},0).wait(1).to({skewX:0.4557},0).wait(1).to({skewX:0.4684},0).wait(1).to({skewX:0.481},0).wait(1).to({skewX:0.4937},0).wait(1).to({skewX:0.5063},0).wait(1).to({skewX:0.519},0).wait(1).to({skewX:0.5316},0).wait(1).to({skewX:0.5443},0).wait(1).to({skewX:0.557},0).wait(1).to({skewX:0.5696},0).wait(1).to({skewX:0.5823},0).wait(1).to({skewX:0.5949},0).wait(1).to({skewX:0.6076},0).wait(1).to({skewX:0.6203},0).wait(1).to({skewX:0.6329},0).wait(1).to({skewX:0.6456},0).wait(1).to({skewX:0.6582,x:0.15},0).wait(1).to({skewX:0.6709},0).wait(1).to({skewX:0.6835},0).wait(1).to({skewX:0.6962},0).wait(1).to({skewX:0.7089},0).wait(1).to({skewX:0.7215},0).wait(1).to({skewX:0.7342},0).wait(1).to({skewX:0.7468},0).wait(1).to({skewX:0.7595},0).wait(1).to({skewX:0.7722},0).wait(1).to({skewX:0.7848},0).wait(1).to({skewX:0.7975},0).wait(1).to({skewX:0.8101},0).wait(1).to({skewX:0.8228},0).wait(1).to({skewX:0.8354},0).wait(1).to({skewX:0.8481},0).wait(1).to({skewX:0.8608},0).wait(1).to({skewX:0.8734},0).wait(1).to({skewX:0.8861},0).wait(1).to({skewX:0.8987},0).wait(1).to({skewX:0.9114,x:0.2},0).wait(1).to({skewX:0.9241},0).wait(1).to({skewX:0.9367},0).wait(1).to({skewX:0.9494},0).wait(1).to({skewX:0.962},0).wait(1).to({skewX:0.9747},0).wait(1).to({skewX:0.9873},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9875},0).wait(1).to({skewX:0.975},0).wait(1).to({skewX:0.9625},0).wait(1).to({skewX:0.95},0).wait(1).to({skewX:0.9375},0).wait(1).to({skewX:0.925},0).wait(1).to({skewX:0.9125},0).wait(1).to({skewX:0.9,x:0.15},0).wait(1).to({skewX:0.8875},0).wait(1).to({skewX:0.875},0).wait(1).to({skewX:0.8625},0).wait(1).to({skewX:0.85},0).wait(1).to({skewX:0.8375},0).wait(1).to({skewX:0.825},0).wait(1).to({skewX:0.8125},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7875},0).wait(1).to({skewX:0.775},0).wait(1).to({skewX:0.7625},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.7375},0).wait(1).to({skewX:0.725},0).wait(1).to({skewX:0.7125},0).wait(1).to({skewX:0.7},0).wait(1).to({skewX:0.6875},0).wait(1).to({skewX:0.675},0).wait(1).to({skewX:0.6625},0).wait(1).to({skewX:0.65},0).wait(1).to({skewX:0.6375,x:0.1},0).wait(1).to({skewX:0.625},0).wait(1).to({skewX:0.6125},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.5875},0).wait(1).to({skewX:0.575},0).wait(1).to({skewX:0.5625},0).wait(1).to({skewX:0.55},0).wait(1).to({skewX:0.5375},0).wait(1).to({skewX:0.525},0).wait(1).to({skewX:0.5125},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.4875},0).wait(1).to({skewX:0.475},0).wait(1).to({skewX:0.4625},0).wait(1).to({skewX:0.45},0).wait(1).to({skewX:0.4375},0).wait(1).to({skewX:0.425},0).wait(1).to({skewX:0.4125},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3875},0).wait(1).to({skewX:0.375,x:0.05},0).wait(1).to({skewX:0.3625},0).wait(1).to({skewX:0.35},0).wait(1).to({skewX:0.3375},0).wait(1).to({skewX:0.325},0).wait(1).to({skewX:0.3125},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.2875},0).wait(1).to({skewX:0.275},0).wait(1).to({skewX:0.2625},0).wait(1).to({skewX:0.25},0).wait(1).to({skewX:0.2375},0).wait(1).to({skewX:0.225},0).wait(1).to({skewX:0.2125},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1875},0).wait(1).to({skewX:0.175},0).wait(1).to({skewX:0.1625},0).wait(1).to({skewX:0.15},0).wait(1).to({skewX:0.1375},0).wait(1).to({skewX:0.125,x:0},0).wait(1).to({skewX:0.1125},0).wait(1).to({skewX:0.1},0).wait(1).to({skewX:0.0875},0).wait(1).to({skewX:0.075},0).wait(1).to({skewX:0.0625},0).wait(1).to({skewX:0.05},0).wait(1).to({rotation:0.0375,skewX:0},0).wait(1).to({rotation:0.025},0).wait(1).to({rotation:0.0125},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0125},0).wait(1).to({rotation:-0.025},0).wait(1).to({rotation:-0.0375},0).wait(1).to({rotation:-0.05},0).wait(1).to({rotation:0,skewX:-0.0625},0).wait(1).to({skewX:-0.075},0).wait(1).to({skewX:-0.0875},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.1125},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.1375,x:-0.05},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.1625},0).wait(1).to({skewX:-0.175},0).wait(1).to({skewX:-0.1875},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.2125},0).wait(1).to({skewX:-0.225},0).wait(1).to({skewX:-0.2375},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.2625},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.2875},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.3125},0).wait(1).to({skewX:-0.325},0).wait(1).to({skewX:-0.3375},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.3625},0).wait(1).to({skewX:-0.375},0).wait(1).to({skewX:-0.3875,x:-0.1},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.4125},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.4375},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.4625},0).wait(1).to({skewX:-0.475},0).wait(1).to({skewX:-0.4875},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.5125},0).wait(1).to({skewX:-0.525},0).wait(1).to({skewX:-0.5375},0).wait(1).to({skewX:-0.55},0).wait(1).to({skewX:-0.5625},0).wait(1).to({skewX:-0.575},0).wait(1).to({skewX:-0.5875},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.6125},0).wait(1).to({skewX:-0.625},0).wait(1).to({skewX:-0.6375},0).wait(1).to({skewX:-0.65,x:-0.15},0).wait(1).to({skewX:-0.6625},0).wait(1).to({skewX:-0.675},0).wait(1).to({skewX:-0.6875},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.7125},0).wait(1).to({skewX:-0.725},0).wait(1).to({skewX:-0.7375},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.7625},0).wait(1).to({skewX:-0.775},0).wait(1).to({skewX:-0.7875},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.8125},0).wait(1).to({skewX:-0.825},0).wait(1).to({skewX:-0.8375},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.8625},0).wait(1).to({skewX:-0.875},0).wait(1).to({skewX:-0.8875},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-0.9125,x:-0.2},0).wait(1).to({skewX:-0.925},0).wait(1).to({skewX:-0.9375},0).wait(1).to({skewX:-0.95},0).wait(1).to({skewX:-0.9625},0).wait(1).to({skewX:-0.975},0).wait(1).to({skewX:-0.9875},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9875},0).wait(1).to({skewX:-0.975},0).wait(1).to({skewX:-0.9625},0).wait(1).to({skewX:-0.95},0).wait(1).to({skewX:-0.9375},0).wait(1).to({skewX:-0.925},0).wait(1).to({skewX:-0.9125},0).wait(1).to({skewX:-0.9,x:-0.15},0).wait(1).to({skewX:-0.8875},0).wait(1).to({skewX:-0.875},0).wait(1).to({skewX:-0.8625},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.8375},0).wait(1).to({skewX:-0.825},0).wait(1).to({skewX:-0.8125},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7875},0).wait(1).to({skewX:-0.775},0).wait(1).to({skewX:-0.7625},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.7375},0).wait(1).to({skewX:-0.725},0).wait(1).to({skewX:-0.7125},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.6875},0).wait(1).to({skewX:-0.675},0).wait(1).to({skewX:-0.6625},0).wait(1).to({skewX:-0.65},0).wait(1).to({skewX:-0.6375,x:-0.1},0).wait(1).to({skewX:-0.625},0).wait(1).to({skewX:-0.6125},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.5875},0).wait(1).to({skewX:-0.575},0).wait(1).to({skewX:-0.5625},0).wait(1).to({skewX:-0.55},0).wait(1).to({skewX:-0.5375},0).wait(1).to({skewX:-0.525},0).wait(1).to({skewX:-0.5125},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4875},0).wait(1).to({skewX:-0.475},0).wait(1).to({skewX:-0.4625},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.4375},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.4125},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3875},0).wait(1).to({skewX:-0.375,x:-0.05},0).wait(1).to({skewX:-0.3625},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.3375},0).wait(1).to({skewX:-0.325},0).wait(1).to({skewX:-0.3125},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.2875},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.2625},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.2375},0).wait(1).to({skewX:-0.225},0).wait(1).to({skewX:-0.2125},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1875},0).wait(1).to({skewX:-0.175},0).wait(1).to({skewX:-0.1625},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.1375},0).wait(1).to({skewX:-0.125,x:0},0).wait(1).to({skewX:-0.1125},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.0875},0).wait(1).to({skewX:-0.075},0).wait(1).to({skewX:-0.0625},0).wait(1).to({rotation:-0.05,skewX:0},0).wait(1).to({rotation:-0.0375},0).wait(1).to({rotation:-0.025},0).wait(1).to({rotation:-0.0125},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-22.8,51.2,23.8);


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

	// Layer_6
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-0.05,131.4,1,1,0,0,0,0,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:354.3},279).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhDghICHAAIhEBDg");
	this.shape.setTransform(108.25,73.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYApQgGgJABgSQgBgNADgHQADgIAFgDQAGgEAJAAQAMAAALAHIAAgOIAAgVIAMAAIAABhIgJAAIgCgKQgNAMgNAAQgNAAgFgJgAgLgIQgDACgCAFQgBAFgBAKQABAKABAFQACAGADACQAEADAFAAQAFAAAEgCIAMgIIAAgkIgMgDIgIgBQgGAAgEACg");
	this.shape_1.setTransform(107.25,60.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAgQgHgDgDgIQgDgIAAgNQAAgMADgIQADgIAHgEQAHgDALAAQAMAAAHADQAHAEADAIQADAIAAAMQAAANgDAIQgDAIgHADQgHAEgMAAQgLAAgHgEgAgLgXQgEADgCAFQgCAGAAAJQAAAKACAGQACAFAEACQAEADAHAAQAIAAAEgDQAEgCACgFQACgGAAgKQAAgJgCgGQgCgFgEgDQgEgCgIAAQgHAAgEACg");
	this.shape_2.setTransform(99.425,61.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAwIAAhCIALAAIAABCgAgCghQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAgIIACgDIACgBIAEAAQAFAAAAAEIAAAIQAAADgFAAg");
	this.shape_3.setTransform(93.75,60.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAjIAAhDIAJAAIABAKQAPgMANAAIADAAIgBALIgEAAQgFAAgGACIgNAHIAAAxg");
	this.shape_4.setTransform(89.625,61.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAgQgHgDgDgIQgDgIAAgNQAAgMADgIQADgIAHgDQAHgEAKAAQAPAAAHAGQAHAFAAAMQABAJgEAEQgFAFgIAAIgeAAQAAAIACAEQADAFAEABQAFACAGAAQAMAAAMgCIABAIIgMADIgPABQgKAAgIgEgAgJgXQgEADgCAEIgCAOIAcAAQAIAAAAgKQgBgHgDgDQgEgCgJAAQgHAAgEABg");
	this.shape_5.setTransform(82.6778,61.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAxIAAhfIAJAAIABAKQAGgFAIgEQAGgDAIAAQAMAAAFAJQAGAJAAASQAAAMgDAIQgDAIgFADQgGADgJABQgMAAgMgIIABAPIAAATgAgGgjQgFACgHAGIAAAjIAGACIAIACIAGABQAHAAADgDQAEgCABgFQACgFAAgKQAAgJgCgGQgBgGgDgCQgEgCgFgBQgFABgFACg");
	this.shape_6.setTransform(75.025,63.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACAxQgGABgFgFQgFgEAAgJIAAhRIANAAIAABPQAAAEABADQACACAFAAIAGAAIACAJIgGABg");
	this.shape_7.setTransform(66.1,60.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAfQgGgFAAgKIAAgHQAAgHAFgEQAFgFAJAAIAcAAIAAgFQAAgHgDgCQgDgDgIAAIgcACIgBgJQASgEANAAQAMABAGAFQAGAEAAANIAAAuIgKAAIgBgLQgFAFgHAEQgHAEgIgBQgKABgFgFgAgOAEQgCACAAAFIAAAFQAAAFACACQADADAGgBQAFABAFgDQAHgDAGgEIAAgPIgaAAQgEABgCACg");
	this.shape_8.setTransform(59.575,61.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAjIAAhDIAJAAIABAKQAPgMANAAIADAAIgBALIgEAAQgFAAgGACIgNAHIAAAxg");
	this.shape_9.setTransform(53.525,61.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAeQgEgFAAgJIAAgyIAMAAIAAAuQAAAHACADQADADAFAAQAGAAAEgDQAFgCAIgFIAAgxIAMAAIAABDIgJAAIgBgKQgIAGgHADQgHADgHAAQgJAAgFgFg");
	this.shape_10.setTransform(46.325,62.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAHAtQgIAAgEgFQgFgFAAgIIAAgpIgMAAIAAgJIAMAAIAAgVIALAAIAAAVIAWAAIAAAJIgWAAIAAAnQAAAFACACQACACAGAAIAKAAIABAJIgHACg");
	this.shape_11.setTransform(39.725,60.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAfQgGgFAAgKIAAgHQAAgHAFgEQAFgFAJAAIAcAAIAAgFQAAgHgDgCQgDgDgIAAIgcACIgBgJQASgEANAAQAMABAGAFQAGAEAAANIAAAuIgKAAIgBgLQgFAFgHAEQgHAEgIgBQgKABgFgFgAgOAEQgCACAAAFIAAAFQAAAFACACQADADAGgBQAFABAFgDQAHgDAGgEIAAgPIgaAAQgEABgCACg");
	this.shape_12.setTransform(33.075,61.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAUAwIgDgBIgCgDIgghDIgCgGIgDgHIgCAAIAAANIAABHIgMAAIAAhaQAAgFAFAAIALAAIAEABIACADIAfBBIAGAOIADAAIgBgOIAAhFIAMAAIAABaQAAAFgEAAg");
	this.shape_13.setTransform(24.475,60.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAXAjIhxAAIAAhFIBxAAIAAgZIBEA7IhEA8g");
	this.shape_14.setTransform(-277.55,-28,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAXAjIhxAAIAAhFIBxAAIAAgZIBEA7IhEA8g");
	this.shape_15.setTransform(-124.35,-28);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUA6QAMgGAFgPQAFgOgBgXQABgWgFgPQgFgOgMgGIACgJQAUAHAKAQQAKAQAAAbQAAAcgKAQQgKAQgUAHg");
	this.shape_16.setTransform(-141.95,-26.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPAhQgIgEgDgIQgEgHAAgOQAAgMAEgIQADgIAIgEQAHgDAMAAIAOABQAHABAFACIgDANIgTAAQgHAAgCABQgEACgBAEQgCAEAAAHQAAAIACAEQABAEAEACQACACAHAAQAMAAAJgCIACAOQgGACgHABIgOABQgMAAgHgDg");
	this.shape_17.setTransform(-147.775,-25.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAyIAAhEIATAAIAABEgAgEgdQgGAAAAgGIAAgIQAAgGAGAAIAJAAQAGAAAAAGIAAAIQAAAGgGAAg");
	this.shape_18.setTransform(-153.325,-27.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AANAjIAAgsQAAgFgBgBQgCgCgEAAIgHABIgLAGIAAAtIgUAAIAAhEIARAAIABALQAOgMAOgBQAKAAAFAGQAEAFAAAIIAAAzg");
	this.shape_19.setTransform(-159.4,-25.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAhQgJgEgDgHQgDgJgBgNQABgNADgHQADgJAJgDQAHgDAMgBQANABAIADQAIAEADAIQADAHAAANQAAANgDAJQgDAHgIAEQgIADgNAAQgMAAgHgDgAgIgSQgCACgBAEIgBAMIABANQABAFACABQADACAFAAQAFAAADgCQADgBACgFQABgFAAgIQAAgHgBgFQgCgEgDgCQgDgCgFAAQgFAAgDACg");
	this.shape_20.setTransform(-167.7,-25.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAhAjIAAgsQAAgFgCgBQgBgCgFAAQgDAAgDABIgJAFIAAAuIgTAAIAAgsQAAgFgCgBQgBgCgEAAQgEAAgDABIgJAFIAAAuIgUAAIAAhEIAQAAIACALQAGgHAHgCQAGgEAHAAQANAAAEAMQAGgGAGgCQAGgEAHAAQAJAAAFAGQAFAFAAAIIAAAzg");
	this.shape_21.setTransform(-177.875,-25.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAjIAAhEIAQAAIACALQAGgGAHgDQAHgEAHAAIAEAAIgCATIgGAAIgJACIgLAEIAAAtg");
	this.shape_22.setTransform(-186.675,-25.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAfQgGgFAAgJIAAgHQAAgJAFgDQAGgFAKAAIAYAAIAAgDQgBgFgCgCQgCgCgHAAIgcABIgCgOIASgCIARgBQAOAAAHAFQAGAGAAAOIAAAtIgQAAIgCgLQgFAFgGAEQgFADgJAAQgKAAgGgFgAgKAGQgCACAAADIAAADQAAADACACQACACAEAAIAIgCIAJgFIAAgJIgSAAQgEAAgBABg");
	this.shape_23.setTransform(-194.075,-25.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AANAxIAAgtQAAgEgBgBQgCgCgEAAIgHABIgLAEIAAAvIgUAAIAAhhIAUAAIAAAYIgBAOQAOgLANAAQAKAAAFAFQAFAFgBAJIAAAzg");
	this.shape_24.setTransform(-202.05,-27.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLAsQgJgQAAgcQAAgbAJgQQAKgQAUgHIADAJQgMAGgGAOQgEAPgBAWQABAXAEAOQAGAPAMAGIgDAJQgUgHgKgQg");
	this.shape_25.setTransform(-208.65,-26.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAvQgIgCgDgEQgDgFAAgIQAAgFADgDQACgEAGgDQgEgDAAgGQAAgEACgCQABgDADgCQgFgCgCgFQgDgEAAgHQAAgJADgEQADgFAHgDQAHgCANAAQAKAAAHACIAWAAIgBAJIgJABQACAEAAAGQAAAJgDAEQgDAFgHACQgHADgLAAIgNgBIAAADIABACIAEACIAYADQAKABAFAFQAFAFAAAKQAAAJgEAEQgDAFgIACQgIACgMAAQgPAAgIgCgAgQAVIgBAFQAAADABACIAFACIAKABIAKgBIAFgCQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgEIgDgBIgHgBIgRgCgAgMghQgDACAAAFQAAAFADACQADACAIAAQAGAAADgCQADgCAAgFQAAgFgDgCQgDgBgGAAQgIAAgDABg");
	this.shape_26.setTransform(-218.325,-24.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANAjIAAgsQAAgFgCgBQgBgCgEAAIgHABIgLAGIAAAtIgVAAIAAhEIASAAIABALQAOgMAOgBQAKAAAFAGQAFAFgBAIIAAAzg");
	this.shape_27.setTransform(-226.6,-25.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJAyIAAhEIATAAIAABEgAgEgdQgGAAAAgGIAAgIQAAgGAGAAIAJAAQAGAAAAAGIAAAIQAAAGgGAAg");
	this.shape_28.setTransform(-232.725,-27.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPAhQgIgEgDgIQgEgHAAgOQAAgMAEgIQADgIAIgEQAHgDAMAAIAOABQAHABAFACIgDANIgTAAQgHAAgCABQgEACgBAEQgCAEAAAHQAAAIACAEQABAEAEACQACACAHAAQAMAAAJgCIACAOQgGACgHABIgOABQgMAAgHgDg");
	this.shape_29.setTransform(-238.075,-25.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAjIAAhEIAQAAIACALQAGgGAHgDQAHgEAHAAIAEAAIgCATIgGAAIgJACIgLAEIAAAtg");
	this.shape_30.setTransform(-244.325,-25.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAhQgIgEgDgHQgEgJAAgNQAAgNAEgHQADgJAIgDQAIgDAMgBQANABAIADQAIAEADAIQAEAHgBANQABANgEAJQgDAHgIAEQgIADgNAAQgMAAgIgDgAgIgSQgDACAAAEIgBAMIABANQAAAFADABQAEACAEAAQAFAAADgCQADgBACgFQABgFAAgIQAAgHgBgFQgCgEgDgCQgDgCgFAAQgEAAgEACg");
	this.shape_31.setTransform(-251.75,-25.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgfAwIAAhLQAAgKAGgFQAFgGAKAAIAYABIASABIgBAPIghAAQgEAAgCACQgCACAAAEIAAARIAkAAIAAAOIgkAAIAAAog");
	this.shape_32.setTransform(-259.425,-27.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZA5QgJgCgEgGQgDgFAAgKQAAgHADgEQADgFAHgEQgDgCgBgDIgCgHQABgDACgEQABgDADgCQgGgDgCgGQgCgFgBgIQABgKADgFQAEgGAHgDQAIgDANAAQAKAAAIACIAaAAIgBAIIgMABQADAGABAKQAAAOgJAGQgIAGgSAAQgKAAgIgCQgBAEAAADQAAACABACIAHADIAdAFQAMABAFAGQAEAFAAALQAAAKgEAFQgDAGgIACQgJADgOAAQgPAAgJgDgAgZAZQgCADAAAFQAAAGACADQADADAFABIAPABIAQgBQAFgBACgDQACgDAAgGIgBgGQgBgCgDgCIgJgCIgcgEQgEAEgCAEgAgUgsQgEADAAAJQAAAIAEAEQAGADAMAAQALAAAFgDQAFgEAAgIQAAgJgFgDQgFgEgLAAQgMAAgGAEg");
	this.shape_33.setTransform(-141.05,-142.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAWArIAAg6QAAgHgDgEQgDgDgGAAQgHAAgGADIgSAKIAAA7IgOAAIAAhTIAMAAIABAOQATgQARAAQALAAAGAHQAFAFAAAMIAAA9g");
	this.shape_34.setTransform(-150.825,-144.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgoQgEAAAAgEIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAEgFAAg");
	this.shape_35.setTransform(-157.875,-145.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdAyQgHgLAAgWQAAgQADgJQADgJAHgEQAHgEALgBQAPABANAHIAAgQIAAgaIAOAAIAAB3IgLAAIgBgNQgQAOgQABQgPAAgHgLgAgNgKQgFADgCAGQgBAGAAAMQAAAMABAGQACAHAFADQAEADAHAAQAFAAAFgDQAGgCAJgHIAAgsIgOgDIgLgBQgHAAgEACg");
	this.shape_36.setTransform(-165.025,-145.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLA3QgGgGAAgKIAAhiIAPAAIgBBfQAAAFADADQACADAGAAIAIAAIACALIgHACIgJAAQgIAAgFgFg");
	this.shape_37.setTransform(-171.575,-145.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgoQgEAAAAgEIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAEgFAAg");
	this.shape_38.setTransform(-176.775,-145.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAlQgFgGAAgLIAAg+IAOAAIAAA6QAAAHADAEQADADAHAAQAGAAAGgDIAQgJIAAg8IAOAAIAABTIgLAAIgBgNQgKAIgIADQgIADgJABQgLgBgGgFg");
	this.shape_39.setTransform(-183.725,-143.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgSA7QgKgCgIgDIAAhyIAOAAIAAAgQAAALgBAHQAOgQARAAQAPAAAHALQAHAKAAAWQAAAPgDAJQgDAKgIAEQgIAGgOAAIgTgCgAgIgKIgOAKIAAAtQAMADAKAAQAJAAAEgDQAFgDACgHQACgGABgMQgBgMgBgFQgCgHgEgDQgFgCgIAAQgFAAgFACg");
	this.shape_40.setTransform(-193.175,-145.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAnQgIgEgEgJQgEgKAAgQQAAgPAEgKQAEgJAIgEQAIgFANAAQATAAAJAIQAIAGAAANQAAAMgFAFQgFAGgKAAIgmAAQABAKADAFQADAFAGACQAEACAIAAQAOAAAPgCIACAKIgPAEIgRABQgOgBgJgEgAgLgbQgFACgCAGQgCAFgBALIAiAAQAKAAgBgNQAAgHgEgDQgFgEgLAAQgIAAgFADg");
	this.shape_41.setTransform(-206.45,-144.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggApIABgLIAXABIAGAAIANgBQAFAAADgDQACgDAAgFQAAgFgDgCQgDgDgHgBIgXgGQgKgCgEgEQgFgGAAgJQAAgKADgFQADgFAHgCQAGgCALAAIASABIASACIgBALIgIAAIgMgBIgOAAIgKABQgEABgBACQgCACAAAFQAAAEACACQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAIAHACIAYAGQAKACAEAEQAFAFAAAKQAAAKgEAGQgEAFgHACQgHACgNAAQgRgBgPgCg");
	this.shape_42.setTransform(-215.325,-144.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgoQgEAAAAgEIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAEgFAAg");
	this.shape_43.setTransform(-221.725,-145.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZArIAAhTIALAAIACAOQASgQAQAAIAEAAIgCAPIgFAAQgGAAgHACIgRAIIAAA8g");
	this.shape_44.setTransform(-226.725,-144.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZAGIAAgKIAzAAIAAAKg");
	this.shape_45.setTransform(-234.45,-144.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAXAqIgDgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIgNg3IgCgIIgBgGIgBAAIgBAFIgCAJIgNA3IgDADIgDACIgNAAIgEgCIgBgDIgZhOIAPAAIASA9IACAMIACAAIAEgMIANg3QAAgBAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIALAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABIANA3IACAGIACAGIACAAIABgFIABgHIASg9IAPAAIgZBOIgBADIgEACg");
	this.shape_46.setTransform(-245.25,-144.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWAnQgIgEgEgJQgEgJAAgRQAAgPAEgJQAEgKAIgEQAJgEANgBQAPABAIAEQAIAEAEAKQAEAJAAAPQAAARgEAJQgEAJgIAEQgIAFgPAAQgNAAgJgFgAgNgbQgFADgDAGQgCAHAAALQAAAMACAHQADAHAFACQAFADAIAAQAJAAAFgDQAGgCACgHQACgHAAgMQAAgLgCgHQgCgGgGgDQgFgDgJAAQgIAAgFADg");
	this.shape_47.setTransform(-257.075,-144.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgcA1QgGgGAAgKIAAhfIAPAAIAABdQAAAGADACQADADAFAAIAqAAIAAAMIgsABQgMAAgGgGg");
	this.shape_48.setTransform(-265.7,-145.775);

	this.instance_1 = new lib.pointer();
	this.instance_1.setTransform(-290.5,-145.65,1,1,0,0,0,11.2,11.2);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,0,255,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(280));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(280));

	// Layer_7
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,0,0,4).p("A8LAAIAMAAAyYABMAukAAA");
	this.shape_49.setTransform(-229.4,-42.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(280));

	// Layer_8
	this.tallb = new lib.sba2();
	this.tallb.name = "tallb";
	this.tallb.setTransform(-202.95,-42.55,3.9447,3.9435);

	this.tallb_1 = new lib.sba8();
	this.tallb_1.name = "tallb_1";
	this.tallb_1.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.tallb_2 = new lib.sba11();
	this.tallb_2.name = "tallb_2";
	this.tallb_2.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.tallb_3 = new lib.sba9();
	this.tallb_3.name = "tallb_3";
	this.tallb_3.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.tallb_4 = new lib.sba1();
	this.tallb_4.name = "tallb_4";
	this.tallb_4.setTransform(-202.95,-42.55,3.9447,3.9435);

	this.tallb_5 = new lib.sba3();
	this.tallb_5.name = "tallb_5";
	this.tallb_5.setTransform(-246.95,-80.45,3.9447,3.9435);

	this.tallb_6 = new lib.sba7();
	this.tallb_6.name = "tallb_6";
	this.tallb_6.setTransform(-202.95,-42.55,3.9447,3.9447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallb}]}).to({state:[{t:this.tallb_1,p:{regY:0,y:-42.55}}]},41).to({state:[{t:this.tallb_2}]},42).to({state:[{t:this.tallb_3}]},48).to({state:[{t:this.tallb_1,p:{regY:-0.1,y:-42.95}}]},33).to({state:[{t:this.tallb_4}]},31).to({state:[{t:this.tallb_5}]},44).to({state:[{t:this.tallb_6}]},40).wait(1));

	// Layer_3 copy
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#00FF00").ss(4,0,0,4).p("A8BK4QC6ACABAAQADAAADAAQADAAADAAQBigGBch0QBDhUBBiNQBOiuAtiuQABgBAAgCQAsiuBQiwQB0j/B8hDQAIgFAIgDQAggPAhgBQAEgBACAAQAEAAADABQCoAJCaFRQBPCwAsCuIAgBuQAqCEAzBtQAvBoAxBJQBTCTCaARQBBAGBCAAQEUgBEUAAQERAAESABQCwAACugC");
	this.shape_50.setTransform(177.8533,150.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(280));

	// Layer_3
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("ALGHBQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTHBQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGFJQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTFJQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGDRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTDRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGBZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTBZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGgeQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTgeQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGiWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTiWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGkOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgArTkOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgALGmGQgDgDAAgEIAAgsQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAsQAAAEgDADQgDADgEAAQgEAAgDgDgArTmGQgDgDAAgEIAAgsQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAsQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_51.setTransform(-202.5,-86.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(280));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.7,-158.9,769.9,425.9);


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

	
	var _tweenStr_1 = cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,rotation:0.0404,x:0.2,y:-39.9},0).wait(1).to({rotation:0,skewX:0.0808},0).wait(1).to({skewX:0.1212,x:0.25},0).wait(1).to({skewX:0.1616},0).wait(1).to({skewX:0.202,x:0.3},0).wait(1).to({skewX:0.2424},0).wait(1).to({skewX:0.2828,x:0.35},0).wait(1).to({skewX:0.3232,x:0.4},0).wait(1).to({skewX:0.3636},0).wait(1).to({skewX:0.404,x:0.45},0).wait(1).to({skewX:0.4444},0).wait(1).to({skewX:0.4848,x:0.5},0).wait(1).to({skewX:0.5253},0).wait(1).to({skewX:0.5657,x:0.55},0).wait(1).to({skewX:0.6061,x:0.6},0).wait(1).to({skewX:0.6465},0).wait(1).to({skewX:0.6869,x:0.65},0).wait(1).to({skewX:0.7273},0).wait(1).to({skewX:0.7677,x:0.7},0).wait(1).to({skewX:0.8081},0).wait(1).to({skewX:0.8485,x:0.75},0).wait(1).to({skewX:0.8889,x:0.8},0).wait(1).to({skewX:0.9293},0).wait(1).to({skewX:0.9697,x:0.85},0).wait(1).to({skewX:1.0101},0).wait(1).to({skewX:1.0505,x:0.9},0).wait(1).to({skewX:1.0909},0).wait(1).to({skewX:1.1313,x:0.95},0).wait(1).to({skewX:1.1717,x:1},0).wait(1).to({skewX:1.2121},0).wait(1).to({skewX:1.2525,x:1.05},0).wait(1).to({skewX:1.2929},0).wait(1).to({skewX:1.3333,x:1.1},0).wait(1).to({skewX:1.3737},0).wait(1).to({skewX:1.4141,x:1.15,y:-39.85},0).wait(1).to({skewX:1.4545,x:1.2},0).wait(1).to({skewX:1.4949},0).wait(1).to({skewX:1.5354,x:1.25},0).wait(1).to({skewX:1.5758},0).wait(1).to({skewX:1.6162,x:1.3},0).wait(1).to({skewX:1.6566},0).wait(1).to({skewX:1.697,x:1.35},0).wait(1).to({skewX:1.7374,x:1.4},0).wait(1).to({skewX:1.7778},0).wait(1).to({skewX:1.8182,x:1.45},0).wait(1).to({skewX:1.8586},0).wait(1).to({skewX:1.899,x:1.5},0).wait(1).to({skewX:1.9394},0).wait(1).to({skewX:1.9798,x:1.55},0).wait(1).to({skewX:2.0202,x:1.6},0).wait(1).to({skewX:2.0606},0).wait(1).to({skewX:2.101,x:1.65},0).wait(1).to({skewX:2.1414},0).wait(1).to({skewX:2.1818,x:1.7},0).wait(1).to({skewX:2.2222},0).wait(1).to({skewX:2.2626,x:1.75},0).wait(1).to({skewX:2.303,x:1.8},0).wait(1).to({skewX:2.3434},0).wait(1).to({skewX:2.3838,x:1.85},0).wait(1).to({skewX:2.4242},0).wait(1).to({skewX:2.4646,x:1.9},0).wait(1).to({skewX:2.5051},0).wait(1).to({skewX:2.5455,x:1.95},0).wait(1).to({skewX:2.5859,x:2},0).wait(1).to({skewX:2.6263},0).wait(1).to({skewX:2.6667,x:2.05},0).wait(1).to({skewX:2.7071},0).wait(1).to({skewX:2.7475,x:2.1},0).wait(1).to({skewX:2.7879},0).wait(1).to({skewX:2.8283,x:2.15},0).wait(1).to({skewX:2.8687,x:2.2},0).wait(1).to({skewX:2.9091},0).wait(1).to({skewX:2.9495,x:2.25},0).wait(1).to({skewX:2.9899},0).wait(1).to({skewX:3.0303,x:2.3},0).wait(1).to({skewX:3.0707},0).wait(1).to({skewX:3.1111,x:2.35},0).wait(1).to({skewX:3.1515,x:2.4},0).wait(1).to({skewX:3.1919,y:-39.8},0).wait(1).to({skewX:3.2323,x:2.45},0).wait(1).to({skewX:3.2727},0).wait(1).to({skewX:3.3131,x:2.5},0).wait(1).to({skewX:3.3535},0).wait(1).to({skewX:3.3939,x:2.55},0).wait(1).to({skewX:3.4343,x:2.6},0).wait(1).to({skewX:3.4747},0).wait(1).to({skewX:3.5152,x:2.65},0).wait(1).to({skewX:3.5556},0).wait(1).to({skewX:3.596,x:2.7},0).wait(1).to({skewX:3.6364},0).wait(1).to({skewX:3.6768,x:2.75},0).wait(1).to({skewX:3.7172,x:2.8},0).wait(1).to({skewX:3.7576},0).wait(1).to({skewX:3.798,x:2.85},0).wait(1).to({skewX:3.8384},0).wait(1).to({skewX:3.8788,x:2.9},0).wait(1).to({skewX:3.9192},0).wait(1).to({skewX:3.9596,x:2.95},0).wait(1).to({skewX:4,x:3},0).wait(1).to({skewX:3.96,x:2.95},0).wait(1).to({skewX:3.92,x:2.9},0).wait(1).to({skewX:3.88},0).wait(1).to({skewX:3.84,x:2.85},0).wait(1).to({skewX:3.8},0).wait(1).to({skewX:3.76,x:2.8},0).wait(1).to({skewX:3.72},0).wait(1).to({skewX:3.68,x:2.75},0).wait(1).to({skewX:3.64},0).wait(1).to({skewX:3.6,x:2.7},0).wait(1).to({skewX:3.56,x:2.65},0).wait(1).to({skewX:3.52},0).wait(1).to({skewX:3.48,x:2.6},0).wait(1).to({skewX:3.44},0).wait(1).to({skewX:3.4,x:2.55},0).wait(1).to({skewX:3.36},0).wait(1).to({skewX:3.32,x:2.5},0).wait(1).to({skewX:3.28,x:2.45},0).wait(1).to({skewX:3.24},0).wait(1).to({skewX:3.2,x:2.4},0).wait(1).to({skewX:3.16,y:-39.85},0).wait(1).to({skewX:3.12,x:2.35},0).wait(1).to({skewX:3.08},0).wait(1).to({skewX:3.04,x:2.3},0).wait(1).to({skewX:3,x:2.25},0).wait(1).to({skewX:2.96},0).wait(1).to({skewX:2.92,x:2.2},0).wait(1).to({skewX:2.88},0).wait(1).to({skewX:2.84,x:2.15},0).wait(1).to({skewX:2.8},0).wait(1).to({skewX:2.76,x:2.1},0).wait(1).to({skewX:2.72},0).wait(1).to({skewX:2.68,x:2.05},0).wait(1).to({skewX:2.64,x:2},0).wait(1).to({skewX:2.6},0).wait(1).to({skewX:2.56,x:1.95},0).wait(1).to({skewX:2.52},0).wait(1).to({skewX:2.48,x:1.9},0).wait(1).to({skewX:2.44},0).wait(1).to({skewX:2.4,x:1.85},0).wait(1).to({skewX:2.36,x:1.8},0).wait(1).to({skewX:2.32},0).wait(1).to({skewX:2.28,x:1.75},0).wait(1).to({skewX:2.24},0).wait(1).to({skewX:2.2,x:1.7},0).wait(1).to({skewX:2.16},0).wait(1).to({skewX:2.12,x:1.65},0).wait(1).to({skewX:2.08,x:1.6},0).wait(1).to({skewX:2.04},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:1.96},0).wait(1).to({skewX:1.92,x:1.5},0).wait(1).to({skewX:1.88},0).wait(1).to({skewX:1.84,x:1.45},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.76},0).wait(1).to({skewX:1.72,x:1.35},0).wait(1).to({skewX:1.68},0).wait(1).to({skewX:1.64,x:1.3},0).wait(1).to({skewX:1.6},0).wait(1).to({skewX:1.56,x:1.25},0).wait(1).to({skewX:1.52},0).wait(1).to({skewX:1.48,x:1.2},0).wait(1).to({skewX:1.44,x:1.15},0).wait(1).to({skewX:1.4},0).wait(1).to({skewX:1.36,x:1.1,y:-39.9},0).wait(1).to({skewX:1.32},0).wait(1).to({skewX:1.28,x:1.05},0).wait(1).to({skewX:1.24},0).wait(1).to({skewX:1.2,x:1},0).wait(1).to({skewX:1.16,x:0.95},0).wait(1).to({skewX:1.12},0).wait(1).to({skewX:1.08,x:0.9},0).wait(1).to({skewX:1.04},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:0.96},0).wait(1).to({skewX:0.92,x:0.8},0).wait(1).to({skewX:0.88,x:0.75},0).wait(1).to({skewX:0.84},0).wait(1).to({skewX:0.8,x:0.7},0).wait(1).to({skewX:0.76},0).wait(1).to({skewX:0.72,x:0.65},0).wait(1).to({skewX:0.68},0).wait(1).to({skewX:0.64,x:0.6},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.56},0).wait(1).to({skewX:0.52,x:0.5},0).wait(1).to({skewX:0.48},0).wait(1).to({skewX:0.44,x:0.45},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.36,x:0.4},0).wait(1).to({skewX:0.32},0).wait(1).to({skewX:0.28,x:0.35},0).wait(1).to({skewX:0.24,x:0.3},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.16,x:0.25},0).wait(1).to({skewX:0.12},0).wait(1).to({skewX:0.08,x:0.2},0).wait(1).to({rotation:0.04,skewX:0},0).wait(1).to({rotation:0,x:0.15},0).wait(1).to({rotation:-0.0396,x:0.1},0).wait(1).to({rotation:0,skewX:-0.0792},0).wait(1).to({skewX:-0.1188,x:0.05},0).wait(1).to({skewX:-0.1584},0).wait(1).to({skewX:-0.198,x:0},0).wait(1).to({skewX:-0.2376},0).wait(1).to({skewX:-0.2772,x:-0.05},0).wait(1).to({skewX:-0.3168},0).wait(1).to({skewX:-0.3564,x:-0.1},0).wait(1).to({skewX:-0.396,x:-0.15},0).wait(1).to({skewX:-0.4356},0).wait(1).to({skewX:-0.4752,x:-0.2},0).wait(1).to({skewX:-0.5149},0).wait(1).to({skewX:-0.5545,x:-0.25},0).wait(1).to({skewX:-0.5941},0).wait(1).to({skewX:-0.6337,x:-0.3},0).wait(1).to({skewX:-0.6733,x:-0.35},0).wait(1).to({skewX:-0.7129},0).wait(1).to({skewX:-0.7525,x:-0.4},0).wait(1).to({skewX:-0.7921},0).wait(1).to({skewX:-0.8317,x:-0.45},0).wait(1).to({skewX:-0.8713},0).wait(1).to({skewX:-0.9109,x:-0.5},0).wait(1).to({skewX:-0.9505},0).wait(1).to({skewX:-0.9901,x:-0.55},0).wait(1).to({skewX:-1.0297,x:-0.6},0).wait(1).to({skewX:-1.0693},0).wait(1).to({skewX:-1.1089,x:-0.65},0).wait(1).to({skewX:-1.1485},0).wait(1).to({skewX:-1.1881,x:-0.7},0).wait(1).to({skewX:-1.2277},0).wait(1).to({skewX:-1.2673,x:-0.75},0).wait(1).to({skewX:-1.3069,x:-0.8},0).wait(1).to({skewX:-1.3465},0).wait(1).to({skewX:-1.3861,x:-0.85,y:-39.85},0).wait(1).to({skewX:-1.4257},0).wait(1).to({skewX:-1.4653,x:-0.9},0).wait(1).to({skewX:-1.505},0).wait(1).to({skewX:-1.5446,x:-0.95},0).wait(1).to({skewX:-1.5842},0).wait(1).to({skewX:-1.6238,x:-1},0).wait(1).to({skewX:-1.6634,x:-1.05},0).wait(1).to({skewX:-1.703},0).wait(1).to({skewX:-1.7426,x:-1.1},0).wait(1).to({skewX:-1.7822},0).wait(1).to({skewX:-1.8218,x:-1.15},0).wait(1).to({skewX:-1.8614},0).wait(1).to({skewX:-1.901,x:-1.2},0).wait(1).to({skewX:-1.9406},0).wait(1).to({skewX:-1.9802,x:-1.25},0).wait(1).to({skewX:-2.0198,x:-1.3},0).wait(1).to({skewX:-2.0594},0).wait(1).to({skewX:-2.099,x:-1.35},0).wait(1).to({skewX:-2.1386},0).wait(1).to({skewX:-2.1782,x:-1.4},0).wait(1).to({skewX:-2.2178},0).wait(1).to({skewX:-2.2574,x:-1.45},0).wait(1).to({skewX:-2.297,x:-1.5},0).wait(1).to({skewX:-2.3366},0).wait(1).to({skewX:-2.3762,x:-1.55},0).wait(1).to({skewX:-2.4158},0).wait(1).to({skewX:-2.4554,x:-1.6},0).wait(1).to({skewX:-2.495},0).wait(1).to({skewX:-2.5347,x:-1.65},0).wait(1).to({skewX:-2.5743},0).wait(1).to({skewX:-2.6139,x:-1.7},0).wait(1).to({skewX:-2.6535,x:-1.75},0).wait(1).to({skewX:-2.6931},0).wait(1).to({skewX:-2.7327,x:-1.8},0).wait(1).to({skewX:-2.7723},0).wait(1).to({skewX:-2.8119,x:-1.85},0).wait(1).to({skewX:-2.8515},0).wait(1).to({skewX:-2.8911,x:-1.9},0).wait(1).to({skewX:-2.9307},0).wait(1).to({skewX:-2.9703,x:-1.95},0).wait(1).to({skewX:-3.0099,x:-2},0).wait(1).to({skewX:-3.0495},0).wait(1).to({skewX:-3.0891,x:-2.05},0).wait(1).to({skewX:-3.1287},0).wait(1).to({skewX:-3.1683,x:-2.1,y:-39.8},0).wait(1).to({skewX:-3.2079},0).wait(1).to({skewX:-3.2475,x:-2.15},0).wait(1).to({skewX:-3.2871,x:-2.2},0).wait(1).to({skewX:-3.3267},0).wait(1).to({skewX:-3.3663,x:-2.25},0).wait(1).to({skewX:-3.4059},0).wait(1).to({skewX:-3.4455,x:-2.3},0).wait(1).to({skewX:-3.4851},0).wait(1).to({skewX:-3.5248,x:-2.35},0).wait(1).to({skewX:-3.5644},0).wait(1).to({skewX:-3.604,x:-2.4},0).wait(1).to({skewX:-3.6436,x:-2.45},0).wait(1).to({skewX:-3.6832},0).wait(1).to({skewX:-3.7228,x:-2.5},0).wait(1).to({skewX:-3.7624},0).wait(1).to({skewX:-3.802,x:-2.55},0).wait(1).to({skewX:-3.8416},0).wait(1).to({skewX:-3.8812,x:-2.6},0).wait(1).to({skewX:-3.9208},0).wait(1).to({skewX:-3.9604,x:-2.65},0).wait(1).to({skewX:-4,x:-2.7},0).wait(1).to({skewX:-3.9592,x:-2.65},0).wait(1).to({skewX:-3.9184,x:-2.6},0).wait(1).to({skewX:-3.8776},0).wait(1).to({skewX:-3.8367,x:-2.55},0).wait(1).to({skewX:-3.7959},0).wait(1).to({skewX:-3.7551,x:-2.5},0).wait(1).to({skewX:-3.7143},0).wait(1).to({skewX:-3.6735,x:-2.45},0).wait(1).to({skewX:-3.6327,x:-2.4},0).wait(1).to({skewX:-3.5918},0).wait(1).to({skewX:-3.551,x:-2.35},0).wait(1).to({skewX:-3.5102},0).wait(1).to({skewX:-3.4694,x:-2.3},0).wait(1).to({skewX:-3.4286},0).wait(1).to({skewX:-3.3878,x:-2.25},0).wait(1).to({skewX:-3.3469,x:-2.2},0).wait(1).to({skewX:-3.3061},0).wait(1).to({skewX:-3.2653,x:-2.15},0).wait(1).to({skewX:-3.2245},0).wait(1).to({skewX:-3.1837,x:-2.1},0).wait(1).to({skewX:-3.1429,x:-2.05,y:-39.85},0).wait(1).to({skewX:-3.102},0).wait(1).to({skewX:-3.0612,x:-2},0).wait(1).to({skewX:-3.0204},0).wait(1).to({skewX:-2.9796,x:-1.95},0).wait(1).to({skewX:-2.9388},0).wait(1).to({skewX:-2.898,x:-1.9},0).wait(1).to({skewX:-2.8571,x:-1.85},0).wait(1).to({skewX:-2.8163},0).wait(1).to({skewX:-2.7755,x:-1.8},0).wait(1).to({skewX:-2.7347},0).wait(1).to({skewX:-2.6939,x:-1.75},0).wait(1).to({skewX:-2.6531},0).wait(1).to({skewX:-2.6122,x:-1.7},0).wait(1).to({skewX:-2.5714,x:-1.65},0).wait(1).to({skewX:-2.5306},0).wait(1).to({skewX:-2.4898,x:-1.6},0).wait(1).to({skewX:-2.449},0).wait(1).to({skewX:-2.4082,x:-1.55},0).wait(1).to({skewX:-2.3673},0).wait(1).to({skewX:-2.3265,x:-1.5},0).wait(1).to({skewX:-2.2857,x:-1.45},0).wait(1).to({skewX:-2.2449},0).wait(1).to({skewX:-2.2041,x:-1.4},0).wait(1).to({skewX:-2.1633},0).wait(1).to({skewX:-2.1224,x:-1.35},0).wait(1).to({skewX:-2.0816,x:-1.3},0).wait(1).to({skewX:-2.0408},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-1.9592},0).wait(1).to({skewX:-1.9184,x:-1.2},0).wait(1).to({skewX:-1.8776},0).wait(1).to({skewX:-1.8367,x:-1.15},0).wait(1).to({skewX:-1.7959,x:-1.1},0).wait(1).to({skewX:-1.7551},0).wait(1).to({skewX:-1.7143,x:-1.05},0).wait(1).to({skewX:-1.6735},0).wait(1).to({skewX:-1.6327,x:-1},0).wait(1).to({skewX:-1.5918},0).wait(1).to({skewX:-1.551,x:-0.95},0).wait(1).to({skewX:-1.5102,x:-0.9},0).wait(1).to({skewX:-1.4694},0).wait(1).to({skewX:-1.4286,x:-0.85},0).wait(1).to({skewX:-1.3878},0).wait(1).to({skewX:-1.3469,x:-0.8,y:-39.9},0).wait(1).to({skewX:-1.3061,x:-0.75},0).wait(1).to({skewX:-1.2653},0).wait(1).to({skewX:-1.2245,x:-0.7},0).wait(1).to({skewX:-1.1837},0).wait(1).to({skewX:-1.1429,x:-0.65},0).wait(1).to({skewX:-1.102},0).wait(1).to({skewX:-1.0612,x:-0.6},0).wait(1).to({skewX:-1.0204,x:-0.55},0).wait(1).to({skewX:-0.9796},0).wait(1).to({skewX:-0.9388,x:-0.5},0).wait(1).to({skewX:-0.898},0).wait(1).to({skewX:-0.8571,x:-0.45},0).wait(1).to({skewX:-0.8163},0).wait(1).to({skewX:-0.7755,x:-0.4},0).wait(1).to({skewX:-0.7347,x:-0.35},0).wait(1).to({skewX:-0.6939},0).wait(1).to({skewX:-0.6531,x:-0.3},0).wait(1).to({skewX:-0.6122},0).wait(1).to({skewX:-0.5714,x:-0.25},0).wait(1).to({skewX:-0.5306},0).wait(1).to({skewX:-0.4898,x:-0.2},0).wait(1).to({skewX:-0.449,x:-0.15},0).wait(1).to({skewX:-0.4082},0).wait(1).to({skewX:-0.3673,x:-0.1},0).wait(1).to({skewX:-0.3265},0).wait(1).to({skewX:-0.2857,x:-0.05},0).wait(1).to({skewX:-0.2449,x:0},0).wait(1).to({skewX:-0.2041},0).wait(1).to({skewX:-0.1633,x:0.05},0).wait(1).to({skewX:-0.1224},0).wait(1).to({skewX:-0.0816,x:0.1},0).wait(1).to({rotation:-0.0408,skewX:0},0).wait(1).to({rotation:0,x:0.15},0).wait(1);
	this.timeline.addTween(_tweenStr_1.to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.75,x:0.75,y:-39.9},0).wait(1).to({skewX:1.5,x:1.25,y:-39.85},0).wait(1).to({skewX:2.25,x:1.8},0).wait(1).to({skewX:3,x:2.3},0).wait(1).to({skewX:2.4,x:1.9},0).wait(1).to({skewX:1.8,x:1.45},0).wait(1).to({skewX:1.2,x:1.05,y:-39.9},0).wait(1).to({skewX:0.6,x:0.6},0).wait(1).to({skewX:0,x:0.2},0).wait(1).to({skewX:-0.6,x:-0.2},0).wait(1).to({skewX:-1.2,x:-0.65},0).wait(1).to({skewX:-1.8,x:-1.05,y:-39.85},0).wait(1).to({skewX:-2.4,x:-1.5},0).wait(1).to({skewX:-3,x:-1.9},0).wait(1).to({skewX:-2.4,x:-1.5},0).wait(1).to({skewX:-1.8,x:-1.05},0).wait(1).to({skewX:-1.2,x:-0.65,y:-39.9},0).wait(1).to({skewX:-0.6,x:-0.2},0).wait(1).to({skewX:0,x:0.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-80.8,60.5,82.89999999999999);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.1053,x:0.2,y:-39.9},0).wait(1).to({skewX:0.2105,x:0.3},0).wait(1).to({skewX:0.3158,x:0.35},0).wait(1).to({skewX:0.4211,x:0.45},0).wait(1).to({skewX:0.5263,x:0.5},0).wait(1).to({skewX:0.6316,x:0.6},0).wait(1).to({skewX:0.7368,x:0.65},0).wait(1).to({skewX:0.8421,x:0.75},0).wait(1).to({skewX:0.9474,x:0.8},0).wait(1).to({skewX:1.0526,x:0.9},0).wait(1).to({skewX:1.1579,x:0.95},0).wait(1).to({skewX:1.2632,x:1.05},0).wait(1).to({skewX:1.3684,x:1.1},0).wait(1).to({skewX:1.4737,x:1.2,y:-39.85},0).wait(1).to({skewX:1.5789,x:1.25},0).wait(1).to({skewX:1.6842,x:1.35},0).wait(1).to({skewX:1.7895,x:1.4},0).wait(1).to({skewX:1.8947,x:1.5},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:2.1053,x:1.65},0).wait(1).to({skewX:2.2105,x:1.7},0).wait(1).to({skewX:2.3158,x:1.8},0).wait(1).to({skewX:2.4211,x:1.85},0).wait(1).to({skewX:2.5263,x:1.95},0).wait(1).to({skewX:2.6316,x:2},0).wait(1).to({skewX:2.7368,x:2.1},0).wait(1).to({skewX:2.8421,x:2.15},0).wait(1).to({skewX:2.9474,x:2.25},0).wait(1).to({skewX:3.0526,x:2.3},0).wait(1).to({skewX:3.1579,x:2.4},0).wait(1).to({skewX:3.2632,x:2.45,y:-39.8},0).wait(1).to({skewX:3.3684,x:2.55},0).wait(1).to({skewX:3.4737,x:2.6},0).wait(1).to({skewX:3.5789,x:2.7},0).wait(1).to({skewX:3.6842,x:2.75},0).wait(1).to({skewX:3.7895,x:2.85},0).wait(1).to({skewX:3.8947,x:2.9},0).wait(1).to({skewX:4,x:3},0).wait(1).to({skewX:3.9,x:2.9},0).wait(1).to({skewX:3.8,x:2.85},0).wait(1).to({skewX:3.7,x:2.75},0).wait(1).to({skewX:3.6,x:2.7},0).wait(1).to({skewX:3.5,x:2.65},0).wait(1).to({skewX:3.4,x:2.55},0).wait(1).to({skewX:3.3,x:2.5},0).wait(1).to({skewX:3.2,x:2.4},0).wait(1).to({skewX:3.1,x:2.35,y:-39.85},0).wait(1).to({skewX:3,x:2.25},0).wait(1).to({skewX:2.9,x:2.2},0).wait(1).to({skewX:2.8,x:2.15},0).wait(1).to({skewX:2.7,x:2.05},0).wait(1).to({skewX:2.6,x:2},0).wait(1).to({skewX:2.5,x:1.9},0).wait(1).to({skewX:2.4,x:1.85},0).wait(1).to({skewX:2.3,x:1.8},0).wait(1).to({skewX:2.2,x:1.7},0).wait(1).to({skewX:2.1,x:1.65},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:1.9,x:1.5},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.7,x:1.35},0).wait(1).to({skewX:1.6,x:1.3},0).wait(1).to({skewX:1.5,x:1.2},0).wait(1).to({skewX:1.4,x:1.15},0).wait(1).to({skewX:1.3,x:1.05,y:-39.9},0).wait(1).to({skewX:1.2,x:1},0).wait(1).to({skewX:1.1,x:0.95},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:0.9,x:0.8},0).wait(1).to({skewX:0.8,x:0.7},0).wait(1).to({skewX:0.7,x:0.65},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.5,x:0.5},0).wait(1).to({skewX:0.4,x:0.45},0).wait(1).to({skewX:0.3,x:0.35},0).wait(1).to({skewX:0.2,x:0.3},0).wait(1).to({skewX:0.1,x:0.2},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.0976,x:0.1},0).wait(1).to({skewX:-0.1951,x:0},0).wait(1).to({skewX:-0.2927,x:-0.05},0).wait(1).to({skewX:-0.3902,x:-0.15},0).wait(1).to({skewX:-0.4878,x:-0.2},0).wait(1).to({skewX:-0.5854,x:-0.25},0).wait(1).to({skewX:-0.6829,x:-0.35},0).wait(1).to({skewX:-0.7805,x:-0.4},0).wait(1).to({skewX:-0.878,x:-0.45},0).wait(1).to({skewX:-0.9756,x:-0.55},0).wait(1).to({skewX:-1.0732,x:-0.6},0).wait(1).to({skewX:-1.1707,x:-0.7},0).wait(1).to({skewX:-1.2683,x:-0.75},0).wait(1).to({skewX:-1.3659,x:-0.8},0).wait(1).to({skewX:-1.4634,x:-0.9,y:-39.85},0).wait(1).to({skewX:-1.561,x:-0.95},0).wait(1).to({skewX:-1.6585,x:-1},0).wait(1).to({skewX:-1.7561,x:-1.1},0).wait(1).to({skewX:-1.8537,x:-1.15},0).wait(1).to({skewX:-1.9512,x:-1.25},0).wait(1).to({skewX:-2.0488,x:-1.3},0).wait(1).to({skewX:-2.1463,x:-1.35},0).wait(1).to({skewX:-2.2439,x:-1.45},0).wait(1).to({skewX:-2.3415,x:-1.5},0).wait(1).to({skewX:-2.439,x:-1.6},0).wait(1).to({skewX:-2.5366,x:-1.65},0).wait(1).to({skewX:-2.6341,x:-1.7},0).wait(1).to({skewX:-2.7317,x:-1.8},0).wait(1).to({skewX:-2.8293,x:-1.85},0).wait(1).to({skewX:-2.9268,x:-1.9},0).wait(1).to({skewX:-3.0244,x:-2},0).wait(1).to({skewX:-3.122,x:-2.05},0).wait(1).to({skewX:-3.2195,x:-2.15,y:-39.8},0).wait(1).to({skewX:-3.3171,x:-2.2},0).wait(1).to({skewX:-3.4146,x:-2.25},0).wait(1).to({skewX:-3.5122,x:-2.35},0).wait(1).to({skewX:-3.6098,x:-2.4},0).wait(1).to({skewX:-3.7073,x:-2.45},0).wait(1).to({skewX:-3.8049,x:-2.55},0).wait(1).to({skewX:-3.9024,x:-2.6},0).wait(1).to({skewX:-4,x:-2.7},0).wait(1).to({skewX:-3.9,x:-2.6},0).wait(1).to({skewX:-3.8,x:-2.55},0).wait(1).to({skewX:-3.7,x:-2.45},0).wait(1).to({skewX:-3.6,x:-2.4},0).wait(1).to({skewX:-3.5,x:-2.35},0).wait(1).to({skewX:-3.4,x:-2.25},0).wait(1).to({skewX:-3.3,x:-2.2},0).wait(1).to({skewX:-3.2,x:-2.1},0).wait(1).to({skewX:-3.1,x:-2.05,y:-39.85},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-2.9,x:-1.9},0).wait(1).to({skewX:-2.8,x:-1.85},0).wait(1).to({skewX:-2.7,x:-1.75},0).wait(1).to({skewX:-2.6,x:-1.7},0).wait(1).to({skewX:-2.5,x:-1.6},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.3,x:-1.5},0).wait(1).to({skewX:-2.2,x:-1.4},0).wait(1).to({skewX:-2.1,x:-1.35},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-1.9,x:-1.2},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.7,x:-1.05},0).wait(1).to({skewX:-1.6,x:-1},0).wait(1).to({skewX:-1.5,x:-0.9},0).wait(1).to({skewX:-1.4,x:-0.85},0).wait(1).to({skewX:-1.3,x:-0.75,y:-39.9},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.1,x:-0.65},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-0.8,x:-0.4},0).wait(1).to({skewX:-0.7,x:-0.35},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.5,x:-0.2},0).wait(1).to({skewX:-0.4,x:-0.15},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.2,x:0},0).wait(1).to({skewX:-0.1,x:0.1},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.3333,x:0.4,y:-39.9},0).wait(1).to({skewX:0.6667,x:0.6},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:1.3333,x:1.1},0).wait(1).to({skewX:1.6667,x:1.35,y:-39.85},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:2.3333,x:1.8},0).wait(1).to({skewX:2.6667,x:2.05},0).wait(1).to({skewX:3,x:2.25},0).wait(1).to({skewX:2.7,x:2.05},0).wait(1).to({skewX:2.4,x:1.85},0).wait(1).to({skewX:2.1,x:1.65},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.5,x:1.2},0).wait(1).to({skewX:1.2,x:1,y:-39.9},0).wait(1).to({skewX:0.9,x:0.8},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.3,x:0.35},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.5,x:-0.9,y:-39.85},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-2.1,x:-1.35},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.7,x:-1.75},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-2.7,x:-1.75},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.1,x:-1.35},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.5,x:-0.9},0).wait(1).to({skewX:-1.2,x:-0.7,y:-39.9},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-80.8,90.3,82.89999999999999);


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

	
	var _tweenStr_2 = cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,rotation:0.025,x:0.15,y:-39.9},0).wait(1).to({rotation:0.05,x:0.2},0).wait(1).to({rotation:0,skewX:0.075},0).wait(1).to({skewX:0.1},0).wait(1).to({skewX:0.125,x:0.25},0).wait(1).to({skewX:0.15},0).wait(1).to({skewX:0.175},0).wait(1).to({skewX:0.2,x:0.3},0).wait(1).to({skewX:0.225},0).wait(1).to({skewX:0.25,x:0.35},0).wait(1).to({skewX:0.275},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.325,x:0.4},0).wait(1).to({skewX:0.35},0).wait(1).to({skewX:0.375},0).wait(1).to({skewX:0.4,x:0.45},0).wait(1).to({skewX:0.425},0).wait(1).to({skewX:0.45},0).wait(1).to({skewX:0.475,x:0.5},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.525},0).wait(1).to({skewX:0.55,x:0.55},0).wait(1).to({skewX:0.575},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.625,x:0.6},0).wait(1).to({skewX:0.65},0).wait(1).to({skewX:0.675,x:0.65},0).wait(1).to({skewX:0.7},0).wait(1).to({skewX:0.725},0).wait(1).to({skewX:0.75,x:0.7},0).wait(1).to({skewX:0.775},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.825,x:0.75},0).wait(1).to({skewX:0.85},0).wait(1).to({skewX:0.875},0).wait(1).to({skewX:0.9,x:0.8},0).wait(1).to({skewX:0.925},0).wait(1).to({skewX:0.95},0).wait(1).to({skewX:0.975,x:0.85},0).wait(1).to({skewX:1},0).wait(1).to({skewX:1.025,x:0.9},0).wait(1).to({skewX:1.05},0).wait(1).to({skewX:1.075},0).wait(1).to({skewX:1.1,x:0.95},0).wait(1).to({skewX:1.125},0).wait(1).to({skewX:1.15},0).wait(1).to({skewX:1.175,x:1},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.225},0).wait(1).to({skewX:1.25,x:1.05},0).wait(1).to({skewX:1.275},0).wait(1).to({skewX:1.3},0).wait(1).to({skewX:1.325,x:1.1},0).wait(1).to({skewX:1.35},0).wait(1).to({skewX:1.375},0).wait(1).to({skewX:1.4,x:1.15,y:-39.85},0).wait(1).to({skewX:1.425},0).wait(1).to({skewX:1.45,x:1.2},0).wait(1).to({skewX:1.475},0).wait(1).to({skewX:1.5},0).wait(1).to({skewX:1.525,x:1.25},0).wait(1).to({skewX:1.55},0).wait(1).to({skewX:1.575},0).wait(1).to({skewX:1.6,x:1.3},0).wait(1).to({skewX:1.625},0).wait(1).to({skewX:1.65},0).wait(1).to({skewX:1.675,x:1.35},0).wait(1).to({skewX:1.7},0).wait(1).to({skewX:1.725},0).wait(1).to({skewX:1.75,x:1.4},0).wait(1).to({skewX:1.775},0).wait(1).to({skewX:1.8},0).wait(1).to({skewX:1.825,x:1.45},0).wait(1).to({skewX:1.85},0).wait(1).to({skewX:1.875,x:1.5},0).wait(1).to({skewX:1.9},0).wait(1).to({skewX:1.925},0).wait(1).to({skewX:1.95,x:1.55},0).wait(1).to({skewX:1.975},0).wait(1).to({skewX:2},0).wait(1).to({skewX:2.025,x:1.6},0).wait(1).to({skewX:2.05},0).wait(1).to({skewX:2.075},0).wait(1).to({skewX:2.1,x:1.65},0).wait(1).to({skewX:2.125},0).wait(1).to({skewX:2.15},0).wait(1).to({skewX:2.175,x:1.7},0).wait(1).to({skewX:2.2},0).wait(1).to({skewX:2.225,x:1.75},0).wait(1).to({skewX:2.25},0).wait(1).to({skewX:2.275},0).wait(1).to({skewX:2.3,x:1.8},0).wait(1).to({skewX:2.325},0).wait(1).to({skewX:2.35},0).wait(1).to({skewX:2.375,x:1.85},0).wait(1).to({skewX:2.4},0).wait(1).to({skewX:2.425},0).wait(1).to({skewX:2.45,x:1.9},0).wait(1).to({skewX:2.475},0).wait(1).to({skewX:2.5},0).wait(1).to({skewX:2.525,x:1.95},0).wait(1).to({skewX:2.55},0).wait(1).to({skewX:2.575},0).wait(1).to({skewX:2.6,x:2},0).wait(1).to({skewX:2.625},0).wait(1).to({skewX:2.65,x:2.05},0).wait(1).to({skewX:2.675},0).wait(1).to({skewX:2.7},0).wait(1).to({skewX:2.725,x:2.1},0).wait(1).to({skewX:2.75},0).wait(1).to({skewX:2.775},0).wait(1).to({skewX:2.8,x:2.15},0).wait(1).to({skewX:2.825},0).wait(1).to({skewX:2.85},0).wait(1).to({skewX:2.875,x:2.2},0).wait(1).to({skewX:2.9},0).wait(1).to({skewX:2.925},0).wait(1).to({skewX:2.95,x:2.25},0).wait(1).to({skewX:2.975},0).wait(1).to({skewX:3},0).wait(1).to({skewX:2.975},0).wait(1).to({skewX:2.95},0).wait(1).to({skewX:2.925,x:2.2},0).wait(1).to({skewX:2.9},0).wait(1).to({skewX:2.875},0).wait(1).to({skewX:2.85,x:2.15},0).wait(1).to({skewX:2.825},0).wait(1).to({skewX:2.8},0).wait(1).to({skewX:2.775,x:2.1},0).wait(1).to({skewX:2.75},0).wait(1).to({skewX:2.725},0).wait(1).to({skewX:2.7,x:2.05},0).wait(1).to({skewX:2.675},0).wait(1).to({skewX:2.65},0).wait(1).to({skewX:2.625,x:2},0).wait(1).to({skewX:2.6},0).wait(1).to({skewX:2.575,x:1.95},0).wait(1).to({skewX:2.55},0).wait(1).to({skewX:2.525},0).wait(1).to({skewX:2.5,x:1.9},0).wait(1).to({skewX:2.475},0).wait(1).to({skewX:2.45},0).wait(1).to({skewX:2.425,x:1.85},0).wait(1).to({skewX:2.4},0).wait(1).to({skewX:2.375},0).wait(1).to({skewX:2.35,x:1.8},0).wait(1).to({skewX:2.325},0).wait(1).to({skewX:2.3},0).wait(1).to({skewX:2.275,x:1.75},0).wait(1).to({skewX:2.25},0).wait(1).to({skewX:2.225},0).wait(1).to({skewX:2.2,x:1.7},0).wait(1).to({skewX:2.175},0).wait(1).to({skewX:2.15,x:1.65},0).wait(1).to({skewX:2.125},0).wait(1).to({skewX:2.1},0).wait(1).to({skewX:2.075,x:1.6},0).wait(1).to({skewX:2.05},0).wait(1).to({skewX:2.025},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:1.975},0).wait(1).to({skewX:1.95},0).wait(1).to({skewX:1.925,x:1.5},0).wait(1).to({skewX:1.9},0).wait(1).to({skewX:1.875},0).wait(1).to({skewX:1.85,x:1.45},0).wait(1).to({skewX:1.825},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.775},0).wait(1).to({skewX:1.75},0).wait(1).to({skewX:1.725,x:1.35},0).wait(1).to({skewX:1.7},0).wait(1).to({skewX:1.675},0).wait(1).to({skewX:1.65,x:1.3},0).wait(1).to({skewX:1.625},0).wait(1).to({skewX:1.6},0).wait(1).to({skewX:1.575,x:1.25},0).wait(1).to({skewX:1.55},0).wait(1).to({skewX:1.525},0).wait(1).to({skewX:1.5,x:1.2},0).wait(1).to({skewX:1.475},0).wait(1).to({skewX:1.45},0).wait(1).to({skewX:1.425,x:1.15},0).wait(1).to({skewX:1.4},0).wait(1).to({skewX:1.375,x:1.1,y:-39.9},0).wait(1).to({skewX:1.35},0).wait(1).to({skewX:1.325},0).wait(1).to({skewX:1.3,x:1.05},0).wait(1).to({skewX:1.275},0).wait(1).to({skewX:1.25},0).wait(1).to({skewX:1.225,x:1},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.175},0).wait(1).to({skewX:1.15,x:0.95},0).wait(1).to({skewX:1.125},0).wait(1).to({skewX:1.1},0).wait(1).to({skewX:1.075,x:0.9},0).wait(1).to({skewX:1.05},0).wait(1).to({skewX:1.025},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:0.975},0).wait(1).to({skewX:0.95,x:0.8},0).wait(1).to({skewX:0.925},0).wait(1).to({skewX:0.9},0).wait(1).to({skewX:0.875,x:0.75},0).wait(1).to({skewX:0.85},0).wait(1).to({skewX:0.825},0).wait(1).to({skewX:0.8,x:0.7},0).wait(1).to({skewX:0.775},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.725,x:0.65},0).wait(1).to({skewX:0.7},0).wait(1).to({skewX:0.675},0).wait(1).to({skewX:0.65,x:0.6},0).wait(1).to({skewX:0.625},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.575},0).wait(1).to({skewX:0.55},0).wait(1).to({skewX:0.525,x:0.5},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.475},0).wait(1).to({skewX:0.45,x:0.45},0).wait(1).to({skewX:0.425},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.375,x:0.4},0).wait(1).to({skewX:0.35},0).wait(1).to({skewX:0.325},0).wait(1).to({skewX:0.3,x:0.35},0).wait(1).to({skewX:0.275},0).wait(1).to({skewX:0.25},0).wait(1).to({skewX:0.225,x:0.3},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.175,x:0.25},0).wait(1).to({skewX:0.15},0).wait(1).to({skewX:0.125},0).wait(1).to({skewX:0.1,x:0.2},0).wait(1).to({skewX:0.075},0).wait(1).to({skewX:0.05},0).wait(1).to({rotation:0.025,skewX:0,x:0.15},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0252},0).wait(1).to({rotation:0,skewX:-0.0504,x:0.1},0).wait(1).to({skewX:-0.0756},0).wait(1).to({skewX:-0.1008},0).wait(1).to({skewX:-0.1261,x:0.05},0).wait(1).to({skewX:-0.1513},0).wait(1).to({skewX:-0.1765},0).wait(1).to({skewX:-0.2017,x:0},0).wait(1).to({skewX:-0.2269},0).wait(1).to({skewX:-0.2521,x:-0.05},0).wait(1).to({skewX:-0.2773},0).wait(1).to({skewX:-0.3025},0).wait(1).to({skewX:-0.3277,x:-0.1},0).wait(1).to({skewX:-0.3529},0).wait(1).to({skewX:-0.3782},0).wait(1).to({skewX:-0.4034,x:-0.15},0).wait(1).to({skewX:-0.4286},0).wait(1).to({skewX:-0.4538},0).wait(1).to({skewX:-0.479,x:-0.2},0).wait(1).to({skewX:-0.5042},0).wait(1).to({skewX:-0.5294},0).wait(1).to({skewX:-0.5546,x:-0.25},0).wait(1).to({skewX:-0.5798},0).wait(1).to({skewX:-0.605,x:-0.3},0).wait(1).to({skewX:-0.6303},0).wait(1).to({skewX:-0.6555},0).wait(1).to({skewX:-0.6807,x:-0.35},0).wait(1).to({skewX:-0.7059},0).wait(1).to({skewX:-0.7311},0).wait(1).to({skewX:-0.7563,x:-0.4},0).wait(1).to({skewX:-0.7815},0).wait(1).to({skewX:-0.8067},0).wait(1).to({skewX:-0.8319,x:-0.45},0).wait(1).to({skewX:-0.8571},0).wait(1).to({skewX:-0.8824},0).wait(1).to({skewX:-0.9076,x:-0.5},0).wait(1).to({skewX:-0.9328},0).wait(1).to({skewX:-0.958,x:-0.55},0).wait(1).to({skewX:-0.9832},0).wait(1).to({skewX:-1.0084},0).wait(1).to({skewX:-1.0336,x:-0.6},0).wait(1).to({skewX:-1.0588},0).wait(1).to({skewX:-1.084},0).wait(1).to({skewX:-1.1092,x:-0.65},0).wait(1).to({skewX:-1.1345},0).wait(1).to({skewX:-1.1597},0).wait(1).to({skewX:-1.1849,x:-0.7},0).wait(1).to({skewX:-1.2101},0).wait(1).to({skewX:-1.2353},0).wait(1).to({skewX:-1.2605,x:-0.75},0).wait(1).to({skewX:-1.2857},0).wait(1).to({skewX:-1.3109,x:-0.8},0).wait(1).to({skewX:-1.3361},0).wait(1).to({skewX:-1.3613},0).wait(1).to({skewX:-1.3866,x:-0.85,y:-39.85},0).wait(1).to({skewX:-1.4118},0).wait(1).to({skewX:-1.437},0).wait(1).to({skewX:-1.4622,x:-0.9},0).wait(1).to({skewX:-1.4874},0).wait(1).to({skewX:-1.5126},0).wait(1).to({skewX:-1.5378,x:-0.95},0).wait(1).to({skewX:-1.563},0).wait(1).to({skewX:-1.5882},0).wait(1).to({skewX:-1.6134,x:-1},0).wait(1).to({skewX:-1.6387},0).wait(1).to({skewX:-1.6639,x:-1.05},0).wait(1).to({skewX:-1.6891},0).wait(1).to({skewX:-1.7143},0).wait(1).to({skewX:-1.7395,x:-1.1},0).wait(1).to({skewX:-1.7647},0).wait(1).to({skewX:-1.7899},0).wait(1).to({skewX:-1.8151,x:-1.15},0).wait(1).to({skewX:-1.8403},0).wait(1).to({skewX:-1.8655},0).wait(1).to({skewX:-1.8908,x:-1.2},0).wait(1).to({skewX:-1.916},0).wait(1).to({skewX:-1.9412},0).wait(1).to({skewX:-1.9664,x:-1.25},0).wait(1).to({skewX:-1.9916},0).wait(1).to({skewX:-2.0168,x:-1.3},0).wait(1).to({skewX:-2.042},0).wait(1).to({skewX:-2.0672},0).wait(1).to({skewX:-2.0924,x:-1.35},0).wait(1).to({skewX:-2.1176},0).wait(1).to({skewX:-2.1429},0).wait(1).to({skewX:-2.1681,x:-1.4},0).wait(1).to({skewX:-2.1933},0).wait(1).to({skewX:-2.2185},0).wait(1).to({skewX:-2.2437,x:-1.45},0).wait(1).to({skewX:-2.2689},0).wait(1).to({skewX:-2.2941},0).wait(1).to({skewX:-2.3193,x:-1.5},0).wait(1).to({skewX:-2.3445},0).wait(1).to({skewX:-2.3697,x:-1.55},0).wait(1).to({skewX:-2.395},0).wait(1).to({skewX:-2.4202},0).wait(1).to({skewX:-2.4454,x:-1.6},0).wait(1).to({skewX:-2.4706},0).wait(1).to({skewX:-2.4958},0).wait(1).to({skewX:-2.521,x:-1.65},0).wait(1).to({skewX:-2.5462},0).wait(1).to({skewX:-2.5714},0).wait(1).to({skewX:-2.5966,x:-1.7},0).wait(1).to({skewX:-2.6218},0).wait(1).to({skewX:-2.6471},0).wait(1).to({skewX:-2.6723,x:-1.75},0).wait(1).to({skewX:-2.6975},0).wait(1).to({skewX:-2.7227,x:-1.8},0).wait(1).to({skewX:-2.7479},0).wait(1).to({skewX:-2.7731},0).wait(1).to({skewX:-2.7983,x:-1.85},0).wait(1).to({skewX:-2.8235},0).wait(1).to({skewX:-2.8487},0).wait(1).to({skewX:-2.8739,x:-1.9},0).wait(1).to({skewX:-2.8992},0).wait(1).to({skewX:-2.9244},0).wait(1).to({skewX:-2.9496,x:-1.95},0).wait(1).to({skewX:-2.9748},0).wait(1).to({skewX:-3},0).wait(1).to({skewX:-2.975},0).wait(1).to({skewX:-2.95},0).wait(1).to({skewX:-2.925,x:-1.9},0).wait(1).to({skewX:-2.9},0).wait(1).to({skewX:-2.875},0).wait(1).to({skewX:-2.85,x:-1.85},0).wait(1).to({skewX:-2.825},0).wait(1).to({skewX:-2.8},0).wait(1).to({skewX:-2.775,x:-1.8},0).wait(1).to({skewX:-2.75},0).wait(1).to({skewX:-2.725},0).wait(1).to({skewX:-2.7,x:-1.75},0).wait(1).to({skewX:-2.675},0).wait(1).to({skewX:-2.65},0).wait(1).to({skewX:-2.625,x:-1.7},0).wait(1).to({skewX:-2.6},0).wait(1).to({skewX:-2.575,x:-1.65},0).wait(1).to({skewX:-2.55},0).wait(1).to({skewX:-2.525},0).wait(1).to({skewX:-2.5,x:-1.6},0).wait(1).to({skewX:-2.475},0).wait(1).to({skewX:-2.45},0).wait(1).to({skewX:-2.425,x:-1.55},0).wait(1).to({skewX:-2.4},0).wait(1).to({skewX:-2.375},0).wait(1).to({skewX:-2.35,x:-1.5},0).wait(1).to({skewX:-2.325},0).wait(1).to({skewX:-2.3},0).wait(1).to({skewX:-2.275,x:-1.45},0).wait(1).to({skewX:-2.25},0).wait(1).to({skewX:-2.225},0).wait(1).to({skewX:-2.2,x:-1.4},0).wait(1).to({skewX:-2.175},0).wait(1).to({skewX:-2.15,x:-1.35},0).wait(1).to({skewX:-2.125},0).wait(1).to({skewX:-2.1},0).wait(1).to({skewX:-2.075,x:-1.3},0).wait(1).to({skewX:-2.05},0).wait(1).to({skewX:-2.025},0).wait(1);
	this.timeline.addTween(_tweenStr_2.to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-1.975},0).wait(1).to({skewX:-1.95},0).wait(1).to({skewX:-1.925,x:-1.2},0).wait(1).to({skewX:-1.9},0).wait(1).to({skewX:-1.875},0).wait(1).to({skewX:-1.85,x:-1.15},0).wait(1).to({skewX:-1.825},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.775},0).wait(1).to({skewX:-1.75},0).wait(1).to({skewX:-1.725,x:-1.05},0).wait(1).to({skewX:-1.7},0).wait(1).to({skewX:-1.675},0).wait(1).to({skewX:-1.65,x:-1},0).wait(1).to({skewX:-1.625},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.575,x:-0.95},0).wait(1).to({skewX:-1.55},0).wait(1).to({skewX:-1.525},0).wait(1).to({skewX:-1.5,x:-0.9},0).wait(1).to({skewX:-1.475},0).wait(1).to({skewX:-1.45},0).wait(1).to({skewX:-1.425,x:-0.85},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.375,x:-0.8,y:-39.9},0).wait(1).to({skewX:-1.35},0).wait(1).to({skewX:-1.325},0).wait(1).to({skewX:-1.3,x:-0.75},0).wait(1).to({skewX:-1.275},0).wait(1).to({skewX:-1.25},0).wait(1).to({skewX:-1.225,x:-0.7},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.175},0).wait(1).to({skewX:-1.15,x:-0.65},0).wait(1).to({skewX:-1.125},0).wait(1).to({skewX:-1.1},0).wait(1).to({skewX:-1.075,x:-0.6},0).wait(1).to({skewX:-1.05},0).wait(1).to({skewX:-1.025},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-0.975},0).wait(1).to({skewX:-0.95,x:-0.5},0).wait(1).to({skewX:-0.925},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-0.875,x:-0.45},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.825},0).wait(1).to({skewX:-0.8,x:-0.4},0).wait(1).to({skewX:-0.775},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.725,x:-0.35},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.675},0).wait(1).to({skewX:-0.65,x:-0.3},0).wait(1).to({skewX:-0.625},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.575},0).wait(1).to({skewX:-0.55},0).wait(1).to({skewX:-0.525,x:-0.2},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.475},0).wait(1).to({skewX:-0.45,x:-0.15},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.375,x:-0.1},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.325},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.225,x:0},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.175,x:0.05},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.1,x:0.1},0).wait(1).to({skewX:-0.075},0).wait(1).to({skewX:-0.05},0).wait(1).to({rotation:-0.025,skewX:0,x:0.15},0).wait(1).to({rotation:0},0).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.1579,x:0.25,y:-39.9},0).wait(1).to({skewX:0.3158,x:0.35},0).wait(1).to({skewX:0.4737,x:0.5},0).wait(1).to({skewX:0.6316,x:0.6},0).wait(1).to({skewX:0.7895,x:0.7},0).wait(1).to({skewX:0.9474,x:0.8},0).wait(1).to({skewX:1.1053,x:0.95},0).wait(1).to({skewX:1.2632,x:1.05},0).wait(1).to({skewX:1.4211,x:1.15,y:-39.85},0).wait(1).to({skewX:1.5789,x:1.25},0).wait(1).to({skewX:1.7368,x:1.4},0).wait(1).to({skewX:1.8947,x:1.5},0).wait(1).to({skewX:2.0526,x:1.6},0).wait(1).to({skewX:2.2105,x:1.7},0).wait(1).to({skewX:2.3684,x:1.85},0).wait(1).to({skewX:2.5263,x:1.95},0).wait(1).to({skewX:2.6842,x:2.05},0).wait(1).to({skewX:2.8421,x:2.15},0).wait(1).to({skewX:3,x:2.25},0).wait(1).to({skewX:2.85,x:2.15},0).wait(1).to({skewX:2.7,x:2.05},0).wait(1).to({skewX:2.55,x:1.95},0).wait(1).to({skewX:2.4,x:1.85},0).wait(1).to({skewX:2.25,x:1.75},0).wait(1).to({skewX:2.1,x:1.65},0).wait(1).to({skewX:1.95,x:1.55},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.65,x:1.3},0).wait(1).to({skewX:1.5,x:1.2},0).wait(1).to({skewX:1.35,x:1.1,y:-39.9},0).wait(1).to({skewX:1.2,x:1},0).wait(1).to({skewX:1.05,x:0.9},0).wait(1).to({skewX:0.9,x:0.8},0).wait(1).to({skewX:0.75,x:0.7},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.45,x:0.45},0).wait(1).to({skewX:0.3,x:0.35},0).wait(1).to({skewX:0.15,x:0.25},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.15,x:0.05},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.45,x:-0.15},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.75,x:-0.4},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-1.05,x:-0.6},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.35,x:-0.8},0).wait(1).to({skewX:-1.5,x:-0.9,y:-39.85},0).wait(1).to({skewX:-1.65,x:-1},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.95,x:-1.25},0).wait(1).to({skewX:-2.1,x:-1.35},0).wait(1).to({skewX:-2.25,x:-1.45},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.55,x:-1.65},0).wait(1).to({skewX:-2.7,x:-1.75},0).wait(1).to({skewX:-2.85,x:-1.85},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-2.85,x:-1.85},0).wait(1).to({skewX:-2.7,x:-1.75},0).wait(1).to({skewX:-2.55,x:-1.65},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.25,x:-1.45},0).wait(1).to({skewX:-2.1,x:-1.35},0).wait(1).to({skewX:-1.95,x:-1.25},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.65,x:-1},0).wait(1).to({skewX:-1.5,x:-0.9},0).wait(1).to({skewX:-1.35,x:-0.8,y:-39.9},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.05,x:-0.6},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-0.75,x:-0.4},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.45,x:-0.15},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.15,x:0.05},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-40.6,skewX:0.1013,x:0.2,y:-39.9},0).wait(1).to({skewX:0.2025,x:0.3},0).wait(1).to({skewX:0.3038,x:0.35},0).wait(1).to({skewX:0.4051,x:0.45},0).wait(1).to({skewX:0.5063,x:0.5},0).wait(1).to({skewX:0.6076,x:0.6},0).wait(1).to({skewX:0.7089,x:0.65},0).wait(1).to({skewX:0.8101,x:0.7},0).wait(1).to({skewX:0.9114,x:0.8},0).wait(1).to({skewX:1.0127,x:0.85},0).wait(1).to({skewX:1.1139,x:0.95},0).wait(1).to({skewX:1.2152,x:1},0).wait(1).to({skewX:1.3165,x:1.1},0).wait(1).to({skewX:1.4177,x:1.15,y:-39.85},0).wait(1).to({skewX:1.519,x:1.25},0).wait(1).to({skewX:1.6203,x:1.3},0).wait(1).to({skewX:1.7215,x:1.35},0).wait(1).to({skewX:1.8228,x:1.45},0).wait(1).to({skewX:1.9241,x:1.5},0).wait(1).to({skewX:2.0253,x:1.6},0).wait(1).to({skewX:2.1266,x:1.65},0).wait(1).to({skewX:2.2278,x:1.75},0).wait(1).to({skewX:2.3291,x:1.8},0).wait(1).to({skewX:2.4304,x:1.85},0).wait(1).to({skewX:2.5316,x:1.95},0).wait(1).to({skewX:2.6329,x:2},0).wait(1).to({skewX:2.7342,x:2.1},0).wait(1).to({skewX:2.8354,x:2.15},0).wait(1).to({skewX:2.9367,x:2.25},0).wait(1).to({skewX:3.038,x:2.3},0).wait(1).to({skewX:3.1392,x:2.35},0).wait(1).to({skewX:3.2405,x:2.45,y:-39.8},0).wait(1).to({skewX:3.3418,x:2.5},0).wait(1).to({skewX:3.443,x:2.6},0).wait(1).to({skewX:3.5443,x:2.65},0).wait(1).to({skewX:3.6456,x:2.75},0).wait(1).to({skewX:3.7468,x:2.8},0).wait(1).to({skewX:3.8481,x:2.85},0).wait(1).to({skewX:3.9494,x:2.95},0).wait(1).to({skewX:4.0506,x:3},0).wait(1).to({skewX:4.1519,x:3.1},0).wait(1).to({skewX:4.2532,x:3.15,y:-39.75},0).wait(1).to({skewX:4.3544,x:3.25},0).wait(1).to({skewX:4.4557,x:3.3},0).wait(1).to({skewX:4.557,x:3.35},0).wait(1).to({skewX:4.6582,x:3.45},0).wait(1).to({skewX:4.7595,x:3.5},0).wait(1).to({skewX:4.8608,x:3.6},0).wait(1).to({skewX:4.962,x:3.65},0).wait(1).to({skewX:5.0633,x:3.75},0).wait(1).to({skewX:5.1646,x:3.8,y:-39.7},0).wait(1).to({skewX:5.2658,x:3.85},0).wait(1).to({skewX:5.3671,x:3.95},0).wait(1).to({skewX:5.4684,x:4},0).wait(1).to({skewX:5.5696,x:4.1},0).wait(1).to({skewX:5.6709,x:4.15},0).wait(1).to({skewX:5.7722,x:4.25},0).wait(1).to({skewX:5.8734,x:4.3,y:-39.65},0).wait(1).to({skewX:5.9747,x:4.35},0).wait(1).to({skewX:6.0759,x:4.45},0).wait(1).to({skewX:6.1772,x:4.5},0).wait(1).to({skewX:6.2785,x:4.6},0).wait(1).to({skewX:6.3797,x:4.65},0).wait(1).to({skewX:6.481,x:4.75},0).wait(1).to({skewX:6.5823,x:4.8,y:-39.6},0).wait(1).to({skewX:6.6835,x:4.85},0).wait(1).to({skewX:6.7848,x:4.95},0).wait(1).to({skewX:6.8861,x:5},0).wait(1).to({skewX:6.9873,x:5.1},0).wait(1).to({skewX:7.0886,x:5.15},0).wait(1).to({skewX:7.1899,x:5.25,y:-39.55},0).wait(1).to({skewX:7.2911,x:5.3},0).wait(1).to({skewX:7.3924,x:5.35},0).wait(1).to({skewX:7.4937,x:5.45},0).wait(1).to({skewX:7.5949,x:5.5},0).wait(1).to({skewX:7.6962,x:5.6,y:-39.5},0).wait(1).to({skewX:7.7975,x:5.65},0).wait(1).to({skewX:7.8987,x:5.75},0).wait(1).to({skewX:8,x:5.8},0).wait(1).to({skewX:7.9,x:5.75},0).wait(1).to({skewX:7.8,x:5.65},0).wait(1).to({skewX:7.7,x:5.6},0).wait(1).to({skewX:7.6,x:5.5,y:-39.55},0).wait(1).to({skewX:7.5,x:5.45},0).wait(1).to({skewX:7.4,x:5.4},0).wait(1).to({skewX:7.3,x:5.3},0).wait(1).to({skewX:7.2,x:5.25},0).wait(1).to({skewX:7.1,x:5.15,y:-39.6},0).wait(1).to({skewX:7,x:5.1},0).wait(1).to({skewX:6.9,x:5.05},0).wait(1).to({skewX:6.8,x:4.95},0).wait(1).to({skewX:6.7,x:4.9},0).wait(1).to({skewX:6.6,x:4.8},0).wait(1).to({skewX:6.5,x:4.75,y:-39.65},0).wait(1).to({skewX:6.4,x:4.65},0).wait(1).to({skewX:6.3,x:4.6},0).wait(1).to({skewX:6.2,x:4.55},0).wait(1).to({skewX:6.1,x:4.45},0).wait(1).to({skewX:6,x:4.4},0).wait(1).to({skewX:5.9,x:4.3},0).wait(1).to({skewX:5.8,x:4.25,y:-39.7},0).wait(1).to({skewX:5.7,x:4.2},0).wait(1).to({skewX:5.6,x:4.1},0).wait(1).to({skewX:5.5,x:4.05},0).wait(1).to({skewX:5.4,x:3.95},0).wait(1).to({skewX:5.3,x:3.9},0).wait(1).to({skewX:5.2,x:3.85},0).wait(1).to({skewX:5.1,x:3.75,y:-39.75},0).wait(1).to({skewX:5,x:3.7},0).wait(1).to({skewX:4.9,x:3.6},0).wait(1).to({skewX:4.8,x:3.55},0).wait(1).to({skewX:4.7,x:3.5},0).wait(1).to({skewX:4.6,x:3.4},0).wait(1).to({skewX:4.5,x:3.35},0).wait(1).to({skewX:4.4,x:3.25},0).wait(1).to({skewX:4.3,x:3.2},0).wait(1).to({skewX:4.2,x:3.1,y:-39.8},0).wait(1).to({skewX:4.1,x:3.05},0).wait(1).to({skewX:4,x:3},0).wait(1).to({skewX:3.9,x:2.9},0).wait(1).to({skewX:3.8,x:2.85},0).wait(1).to({skewX:3.7,x:2.75},0).wait(1).to({skewX:3.6,x:2.7},0).wait(1).to({skewX:3.5,x:2.65},0).wait(1).to({skewX:3.4,x:2.55},0).wait(1).to({skewX:3.3,x:2.5},0).wait(1).to({skewX:3.2,x:2.4},0).wait(1).to({skewX:3.1,x:2.35,y:-39.85},0).wait(1).to({skewX:3,x:2.25},0).wait(1).to({skewX:2.9,x:2.2},0).wait(1).to({skewX:2.8,x:2.15},0).wait(1).to({skewX:2.7,x:2.05},0).wait(1).to({skewX:2.6,x:2},0).wait(1).to({skewX:2.5,x:1.9},0).wait(1).to({skewX:2.4,x:1.85},0).wait(1).to({skewX:2.3,x:1.8},0).wait(1).to({skewX:2.2,x:1.7},0).wait(1).to({skewX:2.1,x:1.65},0).wait(1).to({skewX:2,x:1.55},0).wait(1).to({skewX:1.9,x:1.5},0).wait(1).to({skewX:1.8,x:1.4},0).wait(1).to({skewX:1.7,x:1.35},0).wait(1).to({skewX:1.6,x:1.3},0).wait(1).to({skewX:1.5,x:1.2},0).wait(1).to({skewX:1.4,x:1.15},0).wait(1).to({skewX:1.3,x:1.05,y:-39.9},0).wait(1).to({skewX:1.2,x:1},0).wait(1).to({skewX:1.1,x:0.95},0).wait(1).to({skewX:1,x:0.85},0).wait(1).to({skewX:0.9,x:0.8},0).wait(1).to({skewX:0.8,x:0.7},0).wait(1).to({skewX:0.7,x:0.65},0).wait(1).to({skewX:0.6,x:0.55},0).wait(1).to({skewX:0.5,x:0.5},0).wait(1).to({skewX:0.4,x:0.45},0).wait(1).to({skewX:0.3,x:0.35},0).wait(1).to({skewX:0.2,x:0.3},0).wait(1).to({skewX:0.1,x:0.2},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.1,x:0.1},0).wait(1).to({skewX:-0.2,x:0},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.4,x:-0.15},0).wait(1).to({skewX:-0.5,x:-0.2},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.7,x:-0.35},0).wait(1).to({skewX:-0.8,x:-0.4},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-1.1,x:-0.65},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.3,x:-0.75},0).wait(1).to({skewX:-1.4,x:-0.85,y:-39.85},0).wait(1).to({skewX:-1.5,x:-0.9},0).wait(1).to({skewX:-1.6,x:-1},0).wait(1).to({skewX:-1.7,x:-1.05},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.9,x:-1.2},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-2.1,x:-1.35},0).wait(1).to({skewX:-2.2,x:-1.4},0).wait(1).to({skewX:-2.3,x:-1.5},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.5,x:-1.6},0).wait(1).to({skewX:-2.6,x:-1.7},0).wait(1).to({skewX:-2.7,x:-1.75},0).wait(1).to({skewX:-2.8,x:-1.85},0).wait(1).to({skewX:-2.9,x:-1.9},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-3.1,x:-2.05},0).wait(1).to({skewX:-3.2,x:-2.1,y:-39.8},0).wait(1).to({skewX:-3.3,x:-2.2},0).wait(1).to({skewX:-3.4,x:-2.25},0).wait(1).to({skewX:-3.5,x:-2.35},0).wait(1).to({skewX:-3.6,x:-2.4},0).wait(1).to({skewX:-3.7,x:-2.45},0).wait(1).to({skewX:-3.8,x:-2.55},0).wait(1).to({skewX:-3.9,x:-2.6},0).wait(1).to({skewX:-4,x:-2.7},0).wait(1).to({skewX:-4.1,x:-2.75},0).wait(1).to({skewX:-4.2,x:-2.8},0).wait(1).to({skewX:-4.3,x:-2.9,y:-39.75},0).wait(1).to({skewX:-4.4,x:-2.95},0).wait(1).to({skewX:-4.5,x:-3.05},0).wait(1).to({skewX:-4.6,x:-3.1},0).wait(1).to({skewX:-4.7,x:-3.2},0).wait(1).to({skewX:-4.8,x:-3.25},0).wait(1).to({skewX:-4.9,x:-3.3},0).wait(1).to({skewX:-5,x:-3.4},0).wait(1).to({skewX:-5.1,x:-3.45},0).wait(1).to({skewX:-5.2,x:-3.55,y:-39.7},0).wait(1).to({skewX:-5.3,x:-3.6},0).wait(1).to({skewX:-5.4,x:-3.65},0).wait(1).to({skewX:-5.5,x:-3.75},0).wait(1).to({skewX:-5.6,x:-3.8},0).wait(1).to({skewX:-5.7,x:-3.9},0).wait(1).to({skewX:-5.8,x:-3.95},0).wait(1).to({skewX:-5.9,x:-4,y:-39.65},0).wait(1).to({skewX:-6,x:-4.1},0).wait(1).to({skewX:-6.1,x:-4.15},0).wait(1).to({skewX:-6.2,x:-4.25},0).wait(1).to({skewX:-6.3,x:-4.3},0).wait(1).to({skewX:-6.4,x:-4.35},0).wait(1).to({skewX:-6.5,x:-4.45},0).wait(1).to({skewX:-6.6,x:-4.5,y:-39.6},0).wait(1).to({skewX:-6.7,x:-4.6},0).wait(1).to({skewX:-6.8,x:-4.65},0).wait(1).to({skewX:-6.9,x:-4.75},0).wait(1).to({skewX:-7,x:-4.8},0).wait(1).to({skewX:-7.1,x:-4.85},0).wait(1).to({skewX:-7.2,x:-4.95,y:-39.55},0).wait(1).to({skewX:-7.3,x:-5},0).wait(1).to({skewX:-7.4,x:-5.1},0).wait(1).to({skewX:-7.5,x:-5.15},0).wait(1).to({skewX:-7.6,x:-5.2},0).wait(1).to({skewX:-7.7,x:-5.3,y:-39.5},0).wait(1).to({skewX:-7.8,x:-5.35},0).wait(1).to({skewX:-7.9,x:-5.45},0).wait(1).to({skewX:-8,x:-5.5},0).wait(1).to({skewX:-7.9,x:-5.45},0).wait(1).to({skewX:-7.8,x:-5.35},0).wait(1).to({skewX:-7.7,x:-5.3},0).wait(1).to({skewX:-7.6,x:-5.2,y:-39.55},0).wait(1).to({skewX:-7.5,x:-5.15},0).wait(1).to({skewX:-7.4,x:-5.1},0).wait(1).to({skewX:-7.3,x:-5},0).wait(1).to({skewX:-7.2,x:-4.95},0).wait(1).to({skewX:-7.1,x:-4.85,y:-39.6},0).wait(1).to({skewX:-7,x:-4.8},0).wait(1).to({skewX:-6.9,x:-4.75},0).wait(1).to({skewX:-6.8,x:-4.65},0).wait(1).to({skewX:-6.7,x:-4.6},0).wait(1).to({skewX:-6.6,x:-4.5},0).wait(1).to({skewX:-6.5,x:-4.45,y:-39.65},0).wait(1).to({skewX:-6.4,x:-4.35},0).wait(1).to({skewX:-6.3,x:-4.3},0).wait(1).to({skewX:-6.2,x:-4.25},0).wait(1).to({skewX:-6.1,x:-4.15},0).wait(1).to({skewX:-6,x:-4.1},0).wait(1).to({skewX:-5.9,x:-4},0).wait(1).to({skewX:-5.8,x:-3.95,y:-39.7},0).wait(1).to({skewX:-5.7,x:-3.9},0).wait(1).to({skewX:-5.6,x:-3.8},0).wait(1).to({skewX:-5.5,x:-3.75},0).wait(1).to({skewX:-5.4,x:-3.65},0).wait(1).to({skewX:-5.3,x:-3.6},0).wait(1).to({skewX:-5.2,x:-3.55},0).wait(1).to({skewX:-5.1,x:-3.45,y:-39.75},0).wait(1).to({skewX:-5,x:-3.4},0).wait(1).to({skewX:-4.9,x:-3.3},0).wait(1).to({skewX:-4.8,x:-3.25},0).wait(1).to({skewX:-4.7,x:-3.2},0).wait(1).to({skewX:-4.6,x:-3.1},0).wait(1).to({skewX:-4.5,x:-3.05},0).wait(1).to({skewX:-4.4,x:-2.95},0).wait(1).to({skewX:-4.3,x:-2.9},0).wait(1).to({skewX:-4.2,x:-2.8,y:-39.8},0).wait(1).to({skewX:-4.1,x:-2.75},0).wait(1).to({skewX:-4,x:-2.7},0).wait(1).to({skewX:-3.9,x:-2.6},0).wait(1).to({skewX:-3.8,x:-2.55},0).wait(1).to({skewX:-3.7,x:-2.45},0).wait(1).to({skewX:-3.6,x:-2.4},0).wait(1).to({skewX:-3.5,x:-2.35},0).wait(1).to({skewX:-3.4,x:-2.25},0).wait(1).to({skewX:-3.3,x:-2.2},0).wait(1).to({skewX:-3.2,x:-2.1},0).wait(1).to({skewX:-3.1,x:-2.05,y:-39.85},0).wait(1).to({skewX:-3,x:-1.95},0).wait(1).to({skewX:-2.9,x:-1.9},0).wait(1).to({skewX:-2.8,x:-1.85},0).wait(1).to({skewX:-2.7,x:-1.75},0).wait(1).to({skewX:-2.6,x:-1.7},0).wait(1).to({skewX:-2.5,x:-1.6},0).wait(1).to({skewX:-2.4,x:-1.55},0).wait(1).to({skewX:-2.3,x:-1.5},0).wait(1).to({skewX:-2.2,x:-1.4},0).wait(1).to({skewX:-2.1,x:-1.35},0).wait(1).to({skewX:-2,x:-1.25},0).wait(1).to({skewX:-1.9,x:-1.2},0).wait(1).to({skewX:-1.8,x:-1.1},0).wait(1).to({skewX:-1.7,x:-1.05},0).wait(1).to({skewX:-1.6,x:-1},0).wait(1).to({skewX:-1.5,x:-0.9},0).wait(1).to({skewX:-1.4,x:-0.85},0).wait(1).to({skewX:-1.3,x:-0.75,y:-39.9},0).wait(1).to({skewX:-1.2,x:-0.7},0).wait(1).to({skewX:-1.1,x:-0.65},0).wait(1).to({skewX:-1,x:-0.55},0).wait(1).to({skewX:-0.9,x:-0.5},0).wait(1).to({skewX:-0.8,x:-0.4},0).wait(1).to({skewX:-0.7,x:-0.35},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.5,x:-0.2},0).wait(1).to({skewX:-0.4,x:-0.15},0).wait(1).to({skewX:-0.3,x:-0.05},0).wait(1).to({skewX:-0.2,x:0},0).wait(1).to({skewX:-0.1,x:0.1},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-80.8,150.2,82.89999999999999);


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

	// Layer_5
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-0.05,131.4,1,1,0,0,0,0,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:354.3},279).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0001").s().p("AhDghICHAAIhEBDg");
	this.shape.setTransform(247.85,14.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXAjIhxAAIAAhFIBxAAIAAgZIBEA7IhEA8g");
	this.shape_1.setTransform(415.05,-28,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXAjIhxAAIAAhFIBxAAIAAgZIBEA7IhEA8g");
	this.shape_2.setTransform(568.25,-28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVA6QAMgGAGgPQAEgOAAgXQAAgWgEgPQgGgOgMgGIADgJQAUAHAKAQQAJAQAAAbQAAAcgJAQQgKAQgUAHg");
	this.shape_3.setTransform(550.65,-26.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAhQgIgEgDgIQgEgHAAgOQAAgMAEgIQADgIAIgEQAHgDAMAAIAOABQAHABAFACIgDANIgTAAQgHAAgCABQgEACgBAEQgCAEAAAHQAAAIACAEQABAEAEACQACACAHAAQAMAAAJgCIACAOQgGACgHABIgOABQgMAAgHgDg");
	this.shape_4.setTransform(544.825,-25.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAyIAAhEIATAAIAABEgAgEgdQgGAAAAgGIAAgIQAAgGAGAAIAJAAQAGAAAAAGIAAAIQAAAGgGAAg");
	this.shape_5.setTransform(539.275,-27.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAjIAAgsQAAgFgCgBQgBgCgDAAIgIABIgLAGIABAtIgWAAIAAhEIARAAIACALQAOgMAPgBQAJAAAFAGQAFAFAAAIIAAAzg");
	this.shape_6.setTransform(533.2,-25.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAhQgHgEgEgHQgEgJABgNQgBgNAEgHQAEgJAHgDQAIgDAMgBQANABAIADQAHAEAEAIQAEAHAAANQAAANgEAJQgEAHgHAEQgIADgNAAQgMAAgIgDgAgHgSQgDACgCAEIgBAMIABANQACAFADABQADACAEAAQAFAAAEgCQACgBABgFQACgFAAgIQAAgHgCgFQgBgEgCgCQgEgCgFAAQgEAAgDACg");
	this.shape_7.setTransform(524.9,-25.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAhAjIAAgsQAAgFgCgBQgBgCgFAAQgDAAgDABIgJAFIAAAuIgTAAIAAgsQAAgFgCgBQgBgCgEAAQgEAAgDABIgJAFIAAAuIgUAAIAAhEIAQAAIACALQAGgHAHgCQAGgEAHAAQANAAAEAMQAGgGAGgCQAGgEAHAAQAJAAAFAGQAFAFAAAIIAAAzg");
	this.shape_8.setTransform(514.725,-25.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAjIAAhEIAQAAIACALQAGgGAHgDQAHgEAHAAIAEAAIgCATIgGAAIgJACIgLAEIAAAtg");
	this.shape_9.setTransform(505.925,-25.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAfQgGgFAAgJIAAgHQAAgJAFgDQAGgFAKAAIAYAAIAAgDQgBgFgCgCQgCgCgHAAIgcABIgCgOIASgCIARgBQAOAAAHAFQAGAGAAAOIAAAtIgQAAIgCgLQgFAFgGAEQgFADgJAAQgKAAgGgFgAgKAGQgCACAAADIAAADQAAADACACQACACAEAAIAIgCIAJgFIAAgJIgSAAQgEAAgBABg");
	this.shape_10.setTransform(498.525,-25.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANAxIAAgtQAAgEgCgBQgBgCgDAAIgIABIgKAEIAAAvIgWAAIAAhhIAWAAIAAAYIgCAOQAOgLAOAAQAJAAAFAFQAEAFABAJIAAAzg");
	this.shape_11.setTransform(490.55,-27.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLAsQgKgQAAgcQAAgbAKgQQAKgQAUgHIACAJQgMAGgFAOQgFAPABAWQgBAXAFAOQAFAPAMAGIgCAJQgUgHgKgQg");
	this.shape_12.setTransform(483.95,-26.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAvQgIgCgDgEQgDgFAAgIQAAgFADgDQACgEAGgDQgEgDAAgGQAAgEACgCQABgDADgCQgFgCgCgFQgDgEAAgHQAAgJADgEQADgFAHgDQAHgCANAAQAKAAAHACIAWAAIgBAJIgJABQACAEAAAGQAAAJgDAEQgDAFgHACQgHADgLAAIgNgBIAAADIABACIAEACIAYADQAKABAFAFQAFAFAAAKQAAAJgEAEQgDAFgIACQgIACgMAAQgPAAgIgCgAgQAVIgBAFQAAADABACIAFACIAKABIAKgBIAFgCQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgEIgDgBIgHgBIgRgCgAgMghQgDACAAAFQAAAFADACQADACAIAAQAGAAADgCQADgCAAgFQAAgFgDgCQgDgBgGAAQgIAAgDABg");
	this.shape_13.setTransform(474.275,-24.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AANAjIAAgsQAAgFgBgBQgCgCgEAAIgHABIgLAGIABAtIgVAAIAAhEIAQAAIACALQAOgMAPgBQAJAAAFAGQAEAFABAIIAAAzg");
	this.shape_14.setTransform(466,-25.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAyIAAhEIATAAIAABEgAgEgdQgGAAAAgGIAAgIQAAgGAGAAIAJAAQAGAAAAAGIAAAIQAAAGgGAAg");
	this.shape_15.setTransform(459.875,-27.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPAhQgIgEgDgIQgEgHAAgOQAAgMAEgIQADgIAIgEQAHgDAMAAIAOABQAHABAFACIgDANIgTAAQgHAAgCABQgEACgBAEQgCAEAAAHQAAAIACAEQABAEAEACQACACAHAAQAMAAAJgCIACAOQgGACgHABIgOABQgMAAgHgDg");
	this.shape_16.setTransform(454.525,-25.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAjIAAhEIAQAAIACALQAGgGAHgDQAHgEAHAAIAEAAIgCATIgGAAIgJACIgLAEIAAAtg");
	this.shape_17.setTransform(448.275,-25.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAhQgJgEgDgHQgEgJABgNQgBgNAEgHQADgJAJgDQAHgDAMgBQANABAIADQAHAEAEAIQADAHABANQgBANgDAJQgEAHgHAEQgIADgNAAQgMAAgHgDgAgHgSQgEACgBAEIgBAMIABANQABAFAEABQADACAEAAQAGAAADgCQACgBABgFQACgFAAgIQAAgHgCgFQgBgEgCgCQgDgCgGAAQgEAAgDACg");
	this.shape_18.setTransform(440.85,-25.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfAwIAAhLQAAgKAGgFQAFgGAKAAIAYABIASABIgBAPIghAAQgEAAgCACQgCACAAAEIAAARIAkAAIAAAOIgkAAIAAAog");
	this.shape_19.setTransform(433.175,-27.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZA5QgIgCgFgGQgDgFAAgKQAAgHADgEQADgFAHgEQgCgCgCgDIgBgHQAAgDABgEQACgDADgCQgFgDgDgGQgDgFAAgIQAAgKAEgFQADgGAIgDQAIgDANAAQAKAAAIACIAaAAIgBAIIgMABQAEAGgBAKQABAOgJAGQgHAGgTAAQgKAAgIgCQgCAEAAADQAAACACACIAGADIAeAFQAMABAEAGQAGAFAAALQAAAKgFAFQgDAGgIACQgJADgOAAQgPAAgJgDgAgZAZQgCADAAAFQAAAGADADQACADAFABIAPABIAPgBQAGgBACgDQACgDAAgGIgBgGQgBgCgDgCIgJgCIgcgEQgEAEgCAEgAgUgsQgEADAAAJQAAAIAEAEQAGADAMAAQALAAAFgDQAFgEAAgIQAAgJgFgDQgFgEgLAAQgMAAgGAEg");
	this.shape_20.setTransform(563.05,-372.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAqIAAg4QAAgJgDgDQgDgDgGAAQgHAAgGADIgSAKIAAA6IgOAAIAAhSIAMAAIABAOQATgPARAAQALAAAGAFQAFAGAAALIAAA9g");
	this.shape_21.setTransform(553.275,-374.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEAAAAgFIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAFgFAAg");
	this.shape_22.setTransform(546.225,-376.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAyQgHgLAAgWQAAgQADgIQADgKAHgEQAHgFALABQAPAAANAHIAAgQIAAgaIAOAAIAAB2IgLAAIgBgLQgQANgQAAQgPABgHgLgAgNgKQgFADgCAGQgBAFAAANQAAAMABAHQACAGAFADQAEADAHAAQAFAAAFgCQAGgDAJgGIAAgtIgOgEIgLgBQgHABgEACg");
	this.shape_23.setTransform(539.075,-376);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLA3QgGgGAAgKIAAhiIAPAAIgBBfQAAAFADADQACADAGAAIAIAAIACALIgHACIgJAAQgIAAgFgFg");
	this.shape_24.setTransform(532.525,-376.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEAAAAgFIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAFgFAAg");
	this.shape_25.setTransform(527.325,-376.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdAlQgFgGAAgLIAAg+IAOAAIAAA6QAAAIADADQADADAHAAQAGAAAGgCIAQgJIAAg9IAOAAIAABSIgLAAIgBgLQgKAGgIAEQgIADgJAAQgLABgGgGg");
	this.shape_26.setTransform(520.375,-374.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSA7QgKgBgIgDIAAhzIAOAAIAAAfQAAAMgBAHQAOgPARAAQAPAAAHAKQAHAKAAAWQAAAOgDAKQgDAJgIAGQgIAEgOAAIgTgBgAgIgKIgOAKIAAAuQAMACAKAAQAJAAAEgDQAFgDACgGQACgHABgMQgBgMgBgFQgCgHgEgDQgFgCgIgBQgFABgFACg");
	this.shape_27.setTransform(510.925,-376);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAnQgJgEgEgKQgEgJAAgQQAAgQAEgIQAEgKAIgFQAJgDAMAAQATgBAIAIQAJAGAAAOQAAALgFAFQgFAGgKAAIglAAQABAKACAFQADAGAGACQAFABAHAAQAOAAAQgBIABAJIgPADIgRABQgOABgIgFgAgLgcQgFADgCAFQgCAHAAAKIAhAAQAJAAAAgMQAAgJgEgCQgFgEgLAAQgIAAgFACg");
	this.shape_28.setTransform(497.65,-374.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AggApIABgLIAXABIAGAAIANgBQAFgBADgCQACgDAAgEQAAgGgDgCQgDgDgHgBIgXgFQgKgDgEgEQgFgGAAgKQAAgIADgFQADgGAHgCQAGgBALAAIASABIASABIgBALIgIgBIgMAAIgOAAIgKAAQgEABgBADQgCACAAAEQAAAEACADQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAIAHADIAYAFQAKACAEAEQAFAFAAALQAAAKgEAEQgEAGgHABQgHACgNAAQgRAAgPgCg");
	this.shape_29.setTransform(488.775,-374.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEAAAAgFIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAFgFAAg");
	this.shape_30.setTransform(482.375,-376.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAqIAAhSIALAAIACAOQASgPAQAAIAEAAIgCANIgFAAQgGAAgHADIgRAIIAAA7g");
	this.shape_31.setTransform(477.375,-374.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAGIAAgLIAzAAIAAALg");
	this.shape_32.setTransform(469.65,-374.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWA7IAAg5QAAgIgDgDQgDgDgGAAQgHAAgGADQgHADgLAGIAAA7IgOAAIAAh2IAOAAIAAAiIgBAPQAKgGAJgFQAIgDAJAAQALAAAGAFQAFAGAAALIAAA9g");
	this.shape_33.setTransform(460.975,-376.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZA5QgIgCgFgGQgDgFAAgKQAAgHADgEQADgFAHgEQgCgCgCgDIgBgHQAAgDABgEQACgDADgCQgFgDgDgGQgDgFAAgIQAAgKAEgFQADgGAIgDQAIgDANAAQAKAAAIACIAaAAIgBAIIgMABQAEAGgBAKQABAOgJAGQgHAGgTAAQgKAAgIgCQgCAEAAADQAAACACACIAHADIAdAFQAMABAEAGQAGAFAAALQAAAKgFAFQgDAGgIACQgJADgOAAQgPAAgJgDgAgZAZQgCADAAAFQAAAGADADQACADAFABIAPABIAPgBQAGgBACgDQACgDAAgGIgBgGQgBgCgDgCIgJgCIgcgEQgEAEgCAEgAgUgsQgEADAAAJQAAAIAEAEQAGADAMAAQALAAAFgDQAFgEAAgIQAAgJgFgDQgFgEgLAAQgMAAgGAEg");
	this.shape_34.setTransform(451.45,-372.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEAAAAgFIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAFgFAAg");
	this.shape_35.setTransform(444.475,-376.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAbA7IAAg5Ig1AAIAAA5IgPAAIAAh1IAPAAIAAAxIA1AAIAAgxIAPAAIAAB1g");
	this.shape_36.setTransform(436.7,-376.025);

	this.instance_1 = new lib.pointer();
	this.instance_1.setTransform(412.45,-375.9,1,1,0,0,0,11.2,11.2);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,255,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(280));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(280));

	// Layer_7
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,0,0,4).p("A3XAAMAuvAAA");
	this.shape_37.setTransform(494.825,-41.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(280));

	// Layer_11
	this.tallb = new lib.tba10();
	this.tallb.name = "tallb";
	this.tallb.setTransform(486.5,-43.05,3.9447,3.9435);

	this.tallb_1 = new lib.tba6();
	this.tallb_1.name = "tallb_1";
	this.tallb_1.setTransform(489.25,-40.3,3.9447,3.9447,0,0,0,0.7,0.7);

	this.tallb_2 = new lib.tba3();
	this.tallb_2.name = "tallb_2";
	this.tallb_2.setTransform(486.85,-43.05,3.9447,3.9447);

	this.tallb_3 = new lib.tba7();
	this.tallb_3.name = "tallb_3";
	this.tallb_3.setTransform(486.9,-43.45,3.9447,3.9447,0,0,0,0,-0.1);

	this.tallb_4 = new lib.tba1();
	this.tallb_4.name = "tallb_4";
	this.tallb_4.setTransform(487.25,-43.45,3.9447,3.9435,0,0,0,0.1,-0.1);

	this.tallb_5 = new lib.tba11();
	this.tallb_5.name = "tallb_5";
	this.tallb_5.setTransform(486.45,-42.65,3.9447,3.9447,0,0,0,-0.1,0.1);

	this.tallb_6 = new lib.tba5();
	this.tallb_6.name = "tallb_6";
	this.tallb_6.setTransform(486.9,-43.05,3.9447,3.9447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallb}]}).to({state:[{t:this.tallb_1}]},41).to({state:[{t:this.tallb_2}]},43).to({state:[{t:this.tallb_3}]},47).to({state:[{t:this.tallb_4}]},59).to({state:[{t:this.tallb_5}]},16).to({state:[{t:this.tallb_6}]},73).wait(1));

	// Layer_3 copy
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(4,0,0,4).p("A7wKwQNmAFGCACQEyADABAAQAEAAADAAQACAAAEAAQBhgGBdh0QBChUBAiNQBPiuAsiuQABgCAAgBQAtivBPivQB0j/B8hDQAJgFAIgDQAggPAggBQAEgBADAAQAEAAACABQCpAJCZFRQBQCvAsCvIAgBtQAqCEAzBuQAuBoAxBJQBVCTCZARQBBAGBCAAQAUgBAUAB");
	this.shape_38.setTransform(177.671,90.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(280));

	// Layer_3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AJMXMQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZW+QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMVUQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZVGQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMTcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZTOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMRkQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZRWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMPsQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZPeQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMN0QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZNmQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJML8QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZLuQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMKEQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZJ2QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMIMQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZH+QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMGUQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZGGQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMEcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZEOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMCkQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZCWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMAsQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgApZAeQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAJMhLQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZhZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMjDQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZjRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMk7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZlJQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMmzQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZnBQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMorQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZo5QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMqjQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZqxQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMsbQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZspQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMuTQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZuhQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMwLQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZwZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMyDQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZyRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJMz7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZ0JQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAJM1zQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgApZ2BQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_39.setTransform(487.375,-197.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(280));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-389.1,647.5,656.1);


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

	
	var _tweenStr_3 = cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,rotation:0.0152,x:0.15,y:-26.35},0).wait(1).to({rotation:0.0303},0).wait(1).to({rotation:0.0455},0).wait(1).to({rotation:0,skewX:0.0606,x:0.2},0).wait(1).to({skewX:0.0758},0).wait(1).to({skewX:0.0909},0).wait(1).to({skewX:0.1061},0).wait(1).to({skewX:0.1212},0).wait(1).to({skewX:0.1364},0).wait(1).to({skewX:0.1515},0).wait(1).to({skewX:0.1667,x:0.25},0).wait(1).to({skewX:0.1818},0).wait(1).to({skewX:0.197},0).wait(1).to({skewX:0.2121},0).wait(1).to({skewX:0.2273},0).wait(1).to({skewX:0.2424},0).wait(1).to({skewX:0.2576},0).wait(1).to({skewX:0.2727,x:0.3},0).wait(1).to({skewX:0.2879},0).wait(1).to({skewX:0.303},0).wait(1).to({skewX:0.3182},0).wait(1).to({skewX:0.3333},0).wait(1).to({skewX:0.3485},0).wait(1).to({skewX:0.3636},0).wait(1).to({skewX:0.3788,x:0.35},0).wait(1).to({skewX:0.3939},0).wait(1).to({skewX:0.4091},0).wait(1).to({skewX:0.4242},0).wait(1).to({skewX:0.4394},0).wait(1).to({skewX:0.4545},0).wait(1).to({skewX:0.4697},0).wait(1).to({skewX:0.4848,x:0.4},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.5152},0).wait(1).to({skewX:0.5303},0).wait(1).to({skewX:0.5455},0).wait(1).to({skewX:0.5606},0).wait(1).to({skewX:0.5758},0).wait(1).to({skewX:0.5909,x:0.45},0).wait(1).to({skewX:0.6061},0).wait(1).to({skewX:0.6212},0).wait(1).to({skewX:0.6364},0).wait(1).to({skewX:0.6515},0).wait(1).to({skewX:0.6667},0).wait(1).to({skewX:0.6818},0).wait(1).to({skewX:0.697,x:0.5},0).wait(1).to({skewX:0.7121},0).wait(1).to({skewX:0.7273},0).wait(1).to({skewX:0.7424},0).wait(1).to({skewX:0.7576},0).wait(1).to({skewX:0.7727},0).wait(1).to({skewX:0.7879},0).wait(1).to({skewX:0.803,x:0.55},0).wait(1).to({skewX:0.8182},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.8485},0).wait(1).to({skewX:0.8636},0).wait(1).to({skewX:0.8788},0).wait(1).to({skewX:0.8939},0).wait(1).to({skewX:0.9091,x:0.6},0).wait(1).to({skewX:0.9242},0).wait(1).to({skewX:0.9394},0).wait(1).to({skewX:0.9545},0).wait(1).to({skewX:0.9697},0).wait(1).to({skewX:0.9848},0).wait(1).to({skewX:1},0).wait(1).to({skewX:1.0152,x:0.65},0).wait(1).to({skewX:1.0303},0).wait(1).to({skewX:1.0455},0).wait(1).to({skewX:1.0606},0).wait(1).to({skewX:1.0758},0).wait(1).to({skewX:1.0909},0).wait(1).to({skewX:1.1061},0).wait(1).to({skewX:1.1212,x:0.7},0).wait(1).to({skewX:1.1364},0).wait(1).to({skewX:1.1515},0).wait(1).to({skewX:1.1667},0).wait(1).to({skewX:1.1818},0).wait(1).to({skewX:1.197},0).wait(1).to({skewX:1.2121},0).wait(1).to({skewX:1.2273,x:0.75},0).wait(1).to({skewX:1.2424},0).wait(1).to({skewX:1.2576},0).wait(1).to({skewX:1.2727},0).wait(1).to({skewX:1.2879},0).wait(1).to({skewX:1.303},0).wait(1).to({skewX:1.3182},0).wait(1).to({skewX:1.3333,x:0.8},0).wait(1).to({skewX:1.3485},0).wait(1).to({skewX:1.3636},0).wait(1).to({skewX:1.3788},0).wait(1).to({skewX:1.3939},0).wait(1).to({skewX:1.4091},0).wait(1).to({skewX:1.4242},0).wait(1).to({skewX:1.4394,x:0.85},0).wait(1).to({skewX:1.4545},0).wait(1).to({skewX:1.4697},0).wait(1).to({skewX:1.4848},0).wait(1).to({skewX:1.5},0).wait(1).to({skewX:1.485},0).wait(1).to({skewX:1.47},0).wait(1).to({skewX:1.455},0).wait(1).to({skewX:1.44},0).wait(1).to({skewX:1.425,x:0.8},0).wait(1).to({skewX:1.41},0).wait(1).to({skewX:1.395},0).wait(1).to({skewX:1.38},0).wait(1).to({skewX:1.365},0).wait(1).to({skewX:1.35},0).wait(1).to({skewX:1.335},0).wait(1).to({skewX:1.32,x:0.75},0).wait(1).to({skewX:1.305},0).wait(1).to({skewX:1.29},0).wait(1).to({skewX:1.275},0).wait(1).to({skewX:1.26},0).wait(1).to({skewX:1.245},0).wait(1).to({skewX:1.23},0).wait(1).to({skewX:1.215,x:0.7},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.185},0).wait(1).to({skewX:1.17},0).wait(1).to({skewX:1.155},0).wait(1).to({skewX:1.14},0).wait(1).to({skewX:1.125},0).wait(1).to({skewX:1.11,x:0.65},0).wait(1).to({skewX:1.095},0).wait(1).to({skewX:1.08},0).wait(1).to({skewX:1.065},0).wait(1).to({skewX:1.05},0).wait(1).to({skewX:1.035},0).wait(1).to({skewX:1.02},0).wait(1).to({skewX:1.005,x:0.6},0).wait(1).to({skewX:0.99},0).wait(1).to({skewX:0.975},0).wait(1).to({skewX:0.96},0).wait(1).to({skewX:0.945},0).wait(1).to({skewX:0.93},0).wait(1).to({skewX:0.915},0).wait(1).to({skewX:0.9,x:0.55},0).wait(1).to({skewX:0.885},0).wait(1).to({skewX:0.87},0).wait(1).to({skewX:0.855},0).wait(1).to({skewX:0.84},0).wait(1).to({skewX:0.825},0).wait(1).to({skewX:0.81},0).wait(1).to({skewX:0.795,x:0.5},0).wait(1).to({skewX:0.78},0).wait(1).to({skewX:0.765},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.735},0).wait(1).to({skewX:0.72},0).wait(1).to({skewX:0.705},0).wait(1).to({skewX:0.69,x:0.45},0).wait(1).to({skewX:0.675},0).wait(1).to({skewX:0.66},0).wait(1).to({skewX:0.645},0).wait(1).to({skewX:0.63},0).wait(1).to({skewX:0.615},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.585},0).wait(1).to({skewX:0.57,x:0.4},0).wait(1).to({skewX:0.555},0).wait(1).to({skewX:0.54},0).wait(1).to({skewX:0.525},0).wait(1).to({skewX:0.51},0).wait(1).to({skewX:0.495},0).wait(1).to({skewX:0.48},0).wait(1).to({skewX:0.465,x:0.35},0).wait(1).to({skewX:0.45},0).wait(1).to({skewX:0.435},0).wait(1).to({skewX:0.42},0).wait(1).to({skewX:0.405},0).wait(1).to({skewX:0.39},0).wait(1).to({skewX:0.375},0).wait(1).to({skewX:0.36,x:0.3},0).wait(1).to({skewX:0.345},0).wait(1).to({skewX:0.33},0).wait(1).to({skewX:0.315},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.285},0).wait(1).to({skewX:0.27},0).wait(1).to({skewX:0.255,x:0.25},0).wait(1).to({skewX:0.24},0).wait(1).to({skewX:0.225},0).wait(1).to({skewX:0.21},0).wait(1).to({skewX:0.195},0).wait(1).to({skewX:0.18},0).wait(1).to({skewX:0.165},0).wait(1).to({skewX:0.15,x:0.2},0).wait(1).to({skewX:0.135},0).wait(1).to({skewX:0.12},0).wait(1).to({skewX:0.105},0).wait(1).to({skewX:0.09},0).wait(1).to({skewX:0.075},0).wait(1).to({skewX:0.06},0).wait(1).to({rotation:0.045,skewX:0,x:0.15},0).wait(1).to({rotation:0.03},0).wait(1).to({rotation:0.015},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0149},0).wait(1).to({rotation:-0.0297},0).wait(1).to({rotation:-0.0446},0).wait(1).to({rotation:0,skewX:-0.0594,x:0.1},0).wait(1).to({skewX:-0.0743},0).wait(1).to({skewX:-0.0891},0).wait(1).to({skewX:-0.104},0).wait(1).to({skewX:-0.1188},0).wait(1).to({skewX:-0.1337},0).wait(1).to({skewX:-0.1485},0).wait(1).to({skewX:-0.1634,x:0.05},0).wait(1).to({skewX:-0.1782},0).wait(1).to({skewX:-0.1931},0).wait(1).to({skewX:-0.2079},0).wait(1).to({skewX:-0.2228},0).wait(1).to({skewX:-0.2376},0).wait(1).to({skewX:-0.2525},0).wait(1).to({skewX:-0.2673,x:0},0).wait(1).to({skewX:-0.2822},0).wait(1).to({skewX:-0.297},0).wait(1).to({skewX:-0.3119},0).wait(1).to({skewX:-0.3267},0).wait(1).to({skewX:-0.3416},0).wait(1).to({skewX:-0.3564},0).wait(1).to({skewX:-0.3713},0).wait(1).to({skewX:-0.3861,x:-0.05},0).wait(1).to({skewX:-0.401},0).wait(1).to({skewX:-0.4158},0).wait(1).to({skewX:-0.4307},0).wait(1).to({skewX:-0.4455},0).wait(1).to({skewX:-0.4604},0).wait(1).to({skewX:-0.4752},0).wait(1).to({skewX:-0.4901,x:-0.1},0).wait(1).to({skewX:-0.505},0).wait(1).to({skewX:-0.5198},0).wait(1).to({skewX:-0.5347},0).wait(1).to({skewX:-0.5495},0).wait(1).to({skewX:-0.5644},0).wait(1).to({skewX:-0.5792},0).wait(1).to({skewX:-0.5941,x:-0.15},0).wait(1).to({skewX:-0.6089},0).wait(1).to({skewX:-0.6238},0).wait(1).to({skewX:-0.6386},0).wait(1).to({skewX:-0.6535},0).wait(1).to({skewX:-0.6683},0).wait(1).to({skewX:-0.6832},0).wait(1).to({skewX:-0.698,x:-0.2},0).wait(1).to({skewX:-0.7129},0).wait(1).to({skewX:-0.7277},0).wait(1).to({skewX:-0.7426},0).wait(1).to({skewX:-0.7574},0).wait(1).to({skewX:-0.7723},0).wait(1).to({skewX:-0.7871},0).wait(1).to({skewX:-0.802,x:-0.25},0).wait(1).to({skewX:-0.8168},0).wait(1).to({skewX:-0.8317},0).wait(1).to({skewX:-0.8465},0).wait(1).to({skewX:-0.8614},0).wait(1).to({skewX:-0.8762},0).wait(1).to({skewX:-0.8911},0).wait(1).to({skewX:-0.9059,x:-0.3},0).wait(1).to({skewX:-0.9208},0).wait(1).to({skewX:-0.9356},0).wait(1).to({skewX:-0.9505},0).wait(1).to({skewX:-0.9653},0).wait(1).to({skewX:-0.9802},0).wait(1).to({skewX:-0.995},0).wait(1).to({skewX:-1.0099,x:-0.35},0).wait(1).to({skewX:-1.0248},0).wait(1).to({skewX:-1.0396},0).wait(1).to({skewX:-1.0545},0).wait(1).to({skewX:-1.0693},0).wait(1).to({skewX:-1.0842},0).wait(1).to({skewX:-1.099},0).wait(1).to({skewX:-1.1139},0).wait(1).to({skewX:-1.1287,x:-0.4},0).wait(1).to({skewX:-1.1436},0).wait(1).to({skewX:-1.1584},0).wait(1).to({skewX:-1.1733},0).wait(1).to({skewX:-1.1881},0).wait(1).to({skewX:-1.203},0).wait(1).to({skewX:-1.2178},0).wait(1).to({skewX:-1.2327,x:-0.45},0).wait(1).to({skewX:-1.2475},0).wait(1).to({skewX:-1.2624},0).wait(1).to({skewX:-1.2772},0).wait(1).to({skewX:-1.2921},0).wait(1).to({skewX:-1.3069},0).wait(1).to({skewX:-1.3218},0).wait(1).to({skewX:-1.3366,x:-0.5},0).wait(1).to({skewX:-1.3515},0).wait(1).to({skewX:-1.3663},0).wait(1).to({skewX:-1.3812},0).wait(1).to({skewX:-1.396},0).wait(1).to({skewX:-1.4109},0).wait(1).to({skewX:-1.4257},0).wait(1).to({skewX:-1.4406,x:-0.55},0).wait(1).to({skewX:-1.4554},0).wait(1).to({skewX:-1.4703},0).wait(1).to({skewX:-1.4851},0).wait(1).to({skewX:-1.5},0).wait(1).to({skewX:-1.4848},0).wait(1).to({skewX:-1.4697},0).wait(1).to({skewX:-1.4545},0).wait(1).to({skewX:-1.4394},0).wait(1).to({skewX:-1.4242,x:-0.5},0).wait(1).to({skewX:-1.4091},0).wait(1).to({skewX:-1.3939},0).wait(1).to({skewX:-1.3788},0).wait(1).to({skewX:-1.3636},0).wait(1).to({skewX:-1.3485},0).wait(1).to({skewX:-1.3333},0).wait(1).to({skewX:-1.3182,x:-0.45},0).wait(1).to({skewX:-1.303},0).wait(1).to({skewX:-1.2879},0).wait(1).to({skewX:-1.2727},0).wait(1).to({skewX:-1.2576},0).wait(1).to({skewX:-1.2424},0).wait(1).to({skewX:-1.2273},0).wait(1).to({skewX:-1.2121,x:-0.4},0).wait(1).to({skewX:-1.197},0).wait(1).to({skewX:-1.1818},0).wait(1).to({skewX:-1.1667},0).wait(1).to({skewX:-1.1515},0).wait(1).to({skewX:-1.1364},0).wait(1).to({skewX:-1.1212},0).wait(1).to({skewX:-1.1061,x:-0.35},0).wait(1).to({skewX:-1.0909},0).wait(1).to({skewX:-1.0758},0).wait(1).to({skewX:-1.0606},0).wait(1).to({skewX:-1.0455},0).wait(1).to({skewX:-1.0303},0).wait(1).to({skewX:-1.0152},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.9848},0).wait(1).to({skewX:-0.9697},0).wait(1).to({skewX:-0.9545},0).wait(1).to({skewX:-0.9394},0).wait(1).to({skewX:-0.9242},0).wait(1).to({skewX:-0.9091},0).wait(1).to({skewX:-0.8939,x:-0.25},0).wait(1).to({skewX:-0.8788},0).wait(1).to({skewX:-0.8636},0).wait(1).to({skewX:-0.8485},0).wait(1).to({skewX:-0.8333},0).wait(1).to({skewX:-0.8182},0).wait(1).to({skewX:-0.803},0).wait(1).to({skewX:-0.7879,x:-0.2},0).wait(1).to({skewX:-0.7727},0).wait(1).to({skewX:-0.7576},0).wait(1).to({skewX:-0.7424},0).wait(1).to({skewX:-0.7273},0).wait(1).to({skewX:-0.7121},0).wait(1).to({skewX:-0.697},0).wait(1).to({skewX:-0.6818,x:-0.15},0).wait(1).to({skewX:-0.6667},0).wait(1).to({skewX:-0.6515},0).wait(1).to({skewX:-0.6364},0).wait(1).to({skewX:-0.6212},0).wait(1).to({skewX:-0.6061},0).wait(1).to({skewX:-0.5909},0).wait(1).to({skewX:-0.5758,x:-0.1},0).wait(1).to({skewX:-0.5606},0).wait(1).to({skewX:-0.5455},0).wait(1).to({skewX:-0.5303},0).wait(1).to({skewX:-0.5152},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4848},0).wait(1).to({skewX:-0.4697,x:-0.05},0).wait(1).to({skewX:-0.4545},0).wait(1).to({skewX:-0.4394},0).wait(1).to({skewX:-0.4242},0).wait(1).to({skewX:-0.4091},0).wait(1).to({skewX:-0.3939},0).wait(1).to({skewX:-0.3788},0).wait(1).to({skewX:-0.3636,x:0},0).wait(1).to({skewX:-0.3485},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3182},0).wait(1).to({skewX:-0.303},0).wait(1).to({skewX:-0.2879},0).wait(1).to({skewX:-0.2727},0).wait(1).to({skewX:-0.2576,x:0.05},0).wait(1).to({skewX:-0.2424},0).wait(1).to({skewX:-0.2273},0).wait(1).to({skewX:-0.2121},0).wait(1).to({skewX:-0.197},0).wait(1).to({skewX:-0.1818},0).wait(1).to({skewX:-0.1667},0).wait(1).to({skewX:-0.1515,x:0.1},0).wait(1).to({skewX:-0.1364},0).wait(1).to({skewX:-0.1212},0).wait(1).to({skewX:-0.1061},0).wait(1).to({skewX:-0.0909},0).wait(1).to({skewX:-0.0758},0).wait(1).to({skewX:-0.0606},0).wait(1).to({rotation:-0.0455,skewX:0,x:0.15},0).wait(1).to({rotation:-0.0303},0).wait(1).to({rotation:-0.0152},0).wait(1);
	this.timeline.addTween(_tweenStr_3.to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-53.2,23.3,54.300000000000004);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,rotation:0.0197,x:0.15,y:-26.35},0).wait(1).to({rotation:0.0395},0).wait(1).to({rotation:0,skewX:0.0592,x:0.2},0).wait(1).to({skewX:0.0789},0).wait(1).to({skewX:0.0987},0).wait(1).to({skewX:0.1184},0).wait(1).to({skewX:0.1382},0).wait(1).to({skewX:0.1579},0).wait(1).to({skewX:0.1776,x:0.25},0).wait(1).to({skewX:0.1974},0).wait(1).to({skewX:0.2171},0).wait(1).to({skewX:0.2368},0).wait(1).to({skewX:0.2566},0).wait(1).to({skewX:0.2763,x:0.3},0).wait(1).to({skewX:0.2961},0).wait(1).to({skewX:0.3158},0).wait(1).to({skewX:0.3355},0).wait(1).to({skewX:0.3553},0).wait(1).to({skewX:0.375,x:0.35},0).wait(1).to({skewX:0.3947},0).wait(1).to({skewX:0.4145},0).wait(1).to({skewX:0.4342},0).wait(1).to({skewX:0.4539},0).wait(1).to({skewX:0.4737},0).wait(1).to({skewX:0.4934,x:0.4},0).wait(1).to({skewX:0.5132},0).wait(1).to({skewX:0.5329},0).wait(1).to({skewX:0.5526},0).wait(1).to({skewX:0.5724},0).wait(1).to({skewX:0.5921,x:0.45},0).wait(1).to({skewX:0.6118},0).wait(1).to({skewX:0.6316},0).wait(1).to({skewX:0.6513},0).wait(1).to({skewX:0.6711},0).wait(1).to({skewX:0.6908,x:0.5},0).wait(1).to({skewX:0.7105},0).wait(1).to({skewX:0.7303},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.7697},0).wait(1).to({skewX:0.7895},0).wait(1).to({skewX:0.8092,x:0.55},0).wait(1).to({skewX:0.8289},0).wait(1).to({skewX:0.8487},0).wait(1).to({skewX:0.8684},0).wait(1).to({skewX:0.8882},0).wait(1).to({skewX:0.9079,x:0.6},0).wait(1).to({skewX:0.9276},0).wait(1).to({skewX:0.9474},0).wait(1).to({skewX:0.9671},0).wait(1).to({skewX:0.9868},0).wait(1).to({skewX:1.0066},0).wait(1).to({skewX:1.0263,x:0.65},0).wait(1).to({skewX:1.0461},0).wait(1).to({skewX:1.0658},0).wait(1).to({skewX:1.0855},0).wait(1).to({skewX:1.1053},0).wait(1).to({skewX:1.125,x:0.7},0).wait(1).to({skewX:1.1447},0).wait(1).to({skewX:1.1645},0).wait(1).to({skewX:1.1842},0).wait(1).to({skewX:1.2039},0).wait(1).to({skewX:1.2237,x:0.75},0).wait(1).to({skewX:1.2434},0).wait(1).to({skewX:1.2632},0).wait(1).to({skewX:1.2829},0).wait(1).to({skewX:1.3026},0).wait(1).to({skewX:1.3224},0).wait(1).to({skewX:1.3421,x:0.8},0).wait(1).to({skewX:1.3618},0).wait(1).to({skewX:1.3816},0).wait(1).to({skewX:1.4013},0).wait(1).to({skewX:1.4211},0).wait(1).to({skewX:1.4408,x:0.85},0).wait(1).to({skewX:1.4605},0).wait(1).to({skewX:1.4803},0).wait(1).to({skewX:1.5},0).wait(1).to({skewX:1.4815},0).wait(1).to({skewX:1.463},0).wait(1).to({skewX:1.4444},0).wait(1).to({skewX:1.4259,x:0.8},0).wait(1).to({skewX:1.4074},0).wait(1).to({skewX:1.3889},0).wait(1).to({skewX:1.3704},0).wait(1).to({skewX:1.3519},0).wait(1).to({skewX:1.3333},0).wait(1).to({skewX:1.3148,x:0.75},0).wait(1).to({skewX:1.2963},0).wait(1).to({skewX:1.2778},0).wait(1).to({skewX:1.2593},0).wait(1).to({skewX:1.2407},0).wait(1).to({skewX:1.2222},0).wait(1).to({skewX:1.2037,x:0.7},0).wait(1).to({skewX:1.1852},0).wait(1).to({skewX:1.1667},0).wait(1).to({skewX:1.1481},0).wait(1).to({skewX:1.1296},0).wait(1).to({skewX:1.1111,x:0.65},0).wait(1).to({skewX:1.0926},0).wait(1).to({skewX:1.0741},0).wait(1).to({skewX:1.0556},0).wait(1).to({skewX:1.037},0).wait(1).to({skewX:1.0185},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.9815},0).wait(1).to({skewX:0.963},0).wait(1).to({skewX:0.9444},0).wait(1).to({skewX:0.9259},0).wait(1).to({skewX:0.9074},0).wait(1).to({skewX:0.8889,x:0.55},0).wait(1).to({skewX:0.8704},0).wait(1).to({skewX:0.8519},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.8148},0).wait(1).to({skewX:0.7963,x:0.5},0).wait(1).to({skewX:0.7778},0).wait(1).to({skewX:0.7593},0).wait(1).to({skewX:0.7407},0).wait(1).to({skewX:0.7222},0).wait(1).to({skewX:0.7037},0).wait(1).to({skewX:0.6852,x:0.45},0).wait(1).to({skewX:0.6667},0).wait(1).to({skewX:0.6481},0).wait(1).to({skewX:0.6296},0).wait(1).to({skewX:0.6111},0).wait(1).to({skewX:0.5926},0).wait(1).to({skewX:0.5741,x:0.4},0).wait(1).to({skewX:0.5556},0).wait(1).to({skewX:0.537},0).wait(1).to({skewX:0.5185},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.4815},0).wait(1).to({skewX:0.463,x:0.35},0).wait(1).to({skewX:0.4444},0).wait(1).to({skewX:0.4259},0).wait(1).to({skewX:0.4074},0).wait(1).to({skewX:0.3889},0).wait(1).to({skewX:0.3704,x:0.3},0).wait(1).to({skewX:0.3519},0).wait(1).to({skewX:0.3333},0).wait(1).to({skewX:0.3148},0).wait(1).to({skewX:0.2963},0).wait(1).to({skewX:0.2778},0).wait(1).to({skewX:0.2593,x:0.25},0).wait(1).to({skewX:0.2407},0).wait(1).to({skewX:0.2222},0).wait(1).to({skewX:0.2037},0).wait(1).to({skewX:0.1852},0).wait(1).to({skewX:0.1667},0).wait(1).to({skewX:0.1481,x:0.2},0).wait(1).to({skewX:0.1296},0).wait(1).to({skewX:0.1111},0).wait(1).to({skewX:0.0926},0).wait(1).to({skewX:0.0741},0).wait(1).to({skewX:0.0556},0).wait(1).to({rotation:0.037,skewX:0,x:0.15},0).wait(1).to({rotation:0.0185},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0185},0).wait(1).to({rotation:-0.037},0).wait(1).to({rotation:0,skewX:-0.0556,x:0.1},0).wait(1).to({skewX:-0.0741},0).wait(1).to({skewX:-0.0926},0).wait(1).to({skewX:-0.1111},0).wait(1).to({skewX:-0.1296},0).wait(1).to({skewX:-0.1481},0).wait(1).to({skewX:-0.1667,x:0.05},0).wait(1).to({skewX:-0.1852},0).wait(1).to({skewX:-0.2037},0).wait(1).to({skewX:-0.2222},0).wait(1).to({skewX:-0.2407},0).wait(1).to({skewX:-0.2593},0).wait(1).to({skewX:-0.2778,x:0},0).wait(1).to({skewX:-0.2963},0).wait(1).to({skewX:-0.3148},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3519},0).wait(1).to({skewX:-0.3704},0).wait(1).to({skewX:-0.3889,x:-0.05},0).wait(1).to({skewX:-0.4074},0).wait(1).to({skewX:-0.4259},0).wait(1).to({skewX:-0.4444},0).wait(1).to({skewX:-0.463},0).wait(1).to({skewX:-0.4815,x:-0.1},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.5185},0).wait(1).to({skewX:-0.537},0).wait(1).to({skewX:-0.5556},0).wait(1).to({skewX:-0.5741},0).wait(1).to({skewX:-0.5926,x:-0.15},0).wait(1).to({skewX:-0.6111},0).wait(1).to({skewX:-0.6296},0).wait(1).to({skewX:-0.6481},0).wait(1).to({skewX:-0.6667},0).wait(1).to({skewX:-0.6852},0).wait(1).to({skewX:-0.7037,x:-0.2},0).wait(1).to({skewX:-0.7222},0).wait(1).to({skewX:-0.7407},0).wait(1).to({skewX:-0.7593},0).wait(1).to({skewX:-0.7778},0).wait(1).to({skewX:-0.7963},0).wait(1).to({skewX:-0.8148,x:-0.25},0).wait(1).to({skewX:-0.8333},0).wait(1).to({skewX:-0.8519},0).wait(1).to({skewX:-0.8704},0).wait(1).to({skewX:-0.8889},0).wait(1).to({skewX:-0.9074,x:-0.3},0).wait(1).to({skewX:-0.9259},0).wait(1).to({skewX:-0.9444},0).wait(1).to({skewX:-0.963},0).wait(1).to({skewX:-0.9815},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-1.0185,x:-0.35},0).wait(1).to({skewX:-1.037},0).wait(1).to({skewX:-1.0556},0).wait(1).to({skewX:-1.0741},0).wait(1).to({skewX:-1.0926},0).wait(1).to({skewX:-1.1111},0).wait(1).to({skewX:-1.1296,x:-0.4},0).wait(1).to({skewX:-1.1481},0).wait(1).to({skewX:-1.1667},0).wait(1).to({skewX:-1.1852},0).wait(1).to({skewX:-1.2037},0).wait(1).to({skewX:-1.2222,x:-0.45},0).wait(1).to({skewX:-1.2407},0).wait(1).to({skewX:-1.2593},0).wait(1).to({skewX:-1.2778},0).wait(1).to({skewX:-1.2963},0).wait(1).to({skewX:-1.3148},0).wait(1).to({skewX:-1.3333,x:-0.5},0).wait(1).to({skewX:-1.3519},0).wait(1).to({skewX:-1.3704},0).wait(1).to({skewX:-1.3889},0).wait(1).to({skewX:-1.4074},0).wait(1).to({skewX:-1.4259},0).wait(1).to({skewX:-1.4444,x:-0.55},0).wait(1).to({skewX:-1.463},0).wait(1).to({skewX:-1.4815},0).wait(1).to({skewX:-1.5},0).wait(1).to({skewX:-1.4815},0).wait(1).to({skewX:-1.463},0).wait(1).to({skewX:-1.4444},0).wait(1).to({skewX:-1.4259,x:-0.5},0).wait(1).to({skewX:-1.4074},0).wait(1).to({skewX:-1.3889},0).wait(1).to({skewX:-1.3704},0).wait(1).to({skewX:-1.3519},0).wait(1).to({skewX:-1.3333},0).wait(1).to({skewX:-1.3148,x:-0.45},0).wait(1).to({skewX:-1.2963},0).wait(1).to({skewX:-1.2778},0).wait(1).to({skewX:-1.2593},0).wait(1).to({skewX:-1.2407},0).wait(1).to({skewX:-1.2222},0).wait(1).to({skewX:-1.2037,x:-0.4},0).wait(1).to({skewX:-1.1852},0).wait(1).to({skewX:-1.1667},0).wait(1).to({skewX:-1.1481},0).wait(1).to({skewX:-1.1296},0).wait(1).to({skewX:-1.1111,x:-0.35},0).wait(1).to({skewX:-1.0926},0).wait(1).to({skewX:-1.0741},0).wait(1).to({skewX:-1.0556},0).wait(1).to({skewX:-1.037},0).wait(1).to({skewX:-1.0185},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.9815},0).wait(1).to({skewX:-0.963},0).wait(1).to({skewX:-0.9444},0).wait(1).to({skewX:-0.9259},0).wait(1).to({skewX:-0.9074},0).wait(1).to({skewX:-0.8889,x:-0.25},0).wait(1).to({skewX:-0.8704},0).wait(1).to({skewX:-0.8519},0).wait(1).to({skewX:-0.8333},0).wait(1).to({skewX:-0.8148},0).wait(1).to({skewX:-0.7963,x:-0.2},0).wait(1).to({skewX:-0.7778},0).wait(1).to({skewX:-0.7593},0).wait(1).to({skewX:-0.7407},0).wait(1).to({skewX:-0.7222},0).wait(1).to({skewX:-0.7037},0).wait(1).to({skewX:-0.6852,x:-0.15},0).wait(1).to({skewX:-0.6667},0).wait(1).to({skewX:-0.6481},0).wait(1).to({skewX:-0.6296},0).wait(1).to({skewX:-0.6111},0).wait(1).to({skewX:-0.5926},0).wait(1).to({skewX:-0.5741,x:-0.1},0).wait(1).to({skewX:-0.5556},0).wait(1).to({skewX:-0.537},0).wait(1).to({skewX:-0.5185},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4815},0).wait(1).to({skewX:-0.463,x:-0.05},0).wait(1).to({skewX:-0.4444},0).wait(1).to({skewX:-0.4259},0).wait(1).to({skewX:-0.4074},0).wait(1).to({skewX:-0.3889},0).wait(1).to({skewX:-0.3704,x:0},0).wait(1).to({skewX:-0.3519},0).wait(1).to({skewX:-0.3333},0).wait(1).to({skewX:-0.3148},0).wait(1).to({skewX:-0.2963},0).wait(1).to({skewX:-0.2778},0).wait(1).to({skewX:-0.2593,x:0.05},0).wait(1).to({skewX:-0.2407},0).wait(1).to({skewX:-0.2222},0).wait(1).to({skewX:-0.2037},0).wait(1).to({skewX:-0.1852},0).wait(1).to({skewX:-0.1667},0).wait(1).to({skewX:-0.1481,x:0.1},0).wait(1).to({skewX:-0.1296},0).wait(1).to({skewX:-0.1111},0).wait(1).to({skewX:-0.0926},0).wait(1).to({skewX:-0.0741},0).wait(1).to({skewX:-0.0556},0).wait(1).to({rotation:-0.037,skewX:0,x:0.15},0).wait(1).to({rotation:-0.0185},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-53.2,23.3,54.300000000000004);


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
	this.instance.setTransform(0.1,0.05,1,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,rotation:0.0431,x:0.2,y:-26.95},0).wait(1).to({rotation:0,skewX:0.0862,x:0.25},0).wait(1).to({skewX:0.1293},0).wait(1).to({skewX:0.1724,x:0.3},0).wait(1).to({skewX:0.2155},0).wait(1).to({skewX:0.2586},0).wait(1).to({skewX:0.3017,x:0.35},0).wait(1).to({skewX:0.3448},0).wait(1).to({skewX:0.3879,x:0.4},0).wait(1).to({skewX:0.431},0).wait(1).to({skewX:0.4741},0).wait(1).to({skewX:0.5172,x:0.45},0).wait(1).to({skewX:0.5603},0).wait(1).to({skewX:0.6034,x:0.5},0).wait(1).to({skewX:0.6466},0).wait(1).to({skewX:0.6897},0).wait(1).to({skewX:0.7328,x:0.55},0).wait(1).to({skewX:0.7759},0).wait(1).to({skewX:0.819,x:0.6},0).wait(1).to({skewX:0.8621},0).wait(1).to({skewX:0.9052,x:0.65},0).wait(1).to({skewX:0.9483},0).wait(1).to({skewX:0.9914},0).wait(1).to({skewX:1.0345,x:0.7},0).wait(1).to({skewX:1.0776},0).wait(1).to({skewX:1.1207,x:0.75},0).wait(1).to({skewX:1.1638},0).wait(1).to({skewX:1.2069},0).wait(1).to({skewX:1.25,x:0.8},0).wait(1).to({skewX:1.2931},0).wait(1).to({skewX:1.3362,x:0.85},0).wait(1).to({skewX:1.3793},0).wait(1).to({skewX:1.4224},0).wait(1).to({skewX:1.4655,x:0.9},0).wait(1).to({skewX:1.5086},0).wait(1).to({skewX:1.5517,x:0.95},0).wait(1).to({skewX:1.5948},0).wait(1).to({skewX:1.6379},0).wait(1).to({skewX:1.681,x:1},0).wait(1).to({skewX:1.7241},0).wait(1).to({skewX:1.7672,x:1.05},0).wait(1).to({skewX:1.8103},0).wait(1).to({skewX:1.8534},0).wait(1).to({skewX:1.8966,x:1.1},0).wait(1).to({skewX:1.9397},0).wait(1).to({skewX:1.9828,x:1.15,y:-26.9},0).wait(1).to({skewX:2.0259},0).wait(1).to({skewX:2.069},0).wait(1).to({skewX:2.1121,x:1.2},0).wait(1).to({skewX:2.1552},0).wait(1).to({skewX:2.1983,x:1.25},0).wait(1).to({skewX:2.2414},0).wait(1).to({skewX:2.2845,x:1.3},0).wait(1).to({skewX:2.3276},0).wait(1).to({skewX:2.3707},0).wait(1).to({skewX:2.4138,x:1.35},0).wait(1).to({skewX:2.4569},0).wait(1).to({skewX:2.5,x:1.4},0).wait(1).to({skewX:2.4583,x:1.35},0).wait(1).to({skewX:2.4167},0).wait(1).to({skewX:2.375,x:1.3},0).wait(1).to({skewX:2.3333},0).wait(1).to({skewX:2.2917},0).wait(1).to({skewX:2.25,x:1.25},0).wait(1).to({skewX:2.2083},0).wait(1).to({skewX:2.1667,x:1.2},0).wait(1).to({skewX:2.125},0).wait(1).to({skewX:2.0833},0).wait(1).to({skewX:2.0417,x:1.15},0).wait(1).to({skewX:2},0).wait(1).to({skewX:1.9583,x:1.1,y:-26.95},0).wait(1).to({skewX:1.9167},0).wait(1).to({skewX:1.875},0).wait(1).to({skewX:1.8333,x:1.05},0).wait(1).to({skewX:1.7917},0).wait(1).to({skewX:1.75,x:1},0).wait(1).to({skewX:1.7083},0).wait(1).to({skewX:1.6667},0).wait(1).to({skewX:1.625,x:0.95},0).wait(1).to({skewX:1.5833},0).wait(1).to({skewX:1.5417},0).wait(1).to({skewX:1.5,x:0.9},0).wait(1).to({skewX:1.4583},0).wait(1).to({skewX:1.4167,x:0.85},0).wait(1).to({skewX:1.375},0).wait(1).to({skewX:1.3333},0).wait(1).to({skewX:1.2917,x:0.8},0).wait(1).to({skewX:1.25},0).wait(1).to({skewX:1.2083,x:0.75},0).wait(1).to({skewX:1.1667},0).wait(1).to({skewX:1.125},0).wait(1).to({skewX:1.0833,x:0.7},0).wait(1).to({skewX:1.0417},0).wait(1).to({skewX:1,x:0.65},0).wait(1).to({skewX:0.9583},0).wait(1).to({skewX:0.9167},0).wait(1).to({skewX:0.875,x:0.6},0).wait(1).to({skewX:0.8333},0).wait(1).to({skewX:0.7917,x:0.55},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.7083},0).wait(1).to({skewX:0.6667,x:0.5},0).wait(1).to({skewX:0.625},0).wait(1).to({skewX:0.5833,x:0.45},0).wait(1).to({skewX:0.5417},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.4583,x:0.4},0).wait(1).to({skewX:0.4167},0).wait(1).to({skewX:0.375},0).wait(1).to({skewX:0.3333,x:0.35},0).wait(1).to({skewX:0.2917},0).wait(1).to({skewX:0.25,x:0.3},0).wait(1).to({skewX:0.2083},0).wait(1).to({skewX:0.1667},0).wait(1).to({skewX:0.125,x:0.25},0).wait(1).to({skewX:0.0833},0).wait(1).to({rotation:0.0417,skewX:0,x:0.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0403},0).wait(1).to({rotation:0,skewX:-0.0806,x:0.15},0).wait(1).to({skewX:-0.121},0).wait(1).to({skewX:-0.1613,x:0.1},0).wait(1).to({skewX:-0.2016},0).wait(1).to({skewX:-0.2419},0).wait(1).to({skewX:-0.2823,x:0.05},0).wait(1).to({skewX:-0.3226},0).wait(1).to({skewX:-0.3629},0).wait(1).to({skewX:-0.4032,x:0},0).wait(1).to({skewX:-0.4435},0).wait(1).to({skewX:-0.4839,x:-0.05},0).wait(1).to({skewX:-0.5242},0).wait(1).to({skewX:-0.5645},0).wait(1).to({skewX:-0.6048,x:-0.1},0).wait(1).to({skewX:-0.6452},0).wait(1).to({skewX:-0.6855},0).wait(1).to({skewX:-0.7258,x:-0.15},0).wait(1).to({skewX:-0.7661},0).wait(1).to({skewX:-0.8065,x:-0.2},0).wait(1).to({skewX:-0.8468},0).wait(1).to({skewX:-0.8871},0).wait(1).to({skewX:-0.9274,x:-0.25},0).wait(1).to({skewX:-0.9677},0).wait(1).to({skewX:-1.0081},0).wait(1).to({skewX:-1.0484,x:-0.3},0).wait(1).to({skewX:-1.0887},0).wait(1).to({skewX:-1.129,x:-0.35},0).wait(1).to({skewX:-1.1694},0).wait(1).to({skewX:-1.2097},0).wait(1).to({skewX:-1.25,x:-0.4},0).wait(1).to({skewX:-1.2903},0).wait(1).to({skewX:-1.3306,x:-0.45},0).wait(1).to({skewX:-1.371},0).wait(1).to({skewX:-1.4113},0).wait(1).to({skewX:-1.4516,x:-0.5},0).wait(1).to({skewX:-1.4919},0).wait(1).to({skewX:-1.5323},0).wait(1).to({skewX:-1.5726,x:-0.55},0).wait(1).to({skewX:-1.6129},0).wait(1).to({skewX:-1.6532,x:-0.6},0).wait(1).to({skewX:-1.6935},0).wait(1).to({skewX:-1.7339},0).wait(1).to({skewX:-1.7742,x:-0.65},0).wait(1).to({skewX:-1.8145},0).wait(1).to({skewX:-1.8548},0).wait(1).to({skewX:-1.8952,x:-0.7},0).wait(1).to({skewX:-1.9355},0).wait(1).to({skewX:-1.9758,x:-0.75},0).wait(1).to({skewX:-2.0161,y:-26.9},0).wait(1).to({skewX:-2.0565},0).wait(1).to({skewX:-2.0968,x:-0.8},0).wait(1).to({skewX:-2.1371},0).wait(1).to({skewX:-2.1774,x:-0.85},0).wait(1).to({skewX:-2.2177},0).wait(1).to({skewX:-2.2581},0).wait(1).to({skewX:-2.2984,x:-0.9},0).wait(1).to({skewX:-2.3387},0).wait(1).to({skewX:-2.379},0).wait(1).to({skewX:-2.4194,x:-0.95},0).wait(1).to({skewX:-2.4597},0).wait(1).to({skewX:-2.5,x:-1},0).wait(1).to({skewX:-2.4576,x:-0.95},0).wait(1).to({skewX:-2.4153},0).wait(1).to({skewX:-2.3729,x:-0.9},0).wait(1).to({skewX:-2.3305},0).wait(1).to({skewX:-2.2881},0).wait(1).to({skewX:-2.2458,x:-0.85},0).wait(1).to({skewX:-2.2034},0).wait(1).to({skewX:-2.161,x:-0.8},0).wait(1).to({skewX:-2.1186},0).wait(1).to({skewX:-2.0763},0).wait(1).to({skewX:-2.0339,x:-0.75},0).wait(1).to({skewX:-1.9915},0).wait(1).to({skewX:-1.9492,x:-0.7,y:-26.95},0).wait(1).to({skewX:-1.9068},0).wait(1).to({skewX:-1.8644},0).wait(1).to({skewX:-1.822,x:-0.65},0).wait(1).to({skewX:-1.7797},0).wait(1).to({skewX:-1.7373,x:-0.6},0).wait(1).to({skewX:-1.6949},0).wait(1).to({skewX:-1.6525},0).wait(1).to({skewX:-1.6102,x:-0.55},0).wait(1).to({skewX:-1.5678},0).wait(1).to({skewX:-1.5254,x:-0.5},0).wait(1).to({skewX:-1.4831},0).wait(1).to({skewX:-1.4407},0).wait(1).to({skewX:-1.3983,x:-0.45},0).wait(1).to({skewX:-1.3559},0).wait(1).to({skewX:-1.3136,x:-0.4},0).wait(1).to({skewX:-1.2712},0).wait(1).to({skewX:-1.2288},0).wait(1).to({skewX:-1.1864,x:-0.35},0).wait(1).to({skewX:-1.1441},0).wait(1).to({skewX:-1.1017,x:-0.3},0).wait(1).to({skewX:-1.0593},0).wait(1).to({skewX:-1.0169},0).wait(1).to({skewX:-0.9746,x:-0.25},0).wait(1).to({skewX:-0.9322},0).wait(1).to({skewX:-0.8898,x:-0.2},0).wait(1).to({skewX:-0.8475},0).wait(1).to({skewX:-0.8051},0).wait(1).to({skewX:-0.7627,x:-0.15},0).wait(1).to({skewX:-0.7203},0).wait(1).to({skewX:-0.678,x:-0.1},0).wait(1).to({skewX:-0.6356},0).wait(1).to({skewX:-0.5932},0).wait(1).to({skewX:-0.5508,x:-0.05},0).wait(1).to({skewX:-0.5085},0).wait(1).to({skewX:-0.4661,x:0},0).wait(1).to({skewX:-0.4237},0).wait(1).to({skewX:-0.3814},0).wait(1).to({skewX:-0.339,x:0.05},0).wait(1).to({skewX:-0.2966},0).wait(1).to({skewX:-0.2542,x:0.1},0).wait(1).to({skewX:-0.2119},0).wait(1).to({skewX:-0.1695},0).wait(1).to({skewX:-0.1271,x:0.15},0).wait(1).to({skewX:-0.0847},0).wait(1).to({rotation:-0.0424,skewX:0,x:0.2},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-53.8,25,54.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.1316,x:0.2,y:-26.35},0).wait(1).to({skewX:0.2632,x:0.25},0).wait(1).to({skewX:0.3947,x:0.35},0).wait(1).to({skewX:0.5263,x:0.4},0).wait(1).to({skewX:0.6579,x:0.45},0).wait(1).to({skewX:0.7895,x:0.5},0).wait(1).to({skewX:0.9211,x:0.6},0).wait(1).to({skewX:1.0526,x:0.65},0).wait(1).to({skewX:1.1842,x:0.7},0).wait(1).to({skewX:1.3158,x:0.75},0).wait(1).to({skewX:1.4474,x:0.85},0).wait(1).to({skewX:1.5789,x:0.9},0).wait(1).to({skewX:1.7105,x:0.95},0).wait(1).to({skewX:1.8421,x:1},0).wait(1).to({skewX:1.9737,x:1.1},0).wait(1).to({skewX:2.1053,x:1.15,y:-26.3},0).wait(1).to({skewX:2.2368,x:1.2},0).wait(1).to({skewX:2.3684,x:1.25},0).wait(1).to({skewX:2.5,x:1.35},0).wait(1).to({skewX:2.375,x:1.25},0).wait(1).to({skewX:2.25,x:1.2},0).wait(1).to({skewX:2.125,x:1.15},0).wait(1).to({skewX:2,x:1.1},0).wait(1).to({skewX:1.875,x:1.05,y:-26.35},0).wait(1).to({skewX:1.75,x:0.95},0).wait(1).to({skewX:1.625,x:0.9},0).wait(1).to({skewX:1.5,x:0.85},0).wait(1).to({skewX:1.375,x:0.8},0).wait(1).to({skewX:1.25,x:0.75},0).wait(1).to({skewX:1.125,x:0.7},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:0.875,x:0.55},0).wait(1).to({skewX:0.75,x:0.5},0).wait(1).to({skewX:0.625,x:0.45},0).wait(1).to({skewX:0.5,x:0.4},0).wait(1).to({skewX:0.375,x:0.35},0).wait(1).to({skewX:0.25,x:0.25},0).wait(1).to({skewX:0.125,x:0.2},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.125,x:0.1},0).wait(1).to({skewX:-0.25,x:0.05},0).wait(1).to({skewX:-0.375,x:-0.05},0).wait(1).to({skewX:-0.5,x:-0.1},0).wait(1).to({skewX:-0.625,x:-0.15},0).wait(1).to({skewX:-0.75,x:-0.2},0).wait(1).to({skewX:-0.875,x:-0.25},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-1.125,x:-0.4},0).wait(1).to({skewX:-1.25,x:-0.45},0).wait(1).to({skewX:-1.375,x:-0.5},0).wait(1).to({skewX:-1.5,x:-0.55},0).wait(1).to({skewX:-1.625,x:-0.6},0).wait(1).to({skewX:-1.75,x:-0.65},0).wait(1).to({skewX:-1.875,x:-0.75},0).wait(1).to({skewX:-2,x:-0.8,y:-26.3},0).wait(1).to({skewX:-2.125,x:-0.85},0).wait(1).to({skewX:-2.25,x:-0.9},0).wait(1).to({skewX:-2.375,x:-0.95},0).wait(1).to({skewX:-2.5,x:-1.05},0).wait(1).to({skewX:-2.375,x:-0.95},0).wait(1).to({skewX:-2.25,x:-0.9},0).wait(1).to({skewX:-2.125,x:-0.85},0).wait(1).to({skewX:-2,x:-0.8},0).wait(1).to({skewX:-1.875,x:-0.75,y:-26.35},0).wait(1).to({skewX:-1.75,x:-0.65},0).wait(1).to({skewX:-1.625,x:-0.6},0).wait(1).to({skewX:-1.5,x:-0.55},0).wait(1).to({skewX:-1.375,x:-0.5},0).wait(1).to({skewX:-1.25,x:-0.45},0).wait(1).to({skewX:-1.125,x:-0.4},0).wait(1).to({skewX:-1,x:-0.3},0).wait(1).to({skewX:-0.875,x:-0.25},0).wait(1).to({skewX:-0.75,x:-0.2},0).wait(1).to({skewX:-0.625,x:-0.15},0).wait(1).to({skewX:-0.5,x:-0.1},0).wait(1).to({skewX:-0.375,x:-0.05},0).wait(1).to({skewX:-0.25,x:0.05},0).wait(1).to({skewX:-0.125,x:0.1},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-53.2,25.1,54.300000000000004);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.1538,x:0.2,y:-26.35},0).wait(1).to({skewX:0.3077,x:0.3},0).wait(1).to({skewX:0.4615,x:0.35},0).wait(1).to({skewX:0.6154,x:0.45},0).wait(1).to({skewX:0.7692,x:0.5},0).wait(1).to({skewX:0.9231,x:0.6},0).wait(1).to({skewX:1.0769,x:0.65},0).wait(1).to({skewX:1.2308,x:0.75},0).wait(1).to({skewX:1.3846,x:0.8},0).wait(1).to({skewX:1.5385,x:0.85},0).wait(1).to({skewX:1.6923,x:0.95},0).wait(1).to({skewX:1.8462,x:1},0).wait(1).to({skewX:2,x:1.1,y:-26.3},0).wait(1).to({skewX:2.1538,x:1.15},0).wait(1).to({skewX:2.3077,x:1.25},0).wait(1).to({skewX:2.4615,x:1.3},0).wait(1).to({skewX:2.6154,x:1.4},0).wait(1).to({skewX:2.7692,x:1.45},0).wait(1).to({skewX:2.9231,x:1.55},0).wait(1).to({skewX:3.0769,x:1.6},0).wait(1).to({skewX:3.2308,x:1.65},0).wait(1).to({skewX:3.3846,x:1.75},0).wait(1).to({skewX:3.5385,x:1.8},0).wait(1).to({skewX:3.6923,x:1.9},0).wait(1).to({skewX:3.8462,x:1.95},0).wait(1).to({skewX:4,x:2.05},0).wait(1).to({skewX:4.1538,x:2.1,y:-26.25},0).wait(1).to({skewX:4.3077,x:2.2},0).wait(1).to({skewX:4.4615,x:2.25},0).wait(1).to({skewX:4.6154,x:2.3},0).wait(1).to({skewX:4.7692,x:2.4},0).wait(1).to({skewX:4.9231,x:2.45},0).wait(1).to({skewX:5.0769,x:2.55},0).wait(1).to({skewX:5.2308,x:2.6},0).wait(1).to({skewX:5.3846,x:2.7,y:-26.2},0).wait(1).to({skewX:5.5385,x:2.75},0).wait(1).to({skewX:5.6923,x:2.85},0).wait(1).to({skewX:5.8462,x:2.9},0).wait(1).to({skewX:6,x:2.95},0).wait(1).to({skewX:5.85,x:2.9},0).wait(1).to({skewX:5.7,x:2.85},0).wait(1).to({skewX:5.55,x:2.75},0).wait(1).to({skewX:5.4,x:2.7},0).wait(1).to({skewX:5.25,x:2.6,y:-26.25},0).wait(1).to({skewX:5.1,x:2.55},0).wait(1).to({skewX:4.95,x:2.5},0).wait(1).to({skewX:4.8,x:2.4},0).wait(1).to({skewX:4.65,x:2.35},0).wait(1).to({skewX:4.5,x:2.25},0).wait(1).to({skewX:4.35,x:2.2},0).wait(1).to({skewX:4.2,x:2.15},0).wait(1).to({skewX:4.05,x:2.05},0).wait(1).to({skewX:3.9,x:2,y:-26.3},0).wait(1).to({skewX:3.75,x:1.9},0).wait(1).to({skewX:3.6,x:1.85},0).wait(1).to({skewX:3.45,x:1.75},0).wait(1).to({skewX:3.3,x:1.7},0).wait(1).to({skewX:3.15,x:1.65},0).wait(1).to({skewX:3,x:1.55},0).wait(1).to({skewX:2.85,x:1.5},0).wait(1).to({skewX:2.7,x:1.4},0).wait(1).to({skewX:2.55,x:1.35},0).wait(1).to({skewX:2.4,x:1.3},0).wait(1).to({skewX:2.25,x:1.2},0).wait(1).to({skewX:2.1,x:1.15},0).wait(1).to({skewX:1.95,x:1.05,y:-26.35},0).wait(1).to({skewX:1.8,x:1},0).wait(1).to({skewX:1.65,x:0.95},0).wait(1).to({skewX:1.5,x:0.85},0).wait(1).to({skewX:1.35,x:0.8},0).wait(1).to({skewX:1.2,x:0.7},0).wait(1).to({skewX:1.05,x:0.65},0).wait(1).to({skewX:0.9,x:0.55},0).wait(1).to({skewX:0.75,x:0.5},0).wait(1).to({skewX:0.6,x:0.45},0).wait(1).to({skewX:0.45,x:0.35},0).wait(1).to({skewX:0.3,x:0.3},0).wait(1).to({skewX:0.15,x:0.2},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.15,x:0.1},0).wait(1).to({skewX:-0.3,x:0},0).wait(1).to({skewX:-0.45,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.75,x:-0.2},0).wait(1).to({skewX:-0.9,x:-0.25},0).wait(1).to({skewX:-1.05,x:-0.35},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.35,x:-0.5},0).wait(1).to({skewX:-1.5,x:-0.55},0).wait(1).to({skewX:-1.65,x:-0.65},0).wait(1).to({skewX:-1.8,x:-0.7},0).wait(1).to({skewX:-1.95,x:-0.75},0).wait(1).to({skewX:-2.1,x:-0.85,y:-26.3},0).wait(1).to({skewX:-2.25,x:-0.9},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.55,x:-1.05},0).wait(1).to({skewX:-2.7,x:-1.1},0).wait(1).to({skewX:-2.85,x:-1.2},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-3.15,x:-1.35},0).wait(1).to({skewX:-3.3,x:-1.4},0).wait(1).to({skewX:-3.45,x:-1.45},0).wait(1).to({skewX:-3.6,x:-1.55},0).wait(1).to({skewX:-3.75,x:-1.6},0).wait(1).to({skewX:-3.9,x:-1.7},0).wait(1).to({skewX:-4.05,x:-1.75,y:-26.25},0).wait(1).to({skewX:-4.2,x:-1.85},0).wait(1).to({skewX:-4.35,x:-1.9},0).wait(1).to({skewX:-4.5,x:-1.95},0).wait(1).to({skewX:-4.65,x:-2.05},0).wait(1).to({skewX:-4.8,x:-2.1},0).wait(1).to({skewX:-4.95,x:-2.2},0).wait(1).to({skewX:-5.1,x:-2.25},0).wait(1).to({skewX:-5.25,x:-2.3},0).wait(1).to({skewX:-5.4,x:-2.4,y:-26.2},0).wait(1).to({skewX:-5.55,x:-2.45},0).wait(1).to({skewX:-5.7,x:-2.55},0).wait(1).to({skewX:-5.85,x:-2.6},0).wait(1).to({skewX:-6,x:-2.65},0).wait(1).to({skewX:-5.85,x:-2.6},0).wait(1).to({skewX:-5.7,x:-2.55},0).wait(1).to({skewX:-5.55,x:-2.45},0).wait(1).to({skewX:-5.4,x:-2.4},0).wait(1).to({skewX:-5.25,x:-2.3,y:-26.25},0).wait(1).to({skewX:-5.1,x:-2.25},0).wait(1).to({skewX:-4.95,x:-2.2},0).wait(1).to({skewX:-4.8,x:-2.1},0).wait(1).to({skewX:-4.65,x:-2.05},0).wait(1).to({skewX:-4.5,x:-1.95},0).wait(1).to({skewX:-4.35,x:-1.9},0).wait(1).to({skewX:-4.2,x:-1.85},0).wait(1).to({skewX:-4.05,x:-1.75},0).wait(1).to({skewX:-3.9,x:-1.7,y:-26.3},0).wait(1).to({skewX:-3.75,x:-1.6},0).wait(1).to({skewX:-3.6,x:-1.55},0).wait(1).to({skewX:-3.45,x:-1.45},0).wait(1).to({skewX:-3.3,x:-1.4},0).wait(1).to({skewX:-3.15,x:-1.35},0).wait(1).to({skewX:-3,x:-1.25},0).wait(1).to({skewX:-2.85,x:-1.2},0).wait(1).to({skewX:-2.7,x:-1.1},0).wait(1).to({skewX:-2.55,x:-1.05},0).wait(1).to({skewX:-2.4,x:-1},0).wait(1).to({skewX:-2.25,x:-0.9},0).wait(1).to({skewX:-2.1,x:-0.85},0).wait(1).to({skewX:-1.95,x:-0.75,y:-26.35},0).wait(1).to({skewX:-1.8,x:-0.7},0).wait(1).to({skewX:-1.65,x:-0.65},0).wait(1).to({skewX:-1.5,x:-0.55},0).wait(1).to({skewX:-1.35,x:-0.5},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.05,x:-0.35},0).wait(1).to({skewX:-0.9,x:-0.25},0).wait(1).to({skewX:-0.75,x:-0.2},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.45,x:-0.05},0).wait(1).to({skewX:-0.3,x:0},0).wait(1).to({skewX:-0.15,x:0.1},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-53.2,31.3,54.300000000000004);


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

	
	var _tweenStr_4 = cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,rotation:0.0126,x:0.05,y:-26.4},0).wait(1).to({rotation:0.0252},0).wait(1).to({rotation:0.0378},0).wait(1).to({rotation:0,skewX:0.0504},0).wait(1).to({skewX:0.063,x:0.1},0).wait(1).to({skewX:0.0756},0).wait(1).to({skewX:0.0882},0).wait(1).to({skewX:0.1008},0).wait(1).to({skewX:0.1134},0).wait(1).to({skewX:0.1261},0).wait(1).to({skewX:0.1387},0).wait(1).to({skewX:0.1513},0).wait(1).to({skewX:0.1639,x:0.15},0).wait(1).to({skewX:0.1765},0).wait(1).to({skewX:0.1891},0).wait(1).to({skewX:0.2017},0).wait(1).to({skewX:0.2143},0).wait(1).to({skewX:0.2269},0).wait(1).to({skewX:0.2395},0).wait(1).to({skewX:0.2521},0).wait(1).to({skewX:0.2647},0).wait(1).to({skewX:0.2773,x:0.2},0).wait(1).to({skewX:0.2899},0).wait(1).to({skewX:0.3025},0).wait(1).to({skewX:0.3151},0).wait(1).to({skewX:0.3277},0).wait(1).to({skewX:0.3403},0).wait(1).to({skewX:0.3529},0).wait(1).to({skewX:0.3655},0).wait(1).to({skewX:0.3782,x:0.25},0).wait(1).to({skewX:0.3908},0).wait(1).to({skewX:0.4034},0).wait(1).to({skewX:0.416},0).wait(1).to({skewX:0.4286},0).wait(1).to({skewX:0.4412},0).wait(1).to({skewX:0.4538},0).wait(1).to({skewX:0.4664},0).wait(1).to({skewX:0.479,x:0.3},0).wait(1).to({skewX:0.4916},0).wait(1).to({skewX:0.5042},0).wait(1).to({skewX:0.5168},0).wait(1).to({skewX:0.5294},0).wait(1).to({skewX:0.542},0).wait(1).to({skewX:0.5546},0).wait(1).to({skewX:0.5672},0).wait(1).to({skewX:0.5798},0).wait(1).to({skewX:0.5924,x:0.35},0).wait(1).to({skewX:0.605},0).wait(1).to({skewX:0.6176},0).wait(1).to({skewX:0.6303},0).wait(1).to({skewX:0.6429},0).wait(1).to({skewX:0.6555},0).wait(1).to({skewX:0.6681},0).wait(1).to({skewX:0.6807},0).wait(1).to({skewX:0.6933,x:0.4},0).wait(1).to({skewX:0.7059},0).wait(1).to({skewX:0.7185},0).wait(1).to({skewX:0.7311},0).wait(1).to({skewX:0.7437},0).wait(1).to({skewX:0.7563},0).wait(1).to({skewX:0.7689},0).wait(1).to({skewX:0.7815},0).wait(1).to({skewX:0.7941},0).wait(1).to({skewX:0.8067,x:0.45},0).wait(1).to({skewX:0.8193},0).wait(1).to({skewX:0.8319},0).wait(1).to({skewX:0.8445},0).wait(1).to({skewX:0.8571},0).wait(1).to({skewX:0.8697},0).wait(1).to({skewX:0.8824},0).wait(1).to({skewX:0.895},0).wait(1).to({skewX:0.9076,x:0.5},0).wait(1).to({skewX:0.9202},0).wait(1).to({skewX:0.9328},0).wait(1).to({skewX:0.9454},0).wait(1).to({skewX:0.958},0).wait(1).to({skewX:0.9706},0).wait(1).to({skewX:0.9832},0).wait(1).to({skewX:0.9958},0).wait(1).to({skewX:1.0084,x:0.55},0).wait(1).to({skewX:1.021},0).wait(1).to({skewX:1.0336},0).wait(1).to({skewX:1.0462},0).wait(1).to({skewX:1.0588},0).wait(1).to({skewX:1.0714},0).wait(1).to({skewX:1.084},0).wait(1).to({skewX:1.0966},0).wait(1).to({skewX:1.1092},0).wait(1).to({skewX:1.1218,x:0.6},0).wait(1).to({skewX:1.1345},0).wait(1).to({skewX:1.1471},0).wait(1).to({skewX:1.1597},0).wait(1).to({skewX:1.1723},0).wait(1).to({skewX:1.1849},0).wait(1).to({skewX:1.1975},0).wait(1).to({skewX:1.2101},0).wait(1).to({skewX:1.2227,x:0.65},0).wait(1).to({skewX:1.2353},0).wait(1).to({skewX:1.2479},0).wait(1).to({skewX:1.2605},0).wait(1).to({skewX:1.2731},0).wait(1).to({skewX:1.2857},0).wait(1).to({skewX:1.2983},0).wait(1).to({skewX:1.3109},0).wait(1).to({skewX:1.3235},0).wait(1).to({skewX:1.3361,x:0.7},0).wait(1).to({skewX:1.3487},0).wait(1).to({skewX:1.3613},0).wait(1).to({skewX:1.3739},0).wait(1).to({skewX:1.3866},0).wait(1).to({skewX:1.3992},0).wait(1).to({skewX:1.4118},0).wait(1).to({skewX:1.4244},0).wait(1).to({skewX:1.437,x:0.75},0).wait(1).to({skewX:1.4496},0).wait(1).to({skewX:1.4622},0).wait(1).to({skewX:1.4748},0).wait(1).to({skewX:1.4874},0).wait(1).to({skewX:1.5},0).wait(1).to({skewX:1.4875},0).wait(1).to({skewX:1.475},0).wait(1).to({skewX:1.4625},0).wait(1).to({skewX:1.45},0).wait(1).to({skewX:1.4375},0).wait(1).to({skewX:1.425,x:0.7},0).wait(1).to({skewX:1.4125},0).wait(1).to({skewX:1.4},0).wait(1).to({skewX:1.3875},0).wait(1).to({skewX:1.375},0).wait(1).to({skewX:1.3625},0).wait(1).to({skewX:1.35},0).wait(1).to({skewX:1.3375},0).wait(1).to({skewX:1.325,x:0.65},0).wait(1).to({skewX:1.3125},0).wait(1).to({skewX:1.3},0).wait(1).to({skewX:1.2875},0).wait(1).to({skewX:1.275},0).wait(1).to({skewX:1.2625},0).wait(1).to({skewX:1.25},0).wait(1).to({skewX:1.2375},0).wait(1).to({skewX:1.225},0).wait(1).to({skewX:1.2125,x:0.6},0).wait(1).to({skewX:1.2},0).wait(1).to({skewX:1.1875},0).wait(1).to({skewX:1.175},0).wait(1).to({skewX:1.1625},0).wait(1).to({skewX:1.15},0).wait(1).to({skewX:1.1375},0).wait(1).to({skewX:1.125},0).wait(1).to({skewX:1.1125,x:0.55},0).wait(1).to({skewX:1.1},0).wait(1).to({skewX:1.0875},0).wait(1).to({skewX:1.075},0).wait(1).to({skewX:1.0625},0).wait(1).to({skewX:1.05},0).wait(1).to({skewX:1.0375},0).wait(1).to({skewX:1.025},0).wait(1).to({skewX:1.0125},0).wait(1).to({skewX:1,x:0.5},0).wait(1).to({skewX:0.9875},0).wait(1).to({skewX:0.975},0).wait(1).to({skewX:0.9625},0).wait(1).to({skewX:0.95},0).wait(1).to({skewX:0.9375},0).wait(1).to({skewX:0.925},0).wait(1).to({skewX:0.9125},0).wait(1).to({skewX:0.9,x:0.45},0).wait(1).to({skewX:0.8875},0).wait(1).to({skewX:0.875},0).wait(1).to({skewX:0.8625},0).wait(1).to({skewX:0.85},0).wait(1).to({skewX:0.8375},0).wait(1).to({skewX:0.825},0).wait(1).to({skewX:0.8125},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7875,x:0.4},0).wait(1).to({skewX:0.775},0).wait(1).to({skewX:0.7625},0).wait(1).to({skewX:0.75},0).wait(1).to({skewX:0.7375},0).wait(1).to({skewX:0.725},0).wait(1).to({skewX:0.7125},0).wait(1).to({skewX:0.7},0).wait(1).to({skewX:0.6875,x:0.35},0).wait(1).to({skewX:0.675},0).wait(1).to({skewX:0.6625},0).wait(1).to({skewX:0.65},0).wait(1).to({skewX:0.6375},0).wait(1).to({skewX:0.625},0).wait(1).to({skewX:0.6125},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.5875},0).wait(1).to({skewX:0.575,x:0.3},0).wait(1).to({skewX:0.5625},0).wait(1).to({skewX:0.55},0).wait(1).to({skewX:0.5375},0).wait(1).to({skewX:0.525},0).wait(1).to({skewX:0.5125},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.4875},0).wait(1).to({skewX:0.475,x:0.25},0).wait(1).to({skewX:0.4625},0).wait(1).to({skewX:0.45},0).wait(1).to({skewX:0.4375},0).wait(1).to({skewX:0.425},0).wait(1).to({skewX:0.4125},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3875},0).wait(1).to({skewX:0.375},0).wait(1).to({skewX:0.3625,x:0.2},0).wait(1).to({skewX:0.35},0).wait(1).to({skewX:0.3375},0).wait(1).to({skewX:0.325},0).wait(1).to({skewX:0.3125},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.2875},0).wait(1).to({skewX:0.275},0).wait(1).to({skewX:0.2625,x:0.15},0).wait(1).to({skewX:0.25},0).wait(1).to({skewX:0.2375},0).wait(1).to({skewX:0.225},0).wait(1).to({skewX:0.2125},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1875},0).wait(1).to({skewX:0.175},0).wait(1).to({skewX:0.1625},0).wait(1).to({skewX:0.15,x:0.1},0).wait(1).to({skewX:0.1375},0).wait(1).to({skewX:0.125},0).wait(1).to({skewX:0.1125},0).wait(1).to({skewX:0.1},0).wait(1).to({skewX:0.0875},0).wait(1).to({skewX:0.075},0).wait(1).to({skewX:0.0625},0).wait(1).to({skewX:0.05,x:0.05},0).wait(1).to({rotation:0.0375,skewX:0},0).wait(1).to({rotation:0.025},0).wait(1).to({rotation:0.0125},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.0125},0).wait(1).to({rotation:-0.025},0).wait(1).to({rotation:-0.0375},0).wait(1).to({rotation:-0.05},0).wait(1).to({rotation:0,skewX:-0.0625,x:0},0).wait(1).to({skewX:-0.075},0).wait(1).to({skewX:-0.0875},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.1125},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.1375},0).wait(1).to({skewX:-0.15},0).wait(1).to({skewX:-0.1625,x:-0.05},0).wait(1).to({skewX:-0.175},0).wait(1).to({skewX:-0.1875},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.2125},0).wait(1).to({skewX:-0.225},0).wait(1).to({skewX:-0.2375},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.2625},0).wait(1).to({skewX:-0.275,x:-0.1},0).wait(1).to({skewX:-0.2875},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.3125},0).wait(1).to({skewX:-0.325},0).wait(1).to({skewX:-0.3375},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.3625},0).wait(1).to({skewX:-0.375,x:-0.15},0).wait(1).to({skewX:-0.3875},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.4125},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.4375},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.4625},0).wait(1).to({skewX:-0.475},0).wait(1).to({skewX:-0.4875,x:-0.2},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.5125},0).wait(1).to({skewX:-0.525},0).wait(1).to({skewX:-0.5375},0).wait(1).to({skewX:-0.55},0).wait(1).to({skewX:-0.5625},0).wait(1).to({skewX:-0.575},0).wait(1).to({skewX:-0.5875,x:-0.25},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.6125},0).wait(1).to({skewX:-0.625},0).wait(1).to({skewX:-0.6375},0).wait(1).to({skewX:-0.65},0).wait(1).to({skewX:-0.6625},0).wait(1).to({skewX:-0.675},0).wait(1).to({skewX:-0.6875},0).wait(1).to({skewX:-0.7,x:-0.3},0).wait(1).to({skewX:-0.7125},0).wait(1).to({skewX:-0.725},0).wait(1).to({skewX:-0.7375},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.7625},0).wait(1).to({skewX:-0.775},0).wait(1).to({skewX:-0.7875},0).wait(1).to({skewX:-0.8,x:-0.35},0).wait(1).to({skewX:-0.8125},0).wait(1).to({skewX:-0.825},0).wait(1).to({skewX:-0.8375},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.8625},0).wait(1).to({skewX:-0.875},0).wait(1).to({skewX:-0.8875},0).wait(1).to({skewX:-0.9},0).wait(1).to({skewX:-0.9125,x:-0.4},0).wait(1).to({skewX:-0.925},0).wait(1).to({skewX:-0.9375},0).wait(1).to({skewX:-0.95},0).wait(1).to({skewX:-0.9625},0).wait(1).to({skewX:-0.975},0).wait(1).to({skewX:-0.9875},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-1.0125,x:-0.45},0).wait(1).to({skewX:-1.025},0).wait(1).to({skewX:-1.0375},0).wait(1).to({skewX:-1.05},0).wait(1).to({skewX:-1.0625},0).wait(1).to({skewX:-1.075},0).wait(1).to({skewX:-1.0875},0).wait(1).to({skewX:-1.1},0).wait(1).to({skewX:-1.1125},0).wait(1).to({skewX:-1.125,x:-0.5},0).wait(1).to({skewX:-1.1375},0).wait(1).to({skewX:-1.15},0).wait(1).to({skewX:-1.1625},0).wait(1).to({skewX:-1.175},0).wait(1).to({skewX:-1.1875},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.2125},0).wait(1).to({skewX:-1.225,x:-0.55},0).wait(1).to({skewX:-1.2375},0).wait(1).to({skewX:-1.25},0).wait(1).to({skewX:-1.2625},0).wait(1).to({skewX:-1.275},0).wait(1).to({skewX:-1.2875},0).wait(1).to({skewX:-1.3},0).wait(1).to({skewX:-1.3125},0).wait(1).to({skewX:-1.325},0).wait(1).to({skewX:-1.3375,x:-0.6},0).wait(1).to({skewX:-1.35},0).wait(1).to({skewX:-1.3625},0).wait(1).to({skewX:-1.375},0).wait(1).to({skewX:-1.3875},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.4125},0).wait(1).to({skewX:-1.425},0).wait(1).to({skewX:-1.4375,x:-0.65},0).wait(1).to({skewX:-1.45},0).wait(1).to({skewX:-1.4625},0).wait(1).to({skewX:-1.475},0).wait(1).to({skewX:-1.4875},0).wait(1).to({skewX:-1.5},0).wait(1).to({skewX:-1.4875},0).wait(1).to({skewX:-1.475},0).wait(1).to({skewX:-1.4625},0).wait(1).to({skewX:-1.45},0).wait(1).to({skewX:-1.4375},0).wait(1).to({skewX:-1.425,x:-0.6},0).wait(1).to({skewX:-1.4125},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.3875},0).wait(1).to({skewX:-1.375},0).wait(1).to({skewX:-1.3625},0).wait(1).to({skewX:-1.35},0).wait(1).to({skewX:-1.3375},0).wait(1).to({skewX:-1.325,x:-0.55},0).wait(1).to({skewX:-1.3125},0).wait(1).to({skewX:-1.3},0).wait(1).to({skewX:-1.2875},0).wait(1).to({skewX:-1.275},0).wait(1).to({skewX:-1.2625},0).wait(1).to({skewX:-1.25},0).wait(1).to({skewX:-1.2375},0).wait(1).to({skewX:-1.225},0).wait(1).to({skewX:-1.2125,x:-0.5},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.1875},0).wait(1).to({skewX:-1.175},0).wait(1).to({skewX:-1.1625},0).wait(1).to({skewX:-1.15},0).wait(1).to({skewX:-1.1375},0).wait(1).to({skewX:-1.125},0).wait(1).to({skewX:-1.1125,x:-0.45},0).wait(1).to({skewX:-1.1},0).wait(1).to({skewX:-1.0875},0).wait(1).to({skewX:-1.075},0).wait(1).to({skewX:-1.0625},0).wait(1).to({skewX:-1.05},0).wait(1).to({skewX:-1.0375},0).wait(1).to({skewX:-1.025},0).wait(1).to({skewX:-1.0125},0).wait(1);
	this.timeline.addTween(_tweenStr_4.to({skewX:-1,x:-0.4},0).wait(1).to({skewX:-0.9875},0).wait(1).to({skewX:-0.975},0).wait(1).to({skewX:-0.9625},0).wait(1).to({skewX:-0.95},0).wait(1).to({skewX:-0.9375},0).wait(1).to({skewX:-0.925},0).wait(1).to({skewX:-0.9125},0).wait(1).to({skewX:-0.9,x:-0.35},0).wait(1).to({skewX:-0.8875},0).wait(1).to({skewX:-0.875},0).wait(1).to({skewX:-0.8625},0).wait(1).to({skewX:-0.85},0).wait(1).to({skewX:-0.8375},0).wait(1).to({skewX:-0.825},0).wait(1).to({skewX:-0.8125},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7875,x:-0.3},0).wait(1).to({skewX:-0.775},0).wait(1).to({skewX:-0.7625},0).wait(1).to({skewX:-0.75},0).wait(1).to({skewX:-0.7375},0).wait(1).to({skewX:-0.725},0).wait(1).to({skewX:-0.7125},0).wait(1).to({skewX:-0.7},0).wait(1).to({skewX:-0.6875,x:-0.25},0).wait(1).to({skewX:-0.675},0).wait(1).to({skewX:-0.6625},0).wait(1).to({skewX:-0.65},0).wait(1).to({skewX:-0.6375},0).wait(1).to({skewX:-0.625},0).wait(1).to({skewX:-0.6125},0).wait(1).to({skewX:-0.6},0).wait(1).to({skewX:-0.5875},0).wait(1).to({skewX:-0.575,x:-0.2},0).wait(1).to({skewX:-0.5625},0).wait(1).to({skewX:-0.55},0).wait(1).to({skewX:-0.5375},0).wait(1).to({skewX:-0.525},0).wait(1).to({skewX:-0.5125},0).wait(1).to({skewX:-0.5},0).wait(1).to({skewX:-0.4875},0).wait(1).to({skewX:-0.475,x:-0.15},0).wait(1).to({skewX:-0.4625},0).wait(1).to({skewX:-0.45},0).wait(1).to({skewX:-0.4375},0).wait(1).to({skewX:-0.425},0).wait(1).to({skewX:-0.4125},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3875},0).wait(1).to({skewX:-0.375},0).wait(1).to({skewX:-0.3625,x:-0.1},0).wait(1).to({skewX:-0.35},0).wait(1).to({skewX:-0.3375},0).wait(1).to({skewX:-0.325},0).wait(1).to({skewX:-0.3125},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.2875},0).wait(1).to({skewX:-0.275},0).wait(1).to({skewX:-0.2625,x:-0.05},0).wait(1).to({skewX:-0.25},0).wait(1).to({skewX:-0.2375},0).wait(1).to({skewX:-0.225},0).wait(1).to({skewX:-0.2125},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1875},0).wait(1).to({skewX:-0.175},0).wait(1).to({skewX:-0.1625},0).wait(1).to({skewX:-0.15,x:0},0).wait(1).to({skewX:-0.1375},0).wait(1).to({skewX:-0.125},0).wait(1).to({skewX:-0.1125},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:-0.0875},0).wait(1).to({skewX:-0.075},0).wait(1).to({skewX:-0.0625},0).wait(1).to({skewX:-0.05,x:0.05},0).wait(1).to({rotation:-0.0375,skewX:0},0).wait(1).to({rotation:-0.025},0).wait(1).to({rotation:-0.0125},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-53.3,23.2,54.4);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.1667,x:0.25,y:-26.35},0).wait(1).to({skewX:0.3333,x:0.3},0).wait(1).to({skewX:0.5,x:0.4},0).wait(1).to({skewX:0.6667,x:0.45},0).wait(1).to({skewX:0.8333,x:0.55},0).wait(1).to({skewX:1,x:0.6},0).wait(1).to({skewX:1.1667,x:0.7},0).wait(1).to({skewX:1.3333,x:0.8},0).wait(1).to({skewX:1.5,x:0.85},0).wait(1).to({skewX:1.35,x:0.8},0).wait(1).to({skewX:1.2,x:0.7},0).wait(1).to({skewX:1.05,x:0.65},0).wait(1).to({skewX:0.9,x:0.55},0).wait(1).to({skewX:0.75,x:0.5},0).wait(1).to({skewX:0.6,x:0.45},0).wait(1).to({skewX:0.45,x:0.35},0).wait(1).to({skewX:0.3,x:0.3},0).wait(1).to({skewX:0.15,x:0.2},0).wait(1).to({skewX:0,x:0.15},0).wait(1).to({skewX:-0.15,x:0.1},0).wait(1).to({skewX:-0.3,x:0},0).wait(1).to({skewX:-0.45,x:-0.05},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.75,x:-0.2},0).wait(1).to({skewX:-0.9,x:-0.25},0).wait(1).to({skewX:-1.05,x:-0.35},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.35,x:-0.5},0).wait(1).to({skewX:-1.5,x:-0.55},0).wait(1).to({skewX:-1.35,x:-0.5},0).wait(1).to({skewX:-1.2,x:-0.4},0).wait(1).to({skewX:-1.05,x:-0.35},0).wait(1).to({skewX:-0.9,x:-0.25},0).wait(1).to({skewX:-0.75,x:-0.2},0).wait(1).to({skewX:-0.6,x:-0.15},0).wait(1).to({skewX:-0.45,x:-0.05},0).wait(1).to({skewX:-0.3,x:0},0).wait(1).to({skewX:-0.15,x:0.1},0).wait(1).to({skewX:0,x:0.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-53.2,23.3,54.300000000000004);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-27,skewX:0.375,x:0.25,y:-26.4},0).wait(1).to({skewX:0.75,x:0.4},0).wait(1).to({skewX:1.125,x:0.6},0).wait(1).to({skewX:1.5,x:0.75},0).wait(1).to({skewX:1.2,x:0.6},0).wait(1).to({skewX:0.9,x:0.45},0).wait(1).to({skewX:0.6,x:0.35},0).wait(1).to({skewX:0.3,x:0.2},0).wait(1).to({skewX:0,x:0.05},0).wait(1).to({skewX:-0.3,x:-0.1},0).wait(1).to({skewX:-0.6,x:-0.25},0).wait(1).to({skewX:-0.9,x:-0.35},0).wait(1).to({skewX:-1.2,x:-0.5},0).wait(1).to({skewX:-1.5,x:-0.65},0).wait(1).to({skewX:-1.175,x:-0.5},0).wait(1).to({skewX:-0.85,x:-0.35},0).wait(1).to({skewX:-0.525,x:-0.2},0).wait(1).to({skewX:-0.2,x:-0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-53.3,23.2,54.4);


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

	// Layer_8
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-0.05,131.4,1,1,0,0,0,0,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:354.3},279).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXAjIhxAAIAAhFIBxAAIAAgZIBEA7IhEA8g");
	this.shape.setTransform(77.65,-28,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXAjIhxAAIAAhFIBxAAIAAgZIBEA7IhEA8g");
	this.shape_1.setTransform(230.85,-28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUA6QALgGAGgPQAEgOAAgXQAAgWgEgPQgGgOgLgGIACgJQAUAHAKAQQAJAQAAAbQAAAcgJAQQgKAQgUAHg");
	this.shape_2.setTransform(213.25,-26.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAhQgIgEgDgIQgEgHAAgOQAAgMAEgIQADgIAIgEQAHgDAMAAIAOABQAHABAFACIgDANIgTAAQgHAAgCABQgEACgBAEQgCAEAAAHQAAAIACAEQABAEAEACQACACAHAAQAMAAAJgCIACAOQgGACgHABIgOABQgMAAgHgDg");
	this.shape_3.setTransform(207.425,-25.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAyIAAhEIATAAIAABEgAgEgdQgGAAAAgGIAAgIQAAgGAGAAIAJAAQAGAAAAAGIAAAIQAAAGgGAAg");
	this.shape_4.setTransform(201.875,-27.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AANAjIAAgsQAAgFgCgBQgBgCgDAAIgIABIgLAGIABAtIgWAAIAAhEIARAAIACALQAOgMAPgBQAJAAAFAGQAEAFABAIIAAAzg");
	this.shape_5.setTransform(195.8,-25.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAhQgJgEgDgHQgDgJAAgNQAAgNADgHQADgJAJgDQAHgDAMgBQANABAIADQAHAEAEAIQADAHABANQgBANgDAJQgEAHgHAEQgIADgNAAQgMAAgHgDgAgHgSQgDACgCAEIgBAMIABANQACAFADABQADACAEAAQAGAAADgCQACgBABgFQACgFAAgIQAAgHgCgFQgBgEgCgCQgDgCgGAAQgEAAgDACg");
	this.shape_6.setTransform(187.5,-25.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAhAjIAAgsQAAgFgCgBQgBgCgFAAQgDAAgDABIgJAFIAAAuIgTAAIAAgsQAAgFgCgBQgBgCgEAAQgEAAgDABIgJAFIAAAuIgUAAIAAhEIAQAAIACALQAGgHAHgCQAGgEAHAAQANAAAEAMQAGgGAGgCQAGgEAHAAQAJAAAFAGQAFAFAAAIIAAAzg");
	this.shape_7.setTransform(177.325,-25.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAjIAAhEIAQAAIACALQAGgGAHgDQAHgEAHAAIAEAAIgCATIgGAAIgJACIgLAEIAAAtg");
	this.shape_8.setTransform(168.525,-25.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaAfQgGgFAAgJIAAgHQAAgJAFgDQAGgFAKAAIAYAAIAAgDQgBgFgCgCQgCgCgHAAIgcABIgCgOIASgCIARgBQAOAAAHAFQAGAGAAAOIAAAtIgQAAIgCgLQgFAFgGAEQgFADgJAAQgKAAgGgFgAgKAGQgCACAAADIAAADQAAADACACQACACAEAAIAIgCIAJgFIAAgJIgSAAQgEAAgBABg");
	this.shape_9.setTransform(161.125,-25.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAxIAAgtQAAgEgCgBQgBgCgDAAIgIABIgKAEIAAAvIgWAAIAAhhIAWAAIAAAYIgCAOQAOgLAOAAQAJAAAFAFQAEAFABAJIAAAzg");
	this.shape_10.setTransform(153.15,-27.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAsQgKgQAAgcQAAgbAKgQQAKgQAUgHIACAJQgMAGgFAOQgFAPABAWQgBAXAFAOQAFAPAMAGIgCAJQgUgHgKgQg");
	this.shape_11.setTransform(146.55,-26.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAvQgIgCgDgEQgDgFAAgIQAAgFADgDQACgEAGgDQgEgDAAgGQAAgEACgCQABgDADgCQgFgCgCgFQgDgEAAgHQAAgJADgEQADgFAHgDQAHgCANAAQAKAAAHACIAWAAIgBAJIgJABQACAEAAAGQAAAJgDAEQgDAFgHACQgHADgLAAIgNgBIAAADIABACIAEACIAYADQAKABAFAFQAFAFAAAKQAAAJgEAEQgDAFgIACQgIACgMAAQgPAAgIgCgAgQAVIgBAFQAAADABACIAFACIAKABIAKgBIAFgCQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgEIgDgBIgHgBIgRgCgAgMghQgDACAAAFQAAAFADACQADACAIAAQAGAAADgCQADgCAAgFQAAgFgDgCQgDgBgGAAQgIAAgDABg");
	this.shape_12.setTransform(136.875,-24.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AANAjIAAgsQAAgFgBgBQgCgCgEAAIgHABIgLAGIAAAtIgUAAIAAhEIARAAIABALQAOgMAPgBQAJAAAFAGQAEAFAAAIIAAAzg");
	this.shape_13.setTransform(128.6,-25.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJAyIAAhEIATAAIAABEgAgEgdQgGAAAAgGIAAgIQAAgGAGAAIAJAAQAGAAAAAGIAAAIQAAAGgGAAg");
	this.shape_14.setTransform(122.475,-27.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPAhQgIgEgDgIQgEgHAAgOQAAgMAEgIQADgIAIgEQAHgDAMAAIAOABQAHABAFACIgDANIgTAAQgHAAgCABQgEACgBAEQgCAEAAAHQAAAIACAEQABAEAEACQACACAHAAQAMAAAJgCIACAOQgGACgHABIgOABQgMAAgHgDg");
	this.shape_15.setTransform(117.125,-25.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAjIAAhEIAQAAIACALQAGgGAHgDQAHgEAHAAIAEAAIgCATIgGAAIgJACIgLAEIAAAtg");
	this.shape_16.setTransform(110.875,-25.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAhQgJgEgDgHQgDgJAAgNQAAgNADgHQADgJAJgDQAHgDAMgBQANABAIADQAHAEAEAIQADAHABANQgBANgDAJQgEAHgHAEQgIADgNAAQgMAAgHgDgAgIgSQgCACgBAEIgCAMIACANQABAFACABQADACAFAAQAGAAADgCQACgBABgFQACgFAAgIQAAgHgCgFQgBgEgCgCQgDgCgGAAQgFAAgDACg");
	this.shape_17.setTransform(103.45,-25.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAwIAAhLQAAgKAGgFQAFgGAKAAIAYABIASABIgBAPIghAAQgEAAgCACQgCACAAAEIAAARIAkAAIAAAOIgkAAIAAAog");
	this.shape_18.setTransform(95.775,-27.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZA5QgIgCgEgGQgEgFAAgKQAAgHADgEQADgFAIgEQgEgCgBgDIgBgHQgBgDACgEQACgDADgCQgFgDgDgGQgCgFAAgIQAAgKADgFQAEgGAHgDQAIgDANAAQALAAAHACIAaAAIgBAIIgMABQADAGAAAKQAAAOgHAGQgJAGgSAAQgLAAgGgCQgDAEAAADQAAACADACIAFADIAfAFQALABAEAGQAGAFAAALQgBAKgDAFQgEAGgJACQgIADgOAAQgPAAgJgDgAgZAZQgCADAAAFQAAAGACADQADADAFABIAQABIAOgBQAGgBACgDQACgDAAgGIgBgGQgBgCgDgCIgJgCIgbgEQgFAEgCAEgAgTgsQgFADAAAJQAAAIAFAEQAEADANAAQALAAAFgDQAFgEAAgIQAAgJgFgDQgEgEgMAAQgNAAgEAEg");
	this.shape_19.setTransform(214.5,-264.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWAqIAAg4QAAgJgDgDQgDgDgGAAQgHAAgGADIgSAKIAAA6IgOAAIAAhSIAMAAIABAOQATgPARAAQALAAAGAFQAFAGAAALIAAA9g");
	this.shape_20.setTransform(204.725,-266.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEAAAAgFIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAFgFAAg");
	this.shape_21.setTransform(197.675,-268.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdAyQgHgLAAgWQAAgQADgIQADgKAHgEQAHgFALABQAPAAANAHIAAgQIAAgaIAOAAIAAB2IgLAAIgBgLQgQANgQAAQgPABgHgLgAgNgKQgFADgCAGQgBAFAAANQAAAMABAHQACAGAFADQAEADAHAAQAFAAAFgCQAGgDAJgGIAAgtIgOgEIgLgBQgHABgEACg");
	this.shape_22.setTransform(190.525,-268);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgLA3QgGgGAAgKIAAhiIAPAAIgBBfQAAAFADADQACADAGAAIAIAAIACALIgHACIgJAAQgIAAgFgFg");
	this.shape_23.setTransform(183.975,-268.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEAAAAgFIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAFgFAAg");
	this.shape_24.setTransform(178.775,-268.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAlQgFgGAAgLIAAg+IAOAAIAAA6QAAAIADADQADADAHAAQAGAAAGgCIAQgJIAAg9IAOAAIAABSIgLAAIgBgLQgKAGgIAEQgIADgJAAQgLABgGgGg");
	this.shape_25.setTransform(171.825,-266.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSA7QgKgBgIgDIAAhzIAOAAIAAAfQAAAMgBAHQAOgPARAAQAPAAAHAKQAHAKAAAWQAAAOgDAKQgDAJgIAGQgIAEgOAAIgTgBgAgIgKIgOAKIAAAuQAMACAKAAQAJAAAEgDQAFgDACgGQACgHABgMQgBgMgBgFQgCgHgEgDQgFgCgIgBQgFABgFACg");
	this.shape_26.setTransform(162.375,-268);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgTAnQgJgEgEgKQgEgJAAgQQAAgQAEgIQAEgKAIgFQAJgDAMAAQATgBAIAIQAJAGAAAOQAAALgFAFQgFAGgKAAIglAAQAAAKADAFQADAGAFACQAFABAJAAQAOAAAPgBIABAJIgPADIgRABQgNABgJgFgAgLgcQgFADgCAFQgDAHABAKIAiAAQAIAAABgMQgBgJgFgCQgEgEgLAAQgIAAgFACg");
	this.shape_27.setTransform(149.1,-266.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggApIABgLIAXABIAGAAIANgBQAFgBADgCQACgDAAgEQAAgGgDgCQgDgDgHgBIgXgFQgKgDgEgEQgFgGAAgKQAAgIADgFQADgGAHgCQAGgBALAAIASABIASABIgBALIgIgBIgMAAIgOAAIgKAAQgEABgBADQgCACAAAEQAAAEACADQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAIAHADIAYAFQAKACAEAEQAFAFAAALQAAAKgEAEQgEAGgHABQgHACgNAAQgRAAgPgCg");
	this.shape_28.setTransform(140.225,-266.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEAAAAgFIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAFgFAAg");
	this.shape_29.setTransform(133.825,-268.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAqIAAhSIALAAIACAOQASgPAQAAIAEAAIgCANIgFAAQgGAAgHADIgRAIIAAA7g");
	this.shape_30.setTransform(128.825,-266.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAGIAAgLIAzAAIAAALg");
	this.shape_31.setTransform(121.1,-266.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAyQgHgLAAgWQAAgQADgIQADgKAHgEQAHgFALABQAPAAANAHIAAgQIAAgaIAOAAIAAB2IgLAAIgBgLQgQANgQAAQgPABgHgLgAgNgKQgFADgCAGQgBAFAAANQAAAMABAHQACAGAFADQAEADAHAAQAFAAAFgCQAGgDAJgGIAAgtIgOgEIgLgBQgHABgEACg");
	this.shape_32.setTransform(112.275,-268);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGA7IAAhSIANAAIAABSgAgDgnQgEAAAAgFIAAgKIABgDIADgBIAGAAQAFAAAAAEIAAAKQAAAFgFAAg");
	this.shape_33.setTransform(105.525,-268.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAvA7IgEhoIgDAAIgbBVQgBAFgFAAIgMAAQgGAAgCgFIgahVIgDAAIgEBoIgPAAIAEhuQABgHAGAAIARAAQAFAAABAGIAWBGIADAKIABAGIADAAIABgHIADgJIAWhGQABgGAFAAIARAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIAFBug");
	this.shape_34.setTransform(95.95,-268.025);

	this.instance_1 = new lib.pointer();
	this.instance_1.setTransform(71.9,-267.9,1,1,0,0,0,11.2,11.2);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,0,0,255,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(280));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(280));

	// Layer_7
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,0,0,4).p("A3XAAMAuvAAA");
	this.shape_35.setTransform(163.025,-41.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(280));

	// Layer_11
	this.tallb = new lib.mba0();
	this.tallb.name = "tallb";
	this.tallb.setTransform(155.15,-43.45,3.9447,3.9435,0,0,0,0.1,-0.1);

	this.tallb_1 = new lib.mba1();
	this.tallb_1.name = "tallb_1";
	this.tallb_1.setTransform(154.55,-43.05,3.9447,3.9447);

	this.tallb_2 = new lib.mba5();
	this.tallb_2.name = "tallb_2";
	this.tallb_2.setTransform(154.55,-43.85,3.9447,3.9447,0,0,0,0,-0.2);

	this.instance_2 = new lib.mba4();
	this.instance_2.setTransform(154.55,-43.05,3.9447,3.9447);

	this.tallb_3 = new lib.mba7();
	this.tallb_3.name = "tallb_3";
	this.tallb_3.setTransform(154.35,-40.95,3.9447,3.9447);

	this.tallb_4 = new lib.mba9();
	this.tallb_4.name = "tallb_4";
	this.tallb_4.setTransform(154.55,-43.05,3.9447,3.9447);

	this.tallb_5 = new lib.mba11();
	this.tallb_5.name = "tallb_5";
	this.tallb_5.setTransform(154.55,-43.05,3.9447,3.9447);

	this.tallb_6 = new lib.mba2();
	this.tallb_6.name = "tallb_6";
	this.tallb_6.setTransform(155.35,-45.8,3.9447,3.9435,0,0,0,0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallb}]}).to({state:[{t:this.tallb_1}]},41).to({state:[{t:this.tallb_2}]},43).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.tallb_3}]},37).to({state:[{t:this.tallb_4}]},32).to({state:[{t:this.tallb_5}]},43).to({state:[{t:this.tallb_6}]},40).wait(1));

	// Layer_3 copy
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AhDghICHAAIhEBDg");
	this.shape_36.setTransform(167.6,43.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#0000FF").ss(4,0,0,4).p("A7zK1QEWABCxACQEyACABAAQADAAADAAQADAAADAAQBigGBch0QBDhUBBiNQBOiuAtiuQABgBAAgCQAsiuBQiwQB0j/B8hDQAIgFAIgDQAggPAhgBQAEgBACAAQAEAAADABQCnAJCaFRQBPCwAsCuIAgBtQAqCFAzBtQAvBoAxBJQBUCTCaARQBBAGBCAAQEUgBEUAAQCTAACUAA");
	this.shape_37.setTransform(178.1702,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(280));

	// Layer_3
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AFnPlQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0PlQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnNtQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0NtQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnL1QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0L1QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnJ9QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0J9QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnIFQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0IFQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnGNQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0GNQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnEVQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0EVQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnCdQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0CdQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnAlQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAl0AlQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAFnhSQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0hSQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnjKQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0jKQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnlCQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0lCQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnm6QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0m6QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnoyQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0oyQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnqqQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0qqQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnsiQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0siQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFnuaQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAl0uaQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_38.setTransform(155.05,-140.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(280));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-281.1,360,548.1);


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
		this.shortBBtn.txt.text = "Hide Low-rise building";
		this.shortBBtn.addEventListener("click", shortBBtnfunction.bind(this));
		
		
		//create function to start/stop animation and toggle button text
		function shortBBtnfunction() {
			if (this.shortBBtn.txt.text == "Hide Low-rise building") {
				this.shortBBtn.txt.text = "Show Low-rise building";
				this.graph1.visible = false;
			} else {
		
				this.shortBBtn.txt.text = "Hide Low-rise building";
				this.graph1.visible = true;
			}
		}
		
		this.mediumBBtn.txt.text = "Hide Mid-rise building";
		this.mediumBBtn.addEventListener("click", mediumBBtnfunction.bind(this));
		
		
		//create function to start/stop animation and toggle button text
		function mediumBBtnfunction() {
			if (this.mediumBBtn.txt.text == "Hide Mid-rise building") {
				this.mediumBBtn.txt.text = "Show Mid-rise building";
				this.graph2.visible = false;
			} else {
		
				this.mediumBBtn.txt.text = "Hide Mid-rise building";
				this.graph2.visible = true;
			}
		}
		
		this.tallBBtn.txt.text = "Hide High-rise building";
		this.tallBBtn.addEventListener("click", tallBBtnfunction.bind(this));
		
		
		//create function to start/stop animation and toggle button text
		function tallBBtnfunction() {
			if (this.tallBBtn.txt.text == "Hide High-rise building") {
				this.tallBBtn.txt.text = "Show High-rise building";
				this.graph3.visible = false;
			} else {
		
				this.tallBBtn.txt.text = "Hide High-rise building";
				this.graph3.visible = true;
			}
		}
		
		this.harmonicBtn.txt.text = "Show Harmonic Wave";
		this.harmonicBtn.addEventListener("click", harmonicBtnfunction.bind(this));
		this.harmonic_wave.visible = false;
		function harmonicBtnfunction() {
			if (this.harmonicBtn.txt.text == "Hide Harmonic Wave") {
				this.harmonicBtn.txt.text = "Show Harmonic Wave";
				this.harmonic_wave.visible = false;
			} else {
		
				this.harmonicBtn.txt.text = "Hide Harmonic Wave";
				this.harmonic_wave.visible = true;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E74").s().p("AgOAYQgEgFABgLQAAgIACgDQABgFAEgCQADgCAFAAQAHAAAGAEIAAgIIAAgNIAIAAIAAA6IgGAAIgBgGQgHAHgIAAQgIAAgDgGgAgGgFQgCACgBADIgBAIIABAKQABADACABQACACAEAAQACAAACgCIAHgEIAAgWIgHgBIgEgBIgGABg");
	this.shape.setTransform(341.4,358.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgKAUQgEgDgCgEQgCgFAAgIQAAgHACgFQACgEAEgCQAEgCAGgBQAHABAEACQAEACACAEQACAFAAAHQAAAIgCAFQgCAEgEADQgEACgHAAQgGAAgEgCgAgGgNQgDACgBADIgBAIIABAKQABADADABQADACADgBQAFABACgCQADgBABgDIABgKIgBgIQgBgDgDgCIgHgBIgGABg");
	this.shape_1.setTransform(336.725,359.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E74").s().p("AgCAdIAAgoIAGAAIAAAogAgBgTQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIABgBIABgBIADAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAFQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_2.setTransform(333.325,358.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E74").s().p("AgMAVIAAgoIAGAAIABAGQAIgHAIAAIACAAIgBAHIgCAAIgHABIgIAEIAAAdg");
	this.shape_3.setTransform(330.875,359.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E74").s().p("AgJAUQgEgDgCgEQgCgFAAgIQAAgHACgFQACgFAEgCQAEgCAGAAQAJABAEADQAEAEAAAGQAAAFgCADQgDADgFAAIgSAAQABAEABADQACACACABIAGABIAOgBIABAFIgHACIgJABQgGAAgEgCgAgFgNQgCABgBADQgCADAAAFIAQAAQAFAAAAgGQAAgEgCgCQgDgBgFAAIgGABg");
	this.shape_4.setTransform(326.775,359.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E74").s().p("AgSAdIAAg5IAIAAIALAAQAHAAAEABQADACACAEQACAEAAAHQAAAHgCADQgBAEgEABQgEACgGAAIgNgBIAAAXgAgLABIAMAAIAGgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQABgCAAgFQAAgFgBgCQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgGgBIgMAAg");
	this.shape_5.setTransform(322.2,358.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E74").s().p("AgLAkQAJgEADgJQADgJAAgOQAAgOgDgIQgDgJgJgFIACgDQAKAEAFAKQAGAKgBAPQABAQgGAKQgFAJgKAFg");
	this.shape_6.setTransform(316.1,358.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E74").s().p("AgIAUQgEgDgCgEQgCgFAAgIQAAgHACgFQACgEAEgCQAFgCAGgBIAHABIAGABIgBAFIgLAAIgHABQgDACgBADQgBADAAAFQAAAGABAEQABACADACQADACAEgBIAMgBIABAGQgGACgIAAQgGAAgFgCg");
	this.shape_7.setTransform(312.775,359.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E74").s().p("AgCAdIAAgoIAGAAIAAAogAgBgTQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIABgBIABgBIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAAFQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_8.setTransform(309.625,358.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E74").s().p("AALAVIAAgcQAAgDgBgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgGABIgJAFIAAAdIgHAAIAAgoIAGAAIAAAGQAKgHAIAAQAFAAADADQADADAAAGIAAAdg");
	this.shape_9.setTransform(306.2,359.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E74").s().p("AgKAUQgEgDgCgEQgCgFAAgIQAAgHACgFQACgEAEgCQAEgCAGgBQAHABAEACQAEACACAEQACAFAAAHQAAAIgCAFQgCAEgEADQgEACgHAAQgGAAgEgCgAgGgNQgDACgBADIgBAIIABAKQABADADABQADACADgBQAFABACgCQADgBABgDIABgKIgBgIQgBgDgDgCIgHgBIgGABg");
	this.shape_10.setTransform(301.375,359.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E74").s().p("AAXAVIAAgcQAAgDgBgCQgCgCgDAAIgGABIgHAFIAAAdIgGAAIAAgcQAAgDgCgCQgBgCgEAAIgFABIgIAFIAAAdIgHAAIAAgoIAGAAIAAAGIAIgFQAFgCAEAAQAHAAACAHQAJgHAHAAQAGAAADADQACADAAAGIAAAdg");
	this.shape_11.setTransform(295.325,359.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E74").s().p("AgMAVIAAgoIAGAAIABAGQAIgHAIAAIACAAIgBAHIgCAAIgHABIgIAEIAAAdg");
	this.shape_12.setTransform(290.225,359.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E74").s().p("AgOATQgDgDAAgGIAAgEQAAgFADgCQADgCAFAAIAQAAIAAgEQAAgEgBgBQgCgCgFAAIgQABIgBgFQALgCAIAAQAHAAADADQAEADAAAHIAAAcIgGAAIgBgHIgHAFQgEACgFAAQgFAAgEgCgAgEABQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAACQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQABABAEAAIAGgBIAHgFIAAgIg");
	this.shape_13.setTransform(285.975,359.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E74").s().p("AALAdIAAgcIgBgFQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgGABIgJAEIAAAdIgHAAIAAg5IAHAAIAAAQIgBAIIAKgGQAEgCAEAAQAFAAADADQADADAAAGIAAAdg");
	this.shape_14.setTransform(281.35,358.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E74").s().p("AgFAaQgGgKABgQQgBgPAGgKQAFgKAKgEIABADQgIAFgDAJQgEAIAAAOQAAAOAEAJQADAJAIAEIgBAEQgKgFgFgJg");
	this.shape_15.setTransform(277.5,358.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E74").s().p("AgMAcQgEgBgCgDQgCgDAAgEQAAgDACgDIAFgEIgCgCIgBgEIABgDIACgCQgDgCgBgDQgBgDAAgDQAAgFACgDQABgCAEgCQAEgBAGgBIAJABIANAAIgBAFIgGAAQACADAAAFQAAAGgEAEQgEACgJAAIgIAAIgBADIABACIADABIAOACQAGABACADQACACAAAGQAAAEgCADQgBADgFABQgEACgGAAQgIAAgEgCgAgMAMIgBAEIABAFQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAIABIAHgBIADgCIABgFIAAgDIgCgBIgFgBIgNgDIgDAEgAgJgVQgDACAAAEQAAAEADABQACACAGAAQAFAAADgCQACgBAAgEQAAgEgCgCQgDgCgFAAQgGAAgCACg");
	this.shape_16.setTransform(271.825,359.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003E74").s().p("AALAVIAAgcQAAgDgCgCQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgGABIgJAFIAAAdIgHAAIAAgoIAGAAIABAGQAKgHAHAAQAGAAACADQADADAAAGIAAAdg");
	this.shape_17.setTransform(267,359.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003E74").s().p("AgCAdIAAgoIAGAAIAAAogAgBgTQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgFIABgBIABgBIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAAFQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_18.setTransform(263.525,358.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003E74").s().p("AgIAUQgEgDgCgEQgCgFAAgIQAAgHACgFQACgEAEgCQAFgCAGgBIAHABIAGABIgBAFIgLAAIgHABQgDACgBADQgBADAAAFQAAAGABAEQABACADACQADACAEgBIAMgBIABAGQgGACgIAAQgGAAgFgCg");
	this.shape_19.setTransform(260.525,359.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003E74").s().p("AgMAVIAAgoIAGAAIABAGQAIgHAIAAIACAAIgBAHIgCAAIgHABIgIAEIAAAdg");
	this.shape_20.setTransform(256.975,359.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003E74").s().p("AgKAUQgEgDgCgEQgCgFAAgIQAAgHACgFQACgEAEgCQAEgCAGgBQAHABAEACQAEACACAEQACAFAAAHQAAAIgCAFQgCAEgEADQgEACgHAAQgGAAgEgCgAgGgNQgDACgBADIgBAIIABAKQABADADABQADACADgBQAFABACgCQADgBABgDIABgKIgBgIQgBgDgDgCIgHgBIgGABg");
	this.shape_21.setTransform(252.675,359.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003E74").s().p("AgQAdIAAgvQAAgEACgDQADgDAFAAIAYABIAAAGIgWAAIgDABQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAAOIAXAAIAAAEIgXAAIAAAbg");
	this.shape_22.setTransform(248.25,358.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003E74").s().p("AgLAQQgGgCgBgEQgCgEAAgGQAAgJADgEQAEgEAGAAQAGAAACACQACADAAAFIAAASQAFgBADgBQACgCACgCIABgGIgBgOIAEgBIACAHIAAAJQAAAGgCAEQgCAEgFACQgEACgIAAQgHAAgEgCgAgNgIQgBADAAAFIABAGQABACADABQADACAFAAIAAgQQAAgFgGAAQgEAAgCACg");
	this.shape_23.setTransform(193.45,261.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003E74").s().p("AgQAQQgDgCAAgDIgBgJIAAgIIABgJIAFABIAAAEIAAAFIAAAHIAAAFIABACIAEABIADgBIABgBIACgEIADgLQAAgFACgCQADgCAEAAQAFAAADACQADABAAAEIABAJIgBAQIgFAAIABgMIAAgCIgBgHIgCgDIgEgBQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAFIgDALQgBAFgBACQgDACgFAAQgEAAgDgBg");
	this.shape_24.setTransform(193.45,265.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003E74").s().p("AgTASIAAgGIAHgBQgIgKAAgHQAAgGADgCQADgDAFAAIAeAAIAAAHIgbAAQgEAAgCACQAAAAgBAAQAAABAAAAQAAABAAABQAAAAAAABIABAGIAEAJIAdAAIAAAHg");
	this.shape_25.setTransform(193.4,270.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003E74").s().p("AgLARQgFgCgCgEQgCgEAAgHQAAgGACgEQACgEAFgCQAFgCAGAAQAIAAAFACQAEACACAEQACAEAAAGQAAAHgCAEQgCAEgEACQgFACgIAAQgGAAgFgCgAgIgKQgEABgBADIgBAGIABAHQABADAEABIAIABIAJgBQAEgBABgDQACgDAAgEQAAgEgCgCQgBgDgEgBIgJgBIgIABg");
	this.shape_26.setTransform(193.45,275.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003E74").s().p("AgbATIAAgGIAGgBQgDgDgCgFQgCgEAAgEQgBgHAGgDQAFgEALAAQAHAAAFACQAEACACADQACADAAAGQAAAHgDAHIAIAAIALAAIAAAHgAgQgJQgDAAgCACQgBACAAAEIABAFIAFAIIAVAAIABgEIABgFIABgDQAAgEgCgCQgCgCgDgBIgIgBIgJABg");
	this.shape_27.setTransform(194.25,279.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003E74").s().p("AgQAQQgDgCAAgDIgBgJIAAgIIABgJIAFABIAAAEIAAAFIAAAHIAAAFIABACIAEABIADgBIABgBIACgEIADgLQAAgFACgCQADgCAEAAQAFAAADACQADABAAAEIABAJIgBAQIgFAAIABgMIAAgCIgBgHIgCgDIgEgBQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAFIgDALQgBAFgBACQgDACgFAAQgEAAgDgBg");
	this.shape_28.setTransform(193.45,284.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003E74").s().p("AgLAQQgGgCgBgEQgCgEAAgGQAAgJADgEQAEgEAGAAQAGAAACACQACADAAAFIAAASQAFgBADgBQACgCACgCIABgGIgBgOIAEgBIACAHIAAAJQAAAGgCAEQgCAEgFACQgEACgIAAQgHAAgEgCgAgNgIQgBADAAAFIABAGQABACADABQADACAFAAIAAgQQAAgFgGAAQgEAAgCACg");
	this.shape_29.setTransform(193.45,288.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003E74").s().p("AgcAUIAAgIIAAgLQAAgGABgEQACgEADgCQAEgCAGAAQAHAAAEACQADADAAAFIABAAIACgEIAGgDIASgFIAAAIIgSAFQgDABgBACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAANIAYAAIAAAHgAgSgJQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABIgBAGIAAAMIAWAAIAAgMIgBgGQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgGgBIgHABg");
	this.shape_30.setTransform(192.575,293.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#003E74").ss(2,1,1).p("AOqKrIABABIgkAbAOUKrIABAAQABAAACAAIADAAAOdKrIACAAAOGKQIAjAaAuqqhIAcglIAbAlAuCKrIgMAAIAA1xAORKrI8BAA");
	this.shape_31.setTransform(293.325,279.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,0,0,4).p("AOKAAIAGAAQACAAACAAIABABAODABQAAgBABAAQABAAABAAQABAAABAAAN/ABIgDAAAuXABIAGAAQACAAAEAAQADAAADAA");
	this.shape_32.setTransform(295.4286,347.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.harmonic_wave = new lib.wf();
	this.harmonic_wave.name = "harmonic_wave";
	this.harmonic_wave.setTransform(92.7,327.9,1,1,0,0,0,82,17.8);

	this.timeline.addTween(cjs.Tween.get(this.harmonic_wave).wait(1));

	// Layer_2
	this.harmonicBtn = new lib.StartBtn();
	this.harmonicBtn.name = "harmonicBtn";
	this.harmonicBtn.setTransform(470.85,344.95);
	new cjs.ButtonHelper(this.harmonicBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.shortBBtn = new lib.StartBtn();
	this.shortBBtn.name = "shortBBtn";
	this.shortBBtn.setTransform(470.85,239.85);
	new cjs.ButtonHelper(this.shortBBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.mediumBBtn = new lib.StartBtn();
	this.mediumBBtn.name = "mediumBBtn";
	this.mediumBBtn.setTransform(470.85,274.9);
	new cjs.ButtonHelper(this.mediumBBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.tallBBtn = new lib.StartBtn();
	this.tallBBtn.name = "tallBBtn";
	this.tallBBtn.setTransform(470.85,309.95);
	new cjs.ButtonHelper(this.tallBBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallBBtn},{t:this.mediumBBtn},{t:this.shortBBtn},{t:this.harmonicBtn}]}).wait(1));

	// graph1
	this.graph1 = new lib.sb_anim();
	this.graph1.name = "graph1";
	this.graph1.setTransform(292.4,199.45,0.524,0.524,0,0,0,171.8,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.graph1).wait(1));
	this.graph1.addEventListener("tick", AdobeAn.handleFilterCache);

	// graph2
	this.graph2 = new lib.mb_anim();
	this.graph2.name = "graph2";
	this.graph2.setTransform(293.8,277.95,0.5237,0.5237,0,0,0,174.8,132.7);

	this.timeline.addTween(cjs.Tween.get(this.graph2).wait(1));
	this.graph2.addEventListener("tick", AdobeAn.handleFilterCache);

	// graph3
	this.graph3 = new lib.Tb_anim();
	this.graph3.name = "graph3";
	this.graph3.setTransform(292.25,199.25,0.524,0.524,0,0,0,171.8,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.graph3).wait(1));
	this.graph3.addEventListener("tick", AdobeAn.handleFilterCache);

	// Bar
	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.setTransform(20.75,418.65);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.SliderButton(), 3);

	this.bar = new lib.SliderBar();
	this.bar.name = "bar";
	this.bar.setTransform(20.65,374.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.button}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(262.5,204.5,277.70000000000005,190.60000000000002);
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