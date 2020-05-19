import React, { Fragment } from "react";
const Cariatas = () => {
	return (
		<Fragment>
		<div className="cariAtasHome">
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text">Cari</span>
				</div>
				<input
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
