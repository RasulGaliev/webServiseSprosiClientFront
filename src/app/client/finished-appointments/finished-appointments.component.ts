import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";
import {NotificationService} from "../../service/notification.service";
import {Router} from "@angular/router";
import {Review} from "../../models/Review";
import {Appointment} from "../../models/Appointment";
@Component({
  selector: 'app-finished-appointments',
  templateUrl: './finished-appointments.component.html',
  styleUrls: ['./finished-appointments.component.css']
})
export class FinishedAppointmentsComponent implements OnInit{

  // @ts-ignore
  finishedAppointments: Appointment[]
  isFinishedAppsLoaded = false;
  // @ts-ignore
  reviewForm: FormGroup;
  // @ts-ignore
  createdReview: Review;
  isReviewCreated = false;

  constructor(private clientService: ClientService,
              private notificationService: NotificationService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.clientService.getFinishAppointments()
      .subscribe(data => {
        console.log(data);
        this.finishedAppointments = data;
        this.isFinishedAppsLoaded = true;
      });

    this.reviewForm = this.createdReviewForm();
  }

  createdReviewForm(): FormGroup{
    return this.fb.group({
      text: ['', Validators.compose([Validators.required])],
      estimation: ['', Validators.compose([Validators.required])]
    });
  }

  closeApp(id: number | undefined): void{
    if (id) {
      this.clientService.closeAppointment(id, {
        text: this.reviewForm.value.text,
        estimation: this.reviewForm.value.estimation
      }).subscribe(data => {
        console.log(data);
        this.createdReview = data;
        this.isReviewCreated = true;
        this.notificationService.showSnackBar('Appointment is successfully closed!');
      })
    }
  }
}
