import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import Kontak from ".././Kontak/Kontak";
import Modaljoin from ".././Modaljoin/Modaljoin";
import Header from ".././Header/Header";
import Chat from ".././Chat/Chat";
import Cariatas from ".././Cariatas/Cariatas";
import Kirim from ".././Kirim/Kirim"
import Res from '.././Res/Res'
import firebase from '../.././Config/Index'
const db = firebase.firestore()

const Home = ({ user }) => {
    const [kontak, setKontak] = useState();
    const [result, setresult] = useState([])
    useEffect(() => {
      // var starCountRef = firebase.database().ref('users/' + user );
      // starCountRef.on('value', function(snapshot) {
      //   const isi = snapshot.val()
      //   const teman = isi.teman
      // console.log(isi.teman);
      // console.log(kontak)
      // });
    });
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
                        <Kontak user = {user}/>
                    </div>
                    <div className="Chatting">
                        <Chat />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Home;
