import * as React from 'react'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
	return (
		<div>
			<div>
				<h1>Navbar</h1>
				<a href="/configurations">Configuraciones</a>
				<a href="/reports">Reportes</a>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
}
