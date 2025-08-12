

import { render } from "@testing-library/react";
import React from "react";

class Product extends React.Component{
    state = {Prod_Name: 'Marker Pen',
             price : 30,
             Qty : 1
    }

    incHandler = ()=>{
        this.setState({Qty : this.state.Qty+1})
    }

    decHandler =()=>{
        this.setState({Qty : this.state.Qty-1})
    }



    render(){
        return <div>
            <h3> Product_Name: {this.state.Prod_Name}</h3>
            <h3> Product_Name: {this.state.price}</h3>
            <h3> Product Qty: <button onClick={this.decHandler}> - </button>  {this.state.Qty} <button onClick={this.incHandler}> + </button>  </h3> <br />
            <input type="submit" value={'Buy Now'} />  <input type="submit" value={'Add Cart'} /> 
            <br />
            <hr />
            

            
        </div>

    }
}

export default Product;