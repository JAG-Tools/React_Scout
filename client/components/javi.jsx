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


/*export default class ColorList extends  React.Component{


    constructor(props){

    super(props);
    this.state = {}
    };


    render(){
       return( 
       <div className="color-list"> 
      
      {(colors.length === 0)?
        <p>no colors listed . (add a color)</p>:
        colors.map(
        color => <Color key={ color.id}{...color}/>
          )
      }
      </div>

       )
    }
}
*/

  const ColorList = ({ colors = [] }) => 

    <div className="color-list"> 
      
    {(colors.length === 0)?
      <p>no colors listed . (add a color)</p>:
      colors.map(color => <Color key={ color.id}{...color}/>
        )
    }
    </div>

    const Color = ({title, color, rating = 0}) =>
    <section className = "color">
      <h1> {title}</h1>
      <div className = "color" style={ {backgroundColor : color }} > 
      </div>
      <div>
        <StarRating starsSelected = {rating}></StarRating>
      </div>
    </section>

  const StarRating = ({starsSelected =  0 , totalStars = 5 , onRate = f  => f}) =>
    <div className = "star-rating">
      { [...Array( totalStars )].map((n,i) => 
        <Star key={i} 
          selected = { i < starsSelected }
          onclick = {() => onRate( i + 1 )} />

      )}
      <p>{ starsSelected } of { totalStars }  </p> 
      
    </div>

     const Star = ({selected = false , onClick = f => f }) =>
      <div  className = {(selected)? "star selected " : "star" } 
      onClick = { onClick } >
          
      </div>

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
            <Button>
              ADD
            </Button>
          </form> 
          )
      }
    
    

     /* Star.propTypes = {
        selected : PropTypes.bool,
        onClick : PropTypes.func
      }
*/
    export default ColorList
 
