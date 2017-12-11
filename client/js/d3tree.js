
const myD3 = {};

myD3.myTree = (myTreeData) => {
  const margin = {
    top: 80,
    right: 100,
    bottom: 80,
    left: 100,
  };
  const width = 1200 - margin.right - margin.left;
  const height = 1200 - margin.top - margin.bottom;
  let root;
  let i = 0;
  const duration = 750;
  const tree = d3.layout
    .tree()
    .size([height, width]);

  const diagonal = d3.svg.diagonal()
    .projection(d => [d.x, d.y]);

  const svg = d3.select('body').append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  root = myTreeData[0];// assigning the parent


  // ===========================================
  function update(source) {
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
    // Compute the new tree layout.
    const nodes = tree.nodes(source).reverse();
    const links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(d => d.y = d.depth * 200);
    // ********************Nodes**********************/
    // Declare the nodes
    const node = svg.selectAll('g.node')
      .data(nodes, (d) => {
        i += 1;
        const curr = d.id || (d.id = i);
        return curr;
      });
    // Enter the nodes.
    const nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr('transform', () => `translate(${source.x0}, ${source.y0})`)
      .on('click', nodeclick);

    nodeEnter.append('rect')
      .attr('x', -70)
      .attr('y', -20)
      .attr('height', 30)
      .attr('width', 150)
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('stroke', d => (d.children || d._children ? 'steelblue' : '#00c13f'))
      .style('fill', d => (d.children || d._children ? 'lightsteelblue' : '#fff'));

    nodeEnter.append('text')
      .attr('y', (d) => {
        const curr = d.children || d._children ? -1 : 1;
        return curr;
      })
      .attr('text-anchor', 'middle')
      .text(d => d.name)
      .style('fill-opacity', 1);
    // Update and transition nodes to new position
    const nodeUpdate = node.transition()
      .duration(duration)
      .attr('transform', d => `translate(${d.x}, ${d.y})`);

    nodeUpdate.select('rect')
      .attr('x', -70)
      .attr('y', -20)
      .attr('height', 30)
      .attr('width', 150)
      .attr('rx', 5)
      .attr('ry', 5)
      .style('fill', (d) => {
        const currD = d.children ? 'lightsteelblue' : '#fff';
        return currD;
      });

    nodeUpdate.select('text')
      .style('fill-opacity', 1);

    // transition node to the parent position
    const nodeExit = node.exit().transition()
      .duration(duration)
      .attr('transform', () => `'translate(${source.x}, ${source.y})`)
      .remove();

    nodeExit.select('rect')
      .attr('x', -70)
      .attr('y', -20)
      .attr('height', 1e-6)
      .attr('width', 1e-6)
      .attr('rx', 5)
      .attr('ry', 5);

    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // Declare the links
    const link = svg
      .selectAll('path.link')
      .data(links, d => d.target.id);

    // Enter the new link
    link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', () => {
        const o = { x: source.x0, y: source.y0 };
        return diagonal({ source: o, target: o });
      });

    // transition link to new position
    link.transition()
      .duration(duration)
      .attr('d', diagonal);
    // transition existing nodes to parent's new position
    link.exit().transition()
      .duration(duration)
      .attr('d', () => {
        const o = { x: source.x, y: source.y };
        return diagonal({ source: o, target: o });
      })
      .remove();
    // hide the old positions for transition
    nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  update(root);
};
// THIS CODE IS WHAT RETRIEVES DATA FROM THE SERVER, THIS WORKS BUT WE NEED TO FIGURE OUT D3 ERRORS
// In order to test the code with a react application outside of this folder (until npm package)
// we must use a symlink.
// yourOS => Google(`How to make a symlink ${yourOS}`) yourOS = mac/windows/linux/etc.

// function render() {
//   // let data = null;
//   fetch('http://localhost:9999/stateRetrieve')
//     .then(response => response.json())
//     .then((json) => {
//       console.log(json);
//       if (json) myD3.myTree([json]);
//     })
//     .catch(error => `'error: ${error}`);
// }

// const renderID = setInterval(render, 50);
