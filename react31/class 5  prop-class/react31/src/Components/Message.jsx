

import React from "react";

class Message extends React.Component{

    constructor(props){
        console.log("first constructor");
        
        super(props)
        this.state = {'msg': 'Hello'};
    }

    updateHandler = (value)=>{ 
        this.setState({'msg':value})
    }


    render(){
        console.log("second render method");
        

        return <div>
            
            <h3> Message Value : { this.state.msg}</h3>
            <button onClick={ this.updateHandler.bind(this,'GOOD MORNING')}>GM</button>
            <button onClick={ this.updateHandler.bind(this,'GOOD AFTERNOON')}>GA</button>
            <button onClick={ this.updateHandler.bind(this,'GOOD EVENING')}>GE</button>
            <button onClick={ this.updateHandler.bind(this,'GOOD NIGHT')}>GN</button>
        </div>

    }
}

export default Message;