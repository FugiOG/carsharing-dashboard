import { Column, Model, Table, HasMany } from 'sequelize-typescript'
import { RentModel } from 'src/rent/rent.model'

@Table({
	tableName: 'User',
	deletedAt: false,
	version: false,
	defaultScope: {
		attributes: { exclude: ['password'] },
	},
})
export class UserModel extends Model<UserModel, UserModel> {
	@Column
	name: string

	@Column({ unique: true })
	email: string

	@Column({ defaultValue: 'Moscow' })
	city: string

	@Column
	password: string

	@Column({ field: 'avatar_path' })
	avatarPath: string

	@HasMany(() => RentModel)
	rents: RentModel[]
}
