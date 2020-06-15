import React from 'react'
import firebase from '../.././Config/Firebase'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {updatekontak} from '../../Config/Redux'

class Kontak extends React.Component{
  state = {
    link: []
  }
  aktif = (e) => {
    e.preventDefault()
    alert(e.target.innerHTML)
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
