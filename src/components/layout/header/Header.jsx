import scss from './header.module.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const url =
	'https://api.elchocrud.pro/api/v1/15bd4ec0de0971b95cae7ecdbb117e28/user'

const Header = () => {
	const navigate = useNavigate()
	const [userProfile, setUserProfile] = useState({})
	const link = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Login',
			href: '/login',
		},
		{
			name: 'Registration',
			href: '/registration',
		},
	]

	const getUserId = localStorage.getItem('isAuth')

	const getUserProfile = async () => {
		try {
			const response = await axios.get(url)
			const responseData = await response.data

			if (getUserId) {
				const findUser = responseData.find(
					(item) => item._id === +getUserId,
				)
				setUserProfile(findUser)
			} else {
				console.log('user is not auth')
			}
		} catch (e) {
			console.error(e)
		}
	}

	const removeUserSession = () => {
		localStorage.removeItem('isAuth')
		setUserProfile({})
		navigate('/login')
	}

	useEffect(() => {
		getUserProfile()
	}, [])

	return (
		<header className={scss.header}>
			<h1 className={scss.title}>Welkome </h1>
			<div className={scss.links}>
				{link.map((item, index) => (
					<p className={scss.link}>
						<Link key={index} to={item.href}>
							{item.name}
						</Link>
					</p>
				))}
			</div>
			<button className={scss.exit} onClick={removeUserSession}>
				Exit
			</button>
		</header>
	)
}

export default Header
