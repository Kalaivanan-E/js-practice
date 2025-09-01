
import './Message.css'
let Message = ()=>{

    let Styles = {color: 'pink', backgroundColor:'green'}
    let msg = 'GOOD MORNING'
    return <div>
    <h1 style={{color:'red',backgroundColor: 'yellow'}} > Message components</h1>
    <h2 style={Styles}>Welcome to React World</h2>
    <h3>{msg} </h3>
    <h4 className='msgStyles'>{msg} </h4>

    </div>
}

export default Message;