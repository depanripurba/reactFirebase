import React, { Fragment, useEffect,useState } from "react"
import {database} from '../.././Config/Index'
const Cariatas = () => {
	const [pengguna, setpengguna] = useState([])
	const atp = ()=>{
		const data = database.ref('pengguna').startAt('Dep')
		data.on('value',function(snapsot){
			let data = snapsot.val()
			console.log(data)
		})
		console.log('ini adalah fungsion pengguna')
	}
	return (
		<Fragment>
		<div className="cariAtasHome">
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text">Cari</span>
				</div>
				<input
				onChange={atp}
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
