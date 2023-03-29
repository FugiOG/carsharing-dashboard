import { applyDecorators, UseGuards } from '@nestjs/common'
import { OnlyAdminGuard } from 'src/guards/admin.guard'
import { JwtAuthGuard } from 'src/guards/jwt.guard'
import { Role } from '../auth.interface'

export const Auth = (role: Role = 'user') =>
	applyDecorators(
		role === 'admin'
			? UseGuards(JwtAuthGuard, OnlyAdminGuard)
			: UseGuards(JwtAuthGuard)
	)
