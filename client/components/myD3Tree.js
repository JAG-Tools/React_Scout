
const myD3  = {};

myD3.myTree = function(myTreeData) {
 var margin = {
   top: 80,
   right: 100,
   bottom: 80,
   left: 100
  },
  width = 1200 - margin.right - margin.left,
  height = 1200 - margin.top - margin.bottom;
 var root;
 var i = 0;
 var duration = 750;
 var tree = d3.layout.tree()
  .size([height, width]);

 var diagonal = d3.svg.diagonal()
  .projection(function(d) {
   return [d.x, d.y];
  });

 var svg = d3.select("body").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 root = myTreeData[0];//assigning the parent

update(root)

////////////////////////////////////////////////
 function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(source).reverse(),
   links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) {
   d.y = d.depth * 200;
  });
/////****************Nodes*******************/
  // Declare the nodes
  var node = svg.selectAll("g.node")
   .data(nodes, function(d) {
    return d.id || (d.id = ++i);
   });
  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
   .attr("class", "node")
   .attr("transform", function(d) {
    return "translate(" + source.x0 + "," + source.y0 + ")";
   })
    .on("click", nodeclick);
   
   nodeEnter.append("rect")
     .attr("x", -70)
     .attr("y", -20)
     .attr("height", 30)
     .attr("width", 150)
     .attr("rx", 5)
     .attr("ry", 5)
     .attr("stroke", function(d) {
       return d.children || d._children ?
       "steelblue" : "#00c13f";})
     .style("fill", function(d) {
       return d.children || d._children ? "lightsteelblue" : "#fff"; });

   nodeEnter.append("text")
      .attr("y", function(d) {
        return d.children || d._children ? -1 : 1
      })
      .attr("text-anchor", "middle")
      .text(function(d) {
        return d.name;})
      .style("fill-opacity", 1);
  //Update and transition nodes to new position
  var nodeUpdate = node.transition()
       .duration(duration)
       .attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")" ;});

  nodeUpdate.select("rect")
     .attr("x", -70)
     .attr("y", -20)
     .attr("height", 30)
     .attr("width", 150)
     .attr("rx", 5)
     .attr("ry", 5)
     .style("fill", function(d) {
       return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // transition node to the parent position
  var nodeExit = node.exit().transition()
       .duration(duration)
       .attr("transform", function(d) {return "translate(" + source.x + "," + source.y + ")"; })
       .remove();

  nodeExit.select("rect")
     .attr("x", -70)
     .attr("y", -20)
     .attr("height", 1e-6)
     .attr("width", 1e-6)
     .attr("rx", 5)
     .attr("ry", 5)
  
  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Declare the links
  var link = svg.selectAll("path.link")
   .data(links, function(d) {
    return d.target.id;
   });

  // Enter the new link
  link.enter().insert("path", "g")
   .attr("class", "link")
   .attr("d", function(d) {
     var o = {x: source.x0, y: source.y0};
     return diagonal({source: o, target: o});
   });
   
  //transition link to new position
  link.transition()
      .duration(duration)
      .attr("d", diagonal);
  //transition existing nodes to parent's new position
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();
  //hide the old positions for transition
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
 }
 // Toggle children on click
 function nodeclick(d) {
   if (d.children) {
    d._children = d.children;
    d.children = null;
   } else {
    d.children = d._children;
    d._children = null;
   }
  //  update(d);
  }
}

export default myD3;