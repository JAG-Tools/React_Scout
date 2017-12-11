import React from "react"
import render from "react-dom"



//export default class tester3 extends react.Component(){
/*export default class Tester3 extends  React.Component{


    constructor(props){

    super(props);
    this.state = {}
    };
    render(){
       return( <div ></div>)
    }
}*/

  const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f  }) =>  
   <div className="color-list">       
    {(colors.length === 0)?
      <p>no colors listed . (add a color)</p>:
      colors.map(color => 
        <Color key = { color.id}
          {...color}   
          onRate = { (rating) => onRate( color.id, rating) }  
          onRemove = {() => onRemove(color.id) }    />
        )
    }
    </div>
  
    const Color = ({title, color, rating = 0, onRemove= f => f, onRate = f => f }) =>
    <section className = "color">
      <h1> {title} </h1>
      <button onClick = {onRemove} >x</button>

      <div className = "color" style={ {backgroundColor : color }} > 
      </div>
      <div>
        <StarRating starsSelected = {rating}  onRate = {onRate}></StarRating>
      </div>
    </section>

  const StarRating = ({starsSelected =  0 , totalStars = 5 , onRate = f  => f}) =>
    <div className = "star-rating">
      { [...Array( totalStars )].map((n,i) => 
        <Star key = {i} 
          selected = { i < starsSelected }
          onClick = {() => onRate( i + 1 )  } />

      )}
      <p>{ starsSelected } of { totalStars }  stars </p> 
      
    </div>
    //{ onClick }
     const Star = ({selected = false , onClick = f => f }) =>
      <div  className = {(selected)? "star selected " : "star" } 
      onClick = { onClick } >
          
      </div>

      

     /* Star.propTypes = {
        selected : PropTypes.bool,
        onClick : PropTypes.func
      }
*/
    export default ColorList
 
