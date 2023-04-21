import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../service/client.service";
import {NotificationService} from "../../service/notification.service";
import {Appointment} from "../../models/Appointment";

@Component({
  selector: 'app-client-appointments',
  templateUrl: './client-appointments.component.html',
  styleUrls: ['./client-appointments.component.css']
})
export class ClientAppointmentsComponent implements OnInit{
  // @ts-ignore
  appointments: Appointment[];
  isClientAppointmentsLoaded = false;

  constructor(private clientService: ClientService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.clientService.getCurrentAppointments()
      .subscribe(data => {
        console.log(data);
        this.appointments = data;
        this.isClientAppointmentsLoaded = true;
      })
  }


}
