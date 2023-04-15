import { IRent } from '@/shared/interfaces/rent.interface'

export interface IRentEditInput extends Omit<IRent, 'id'> {}
