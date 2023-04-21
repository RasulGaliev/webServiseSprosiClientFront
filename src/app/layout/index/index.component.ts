import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../service/client.service";
import {Psychologist} from "../../models/Psychologist";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  isPsysLoaded = false;
  // @ts-ignore
  psys: Psychologist[];
  isClientDataLoaded = false;
  // @ts-ignore
  client: Client;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getAllPsys()
      .subscribe(data => {
        console.log(data);
        this.psys = data;
        this.isPsysLoaded = true;
      })

    this.clientService.getCurrentClient()
      .subscribe(data => {
        this.client = data;
        this.isClientDataLoaded = true;
      })
  }

  formatImage(img: any): any{
    if(img == null){
      return null;
    }

    return 'data:image/jpeg;base64,' + img;
  }



}
