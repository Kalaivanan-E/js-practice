
// lifecycle methods in class components

import React, {Component} from "react";

class Employees extends React.Component{

  constructor(props){
    super(props)
    console.log("First Constructor will execute")
  }
  componentDidMount(){
    console.log("Third componentdidmount will  execute")
  }
  componentDidUpdate(){
    console.log("Fourth componentdidupdate will execute")
  }
  componentWillUnmount(){
    console.log("Fifth componentwillunmount will execute")
  }

  render(){
    console.log("Second Render method will execute")
    return <div>
      
    </div>

  }


}

export default Employees;