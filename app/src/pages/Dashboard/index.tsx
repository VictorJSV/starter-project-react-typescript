import * as React from 'react'
import { Outlet } from 'react-router-dom'
import {
	Box,
	Flex,
	Center,
	Divider,
	Heading,
} from '@chakra-ui/react'
import { Navbar } from '../../components/Navbar'

export const Dashboard = () => {
	return (
		<Flex>
			<Box bg="gray.900" w="300px" height="100vh" p={5}>
				<Center>
				</Center>
				<Divider />
				<Heading size="sm" color="gray.500" textAlign="center" mt="4" fontWeight="normal">
					MY DEMO
				</Heading>
				<Navbar/>
			</Box>
			<Box bg="gray.50" flex="1" height="100vh" pt="6" pl="10" pr="10" pb="10">
				<Outlet />
			</Box>
		</Flex>
	)
}
