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
import { Auth } from 'src/user/decorations/auth.decorator'
import { CarService } from './car.service'
import { CarDto } from './dto/car.dto'

@Controller('car')
export class CarController {
	constructor(private readonly carService: CarService) {}

	@Get()
	@HttpCode(200)
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.carService.getAll(searchTerm)
	}

	@Get(':id')
	async getCar(@Param('id') id: string) {
		return this.carService.byId(id)
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create() {
		return this.carService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth()
	async update(@Param('id') id: string, @Body() dto: CarDto) {
		return this.carService.update(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	@Auth()
	async delete(@Param('id') id: string) {
		return this.carService.delete(id)
	}
}
