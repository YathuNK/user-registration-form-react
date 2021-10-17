import React, { useState } from "react";
import {
	CNavbar,
	CContainer,
	CNavbarBrand,
	CNavbarToggler,
	CNavbarNav,
	CNavItem,
	CCollapse,
} from "@coreui/react";
import { Link } from "react-router-dom";

function Navbar(props) {
	let [token, setToken] = useState(localStorage.getItem("token"));
	const [visible, setVisible] = useState(false);

	const logoutHandler = () => {
		localStorage.clear();
		window.location.reload(false);
	};
	return (
		<CNavbar expand="lg" colorScheme="dark" className="bg-primary">
			<CContainer fluid>
				<CNavbarBrand href="#">User Registration Form</CNavbarBrand>
				<CNavbarToggler
					aria-label="Toggle navigation"
					aria-expanded={visible}
					onClick={() => setVisible(!visible)}
				/>
				<CCollapse
					className="navbar-collapse"
					style={{ justifyContent: "flex-end", marginRight: "2rem" }}
					visible={visible}
				>
					<CNavbarNav>
						<CNavItem className="m-2">
							<Link
								to="/"
								className="text-light text-decoration-none"
							>
								Home
							</Link>
						</CNavItem>
						{token ? (
							<>
								<CNavItem className="m-2">
									<Link
										to="/profile"
										className="text-light text-decoration-none"
									>
										Profile
									</Link>
								</CNavItem>
								<CNavItem className="m-2">
									<div
										className="text-light"
										style={{ cursor: "pointer" }}
										onClick={logoutHandler}
									>
										Logout
									</div>
								</CNavItem>
							</>
						) : (
							<>
								<CNavItem className="m-2">
									<Link
										to="/register"
										className="text-light text-decoration-none"
									>
										Register
									</Link>
								</CNavItem>
								<CNavItem className="m-2">
									<Link
										to="/login"
										className="text-light text-decoration-none"
									>
										Login
									</Link>
								</CNavItem>
							</>
						)}
					</CNavbarNav>
				</CCollapse>
			</CContainer>
		</CNavbar>
	);
}

export default Navbar;
