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
        //console.log("tester :", this.props)
        //console.log("tester props.tree", this.props.tree)
       return( 
        <div >
          <h1 >this is counter : {this.props.counter} and the tree holds {this.props.tree.name} </h1>
        </div>)
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
    this.rerender = this.rerender.bind(this);
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind( this );
    this.removeColor = this.removeColor.bind( this );
    this.addComponent =this.addComponent.bind(this);
    this.deleteComponent =this.deleteComponent.bind(this);
    this.filterOutId = this.filterOutId.bind(this);

    this.state = {
        tree : {
            id: 0,
            name: "nothing",
            children: "none"
        },
        counter: 2,
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

    addComponent(  name ){
        const tree = [
          ...this.state.tree,
          {
            name:"", 
            children: "",
            parent: "" ,
            id: 0,
            depth:0,
            x:0,
            y:0
          }
        ]
        this.setState({ tree })
    }

    deleteComponent(nodeId ){

        const colors = this.state.colors.filter(
        color => color.id !== nodeId 
        )
      this.setState({colors} )

      console.log("nodeId:",nodeId);

      //console.log("this.state.tree[0]:",this.state.colors)
      console.log("this.state.tree:",this.state.tree);

      let tree = this.filterOutId(nodeId);

    this.setState({tree: tree} );


    }//end of delete

    filterOutId(nodeId){

    let tree ={name: this.state.tree.name, children: ""};
    let obj = this.state.tree;

             console.log("obj filter :", obj )
     
  

    /*if(obj["children"]){
        console.log( obj )
            this.filterOutId( obj["children"]  )

    }else return*/

   /* for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
          //console.log("obj: ", obj , "  obj[property]:", obj[property]     );
          if (typeof obj[property] == "object"){
          //console.log( " it is an object ",  obj)
          
          console.log("obj[property]", obj[property])
          for (var i = 0; i < obj[property].length; i++) {
              console.log("obj[property].id", obj[property][i].id);
              //this.filterOutId(obj[property], tree);
              if(obj[property][i].id !== nodeId ){
              //console.log( " it is an object ",  obj)
              tree.children = obj[property]; 
              obj["children"] = obj[property]; 
              //delete obj[property];      
              }
           } 
          }
          else{
          //console.log("obj: ", obj     );
            if(property === "label" ){
              tree.name = obj[property]; 
              obj["name"]=obj[property]; 
              //delete obj[property];
              
                }
              //console.log(property , "   " , obj[property]);
              }
          }
    }*/
    console.log("filter out node from tree:  " , tree)
    
    return tree;
  
    }//eof filterOutId


/*   componentWillMount(mount){
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
    }*/
    // componentDidUpdate(prevProps){
    //     console.log("I did update:  ", this.state);
    //     console.log(" componentDidUpdate props: ", this.props);
    //     console.log(" componentDidUpdate prevProps: ", prevProps);
    //     //console.log("this.state.tree:",this.state.colors)
    // }

    // componentWillReceiveProps(nextProps){
    //     console.log("I Will Receive Props:  ", this.state);
    //     console.log(" componentWillReceiveProps props: ", this.props);
    //     console.log(" componentWillReceiveProps prevProps: ", nextProps);
    // }
    
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

	rerender(){ 
/*      
      console.log("draw tree")
      console.log("this:",this)*/
    const t =this;
    var baseSvg = $("#tree-container").children().remove()//
    //console.log("baseSvg:",baseSvg)

    let treeData = this.state.tree;
    this.drawtree(treeData);
    this.deleteComponent(11);
	/*let my = fetch("http://localhost:9999/stateRetrieve", {
        method :"GET",
        headers: { "Content-Type" : "application/json" },
        //body: JSON.stringify({item: body})
    })
	.then(function(response) { 
      console.log(response); 
      return response.json(); 
    })
	.then(function(json) {
      console.log("success: ", json); 
      console.log(">>this:", t);
      t.drawtree(json);
      return json;
    })
	.catch(function(e) {
      console.log("error is: ", e);
    })
    */
    }//end of rerender

drawtree(treeDa){ 

    console.log("drawtree");
    
     let treeData = treeData ? treeDa : JSON.parse(localStorage.getItem("treeData") );
    /*this.setState(this.state.tree);*/ 
    this.setState({tree: treeData} )



 /*   let treeData = [];

    for(var x in treeDat){
      treeData.push(treeDat[x]);
    }*/
    /*console.log( "treeData", treeData)
    console.log("treeData[0]", treeData[0])*/
    //let treeJSON = d3.json("http://localhost:9999/stateRetrieve", function(error, treeData) {

    //console.log("my:", my);
    // Calculate total nodes, max label length
     //treeData = my//changeLabels(my);
    
    //console.log(treeData)

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
    var viewerWidth = $(document).width()/2;
    var viewerHeight = $(document).height();
    //const treeData = localStorage.getItem("treeData");
    //const treeData = JSON.stringify(localStorage.treeData);

    //console.log( "treeData>>>>>>>", treeData)
   /*var tree = d3.hierarchy(
        treeData
    )*/

    var tree = d3.layout.tree(   )
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
        //console.log("D",d) 
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

   /* var overCircle = function(d) {
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
    };*/

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
    }//end of update

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    // Define the root
    root = treeData;
    //console.log(">>>root", treeData);
    root.x0 = viewerHeight / 2;
    root.y0 = 0;

    // Layout the tree initially and center on the root node.
    update(root);
    centerNode(root);
 //});


	}//end of drawtree
	render(){
        const { addColor , rateColor, removeColor} = this 
        const {colors} = this.state;
        const {counter} = this.state;
        return(
			<div style = {{ textAlign : 'center'}} >
				<h1> HELLO WORLDS!  </h1>
                <button onClick= {this.drawtree} >
                 graph
                </button>
               <button onClick= {this.rerender} >
                 rerender
                </button>
               <Tester counter = {this.state.counter}  tree = {this.state.tree}></Tester>
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
