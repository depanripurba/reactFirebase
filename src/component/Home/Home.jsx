import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import Kontak from ".././Kontak/Kontak1";
import Modaljoin from ".././Modaljoin/Modaljoin";
import Header from ".././Header/Header";
import Chat from ".././Chat/Chat";
import Cariatas from ".././Cariatas/Cariatas";
import Kirim from ".././Kirim/Kirim"
import Res from '.././Res/Res'
import {updatekontak} from '../../Config/Redux'
import {connect} from 'react-redux'
class Home extends React.Component{
  componentDidMount(){
    const userdata = localStorage.getItem('uid')
    console.log(`${userdata} : ini adalah userdata anda home`)
    this.props.getkontak(userdata)
    console.log(this.props.kontak)
  }
  render(){
    return (
        <Fragment>
            <div className="content">
                <div className="bungkus">
                    <div className="Header">
                        <Header />
                    </div>
                    <div className="Res">
                        <Res />
                    </div>
                    <div className="homeCariAtas">
                        <Cariatas />
                    </div>
                    <div className="Kontak">
                        <Kontak/>
                    </div>
                    <div className="Chatting">
                        <Chat />
                    </div>
                </div>
            </div>
        </Fragment>
    );
  }
}
const method = (dispatch)=>{
  return{
    getkontak:(value)=>dispatch(updatekontak(value)),
  }
}
const data = (state)=>{
  return{
    login : state.login,
    datauser : state.datauser,
    kontak : state.kontak
  }
}
export default connect(data,method)(Home);
