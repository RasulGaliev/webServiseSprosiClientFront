import {Review} from "./Review";
import {Appointment} from "./Appointment";

export interface Psychologist{
  id: number,
  name: string,
  estimation: number,
  description?: string,
  price: number,
  sex?: string,
  photo: File,
  flag?: boolean,
  flagButton?: boolean,
  flagAdmin?: boolean,
  flagMoney?: boolean,
  flagReview?: boolean,
  reviewsCl: Review[],
  appointmentsCl?: Appointment[]
}
