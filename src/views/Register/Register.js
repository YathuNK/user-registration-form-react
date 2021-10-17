import { Component } from "react";
import RegisterPage from "./RegisterPage";

// validate email
const validateEmail = (email) => {
	var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
};

// validate username which olny have [a-z] [0-1] _
const validateUserName = (userName) => {
	var re = /^(\w)+$/;
	return re.test(userName);
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

class Register extends Component {
	constructor(props) {
		super(props);
		// defining user details with errors
		this.state = {
			firstName: "",
			lastName: "",
			userName: "",
			email: "",
			password: "",
			confirmPassword: "",
			dob: "",
			country: "",
			state: "",
			phoneCountryCode: "",
			phoneNumber: "",
			mobileCountryCode: "",
			mobileNumber: "",
			errors: {
				firstName: "",
				lastName: "",
				userName: "",
				email: "",
				password: "",
				confirmPassword: "",
				state: "",
				phoneNumber: "",
				mobileNumber: "",
				validForm: false,
			},
			error: "",
			showToast: false,
			loading: false,
		};
	}

	// validate user inputs
	validate = (name, value, errors) => {
		let changeValue = true;
		switch (name) {
			case "firstName":
				errors.firstName =
					value.length < 4
						? "First Name must be at least 4 characters long!"
						: "";
				break;
			case "lastName":
				errors.lastName =
					value.length < 4
						? "Last Name must be at least 4 characters long!"
						: "";
				break;
			case "userName":
                this.setState({error:""})
				errors.userName = validateUserName(value)
					? value.length < 4
						? "Username must be at least 4 characters long!"
						: ""
					: "Only leters, numbers and underscores are valid!";
				break;
			case "email":
				errors.email = validateEmail(value)
					? ""
					: "Email is not valid!";
				break;
			case "password":
				if (value.indexOf(" ") === -1) {
					errors.password =
						value.length < 6
							? "Password must be at least 6 characters long!"
							: "";
				} else {
					changeValue = false;
				}
				break;
			case "confirmPassword":
				errors.confirmPassword =
					value === this.state.password
						? ""
						: "Confirm password does not match with password";
				break;
			case "state":
				errors.state =
					value.length < 3
						? "state must be at least 3 characters long!"
						: "";
				break;
			case "mobileNumber":
				value = value.trim();
				if (isNaN(value)) {
					changeValue = false;
				} else {
					errors.mobileNumber =
						value.length < 8 || value.length > 13
							? "mobile number is not valid!"
							: "";
				}
				break;
			case "phoneNumber":
				value = value.trim();
				if (isNaN(value)) {
					changeValue = false;
				} else {
					errors.phoneNumber =
						value.length < 8 || value.length > 13
							? "phone number is not valid!"
							: "";
				}
				break;
			default:
				break;
		}
		if (
			errors.firstName ||
			errors.lastName ||
			errors.userName ||
			errors.password ||
			errors.confirmPassword ||
			errors.state ||
			errors.mobileNumber ||
			errors.email ||
			!this.state.mobileCountryCode
		) {
			errors.validForm = false;
		} else {
			errors.validForm = true;
		}
		if (changeValue) {
			this.setState({ errors, [name]: value });
		} else {
			this.setState({ errors });
		}
	};

	// handle user inputs change
	onChangeHandeler = (event) => {
		const { name, value } = event.target;
		let errors = this.state.errors;
		this.validate(name, value, errors);
	};

	// handle form submission
	submitHandler = (event) => {
		event.preventDefault();
		if (this.state.errors.validForm) {
			this.setState({ loading: true });
			let user = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				userName: this.state.userName,
				email: this.state.email,
				password: this.state.password,
				dob: this.state.dob,
				country: this.state.country,
				state: this.state.state,
				mobileCountryCode: this.state.mobileCountryCode,
				mobileNumber: this.state.mobileNumber,
				phoneCountryCode: this.state.phoneCountryCode,
				phoneNumber: this.state.phoneNumber,
			};

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...user }),
			};

			// requst api request to save the user
			fetch(process.env.REACT_APP_API_HOST + "/users", requestOptions)
				.then((res) => {
					return res.json();
				})
				.then(async (data) => {
					console.log(data);
					if (data.status && data.status === "success") {
						this.setState({ showToast: true, loading: false });
						await delay(2000);
						this.props.history.push("/login");
					} else if (data.error) {
						this.setState({ loading: false });
						this.setState({ error: data.error });
					}
				})
				.catch((err) => {
					this.setState({ loading: false });
					console.log(err);
					alert(err);
				});
			console.log(user);
		}
	};

	render() {
		return (
			<RegisterPage
				user={this.state}
				onChangeHandeler={this.onChangeHandeler}
				submitHandler={this.submitHandler}
			/>
		);
	}
}

export default Register;
