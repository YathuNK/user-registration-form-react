import React, { useState, useEffect } from "react";
import {
	CContainer,
	CRow,
	CCol,
	CForm,
	CFormLabel,
	CFormInput,
	CFormFeedback,
	CButton,
	CHeader,
	CFormSelect,
	CToast,
	CToastBody,
	CToastHeader,
	CToaster,
	CSpinner,
} from "@coreui/react";
import countryList from "../../common/countryList";
import countryCodeList from "../../common/countryCodeList";

// return actual ui of register page
function RegisterPage({ user, onChangeHandeler, submitHandler }) {
	// set toast for displaying toast in display
	const [toast, addToast] = useState(0);

	// toast for show successful user registration message
	const exampleToast = (
		<CToast title="CoreUI for React.js">
			<CToastHeader close>
				<svg
					className="rounded me-2"
					width="20"
					height="20"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid slice"
					focusable="false"
					role="img"
				>
					<rect width="100%" height="100%" fill="#007aff"></rect>
				</svg>
				<strong className="me-auto">User Registration</strong>
			</CToastHeader>
			<CToastBody>User registered successfully</CToastBody>
		</CToast>
	);

	// show toast when user.showToast is true
	useEffect(() => {
		if (user.showToast) {
			addToast(exampleToast);
		}
	}, [user.showToast]);

	return (
		<CContainer>
			<CRow>
				<CCol lg={2}></CCol>
				<CCol lg={8}>
					<CForm
						className="row g-3 m-1 mt-4 p-4 pt-1 rounded"
						style={{ backgroundColor: "#bfcddb" }}
						onSubmit={submitHandler}
					>
						<CHeader
							className="d-flex justify-content-center"
							style={{ backgroundColor: "#bfcddb" }}
						>
							<h2>Register</h2>
						</CHeader>

						{/* firstName lable, input field and error message */}
						<CCol md={6}>
							<CFormLabel htmlFor="firstName">
								First Name
							</CFormLabel>
							<CFormInput
								id="firstName"
								name="firstName"
								placeholder="First Name"
								value={user.firstName}
								onChange={onChangeHandeler}
								required
							/>
							{user.errors.firstName && (
								<CFormFeedback className="text-danger">
									{user.errors.firstName}
								</CFormFeedback>
							)}
						</CCol>

						{/* lastName lable, input field and error message */}
						<CCol md={6}>
							<CFormLabel htmlFor="lastName">
								Last Name
							</CFormLabel>
							<CFormInput
								id="lastName"
								name="lastName"
								placeholder="Last Name"
								value={user.lastName}
								onChange={onChangeHandeler}
								required
							/>
							{user.errors.lastName && (
								<CFormFeedback className="text-danger">
									{user.errors.lastName}
								</CFormFeedback>
							)}
						</CCol>

						{/* username lable, input field and error message */}
						<CCol md={6}>
							<CFormLabel htmlFor="userName">
								User Name
							</CFormLabel>
							<CFormInput
								id="userName"
								name="userName"
								placeholder="User Name"
								value={user.userName}
								onChange={onChangeHandeler}
								required
							/>
							{user.errors.userName && (
								<CFormFeedback className="text-danger">
									{user.errors.userName}
								</CFormFeedback>
							)}
						</CCol>

						{/* email lable, input field and error message */}
						<CCol md={6}>
							<CFormLabel htmlFor="email">Email</CFormLabel>
							<CFormInput
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								value={user.email}
								onChange={onChangeHandeler}
								required
							/>
							{user.errors.email && (
								<CFormFeedback className="text-danger">
									{user.errors.email}
								</CFormFeedback>
							)}
						</CCol>

						{/* password lable, input field and error message */}
						<CCol md={6}>
							<CFormLabel htmlFor="password">Password</CFormLabel>
							<CFormInput
								type="password"
								id="password"
								name="password"
								placeholder="Password"
								value={user.password}
								onChange={onChangeHandeler}
								required
							/>
							{user.errors.password && (
								<CFormFeedback className="text-danger">
									{user.errors.password}
								</CFormFeedback>
							)}
						</CCol>

						{/* confirm password lable, input field and error message */}
						<CCol md={6}>
							<CFormLabel htmlFor="confirmPassword">
								Confirm Password
							</CFormLabel>
							<CFormInput
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								placeholder="Confirm Password"
								value={user.confirmPassword}
								onChange={onChangeHandeler}
								required
							/>
							{user.errors.confirmPassword && (
								<CFormFeedback className="text-danger">
									{user.errors.confirmPassword}
								</CFormFeedback>
							)}
						</CCol>

						{/* date of birth lable, input field and error message */}
						<CCol md={6}>
							<CFormLabel htmlFor="dob">Date of Birth</CFormLabel>
							<CFormInput
								type="date"
								id="dob"
								name="dob"
								placeholder="Date of Birth"
								value={user.dob}
								onChange={onChangeHandeler}
								required
                                min='1910-01-01'
                                max='2010-12-31'
							/>
							{user.errors.dob && (
								<CFormFeedback className="text-danger">
									{user.errors.dob}
								</CFormFeedback>
							)}
						</CCol>

						{/* country lable and option */}
						<CCol md={6}>
							<CFormLabel htmlFor="country">Country</CFormLabel>
							<CFormSelect
								id="country"
								name="country"
								placeholder="Country"
								value={user.country}
								onChange={onChangeHandeler}
								required
							>
								<option key={-1} value="">
									Choose...
								</option>
								{countryList.map((country, index) => {
									return (
										<option key={index} value={country}>
											{country}
										</option>
									);
								})}
							</CFormSelect>
						</CCol>

						{/* state lable, input field and error message */}
						<CCol md={6}>
							<CFormLabel htmlFor="state">State</CFormLabel>
							<CFormInput
								id="state"
								name="state"
								placeholder="State"
								value={user.state}
								onChange={onChangeHandeler}
								required
							/>
							{user.errors.state && (
								<CFormFeedback className="text-danger">
									{user.errors.state}
								</CFormFeedback>
							)}
						</CCol>

						{/* mobile number lable, input field and error message */}
						<CRow className="mt-4">
							<CCol md={2} className="m-1">
								<CFormLabel htmlFor="mobileNumber">
									Mobile Number
								</CFormLabel>
							</CCol>
							<CCol md={4} className="m-1">
								<CFormSelect
									id="mobileCountryCode"
									name="mobileCountryCode"
									value={user.mobileCountryCode}
									onChange={onChangeHandeler}
									required
								>
									<option key={-1} value="">
										Choose...
									</option>
									{countryCodeList.map((country, index) => {
										return (
											<option
												key={index}
												value={country.code}
											>
												{country.name}
											</option>
										);
									})}
								</CFormSelect>
							</CCol>
							<CCol md={2} className="m-1">
								<CFormInput
									id="mobileCountryCodeDisplay"
									name="mobileCountryCodeDisplay"
									value={user.mobileCountryCode}
									disabled
								/>
							</CCol>
							<CCol md={3} className="m-1">
								<CFormInput
									id="mobileNumber"
									name="mobileNumber"
									placeholder="Mobile Number"
									value={user.mobileNumber}
									onChange={onChangeHandeler}
									required
								/>
								{user.errors.mobileNumber && (
									<CFormFeedback className="text-danger">
										{user.errors.mobileNumber}
									</CFormFeedback>
								)}
							</CCol>
						</CRow>

						{/* phone number lable, input field and error message */}
						<CRow className="mt-3">
							<CCol md={2} className="m-1">
								<CFormLabel htmlFor="phoneNumber">
									Phone Number (opt.)
								</CFormLabel>
							</CCol>
							<CCol md={4} className="m-1">
								<CFormSelect
									id="phoneCountryCode"
									name="phoneCountryCode"
									value={user.phoneCountryCode}
									onChange={onChangeHandeler}
								>
									<option key={-1}>Choose...</option>
									{countryCodeList.map((country, index) => {
										return (
											<option
												key={index}
												value={country.code}
											>
												{country.name}
											</option>
										);
									})}
								</CFormSelect>
							</CCol>
							<CCol md={2} className="m-1">
								<CFormInput
									id="phoneCountryCodeDisplay"
									name="phoneCountryCodeDisplay"
									value={user.phoneCountryCode}
									disabled
								/>
							</CCol>
							<CCol md={3} className="m-1">
								<CFormInput
									id="phoneNumber"
									name="phoneNumber"
									placeholder="Mobile Number"
									value={user.phoneNumber}
									onChange={onChangeHandeler}
								/>
								{user.errors.phoneNumber && (
									<CFormFeedback className="text-danger">
										{user.errors.phoneNumber}
									</CFormFeedback>
								)}
							</CCol>
						</CRow>

						{/* submit button and error message */}
						<CRow className="mt-4">
							<CCol md={3} className="m-1"></CCol>
							<CCol
								md={6}
								className="m-1 mb-0 d-flex justify-content-center"
							>
								{user.loading ? (
									<CSpinner color="primary" />
								) : (
									<CButton
										type="submit"
										color="primary"
										className="w-100"
									>
										Register
									</CButton>
								)}
							</CCol>
						</CRow>
						{user.error && (
							<CFormFeedback className="text-danger mt-0 d-flex justify-content-center">
								{user.error}
							</CFormFeedback>
						)}
					</CForm>
				</CCol>
			</CRow>
			<CToaster push={toast} autohide={true} placement="top-end" />
		</CContainer>
	);
}

export default RegisterPage;
