import * as React from 'react'
import { MdSettings, MdOutlineDocumentScanner } from 'react-icons/md'
import { Flex, Link, Icon, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
	let navigate = useNavigate()
	return (
		<VStack mt="5">
			<NavbarItem
				title="Configuraciones"
				onGoPage={() => {
					navigate('configurations')
				}}
				nameIcon={MdSettings}
			/>
			<NavbarItem
				title="Reportes"
				onGoPage={() => {
					navigate('reports')
				}}
				nameIcon={MdOutlineDocumentScanner}
			/>
		</VStack>
	)
}

const NavbarItem = ({ title, nameIcon, onGoPage }) => (
	<Link
		w="100%"
		color="white"
		p={3}
		_hover={{ textDecor: 'none', backgroundColor: 'gray.700' }}
		onClick={onGoPage}
		rounded={4}
	>
		<Flex alignItems="center">
			<Icon as={nameIcon} />
			<Text ml={3}>{title}</Text>
		</Flex>
	</Link>
)
