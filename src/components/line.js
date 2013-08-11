/**
Line component. Draws a line between two points.

@class Line
@constructor
@requires d3,
          d3.chart,
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
}(this, function (d3){
  d3.chart('Base').extend('Line',{
    initialize : function(){

      /** Options for lines layer */
      var options = {
        dataBind : function(data){

        },
        insert : function(){
          return this.append('path');
        },
        events : {
          'enter' : function(){

          },
          'update' : function(){

          },
          'exit'  : function(){
            return this.remove();
          }
        }
      };

      /** Layer creation */
      this.layer('lines', this.base.append('g'));
    }
  });
}));