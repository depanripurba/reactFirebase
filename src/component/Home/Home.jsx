import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import Kontak from ".././Kontak/Kontak";
import Modaljoin from ".././Modaljoin/Modaljoin";
import Header from ".././Header/Header";
import Chat from ".././Chat/Chat";
import Cariatas from ".././Cariatas/Cariatas";
import Kirim from ".././Kirim/Kirim"
import Res from '.././Res/Res'
import {database} from '../.././Config/Index'
import firebase from '../.././Config/Index'
const db = firebase.firestore()

const Home = ({ user }) => {
    const [kontak, setKontak] = useState();
    const [result, setresult] = useState([])
    useEffect(() => {
      console.log(result)
      db.collection("dpengguna").where("nama", "<=", "depan")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

        // let data = database.ref('users/' + user )
        // data.on('value',function(snapsot){
        //   // setresult(snapsot.val())
        //   console.log(snapsot.val())
        // })
        // console.log(user);
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
                        <Kontak />
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
