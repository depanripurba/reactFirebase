import React, { useState, useEffect } from "react";
import "./Kontak.css";
import firebase from '../.././Config/Index'
import { Link } from "react-router-dom";
const Kontak = ({ user }) => {

    const array = ["depanri","antoni","minalda","doni"]
    const starCountRef = firebase.database().ref('users/' + user );
    starCountRef.on('value',function(snapshot){
      let nama = snapshot.val().teman
      nama.map((teman)=>(console.log(teman)))
    })


    const [link, setlink] = useState([])
    const Chat = (e) => {
        console.log(e.target.innerHTML);
    };



    useEffect(()=>{
      console.log('harusnya di atas ini adalah daftar semua kontak')
      console.log(link)
      if(link.length>0){
          link[0].classList.add('active')
      }
      if(link.length>1){
        link[0].classList.remove('active')
        link[1].classList.add('active')
        link.shift()
      }
    })

    const Active = function(e){
        var tes = e.target
        setlink(link=> [...link,tes])
        alert(e.target.innerHTML)

    }
    return (
        <div>
        <div className="list-group">
        {
          array.map((tes)=>(
            <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>cek</Link>
          ))
        }

            </div>
        </div>
    );
};

export default Kontak;
