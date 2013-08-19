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
      'underscore',
      'line',
      'rectangle'
      ],
      function (d3, _) {
        /** Export global even in AMD case in case this script
        is loaded with others */
        return factory(d3, _);
    });
  }
  else {
    /** Browser globals */
    factory(d3, _);
  }
}(this, function (d3) {

  d3.chart('Base').extend('PolymetricView', {
    /** 
    View initializer 

    @method
    @param {Object} args example = {
                            height : 200,
                            width : 400
                          }
    */
    initialize : function(args){

      /**
      Defines two mixins, to compose the view
      */
      this.lines = this.mixin('Line', this.base.append('g'));
      this.rectangles = this.mixin('Rectangle', this.base.append('g'));
    },
    /** 
    Data transformation

    Scales are created in order to map element to the
    svg.

    @method
    @param {Object} data Nodes / Links data
    @return {Object} data
    */
    transform : function(data){

      var nodes = data.nodes,
          height = this.base.attr('height'),
          width = this.base.attr('width'),
          xScale = d3.scale.linear().range([0, width]),
          yScale = d3.scale.linear().range([0, height]),
          xMax = -Infinity,
          yMax = -Infinity,
          maxWidth = -Infinity,
          maxHeight = -Infinity;

      _.each(nodes, function (element){

        xMax = Math.max(xMax, element.x);
        yMax = Math.max(yMax, element.y);

        maxHeight = Math.max(maxHeight, element.height);
        maxWidth  = Math.max(maxWidth, element.width);
      });

      xScale.domain([0, xMax + maxWidth]);
      yScale.domain([0, yMax + maxHeight]);

      this.lines.setScales(xScale, yScale);
      this.rectangles.setScales(xScale, yScale);

      return data;
    }
  });
}));