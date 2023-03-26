import { Column, Model, Table, HasMany } from 'sequelize-typescript'
import { RentModel } from 'src/rent/rent.model'

@Table({ tableName: 'Car', deletedAt: false, version: false })
export class CarModel extends Model {
	@Column
	brand: string

	@Column({ allowNull: true })
	rating: number

	@Column
	fullPrice: number

	@Column
	rentalPrice: number

	@Column({ field: 'image_path' })
	imagePath: string

	@HasMany(() => RentModel)
	rents: RentModel[]
}
