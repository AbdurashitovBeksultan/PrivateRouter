import scss from "./Layout.module.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/registration" element={<RegistrationPage />} />
				</Routes>
			</main>
		</div>
	);
};

export default Layout;
