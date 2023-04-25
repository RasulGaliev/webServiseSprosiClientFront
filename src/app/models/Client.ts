import {Appointment} from "./Appointment";

export interface Client{
  id?: number,
  name: string,
  email?: string,
  password?: string,
  confirmedPassword?: string,
  photo?: File,
  appointmentsCl?: Appointment[]
}
