import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registrasi from "./component/Registrasi/Registrasi";
import Chat from "./component/Chat/Chat";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Uploadfoto from "./component/Uploadfoto/Uploadfoto";
import firebase from './Config/Index.js'

const App = () => {
    var [login, setLogin] = useState(false);
    var [user, setUser] = useState("");
    const [result, setresult] = useState([])
    useEffect(()=>{
        console.log('nama saya adalah depanri purba')
            var starCountRef = firebase.database().ref('users/' + user );
            starCountRef.on('value', function(snapshot) {
            console.log(snapshot.val());
            });
        })

    return (
        <Router>
        {console.log(user)}
            <Route
                path="/"
                exact
                render={() =>
                    login === true ? (
                        <Home user={user} kontak={(value)=>setresult(value)} />
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
                    login === false ? (
                        <Registrasi login={(value) => setLogin(value)} user={(value)=>setUser(value)} />
                    ) : (
                        <Home user={user} />
                    )
                }
            />
            <Route
                path="/uploadfoto"
                render={() =>
                    login === true ? (
                        <Uploadfoto user={user} />
                    ) : (
                        <Login
                            user={(value)=>setUser(value)}
                            login={(value) => setLogin(value)}
                        />
                    )
                }
            />
        </Router>
    );
};

export default App;
