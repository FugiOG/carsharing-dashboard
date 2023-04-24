import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { User } from './decorations/user.decorator'
import { UserDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@User('id') id: string) {
		return this.userService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Put('profile')
	@HttpCode(200)
	@Auth()
	async updateProfile(@User('id') id: string, @Body() dto: UserDto) {
		return this.userService.update(id, dto)
	}

	@Get()
	@Auth('admin')
	@HttpCode(200)
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.userService.getAll(searchTerm)
	}

	@Get(':id')
	@Auth('admin')
	@HttpCode(200)
	async getUser(@Param('id') id: string) {
		return this.userService.byId(id)
	}

	@Delete(':id')
	@Auth('admin')
	@HttpCode(200)
	async deleteUser(@Param('id') id: string) {
		return this.userService.delete(id)
	}

	@Put(':id')
	@Auth()
	@HttpCode(200)
	async updateUser(@Param('id') userId: string, @Body() dto: UserDto) {
		return this.userService.update(userId, dto)
	}
}
