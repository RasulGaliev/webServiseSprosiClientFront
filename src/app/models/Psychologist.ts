import {Review} from "./Review";
import {Appointment} from "./Appointment";

export interface Psychologist{
  id: number,
  name: string,
  estimation: number,
  description?: string,
  photo: File,

  reviewsCl?: Review[],
  appointmentsCl?: Appointment[]
}
