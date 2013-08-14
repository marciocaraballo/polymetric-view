/**
Renders up to five metrics in just one chart.
Metrics are interpreted as the rectangles height,
width, position (x,y) and color.

@class PolymetricView
@
*/
(function(root, factory) {
  /** Setting up AMD support*/
  if (typeof define === 'function' && define.amd) {
    /** AMD */
    define([
      'd3.chart',
      'line',
      'rectangle'
      ],
      function (d3) {
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

  d3.chart('Base').extend('PolymetricView', {
    initialize : function(args){
      /**
      Defines two mixins, to compose the view
      */
      var lines = this.mixin('Line', this.base.append('g')),
          rectangles = this.mixin('Rectangle', this.base.append('g'));
    }
  });
}));