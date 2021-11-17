import * as React from 'react'
import {
	ModalContent,
	ModalOverlay,
	Modal,
	useDisclosure,
} from '@chakra-ui/react'

export const ButtonModal = ({ButtonComponent, ModalComponent}) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			{ButtonComponent(onOpen)}
			<Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
				<ModalOverlay />
				<ModalContent>
					{ModalComponent(onClose)}
				</ModalContent>
			</Modal>
		</>
	)
}
