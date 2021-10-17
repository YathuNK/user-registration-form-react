import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../views/Register/Register";

describe("Register component", () => {
	it("Register page render properly", () => {
		render(<Register />);

		// check for register heding render
		expect(
			screen.getByRole("heading", { name: /register/i })
		).toBeInTheDocument();

		// check for first name input field and label render
		expect(screen.getByText(/first name/i)).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", {
				name: /first name/i,
			})
		).toBeInTheDocument();

		// check for last name input field and label render
		expect(screen.getByText(/last name/i)).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", {
				name: /first name/i,
			})
		).toBeInTheDocument();

		expect(screen.getByText(/user name/i)).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", { name: /user name/i })
		).toBeInTheDocument();

		expect(screen.getByText(/email/i)).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", { name: /email/i })
		).toBeInTheDocument();

		expect(screen.getByText(/date of birth/i)).toBeInTheDocument();

		expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();

		expect(screen.getByText(/country/i)).toBeInTheDocument();

		expect(
			screen.getByRole("combobox", { name: /country/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", { name: /state/i })
		).toBeInTheDocument();

		expect(screen.getByText(/mobile number/i)).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", { name: /mobile number/i })
		).toBeInTheDocument();

		expect(screen.getByText(/phone number \(opt\.\)/i)).toBeInTheDocument();

		expect(
			screen.getByRole("textbox", { name: /phone number \(opt\.\)/i })
		).toBeInTheDocument();

		const registerButton = screen.getByRole("button", {
			name: /register/i,
		});

		expect(registerButton).toBeInTheDocument();
		expect(registerButton).toBeEnabled();
	});

	it("Register fields validation", () => {
		render(<Register />);

		// check for first name validation error
		const firstNameInputField = screen.getByRole("textbox", {
			name: /first name/i,
		});
		userEvent.type(firstNameInputField, "fir");
		const firstNameError = screen.getByText(
			/first name must be at least 4 characters long!/i
		);
		expect(firstNameError).toBeInTheDocument();
		userEvent.type(firstNameInputField, "first name");
		expect(firstNameError).not.toBeInTheDocument();

		// check for last name validation error
		const lastNameInputField = screen.getByRole("textbox", {
			name: /last name/i,
		});
		userEvent.type(lastNameInputField, "las");
		const lastNameError = screen.getByText(
			/last name must be at least 4 characters long!/i
		);
		expect(lastNameError).toBeInTheDocument();
		userEvent.type(lastNameInputField, "last name");
		expect(lastNameError).not.toBeInTheDocument();

		// check for username validation error
		const userNameInputField = screen.getByRole("textbox", {
			name: /user name/i,
		});
		userEvent.type(userNameInputField, "use");
		const userNameError = screen.getByText(
			/username must be at least 4 characters long!/i
		);
		expect(userNameError).toBeInTheDocument();
		userEvent.type(userNameInputField, "user");
		expect(userNameError).not.toBeInTheDocument();

		// check for Email validation error
		const emailInputField = screen.getByRole("textbox", { name: /email/i });
		userEvent.type(emailInputField, "somee");
		const emailError = screen.getByText(/email is not valid!/i);
		expect(emailError).toBeInTheDocument();
		userEvent.type(emailInputField, "some@gmail.com");
		expect(emailError).not.toBeInTheDocument();

        // check for mobile number validation error
		const mobileNumberInputField = screen.getByRole('textbox', {  name: /mobile number/i})
		userEvent.type(mobileNumberInputField, "123");
		const mobileNumberError =screen.getByText(/mobile number is not valid!/i)
		expect(mobileNumberError).toBeInTheDocument();
		userEvent.type(mobileNumberInputField, "123456789");
		expect(mobileNumberError).not.toBeInTheDocument();
	});
});
