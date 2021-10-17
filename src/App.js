import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import PrivateRoute from "./common/PrivateRoute";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import PublicRoute from "./common/PublicRoute";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" component={Home} exact />
				<PublicRoute path="/register" component={Register} exact />
				<PublicRoute path="/login" component={Login} exact />
				<PrivateRoute path="/profile" component={Profile} exact />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
