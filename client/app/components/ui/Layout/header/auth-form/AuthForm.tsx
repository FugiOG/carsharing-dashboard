import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaRegUserCircle } from 'react-icons/fa'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import UserAvatar from '@/components/ui/user-avatar/UserAvatar'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import { IAuthResponse } from '@/shared/interfaces/user.interface'

import { AuthService } from '@/services/auth/auth.service'

import { FADE_IN, menuAnimation } from '@/utils/animation/fade'

import styles from './AuthForm.module.scss'
import { IAuthFields } from './auth-form.interface'
import { validEmail } from './auth.constants'

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<IAuthFields>({ mode: 'onChange' })

	const { user: currentUser } = useAuth()
	const [user, setUser] = useState<any>()

	useEffect(() => {
		setUser(currentUser)
	}, [currentUser])
	const { login, logout, register: registerUser } = useActions()

	// const { mutate: loginSync } = useMutation(
	// 	['login'],
	// 	(data: IAuthFields) => AuthService.login(data.email, data.password),
	// 	{
	// 		onSuccess: (data) => {
	// 			if (setUser) setUser(data.user)
	// 			setIsShow(false)
	// 			reset()
	// 		},
	// 	}
	// )

	// const { mutate: registerSync } = useMutation(
	// 	['register'],
	// 	(data: IAuthFields) => AuthService.register(data.email, data.password),
	// 	{
	// 		onSuccess: (data) => {
	// 			if (setUser) setUser(data.user)
	// 			setIsShow(false)
	// 			reset()
	// 		},
	// 	}
	// )

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') login(data)
		if (type === 'register') registerUser(data)
	}
	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar
					title="dashboard"
					link="/dashboard"
					avatarPath={user.avatarPath || ''}
				/>
			) : (
				<button onClick={() => setIsShow(!isShow)} className={styles.button}>
					<FaRegUserCircle />
				</button>
			)}
			<motion.div
				initial={false}
				animate={isShow ? 'open' : 'closed'}
				variants={menuAnimation}
			>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			</motion.div>
		</div>
	)
}

export default AuthForm
