import * as React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Routes,
  Route,
} from "react-router-dom"
import { Login } from './pages/Login'

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Login/>}/>
		</Routes>
	</Router>
)

ReactDOM.render(<App/>, document.querySelector('#root'))