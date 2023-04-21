import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {Router} from "@angular/router";
import {ClientService} from "../../service/client.service";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  isLoggedIn = false;
  isDataLoaded = false;

  // @ts-ignore
  client: Client;

  constructor(private tokenService: TokenStorageService,
              private clientService: ClientService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();

    if(this.isLoggedIn) {
      this.clientService.getCurrentClient()
        .subscribe(data => {
          this.client = data;
          this.isDataLoaded = true;
        })
    }
  }

  logout(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }


}
