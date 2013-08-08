(function(root, factory) {
  /** Setting up AMD support*/
  if (typeof define === 'function' && define.amd) {
    /** AMD */
    define([
      'd3',
      'link',
      'rectangle',
      'd3.chart'
      ],
      function (d3, Line, Rectangle) {
        /** Export global even in AMD case in case this script
        is loaded with others */
        return factory(d3, Line, Rectangle);
    });
  }
  else {
    /** Browser globals */
    return factory(d3, Line, Rectangle);
  }
}(this, function (d3, Line, Rectangle) {
}));