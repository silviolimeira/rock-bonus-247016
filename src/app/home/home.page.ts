import { Component } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(public afAuth: AngularFireAuth, private httpClient: HttpClient) {}

  signOut() {
    this.afAuth.auth.confirmPasswordReset;
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }
}
