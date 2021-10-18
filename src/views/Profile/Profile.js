import { Component } from "react";
import ProfilePage from "./ProfilePage";

// profile component for logged in users
class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: "",
		};
	}

    // fetch user details from api
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
                    if(data.err==="token not valid"){
                        localStorage.clear()
                        window.location.reload(false)
                    }
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
