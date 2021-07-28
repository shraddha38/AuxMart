import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
import Confectionary from "./Confectionary.json"

//import card from "./card";
class ConfectionarySet extends Component {

  render() {
    return(

        <div className="row">
            {Confectionary.map((obj)=>{
                return (
                    <div className="col-sm-3">
                    <div className="card mt-4">
                            <img className="card-img-top" src={obj.img} class="d-block"
                              height="170" />
                        <div className="card-body">
                        <p>{obj.title}</p>    
                        <p>{obj.price}</p> 
                        <p>{obj.quantity}</p> 
                        
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

export default ConfectionarySet;
