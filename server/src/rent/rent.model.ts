import {
	Column,
	Model,
	Table,
	ForeignKey,
	BelongsTo,
} from 'sequelize-typescript'
import { CarModel } from 'src/car/car.model'
import { UserModel } from 'src/user/user.model'

@Table({ tableName: 'Rent', deletedAt: false, version: false })
export class RentModel extends Model<RentModel> {
	@Column({ type: 'bigint' })
	issueDate: number

	@Column({ type: 'bigint' })
	returnDate: number

	@Column({ allowNull: true, defaultValue: 0, type: 'float' })
	rating: number

	@Column
	cost: number

	@ForeignKey(() => CarModel)
	@Column
	carId: number

	@BelongsTo(() => CarModel)
	car: CarModel

	@ForeignKey(() => UserModel)
	@Column
	userId: number

	@BelongsTo(() => UserModel)
	user: UserModel
}
