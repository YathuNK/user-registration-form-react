import React from "react";
import {
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CRow,
	CSpinner,
	CFormLabel,
	CImage,
} from "@coreui/react";

function ProfilePage({ user }) {
	return (
		<>
			{user.loading ? (
				<CSpinner color="primary" />
			) : (
				<CRow className="m-auto mt-3 w-100" >
					<CCol md={3} sm={2}></CCol>
					<CCol xs={12} md={6}>
						<CCard style={{ backgroundColor: "#bfcddb" }}>
							<CCardHeader>User Profile</CCardHeader>
							<CCardBody>
								<CRow className="mb-4">
									<CImage
										style={{
											width: "200px",
											height: "200px",
										}}
										rounded
										align="center"
										thumbnail
										src="images/user.png"
										width={200}
										height={200}
									/>
								</CRow>
								<CRow>
									<CCol md="1"></CCol>
									<CCol xs="4" md="5">
										<CFormLabel> First Name: </CFormLabel>
									</CCol>
									<CCol xs="8" md="6">
										<CFormLabel>
											{user.firstName}
										</CFormLabel>
									</CCol>
								</CRow>
								<CRow>
									<CCol md="1"></CCol>
									<CCol xs="4" md="5">
										<CFormLabel> Last Name: </CFormLabel>
									</CCol>
									<CCol xs="8" md="6">
										<CFormLabel>{user.lastName}</CFormLabel>
									</CCol>
								</CRow>
								<CRow>
									<CCol md="1"></CCol>
									<CCol xs="4" md="5">
										<CFormLabel> Username: </CFormLabel>
									</CCol>
									<CCol xs="8" md="6">
										<CFormLabel>{user.userName}</CFormLabel>
									</CCol>
								</CRow>
								<CRow>
									<CCol md="1"></CCol>
									<CCol xs="4" md="5">
										<CFormLabel> Email: </CFormLabel>
									</CCol>
									<CCol xs="8" md="6">
										<CFormLabel>{user.email}</CFormLabel>
									</CCol>
								</CRow>
								<CRow>
									<CCol md="1"></CCol>
									<CCol xs="4" md="5">
										<CFormLabel>
											{" "}
											Date of Birth:{" "}
										</CFormLabel>
									</CCol>
									<CCol xs="8" md="6">
										<CFormLabel>{user.dob}</CFormLabel>
									</CCol>
								</CRow>
								<CRow>
									<CCol md="1"></CCol>
									<CCol xs="4" md="5">
										<CFormLabel> Country: </CFormLabel>
									</CCol>
									<CCol xs="8" md="6">
										<CFormLabel>{user.country}</CFormLabel>
									</CCol>
								</CRow>
								<CRow>
									<CCol md="1"></CCol>
									<CCol xs="4" md="5">
										<CFormLabel> State: </CFormLabel>
									</CCol>
									<CCol xs="8" md="6">
										<CFormLabel>{user.state}</CFormLabel>
									</CCol>
								</CRow>
								<CRow>
									<CCol md="1"></CCol>
									<CCol xs="4" md="5">
										<CFormLabel>
											{" "}
											Mobile Number:{" "}
										</CFormLabel>
									</CCol>
									<CCol xs="8" md="6">
										<CFormLabel>
											{user.mobileCountryCode +
												user.mobileNumber}
										</CFormLabel>
									</CCol>
								</CRow>
								{user.phoneCountryCode && (
									<CRow>
										<CCol md="1"></CCol>
										<CCol xs="4" md="5">
											<CFormLabel>
												{" "}
												Phone Number:{" "}
											</CFormLabel>
										</CCol>
										<CCol xs="8" md="6">
											<CFormLabel>
												{user.phoneCountryCode +
													user.phoneNumber}
											</CFormLabel>
										</CCol>
									</CRow>
								)}
							</CCardBody>
						</CCard>
					</CCol>
				</CRow>
			)}
		</>
	);
}

export default ProfilePage;
