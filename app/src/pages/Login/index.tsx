import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './provider'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	Box,
	Heading,
	Input,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Center,
	useToast,
} from '@chakra-ui/react'

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Ingrese un correo válido')
		.max(50, 'Número máximo de caracteres: 50')
		.required('Campo requerido'),
	password: yup
		.string()
		.max(50, 'Número máximo de caracteres: 50')
		.required('Campo requerido'),
})

export const Login = () => (
	<Center height="100vh">
		<Box background="white" p={12} rounded={6} boxShadow="base">
			<Heading mb={6}>Iniciar Sesión</Heading>
			<Form />
		</Box>
	</Center>
)

const Form = () => {
	let navigate = useNavigate()
	let auth = useAuth()
	const [submitting, setSubmitting] = React.useState(false)

	const toast = useToast()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		reValidateMode: 'onChange',
		resolver: yupResolver(schema),
		shouldFocusError: false,
	})

	const onSubmit = (values) => {
		setSubmitting(true)
		auth.signin(
			values,
			() => {
				setSubmitting(false)
				navigate('/configurations')
			},
			(error) => {
				setSubmitting(false)
				toast({
					title: error,
					status: 'error',
					duration: 5000,
					isClosable: true,
				})
			}
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={errors.email?.message} mb={6}>
				<FormLabel htmlFor="email">Usuario</FormLabel>
				<Input
					{...register('email')}
					name="email"
					variant="outline"
					background="white"
				/>
				<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={errors.password?.message} mb={6}>
				<FormLabel>Contraseña</FormLabel>
				<Input
					{...register('password')}
					name="password"
					type="password"
					variant="outline"
					background="white"
				/>
				<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
			</FormControl>
			<Button type="submit" isLoading={submitting} width="100%">
				Ingresar
			</Button>
		</form>
	)
}
