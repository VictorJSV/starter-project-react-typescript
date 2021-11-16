import * as React from 'react'
import {
	Navigate,
	useLocation,
} from 'react-router-dom'
import axios from 'axios'
import { getConfig } from '../../env'

const AuthContext = React.createContext(null!)
export const useAuth = () => {
  return React.useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	let [user, setUser] = React.useState(null)

	let signin = async (values, callbackSuccess, callbackFailure) => {
		try {
			const { status, data } = await axios({
				method: 'POST',
				url: getConfig('API_LOGIN'),
				data: values,
			})
			if (status === 200 && data.code === 100) {
				//console.log(data)
				setUser(data.data.userId)
				callbackSuccess()
				return
			}
			throw 'Error en el servidor'
		} catch (error) {
			callbackFailure(error)
		}
	}

	let signout = (callback) => {
		setUser(null)
		callback()
	}
	return (
		<AuthContext.Provider value={{ user, signin, signout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const RequireAuth = ({ children }) => {
	let auth = React.useContext(AuthContext)
	let location = useLocation()
	if (!auth.user) {
		return <Navigate to="/" state={{ from: location }} />
	}
	return children
}