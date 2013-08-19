# Polymetric View Project

### Objectives
- Analyze and test different visualization libraries, and choose one for drawing the view. 
- Generate a Polymetric view. 

### What is a Polymetric View?

A polymetric view combines visualization techniques with metrics definitions, in order to generate, based on a target system, an increased overall comprehensibility of the target.

This concept is based on the idea of reserve engineering : having access to the target system, create a way of determining it's structure. Maybe, thinking of old systems will support this approach : systems where the original developers are no longer reachable, the documentation is poor, or just old. It can be necessary to add new functionality, but this will be difficult without having a structural idea of the system. 

### How can be metrics and visualizations combined?

Imagine we need to draw a binary tree. Think of the tree nodes as just rectangles. So, we need to define, for each node, height, width, links between them, position in the drawable part of the screen, and color. A regular tree can set common values for the nodes.

But, what happens if each node represents something, that has specific values for the attributes described before? What if those attributes were metrics, defined maybe, for a class of the target system?

In other words, let's assume each tree node represents a class of a project written in Java. We define the node's width as the number of methods defined in the class, the height as the number of attributes, the position of each node is related to an inheritance hierarchy, and well, the color, if we want to use for another metric. We can visualize all this information in just one view. 

Of course, every view needs to have a specific goal, for instance, checking if a class has well established responsibilities, or maybe is growing too much and needs splitting in many classes. 

## Project start point

Having an idea of what we need to draw, we will evaluate different libraries for data visualization. 

[Libraries](http://datavisualization.ch/tools/13-javascript-libraries-for-visualizations/)

Project will take some metrics as data, but will be more focused on the drawing part, and NOT in how to generate that data. Since the idea is to take different metrics, data will be randomly generated. We are not evaluating a specific scenario, just showing ways to drawing the Polymetric View.

### Instalation

+ `npm install bower -g`
+ `bower install`

## What's done so far

# 19/08/2013 - v0.1.1

+ Update example added

# 19/08/2013 - v0.1.0

+ Added first visualization of the polymetric view, using d3 and d3.chart

# 08/08/2013 - v0.0.1

+ Added bower for dependency install
+ Added requirejs, underscore, d3, d3.chart as dependencies
+ Generated folder and file structure

# 04/08/2013

+ Readme added explaining the project in general lines.
