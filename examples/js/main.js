/**
Main application example

Proyect will draw a Polymetric View

@author "Marcio Caraballo <marcio.caraballososa@gmail.com>"
*/
require.config({
	baseUrl : '../',
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

requirejs(['d3.chart','underscore'],
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
								.attr('height', height);

});