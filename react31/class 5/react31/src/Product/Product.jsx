import React from "react";

class Product extends React.Component{

    state = {
        prod_Name :'Marker Pen',
        price : 30,
        qty  : 1

    }

    incHandler = ()=>{
        this.setState({qty: this.state.qty +1})
    }

    decHandler = ()=>{
        this.setState({qty: this.state.qty -1})
    }


    render(){
        return <div>
            <h2> Product Component</h2>
            <h2> Product Name : {this.state.prod_Name}</h2>
            <h2> Product Price : {this.state.price}</h2>
            <h2> Product Qty:<button onClick={this.decHandler}>-</button> {this.state.qty} <button onClick={this.incHandler}>+</button></h2>
            
            
        </div>
    }
}

export default Product;