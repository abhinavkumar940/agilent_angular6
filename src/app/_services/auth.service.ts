import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {
    const token = localStorage.getItem("authToken");

    if (token) {
      this.loggedIn = true;
    }
  }

  private loggedIn = false;

  login(username) {
    localStorage.setItem("authToken", username);

    this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem("authToken");

    this.loggedIn = false;
  }

  isLoggedIn() {
    return !!localStorage.getItem("authToken");
  }
}
