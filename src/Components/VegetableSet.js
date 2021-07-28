import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
import Vegetable from "./Vegetable"
//import Card from "./Card";
class VegetableSet extends Component {

  render() {
    return(

        <div className="row">
            {Vegetable.map((obj)=>{
                return (
                    <div className="col-sm-3">
                    <div className="card mt-4">
                        <img className="card-img-top" src={obj.img} />
                        <div className="card-body">
                        <p>{obj.title}</p>    
                        <p>{obj.price}</p> 
                        <p>{obj.info}</p> 
                        <button className='btn btn-outline-success'>Order Now</button> 
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
  }
}

export default VegetableSet;