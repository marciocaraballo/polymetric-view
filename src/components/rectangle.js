/**
Rectangle component. 

Represents five metrics : position (x,y), width, height and color.

@class Rectangle
@constructor
@requires d3.chart,
          base

@author "Marcio Caraballo <marcio.caraballososa@gmail.com>"
*/
(function(root, factory) {
  /** Setting up AMD support*/
  if (typeof define === 'function' && define.amd) {
    /** AMD */
    define([
      'd3.chart',
      'base'
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

  d3.chart('Base').extend('Rectangle', {
    initialize : function(args){

      /**
      Options for the rectangle layer
      */
      var options = {
        /**
        Join between the data to visualize and the 
        svg:rect elements.
        */
        dataBind : function(data){
          return this.selectAll('rect').data(data);
        },
        /**
        Appending new elements. They receive the new data
        elements defined.
        */
        insert : function(){
          return this.append('rect');
        },
        events : {
          /**
          For data entering and update
          */
          'merge' : function(){

            /** Reference to the outter chart */
            var chart = this.chart();

            return this.attr('id', function(d){return d.id;})
                       .attr('x', function(d){return chart.xScale(d.x);})
                       .attr('y', function(d){return chart.yScale(d.y);})
                       .attr('height', function(d){return chart.yScale(d.height);})
                       .attr('width', function(d){return chart.xScale(d.width);})
                       .attr('class', function(d){return d.color;});
          },
          /** 
          Removes elements that will no longer be used
          */
          'exit' : function(){
            return this.remove();
          }
        }
      };

      /** Layer creation  */
      this.layer('rects', this.base.append('g'), options);
    },
    /**
    Defined in order to get only the nodes for the 
    rectangle drawing.

    @method
    @param {Object} data Nodes and links data
    @return {Object} data nodes
    */
    transform : function(data){
      return data.nodes;
    }
  });
}));