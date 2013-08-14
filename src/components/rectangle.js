/**
Rectangle component. 

Represents five metrics : position (x,y), width, height and color.

@class Rectangle
@constructor
@requires d3,
          d3.chart

@author "Marcio Caraballo <marcio.caraballososa@gmail.com>"
*/
(function(root, factory) {
  /** Setting up AMD support*/
  if (typeof define === 'function' && define.amd) {
    /** AMD */
    define([
      'd3',
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
    return factory(d3);
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
            return this.attr('x', function(d){return d.x;})
                       .attr('y', function(d){return d.y;})
                       .attr('height', function(d){return d.height;})
                       .attr('width', function(d){return d.width;})
                       .attr('class', function(d){return d.colorClass;});
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
      this.layer('rects', this.base.append('g'));
    }
  });
}));