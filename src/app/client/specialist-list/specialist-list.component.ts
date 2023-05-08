import {Component, OnInit} from '@angular/core';
import {Psychologist} from "../../models/Psychologist";
import {Client} from "../../models/Client";
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.css']
})
export class SpecialistListComponent implements OnInit {

  isPsysLoaded = false;
  // @ts-ignore
  psys: Psychologist[];
  isClientDataLoaded = false;
  // @ts-ignore
  client: Client;
  previewImgURL: any;
  size = 0;
  // @ts-ignore
  psyProfileImage: File;
// @ts-ignore


  // showMoreReview: Array<boolean> = Array(1000).fill(false);


  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getAllPsys()
      .subscribe(data => {
        console.log(data);
        this.size = data.length;
        this.psys = data;
        this.isPsysLoaded = true;
        for(let i = 0; i < this.size; i++) {
          if (this.psys[i].reviewsCl.length > 3)
            this.psys[i].flagButton = true;
          if (this.psys[i].name == "Admin")
            this.psys[i].flagAdmin = true;
        }
      })

    this.clientService.getCurrentClient()
      .subscribe(data => {
        this.client = data;
        this.isClientDataLoaded = true;
        this.psyProfileImage = data.photo;
      })

    const ratingItemList = document.querySelectorAll('.rating_item');
    const ratingItemArray = Array.prototype.slice.call(ratingItemList);
    ratingItemArray.forEach(item =>
      item.addEventListener('click', () => {
        const { itemValue} = item.dataset;
        item.parentNode.dataset.totalValue = itemValue; //psy.description +
      })
    );
  }

  formatImage(img: any): any{

    return 'data:image/jpeg;base64,' + img;
  }
}
