import { Provider } from "react-redux";
import Message from "./Message/Message";
import { store } from "./redux/store";


function App() {
  return (
    <div>
    <Provider store={store}>
       <h1>App Components</h1>
       <hr />
    
      <Message/>
    </Provider>
    </div>
  );
}

export default App;
