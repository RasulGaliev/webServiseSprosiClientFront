import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../service/client.service";
import {NotificationService} from "../../service/notification.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Appointment} from "../../models/Appointment";
import {Psychologist} from "../../models/Psychologist";

@Component({
  selector: 'app-psy',
  templateUrl: './psy.component.html',
  styleUrls: ['./psy.component.css']
})
export class PsyComponent implements OnInit{

  // @ts-ignore
  id: number;
  // @ts-ignore
  psy: Psychologist;
  isPsyLoaded = false;
  // @ts-ignore
  createdAppointment: Appointment;
  previewImgURL: any;
  // @ts-ignore
  psyProfileImage: File;

  // size: 0 = 0;
  newDate: any;
  freeDate: Date[] = [new Date()];
  // @ts-ignore
  appointments: Appointment[];
  isDateLoaded = false;


  constructor(private clientService: ClientService,
              private notificationService: NotificationService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];
      });
    this.clientService.getPsyById(this.id)
      .subscribe(data => {
        console.log(data);
        this.psy = data;
        this.psyProfileImage = data.photo;
        this.appointments = data.appointmentsCl;
        console.log(this.appointments);
        this.isPsyLoaded = true;
        // this.size = data.length;
        // for(let i = 0; i < this.size; i++) {
        //   if (this.psys[i].reviewsCl.length > 3)
        //     this.psys[i].flagButton = true;
        //   if (this.psys[i].name == "Admin")
        //     this.psys[i].flagAdmin = true;
        //   if (this.psys[i].reviewsCl.length > 0)
        //     this.psys[i].flagReview = true;
        // }
      });
  }

  createApp(id: number, hour: number): void{
    if (id) {
      this.newDate.setHours(hour);
      this.clientService.createAppointment(id, {
        date: this.newDate,
        psyId: id
      }).subscribe(data => {
        console.log(data);
        this.createdAppointment = data;
        this.isPsyLoaded = true;
        this.notificationService.showSnackBar("Appointment is created!");
      })
    }
  }

  formatImage(img: any): any{
    if(img == null){
      return null;
    }

    return 'data:image/jpeg;base64,' + img;
  }

  dateChanged($event: any){
    this.freeDate.splice(0, this.freeDate.length);
    this.newDate = $event.target.value;
    console.log(this.newDate);
    console.log(this.newDate.getYear(), this.newDate.getMonth(), this.newDate.getDate());
    for (let i = 0; i < 9; i++) {
      let check = true;
      let nDate = new Date(this.newDate);
      nDate.setHours(i+9);
      for (const appoint of this.appointments) {
        let d: Date = new Date(appoint.date);
        if (d.getTime() == nDate.getTime()){
          check = false;
          break;
        }
      }
      if (check) {
        this.freeDate.push(nDate);
      }
    }
    console.log(this.freeDate);
    this.isDateLoaded = true;
  }


}
