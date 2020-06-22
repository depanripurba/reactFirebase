import React, { useState, useEffect } from "react";
import "./Kontak.css";
import firebase from '../.././Config/Firebase'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {updatekontak} from '../../Config/Redux'

const Kontak = (props) => {
    const array = ["depanri","antoni","minalda","doni"]

        const [link, setlink] = useState([])
        const Chat = (e) => {
            console.log(e.target.innerHTML);
        };


        useEffect(()=>{
          props.getkontak(props.datauser)
          console.log(props.kontak)
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

      console.log('ini hanya tes')
        const Active = function(e){
            var tes = e.target
            setlink(link=> [...link,tes])
            alert(e.target.innerHTML)

        }
        return (
            <div>
            <div className="list-group">
            {
              props.kontak.map((tes)=>(
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}> {tes} </Link>
              ))
            }
                </div>
            </div>
        );
};
const method = (dispatch)=>{
  return{
    getkontak:(value)=>dispatch(updatekontak(value)),
  }
}
const data = (state)=>{
  return{
    kontak: state.kontak,
    datauser: state.datauser
  }
}
export default connect(data,method)(Kontak);
