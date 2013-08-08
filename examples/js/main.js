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
		'underscore'		:			'vendor/underscore/underscore'

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

requirejs(['d3','underscore','d3.chart'],
function (d3, _){
	console.log('Lets get this started!');

	var root = d3.select('#root');
});