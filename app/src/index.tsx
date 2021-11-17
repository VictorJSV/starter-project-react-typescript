import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Login } from './pages/Login'
import { Configurations } from './pages/Configurations'
import { Reports } from './pages/Reports'
import { Dashboard } from './pages/Dashboard'
import { AuthProvider } from './pages/Login/provider'

const theme = extendTheme({
	fonts: {
		body: 'Montserrat, sans-serif',
		heading: 'Montserrat, serif',
	},
	colors: {
		brand: {
			100: '#F6C300',
		},
	},
	components: {
		Button: {
			variants: {
				solid: {
					bg: 'black',
					color: 'white',
					_hover: {
						bg: 'gray.800',
						_disabled: {
							bg: 'gray.800',
						}
					},
					_active: {
						bg: 'gray.700',
					},
				},
			},
		},
	},
})

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					{/* <RequireAuth>
						<Dashboard />
					</RequireAuth> */}
					<Route element={<Dashboard />}>
						<Route path="reports" element={<Reports />} />
						<Route path="configurations" element={<Configurations />} />
					</Route>
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	</ChakraProvider>,
	document.querySelector('#root')
)
