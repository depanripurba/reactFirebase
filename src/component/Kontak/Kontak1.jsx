import React from 'react'
import "./Kontak.css";
import firebase from '../.././Config/Firebase'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {updatekontak} from '../../Config/Redux'
import {updatestatuschat} from '../../Config/Redux'

class Kontak extends React.Component{
  aktif = (e) => {
    e.preventDefault()
    this.props.changestatuschat(true)
    let tes = e.target
    let cek = document.querySelector('.active')
    cek.classList.remove('active')
    tes.classList.add('active')
  }
  componentDidMount(){
    console.log(this.props.kontak)
    const userdata = localStorage.getItem('uid')
    console.log(`${userdata} : ini adalah userdata anda`)
  }
  render(){
    return(
      <div>
        <div className="list-group">
        {
          console.log(this.props.kontak)
        }
        {
          this.props.kontak.map(k=>(
            <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>this.aktif(e)}>{ k }</Link>
          ))
        }

        </div>
      </div>
    )
  }
}
const method = (dispatch)=>{
  return{
    getkontak:(value)=>dispatch(updatekontak(value)),
    changestatuschat:(value)=>dispatch(updatestatuschat(value)),
  }
}
const data = (state)=>{
  return{
    login: state.login,
    kontak: state.kontak,
    datauser: state.datauser
  }
}
export default connect(data,method)(Kontak);
