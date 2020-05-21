import React, { useState, useEffect } from "react";
import "./Kontak.css";
import { Link } from "react-router-dom";
const Kontak = ({ kontak }) => {
    const namaa = ["depanri", "antoni purba", "minalda purba", "feriandoni"];
    const [link, setlink] = useState([])
    const Chat = (e) => {
        console.log(e.target.innerHTML);
        kontak(e.target.innerHTML);
    };
    useEffect(()=>{
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
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
                <Link to="/" className="list-group-item list-group-item-action" onClick={(e)=>Active(e)}>
                    Depanri Purba
                </Link>
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
