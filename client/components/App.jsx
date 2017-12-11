//import React from "react"
//import render from "react-dom"
import React, {Component} from "../../scout-main/reactScout.js"
//import React,{ Children } from 'react'
import ColorList from "./javi.jsx"
import Tester4 from "./olaya.jsx"
import Tester21 from "./ordonez.jsx"
import  $ from "jquery"
import style from '../../stylesheets/Star.scss'
import { v4 } from "uuid"

/*const findChild =  (children, child) => {console.log("find children:,",children); return Children.toArray(children).filter(c=> c.type === child)[0];}
const WhenTruthy = ({children}) => {console.log("when truthy children:,",children); return Children.only(children); }
const WhenFalsy = ({children}) => {children.only(children);console.log(children)}

const Display = ({ifTruthy = true, children}) => 
    (ifTruthy)?
    findChild(children, WhenTruthy):
    findChild(children, whenFalsy)

    const age = 22;*/

function changeLabels(obj, result) {  
    result ={name: "", children: ""};
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            	if (typeof obj[property] == "object"){
               // console.log( " it is an object ",  obj[property])
                //changeLabels(obj[property], result);
                if(property === "_children" ){ result.children = obj[property]; obj["children"]=obj[property]; delete obj[property];}
                
            }
            else{
                if(property === "label" ){result.name = obj[property]; obj["name"]=obj[property]; delete obj[property];}
                //console.log(property , "   " , obj[property]);
                    }
        }
    }
    return result;
}

//let app = express();
//app.listen(3000, () => {  console.log("running at port 3000") })

 class Tester extends  React.Component{


    constructor(props){

    super(props);
    this.state = {}
    };

   printName(){
    console.log("printing!...")
   }

    render(){
       return( <div ></div>)
    }
}

 class Tester2 extends  React.Component{


    constructor(props){

    super(props);
    this.state = {
        t:"done"
    }
    };

   printName(){
    //console.log("printing!...")
   }

    render(){
       return( <div ></div>)
    }
}

export default class Applicable extends React.Component {

 
   constructor(props){

    super(props);
    this.drawtree = this.drawtree.bind(this);
    this.callToDraw =  this.callToDraw.bind(this);
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind( this );
    this.removeColor= this.removeColor.bind( this );    
    this.state = {
        tree : {},
        colors: [
        {
            "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
            "title": "ocean at dusk",
            "color": "#00c4e2",
            "rating": 5
        },
        {
            "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
            "title": "lawn",
            "color": "#26ac56",
            "rating": 3
        },
        {
            "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
            "title": "bright red",
            "color": "#ff0000",
            "rating": 0
        }
    ]
      }
    };

    addColor(title, color){
        const colors = [
          ...this.state.colors,
          {
            id: v4(),
            title,
            color,
            rating:0
          }
        ]
        this.setState({ colors })
    }

    rateColor( id, rating ){
      const colors = this.state.colors.map( color => 
        (color.id !== id) ?
          color :
          {
            "id": color.id,
            "title": color.title,
            "color": color.color,
            "rating": rating

            //the book gives you this and it does not work
            /*
            {
                ...color, rating
            }
            */
          }
      )
      this.setState( {colors }  )
    }
    
    removeColor( id ){
      const colors = this.state.colors.filter(
        color => color.id !== id 
        )
      this.setState({colors} )
    }

    componentWillMount(mount){
        console.log("componentWillMount: ", this.state);
        this.setState( {tree: "tree has changed"} )
        console.log(" componentWillMount props: ", this.props);
        console.log(" componentWillMount mount: ", mount );

    }

   componentDidMount(prevMount){
        console.log("componentDidMount: ", this.state)
        //alert();
        console.log(" componentDidMount props: ", this.props);
        console.log(" componentDidMount prevMount: ", prevMount);
    }

    componentWillUpdate(nextProps){
        console.log("I will update:  ", this.state);
        console.log(" componentWillUpdate props: ", this.props);
        console.log(" componentWillUpdate nextProps: ", nextProps)
    }
    componentDidUpdate(prevProps){
        console.log("I did update:  ", this.state);
        console.log(" componentDidUpdate props: ", this.props);
        console.log(" componentDidUpdate prevProps: ", prevProps);
    }
    componentWillReceiveProps(nextProps){
        console.log("I Will Receive Props:  ", this.state);
        console.log(" componentWillReceiveProps props: ", this.props);
        console.log(" componentWillReceiveProps prevProps: ", nextProps);
    }
	changeLabels(obj, result){
	    result ={name: "", children: ""};
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object"){
                //console.log( " it is an object ",  obj[property])
                changeLabels(obj[property], result);
                if(property === "_children" ){ result.children = obj[property]; obj["children"]=obj[property]; delete obj[property];}
                
            }
            else{
                if(property === "label" ){result.name = obj[property]; obj["name"]=obj[property]; delete obj[property];}
                //console.log(property , "   " , obj[property]);
                    }
        }
    }
    return result;
	}

	callToDraw(){ 
/*
      console.log("draw tree")
      console.log("this:",this)*/
    const t =this;
    this.drawtree();
	/*let my = fetch("http://localhost:9999/stateRetrieve", {
        method :"GET",
        headers: { "Content-Type" : "application/json" },
        //body: JSON.stringify({item: body})
    })
	.then(function(response) { console.log(response); return response.json(); })
	.then(function(json) {console.log("success: ",json); console.log(">>this:",t);t.drawtree(json) ;return json  } )
	.catch(function(e) {console.log("error is: ", e)} )
    */
    }//end of callToDraw

