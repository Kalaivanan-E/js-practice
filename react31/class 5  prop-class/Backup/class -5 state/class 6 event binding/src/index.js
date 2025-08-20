// const { render } = require("@testing-library/react")

import ReactDOM from "react-dom/client"
import App from './App'

// ReactDOM.render('Hello',document.getElementById("root"))

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)