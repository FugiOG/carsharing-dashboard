import { Column, Model, Table, HasMany } from 'sequelize-typescript'
import { RentModel } from 'src/rent/rent.model'

@Table({ tableName: 'Car', deletedAt: false, version: false })
export class CarModel extends Model<CarModel> {
	@Column
	brand: string

	@Column
	model: string

	@Column({ defaultValue: 0 })
	fullPrice: number

	@Column({ defaultValue: 0 })
	rentalPrice: number

	@Column({ field: 'image_path' })
	imagePath: string

	@HasMany(() => RentModel)
	rents: RentModel[]
}
