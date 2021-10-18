import { Component } from "react";
import LoginPage from "./LoginPage";

// Login class Component
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			password: "",
			error: "",
		};
	}

    // handler user inputs
	onChangeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

    // handle submit
    // request to api and handle login functionalities
	submitHandler = (event) => {
		event.preventDefault();
		if (this.state.userName && this.state.password) {
			let user = {
				userName: this.state.userName,
				password: this.state.password,
			};

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...user }),
			};

			// requst api request to login the user
			fetch(
				process.env.REACT_APP_API_HOST + "/users/login",
				requestOptions
			)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
					if (data.status && data.status === "success") {
                        localStorage.setItem('token', data.data.token);
						window.location.reload(false);
					} else if (data.error) {
						this.setState({ error: data.error });
					}
				})
				.catch((err) => {
					console.log(err);
					alert(err);
				});
			console.log(user);
		}
	};

	render() {
		return (
			<LoginPage
				user={this.state}
				onChangeHandler={this.onChangeHandler}
				submitHandler={this.submitHandler}
			/>
		);
	}
}

export default Login;
