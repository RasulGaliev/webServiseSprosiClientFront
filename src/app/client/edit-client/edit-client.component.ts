import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotificationService} from "../../service/notification.service";
import {ClientService} from "../../service/client.service";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit{
  // @ts-ignore
  public profileEditForm: FormGroup;


  constructor(private dialogRef: MatDialogRef<EditClientComponent>,
              private fb: FormBuilder,
              private notificationService: NotificationService,
              // @ts-ignore
              @Inject(MAT_DIALOG_DATA) public data,
              private clientService: ClientService
              ) {
  }

  ngOnInit() {
    this.profileEditForm = this.createProfileForm();
  }

  createProfileForm(): FormGroup{
    return this.fb.group({
      name: [
        this.data.name,
        Validators.compose([Validators.required])
      ]
    })
  }

  submit(): void{
    this.clientService.updateClient(this.updateClient())
      .subscribe(() => {
        this.notificationService.showSnackBar('Client updated successfully');
        this.dialogRef.close();
      });
  }

  private updateClient(): Client{
    this.data.client.name = this.profileEditForm.value.name;
    return this.data.client;
  }

  closeDialog(): void{
    this.dialogRef.close();
  }

}
