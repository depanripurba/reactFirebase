import React, { useState } from "react";
import "./Kontak.css";
import { Link } from "react-router-dom";
const Kontak = ({ kontak }) => {
    const namaa = ["depanri", "antoni purba", "minalda purba", "feriandoni"];
    var link
    const Chat = (e) => {
        console.log(e.target.innerHTML);
        kontak(e.target.innerHTML);
    };
    const removeActive = ()=>{
      
    }
    const Active = function(e){
        link = e.target
        console.log(link)
        link.classList.add('active')
    }
    return (
        <div>
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
            </div>
        </div>
    );
};

export default Kontak;
