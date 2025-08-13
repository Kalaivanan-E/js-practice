



// let App = () => {

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Mess from "./Component/Mess";
import Message from "./Component/Message";

    
//     return  <div>
//         <h2> Welcome to React World </h2>

//         <hr />

//         <Message/>
//     </div>; 

// }

// export default App;

let App = ()=>{

    return <div>
        <h2> App Components </h2>

        <hr />
        <Message/>
        <Header/>
        <Footer/>
        <Mess/>
    </div>

}

export default App;