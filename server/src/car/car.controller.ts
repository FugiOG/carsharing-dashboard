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
import { CarService } from './car.service'
import { CarDto } from './dto/car.dto'

@Controller('car')
export class CarController {
	constructor(private readonly carService: CarService) {}

	@Get()
	@Auth()
	@HttpCode(200)
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.carService.getAll(searchTerm)
	}

	@Get(':id')
	@Auth()
	async getCar(@Param('id') id: string) {
		return this.carService.byId(id)
	}

	@HttpCode(200)
	@Post()
	@Auth('admin')
	async create() {
		return this.carService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async update(@Param('id') id: string, @Body() dto: CarDto) {
		return this.carService.update(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	@Auth('admin')
	async delete(@Param('id') id: string) {
		return this.carService.delete(id)
	}
}
