var a=0, b=0, c=0;
var script_tag = document.getElementById('searcher')
var v1 = script_tag.getAttribute("v1");
var c1 = script_tag.getAttribute("c1");
var m1 = script_tag.getAttribute("m1");

var v2 = script_tag.getAttribute("v2");
var c2 = script_tag.getAttribute("c2");
var m2 = script_tag.getAttribute("m2");

var v3 = script_tag.getAttribute("v3");
var c3 = script_tag.getAttribute("v3");
var m3 = script_tag.getAttribute("v3");

var v4 = script_tag.getAttribute("v4");
var c4 = script_tag.getAttribute("c4");
var m4 = script_tag.getAttribute("m4");

var v5 = script_tag.getAttribute("v5");
var c5 = script_tag.getAttribute("c5");
var m5 = script_tag.getAttribute("m5");

var v6 = script_tag.getAttribute("v6");
var c6 = script_tag.getAttribute("c6");
var m6 = script_tag.getAttribute("m6");

var v7 = script_tag.getAttribute("v7");
var c7 = script_tag.getAttribute("c7");
var m7 = script_tag.getAttribute("m7");

function tracecall(x, y, m, c)
{
	var trace = {
	x: [],
	y: [],
	xaxis: x,
	yaxis: y,
	type: m,
	line: {color: c}
};

return trace;
}



var layout = {
grid: {rows: 1, columns: 1, pattern: 'independent'},
}

var data = [tracecall('x1' ,'y1', m1, c1), tracecall('x2' , 'y2', m2, c2), tracecall('x3' , 'y3', m3, c3), tracecall('x4' , 'y4', m4, c4), tracecall('x5' , 'y5', m5, c5), tracecall('x6' , 'y6', m6, c6), tracecall('x7' , 'y7', m7, c7)];

// TO MAKE EMPTY GRAPHS
Plotly.plot('graph2', [data[0]],layout)
Plotly.plot('graph',[data[1]],layout)
Plotly.plot('graph3',[data[2]],layout)
Plotly.plot('graph4',[data[3]],layout)
Plotly.plot('graph5',[data[4]],layout)
Plotly.plot('graph6',[data[5]],layout)
Plotly.plot('graph7',[data[6]],layout)



//RUNS NON STOP---->
var interval = setInterval(function() {

	var time = new Date();
	// PLOT DATA VALUES --->
	Plotly.extendTraces('graph',  {x:[[time]],y:[[Math.random()]]},[0]);
	Plotly.extendTraces('graph2', {x:[[time]],y:[[Math.random()]]},[0]);
	Plotly.extendTraces('graph3', {x:[[time]],y:[[Math.random()]]},[0]);
	Plotly.extendTraces('graph4', {x:[[time]],y:[[Math.random()]]},[0]);
	// Plotly.extendTraces('graph5', {x:[[time]],y:[[v5]]},[0]);
	// Plotly.extendTraces('graph6', {x:[[time]],y:[[v6]]},[0]);
	// Plotly.extendTraces('graph7', {x:[[time]],y:[[v7]]},[0]);	
	

	//ALLOW GRAPH SCROLL---->
		
	Plotly.relayout('graph',{'xaxis.range':[time-5000,time]});
	Plotly.relayout('graph2',{'xaxis.range':[time-5000,time]});
	Plotly.relayout('graph3', {'xaxis.range':[time-5000,time]});

		// Plotly.relayout('graph3', update);
	
}, 250);