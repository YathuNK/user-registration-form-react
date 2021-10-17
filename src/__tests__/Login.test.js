import { render, screen } from "@testing-library/react";
import Login from "../views/Login/Login";

describe("Login component", () => {
	it("Login page render properly", () => {
		render(<Login />);

		// check for login heding render
		expect(
			screen.getByRole("heading", { name: /login/i })
		).toBeInTheDocument();

		// check for username input field and label render
		expect(screen.getByText(/username/i)).toBeInTheDocument();

		expect(
			screen.getByPlaceholderText(/username/i)
		).toBeInTheDocument();

		// check for password input field and label render
		expect(screen.getByText(/password/i)).toBeInTheDocument();

		expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

        // check submit button render
		const loginButton = screen.getByRole("button", { name: /login/i });

		expect(loginButton).toBeInTheDocument();
		expect(loginButton).toBeEnabled();
	});
});
