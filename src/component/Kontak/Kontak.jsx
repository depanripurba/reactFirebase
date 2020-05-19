import React,{useState} from 'react'
import './Kontak.css'
import {Link} from 'react-router-dom'
const Kontak = ({kontak})=>{
    const namaa = ['depanri','antoni purba','minalda purba','feriandoni']
    const Chat = (e)=>{
        console.log(e.target.innerHTML)
        kontak(e.target.innerHTML)
    }
    return(
        <div>
        <div class="list-group">
        <Link to="/" className="list-group-item list-group-item-action">Depanri Purba</Link>
           <a href="#" class="list-group-item list-group-item-action active">
            Cras justo odio
            </a>
            <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
       
        </div>
        </div>
    )
}

export default Kontak