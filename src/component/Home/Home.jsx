import React,{Fragment,useEffect,useState} from 'react'
import "./Home.css"
import Kontak from ".././Kontak/Kontak"
import Modaljoin from '.././Modaljoin/Modaljoin'
import Header from '.././Header/Header'
import Chat from '.././Chat/Chat'

const Home = ({user})=>{
    const [kontak,setKontak] = useState()
    useEffect(()=>{
        console.log(user)
    })
    return(
        <Fragment>
        <div className="bungkus">
        <div className="Header"><Header /></div>
        <div className="Kontak"><Kontak /></div>
       <div className="Chatting"> <Chat /> </div>
        </div>
        </Fragment>
    )
} 
export default Home