import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {ClientService} from "../../service/client.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NotificationService} from "../../service/notification.service";
import {EditClientComponent} from "../edit-client/edit-client.component";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  // @ts-ignore
  client: Client;
  // @ts-ignore
  selectedFile: File;
  // @ts-ignore
  clientProfileImage: File;
  isClientDataLoaded = false;
  previewImgURL: any;

  constructor(private tokenService: TokenStorageService,
              private clientService: ClientService,
              private dialog: MatDialog,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.clientService.getCurrentClient()
      .subscribe(data=>{
        this.client = data;
        this.clientProfileImage = data.photo;
        this.isClientDataLoaded = true;
      });
  }

  onFileSelected(event: any): void{
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.previewImgURL = reader.result;
    };
  }

  openEditDialog(): void{
    const dialogClientEditConfig = new MatDialogConfig();
    dialogClientEditConfig.width = '400px';
    dialogClientEditConfig.data = {
      client: this.client
    };
    this.dialog.open(EditClientComponent, dialogClientEditConfig);
  }

  formatImage(img: any): any{
    if(img == null){
      return null;
    }

    return 'data:image/jpeg;base64,' + img;
  }

  onUpload(): void{
    if(this.selectedFile != null){
      this.clientService.uploadPhoto(this.selectedFile)
        .subscribe(()=>{
          this.notificationService.showSnackBar('Profile Photo upload Successfully');
        })
    }
  }

}
