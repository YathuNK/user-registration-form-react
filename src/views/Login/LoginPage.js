import React from "react";
import {
	CContainer,
	CRow,
	CCol,
	CForm,
	CFormLabel,
	CFormInput,
	CFormFeedback,
	CButton,
	CHeader
} from "@coreui/react";

function LoginPage({ user, onChangeHandler, submitHandler }) {
	return (
		<CContainer style={{marginTop:"5rem"}}>
			<CRow >
				<CCol lg={3}></CCol>
				<CCol lg={6}>
					<CForm
						className="row g-3 m-1 mt-4 p-4 pt-1 rounded"
						style={{ backgroundColor: "#bfcddb" }}
						onSubmit={submitHandler}
					>
						<CHeader
							className="d-flex justify-content-center"
							style={{ backgroundColor: "#bfcddb" }}
						>
							<h2>Login</h2>
						</CHeader>
						<CCol md={12}>
							<CFormLabel htmlFor="firstName">
								Username
							</CFormLabel>
							<CFormInput
								id="userName"
								name="userName"
								placeholder="Username"
								value={user.userName}
								onChange={onChangeHandler}
								required
							/>
						</CCol>
						<CCol md={12}>
							<CFormLabel htmlFor="lastName">
								Password
							</CFormLabel>
							<CFormInput
								type="password"
								id="password"
								name="password"
								placeholder="Password"
								value={user.password}
								onChange={onChangeHandler}
								required
							/>
						</CCol>

						<CRow className="mt-4">
							<div className="d-grid gap-2 col-6 mx-auto">
								<CButton type="submit" color="primary">
									Login
								</CButton>
								{user.error && (
									<CFormFeedback className="text-danger">
										{user.error}
									</CFormFeedback>
								)}
							</div>
						</CRow>
					</CForm>
				</CCol>
			</CRow>
		</CContainer>
	);
}

export default LoginPage;
