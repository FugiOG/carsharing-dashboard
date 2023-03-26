import { Column, Model, Table, HasMany } from 'sequelize-typescript'
import { RentModel } from 'src/rent/rent.model'

@Table({ tableName: 'User', deletedAt: false, version: false })
export class UserModel extends Model {
	@Column
	name: string

	@Column({ unique: true })
	email: string

	@Column({ field: 'avatar_path' })
	avatarPath: string

	@HasMany(() => RentModel)
	rents: RentModel[]
}
