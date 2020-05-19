import React, { Fragment } from "react";
import './Header.css'
const Header = () => {
	return (
		<Fragment>
			<div classNameName="contentHeader">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Chatting
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Your Bio
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Friends Bio
						</a>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};
export default Header;
