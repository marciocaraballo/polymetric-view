/**
Line component. Draws a line between two points.

@class Line
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
      'underscore',
      'base'
      ],
      function (d3, _){
        /** Export global even in AMD case in case this script
        is loaded with others */
        return factory(d3, _);
    });
  }
  else {
    /** Browser globals */
    factory(d3, _);
  }
}(this, function (d3, _){
  /** Creates a Line Chart extending from the Base chart */
  d3.chart('Base').extend('Line',{
    /** 
    Line chart initializator
    
    @method
    @param {Object} args Arguments
    */
    initialize : function(args){

      /** Options for lines layer */
      var options = {
        dataBind : function(d){

          console.log(d);

          return this.selectAll('line').data(d);
        },
        /** 
        Appends a line, in case of new line needs
        to be added

        @method
        @chainable
        */
        insert : function(){
          return this.append('line');
        },
        events : {
          'merge' : function(){

            var chart = this.chart();

            return this.attr("x1", function(d) { return chart.xScale(d.source.x + (d.source.width/2));})
                       .attr("y1", function(d) { return chart.yScale(d.source.y + d.source.height); })
                       .attr("x2", function(d) { return chart.xScale(d.target.x + (d.target.width/2)); })
                       .attr("y2", function(d) { return chart.yScale(d.target.y); });

          },
          'exit'  : function(){
            return this.remove();
          }
        }
      };

      /** Layer creation */
      this.layer('lines', this.base.append('g'), options);
    },
    /** 
    Returns the links information from data 
    
    To make things easier, the data will process the links,
    based on the node information, to get something like

    { source : { id : 0, x : 200 ...}, target : { id : 1, x : 300 ...} }

    @method
    @param {Object} data Data nodes and links
    @returns {Object} transformed data
    */
    transform : function(data){

      var nodes = data.nodes,
          links = data.links,
          processedData = [];

      _.each(links, function(link){
        var  source = link.source,
             target = link.target;

        var sourceNode = _.find(nodes, function(node){
                            return (source === node.id);
                          });

        var targetNode = _.find(nodes, function(node){
                            return (target === node.id);
                          });

        processedData.push({source : sourceNode, target : targetNode});
      });

      return processedData;
    }
  });
}));