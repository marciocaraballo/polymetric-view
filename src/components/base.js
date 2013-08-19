/**
Defines common functionality for the chart parts.

@class Base

@author "Marcio Caraballo marcio.caraballososa@gmail.com"
*/

(function(root, factory) {
  /** Setting up AMD support*/
  if (typeof define === 'function' && define.amd) {
    /** AMD */
    define([
      'd3.chart'
      ],
      function (d3){
        /** Export global even in AMD case in case this script
        is loaded with others */
        return factory(d3);
    });
  }
  else {
    /** Browser globals */
    factory(d3);
  }
}(this, function (d3) {
	d3.chart('Base', {
		/**
		Sets the chart's width.

		@method
		@param {Number} newWidth chart's width
		@chainable
		*/
		width : function(newWidth){
			this.base.attr('width', newWidth);
			return this;
		},
		/**
		Sets the chart's height.

		@method
		@param {Number} newHeight chart's height
		@chainable
		*/
		height : function(newHeight){
			this.base.attr('height', newHeight);
			return this;
		},
		/**
		Scaling for element along x-y axis

		@method
		@param {Object} xScale d3.scale
		@param {Object} yScale d3.scale
		@chainable
		*/
		setScales : function(xScale, yScale){
			this.xScale = xScale;
			this.yScale = yScale;
			return this;
		}
	});
}));