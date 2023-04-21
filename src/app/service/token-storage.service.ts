import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const CLIENT_KEY = 'auth-client';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    console.log(sessionStorage.getItem(TOKEN_KEY));
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(client: any): void {
    console.log(client);
    window.sessionStorage.removeItem(CLIENT_KEY);
    window.sessionStorage.setItem(CLIENT_KEY, JSON.stringify(client));
  }

  public getUser(): any{
    const item = sessionStorage.getItem(CLIENT_KEY);
    if (item) {
      console.log(JSON.parse(item));
      return JSON.parse(item);
    }
  }

  logOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }
}
