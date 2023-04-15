import { ICar } from '@/shared/interfaces/car.interface'

export interface ICarEditInput extends Omit<ICar, 'id'> {}
