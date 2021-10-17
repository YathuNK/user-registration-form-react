import { Component } from "react";
import ProfilePage from "./ProfilePage";

// const user = {
// 	id: 1,
// 	firstName: "Yathu",
// 	lastName: "kala",
// 	userName: "yathu1",
// 	password: "123456",
// 	dob: "1998-11-22",
// 	email: "yathurshan.18@cse.mrt.ac.lk",
// 	country: "Sri Lanka",
// 	state: "Northern",
// 	mobileCountryCode: "+94",
// 	mobileNumber: 774501205,
// 	phoneCountryCode: "+94",
// 	phoneNumber: 2145012055,
// };

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: "",
		};
	}
	componentDidMount() {
		let token = localStorage.getItem("token");
		const requestOptions = {
			method: "GET",
			headers: { "Authorization": token },
		};

		// requst api request to get the user details
		fetch(process.env.REACT_APP_API_HOST + "/users", requestOptions)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.status && data.status === "success") {
					this.setState({ ...data.data, loading: false });
				} else if (data.error) {
					this.setState({ error: data.error });
					alert(data.error);
				}
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
	}

	render() {
		return <ProfilePage user={this.state} />;
	}
}

export default Profile;
