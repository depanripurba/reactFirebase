import React, { Fragment } from "react";
const Header = () => {
	return (
		<Fragment>
			<div className="Container">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link active" href="#">
							Active
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Link
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Link
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link disabled"
							href="#"
							tabindex="-1"
							aria-disabled="true"
						>
							Disabled
						</a>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};
export default Header;
