import { render, screen } from "@testing-library/react";
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

});
