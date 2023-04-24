import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import { IAuthFields } from '@/components/ui/Layout/header/auth-form/auth-form.interface'
import { validEmail } from '@/components/ui/Layout/header/auth-form/auth.constants'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import styles from './Auth.module.scss'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<IAuthFields>({ mode: 'onChange' })

	const { login, logout, register: registerUser } = useActions()

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') login(data)
		if (type === 'register') registerUser(data)
	}
	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.heading}>Authentication</div>
				<Field
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter a valid email addres',
						},
					})}
					placeholder="Email"
					error={errors.email}
				/>
				<Field
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Min length should more 6 symbols',
						},
					})}
					type="password"
					placeholder="Password"
					error={errors.password}
				/>
				<div className={styles['btn-submit']}>
					<Button onClick={() => setType('login')}>Login</Button>
				</div>
				<button className={styles.register} onClick={() => setType('register')}>
					Register
				</button>
			</form>
		</div>
	)
}

export default Auth
