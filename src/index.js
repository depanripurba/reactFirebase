import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from "react-dom"
import App from "./App"
import {Provider} from 'react-redux'
import {store} from './Config/Redux'


ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector("#root"))
