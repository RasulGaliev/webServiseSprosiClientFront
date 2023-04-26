import { Component } from '@angular/core';
import {Client} from "../../models/Client";
import {TokenStorageService} from "../../service/token-storage.service";
import {ClientService} from "../../service/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
