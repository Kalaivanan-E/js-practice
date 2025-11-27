
import ReactDOM from 'react-dom/client'
import App from './App'

let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render("GM");
// root.render(<h1>Good Morning</h1><h1>Good Morning</h1>) // Adjacent JSX elements must be wrapped in an enclosing tag.

// root.render(<div>
//   <h1>good Morning</h1>
//   <h1>good afternoon</h1>
//   <h1>good night</h1>
// </div>)

root.render(
  <App/>
)