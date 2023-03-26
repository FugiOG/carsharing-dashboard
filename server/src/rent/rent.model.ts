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
export class RentModel extends Model {
	// user: IUser
	// car: ICar
	@Column
	issueDate: Date

	@Column
	returnDate: Date

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
