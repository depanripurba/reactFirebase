import React,{Fragment, useEffect} from "react"
import {updatestatuschat} from '../../Config/Redux'
import './Chat.css'
import {connect} from 'react-redux'
const Chat = (props)=>{

useEffect(()=>{
	console.log(props.statuschat)
})
if(props.statuschat === true){
	return(
		<Fragment>
			<div className="container margin"> <center> <h1>INI CERITANYA SUDAH TRU</h1> </center> </div>
		</Fragment>
	)
}else{
	return(
		<Fragment>

			<div className="container margin"> <center> <h1>INI MASIH FALSE</h1> </center> </div>

		</Fragment>
	)
}

}

const method = (dispatch)=>{
  return{
    changestatuschat:(value)=>dispatch(updatestatuschat(value)),
  }
}
const data = (state)=>{
  return{
    statuschat : state.statuschat,
  }
}

export default connect(data,method)(Chat);
