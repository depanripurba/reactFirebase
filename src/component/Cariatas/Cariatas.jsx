import React, { Fragment, useEffect,useState } from "react"
import firebase from '../.././Config/Firebase'
const db = firebase.firestore()
const Cariatas = () => {
	const [pengguna, setpengguna] = useState([])
	const [query,setquery] = useState([])
	const atp = (e)=>{
	setquery(e.target.value)
	db.collection("dpengguna")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			console.log(doc.id, " => ", doc.data());
			console.log(query)
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
	}
	return (
		<Fragment>
		<div className="cariAtasHome">
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text">Cari</span>
				</div>
				<input
				onChange={(e)=>atp(e)}
					type="text"
					aria-label="First name"
					className="form-control"
					placeholder="Cari dan Mulai"
				/>
			</div>
		</div>
		</Fragment>
	);
};
export default Cariatas;
