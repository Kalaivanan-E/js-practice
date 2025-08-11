

import React from "react";

class  Messages extends React.Component{

    state ={
        'msg ': 'Hello ...'
    }

    gmHandler =()=>{
        this.setState({'msg': 'Good Morning'})
    }

    gnHandler = ()=>{
        this.setState({'msg': 'Good Night'})
    }

    render(){
        

        return <div>
            <h3> Messaage Component</h3>
            <h3> Message value: {this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }

}

export default Messages;