drawtree(my){ 
    this.setState(this.state); console.log("drawtree")
    let treeJSON = d3.json("http://localhost:9999/stateRetrieve", function(error, treeData) {
    //console.log("my:", my);
    // Calculate total nodes, max label length
     //treeData = my//changeLabels(my);
    var totalNodes = 0;
    var maxLabelLength = 0;
    // variables for drag/drop
    var selectedNode = null;
    var draggingNode = null;
    // panning variables
    var panSpeed = 200;
    var panBoundary = 20; // Within 20px from edges will pan when dragging.
    // Misc. variables
    var i = 0;
    var duration = 750;
    var root;

    // size of the diagram
    var viewerWidth = $(document).width();
    var viewerHeight = $(document).height();

    var tree = d3.layout.tree()
        .size([viewerHeight, viewerWidth]);

    // define a d3 diagonal projection for use by the node paths later on.
    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            return [d.y, d.x];
        });

    // A recursive helper function for performing some setup by walking through all nodes

    function visit(parent, visitFn, childrenFn) {
        if (!parent) return;

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);
            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(treeData, function(d) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);

    }, function(d) {
        return d.children && d.children.length > 0 ? d.children : null;
    });


    // sort the tree according to the node names

    function sortTree() {
        tree.sort(function(a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
    }
    // Sort the tree initially incase the JSON isn't in a sorted order.
    sortTree();

    // TODO: Pan function, can be better implemented.

    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            translateCoords = d3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            scaleX = translateCoords.scale[0];
            scaleY = translateCoords.scale[1];
            scale = zoomListener.scale();
            svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListener.scale(zoomListener.scale());
            zoomListener.translate([translateX, translateY]);
            panTimer = setTimeout(function() {
                pan(domNode, speed, direction);
            }, 50);
        }
    }

    // Define the zoom function for the zoomable tree

    function zoom() {
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }


    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

    function initiateDrag(d, domNode) {
        draggingNode = d;
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
        d3.select(domNode).attr('class', 'node activeDrag');

        svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
            if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
            else return -1; // a is the hovered element, bring "a" to the front
        });
        // if nodes has children, remove the links and nodes
        if (nodes.length > 1) {
            // remove link paths
            links = tree.links(nodes);
            nodePaths = svgGroup.selectAll("path.link")
                .data(links, function(d) {
                    return d.target.id;
                }).remove();
            // remove child nodes
            nodesExit = svgGroup.selectAll("g.node")
                .data(nodes, function(d) {
                    return d.id;
                }).filter(function(d, i) {
                    if (d.id == draggingNode.id) {
                        return false;
                    }
                    return true;
                }).remove();
        }

        // remove parent link
        parentLink = tree.links(tree.nodes(draggingNode.parent));
        svgGroup.selectAll('path.link').filter(function(d, i) {
            if (d.target.id == draggingNode.id) {
                return true;
            }
            return false;
        }).remove();

        let dragStarted = null;
    }

    // define the baseSvg, attaching a class for styling and the zoomListener
    var baseSvg = d3.select("#tree-container").append("svg")
        .attr("width", viewerWidth)
        .attr("height", viewerHeight)
        .attr("class", "overlay")
        .call(zoomListener);


    // Define the drag listeners for drag/drop behaviour of nodes.

    // Helper functions for collapsing and expanding nodes.

    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function expand(d) {
        if (d._children) {
            d.children = d._children;
            d.children.forEach(expand);
            d._children = null;
        }
    }

    var overCircle = function(d) {
        selectedNode = d;
        updateTempConnector();
    };
    var outCircle = function(d) {
        selectedNode = null;
        updateTempConnector();
    };

    // Function to update the temporary connector indicating dragging affiliation
    var updateTempConnector = function() {
        var data = [];
        if (draggingNode !== null && selectedNode !== null) {
            // have to flip the source coordinates since we did this for the existing connectors on the original tree
            data = [{
                source: {
                    x: selectedNode.y0,
                    y: selectedNode.x0
                },
                target: {
                    x: draggingNode.y0,
                    y: draggingNode.x0
                }
            }];
        }
        var link = svgGroup.selectAll(".templink").data(data);

        link.enter().append("path")
            .attr("class", "templink")
            .attr("d", d3.svg.diagonal())
            .attr('pointer-events', 'none');

        link.attr("d", d3.svg.diagonal());

        link.exit().remove();
    };

    // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    function centerNode(source) {
        let scale = zoomListener.scale(),x = -source.y0,y = -source.x0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

    // Toggle children function

    function toggleChildren(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        return d;
    }

    // Toggle children on click.

    function click(d) {
        //if (d3.event.defaultPrevented) return; // click suppressed
        d = toggleChildren(d);
        update(d);
        centerNode(d);
    }

    function update(source) {
        // Compute the new height, function counts total children of root node and sets tree height accordingly.
        // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
        // This makes the layout more consistent.
        var levelWidth = [1];
        var childCount = function(level, n) {

            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0);

                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function(d) {
                    childCount(level + 1, d);
                });
            }
        };
        childCount(0, root);
        var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line  
        tree = tree.size([newHeight, viewerWidth]);

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function(d) {
            d.y = (d.depth * (maxLabelLength * 10)); //maxLabelLength * 10px
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        });

        // Update the nodes…
       let  node = svgGroup.selectAll("g.node")
            .data(nodes, function(d) {
                return d.id || (d.id = ++i);
            });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
            //.call(dragListener)
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', click);

        nodeEnter.append("circle")
            .attr('class', 'nodeCircle')
            .attr("r", 0)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        nodeEnter.append("text")
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("dy", ".35em")
            .attr('class', 'nodeText')
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            })
            .style("fill-opacity", 0);

        // phantom node to give us mouseover in a radius around it
        nodeEnter.append("circle")
            .attr('class', 'ghostCircle')
            .attr("r", 30)
            .attr("opacity", 0.2) // change this to zero to hide the target area
        .style("fill", "red")
            .attr('pointer-events', 'mouseover')
            .on("mouseover", function(node) {
                overCircle(node);
            })
            .on("mouseout", function(node) {
                outCircle(node);
            });

        // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            });

        // Change the circle fill depending on whether it has children and is collapsed
        node.select("circle.nodeCircle")
            .attr("r", 4.5)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Fade the text in
        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select("circle")
            .attr("r", 0);

        nodeExit.select("text")
            .style("fill-opacity", 0);

        // Update the links…
        var link = svgGroup.selectAll("path.link")
            .data(links, function(d) {
                return d.target.id;
            });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
                var o = {
                    x: source.x0,
                    y: source.y0
                };
                return diagonal({
                    source: o,
                    target: o
                });
            });

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function(d) {
                var o = {
                    x: source.x,
                    y: source.y
                };
                return diagonal({
                    source: o,
                    target: o
                });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    // Define the root
    root = treeData;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;

    // Layout the tree initially and center on the root node.
    update(root);
    centerNode(root);
});


	}//end of drawtree
	render(){
        const { addColor , rateColor, removeColor} = this 
        const {colors} = this.state;
        return(
			<div style = {{ textAlign : 'center'}} >
				<h1> HELLO WORLDS!  </h1>
                <button onClick= {this.callToDraw} >
                 ____________
                </button>
               <Tester ></Tester>
               <Tester2 ></Tester2>
               <AddColorForm  onNewColor = {addColor}> </AddColorForm>
               <ColorList colors={colors}  onRate = {rateColor}  onRemove = {removeColor} ></ColorList>
              {/* <Tester3></Tester3>*/}
               <Tester4></Tester4>
               <Tester21></Tester21>
               {/*<Display  ifTruthy={age>=21}>
                 <WhenTruthy><h1>you can enter</h1></WhenTruthy>
                 <WhenFalsy><h1>you cannot enter</h1> </WhenFalsy>
                </Display>*/}

			</div>
		);
	}
}

const AddColorForm = ({onNewColor = f => f}) => {
        let _title , _color
        const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ""
        _color.value = "#000000"
        _title.focus()
        }
        return (
          <form onSubmit = {submit} >
            <input ref={input => _title = input} 
              type = "text"
              placeholder = "color title..." required/>
            <input ref = {input => _color = input } 
              type = "color" required/>
            <button>
              ADD
            </button>
          </form> 
          )
      }
    
     /* AddColorForm.propTypes = {
        onNewColor : PropTypes.func
      }
      AddColorForm.defaultProps = {
        onNewColor : f => f
            }
*/
