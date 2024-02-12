import scss from './home.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

const url =
	'https://api.elchocrud.pro/api/v1/15bd4ec0de0971b95cae7ecdbb117e28/user'

const HomePage = () => {
	const [user, setUsers] = useState([])

	const getUsers = async () => {
		const response = await axios.get(url)
		setUsers(response.data)
	}
	useEffect(() => {
		getUsers()
	}, [])

	return (
		<div>
			{user.map((el) => {
				return (
					<div className={scss.container}>
						<div className={scss.userInfoBox}>
							<h3 className={scss.login}>LOGIN: {el.login}</h3>
							<p className={scss.password}>
								PASSWORD: {el.password}
							</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default HomePage
