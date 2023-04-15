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
import { User } from 'src/user/decorations/user.decorator'
import { RentDto } from './rent.dto'
import { RentService } from './rent.service'
@Controller('rent')
export class RentController {
	constructor(private readonly rentService: RentService) {}

	@Get()
	@Auth('admin')
	@HttpCode(200)
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.rentService.getAll(searchTerm)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createRent() {
		return this.rentService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async update(@Param('id') id: string, @Body() dto: RentDto) {
		return this.rentService.update(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	@Auth('admin')
	async delete(@Param('id') id: string) {
		return this.rentService.delete(id)
	}
}
