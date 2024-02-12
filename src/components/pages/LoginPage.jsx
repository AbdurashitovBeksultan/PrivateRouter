import scss from './login.module.scss'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = 'https://api.elchocrud.pro/api/v1/15bd4ec0de0971b95cae7ecdbb117e28/user';

const LoginPage = () => {
	const navigate = useNavigate();
	const [userLogin, setUserLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleAuth = () => {
		const formUser = {
			login: userLogin,
			password: userPassword,
		};
		getUser(formUser);
	};

	const getUser = async (formUser) => {
		try {
			const response = await axios.get(url);
			const responseData = await response.data;

			const findUser = responseData.find(
				(item) =>
					item.login === formUser.login && item.password === formUser.password
			);

			if (findUser) {
				localStorage.setItem("isAuth", findUser._id);
				navigate("/");
			} else {
				alert("user not found");
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="container">
			<h1 className={scss.title}>login</h1>
			<input
				type="text"
				placeholder="login"
				value={userLogin}
				className={scss.input}
				onChange={(e) => {
					setUserLogin(e.target.value);
				}}
			/>
			<input
				type="password"
				placeholder="password"
				value={userPassword}
				className={scss.input}
				onChange={(e) => {
					setUserPassword(e.target.value);
				}}
			/>
			<button className={scss.button} onClick={handleAuth}>login</button>
		</div>
	);
};

export default LoginPage;
