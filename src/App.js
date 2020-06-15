import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registrasi from "./component/Registrasi/Registrasi";
import Chat from "./component/Chat/Chat";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Uploadfoto from "./component/Uploadfoto/Uploadfoto";
import firebase from './Config/Firebase/index.js'
import {connect} from 'react-redux'

const App = (props) => {
    var [login, setLogin] = useState(false);
    const [kontak, setkontak] = useState("")
    var [user, setUser] = useState("");
    const [result, setresult] = useState([])


    return (
        <Router>

            <Route
                path="/"
                exact
                render={() =>
                    props.login === true ? (
                        <Home user={user} />
                    ) : (
                        <Login
                            user={(nilai) => setUser(nilai)}
                            login={(value) => setLogin(value)}

                        />
                    )
                }
            />
            <Route path="/chat" component={Chat} />
            <Route
                path="/Registrasi"
                render={() =>
                    props.login === false ? (
                        <Registrasi login={(value) => setLogin(value)} user={(value)=>setUser(value)} />
                    ) : (
                        <Home user={user} />
                    )
                }
            />
            <Route
                path="/uploadfoto"
                render={() =>
                    props.login === true ? (
                        <Uploadfoto user={user} />
                    ) : (
                        <Login
                            user={(value)=>setUser(value)}
                        />
                    )
                }
            />
        </Router>
    );
};
// const method = (dispatch)=>{
//   return{
//     rubahlogin:(value)=>dispatch(ubahlogin(value)),
//     rubahuser:(user)=>dispatch(ubahuser(user))
//   }
// }
const data = (state)=>{
  return{
    login : state.login,
    user: state.user
  }
}
export default connect(data,null)(App)
