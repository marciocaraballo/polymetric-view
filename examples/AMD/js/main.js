/**
Main application example

Proyect will draw a Polymetric View.

Data draw and update examples provided.

@author "Marcio Caraballo <marcio.caraballososa@gmail.com>"
*/
require.config({
	baseUrl : '../../',
	paths : {

		/** Libraries */
		'd3'						:			'vendor/d3/d3',
		'd3.chart'			:			'vendor/d3.chart/d3.chart',
		'underscore'		:			'vendor/underscore/underscore',

		/** Components */
		'base'					:			'src/components/base',
		'line'					:			'src/components/line',
		'rectangle'			:			'src/components/rectangle',

		/** Composition */
		'polymetric'		:			'src/composition/polymetric'
	},
	shim : {
		'd3' : {
			exports : 'd3'
		},
		'd3.chart' : {
			deps : ['d3'],
			exports : 'd3'
		},
		'underscore' : {
			exports : '_'
		}
	}
});

requirejs(['d3.chart','underscore', 'polymetric'],
function (d3, _){

	/** 
	Chart will be added to the div root
	*/
	var root = d3.select('#root'),
			height = (parseInt(root.style('height'), 10) || 200),
      width  = (parseInt(root.style('width'), 10) || 200);

	/** Svg element for chart drawing */
	var svg = root.append('svg')
								.attr('width', width)
								.attr('height', height)
								.append('g');

	/** Data conventions for data drawing */
	var data = {
		nodes : [
			{id : 0, x : 350, y :  50, height :  10, width :  20, color : 'gray'},
			{id : 1, x : 100, y : 150, height :  20, width :  50, color : 'lightgray'},
			{id : 2, x : 200, y : 150, height :  70, width :  20, color : 'lightgray'},
			{id : 3, x : 300, y : 150, height :  30, width :  80, color : 'gray'},
			{id : 4, x : 500, y : 150, height : 100, width :  50, color : 'gray'},
			{id : 5, x :  50, y : 400, height :  10, width : 100, color : 'black'},
			{id : 6, x : 200, y : 400, height : 200, width :  20, color : 'black'},
			{id : 7, x : 350, y : 400, height :  50, width :  80, color : 'lightgray'},
			{id : 8, x : 500, y : 400, height : 100, width : 100, color : 'lightgray'},
			{id : 9, x : 650, y : 400, height :  77, width :  33, color : 'black'}
		],
		links : [
			{source : 0, target :  1},
			{source : 0, target :  2},
			{source : 0, target :  3},
			{source : 0, target :  4},
			{source : 1, target :  5},
			{source : 2, target :  6},
			{source : 3, target :  7},
			{source : 3, target :  8},
			{source : 3, target :  9}
		]
	};

	/** View creation */
	var chart = svg.chart('PolymetricView')
								.height(height)
								.width(width);

	/** First drawing with original data */
			chart.draw(data);

	/** 
	Update example, using the already defined chart 
	After 6 seconds, update data will be triggered
	*/
	setTimeout(function(){
		/** Less nodes and links in data update */
		var data2 = {
			nodes : [
				{id : 0, x : 350, y :  50, height :  10, width :  20, color : 'gray'},
				{id : 1, x : 100, y : 150, height :  20, width :  50, color : 'lightgray'},
				{id : 2, x : 500, y : 150, height :  70, width :  20, color : 'lightgray'},
				{id : 3, x : 400, y : 300, height :  30, width :  80, color : 'gray'},
				{id : 4, x : 550, y : 300, height : 100, width :  50, color : 'gray'}
			],
			links : [
				{source : 0, target :  1},
				{source : 0, target :  2},
				{source : 2, target :  3},
				{source : 2, target :  4}
			]
		};

		chart.draw(data2);
	}, 6000);
});