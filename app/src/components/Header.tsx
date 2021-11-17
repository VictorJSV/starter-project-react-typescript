import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../pages/Login/provider'
import {
	Box,
	Flex,
	Spacer,
	Heading,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MdLogout } from 'react-icons/md'

export const Header = ({ title }) => {
	let auth = useAuth()
	let navigate = useNavigate()
	return (	
	<Flex alignItems="center" pb="4">
		<Box>
			<Heading size="lg">{title}</Heading>
		</Box>
		<Spacer />
		<Box>
			<Menu>
				<MenuButton>
					Julio Pangoncio <ChevronDownIcon />
				</MenuButton>
				<MenuList>
					<MenuItem icon={<MdLogout />} onClick={() => {
						auth.signout(() => navigate('/'))
					}}>Cerrar sesión</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	</Flex>
)}
