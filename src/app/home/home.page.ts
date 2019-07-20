import { Component } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Platform } from "@ionic/angular";

declare var gapi;

import * as firebase from "firebase";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    private platform: Platform,
    public afAuth: AngularFireAuth,
    private httpClient: HttpClient
  ) {
    this.platform.ready().then(() => {
      console.log("ok");
      gapi.load("client", this.start);

      // gapi.load("client", () => {
      //   console.log("loaded client");

      //   //this.login();

      //   gapi.client
      //     .init({
      //       apiKey: "AIzaSyAoECXy7olOa0lZk7lP_yv9WWLOD8OyASc",
      //       clientId:
      //         "874036221463-40v1dfqisia5tqtehhf2nsjuf04lam9j.apps.googleusercontent.com",
      //       discoveryDocs: [
      //         "https://developers.google.com/apis-explorer/?hl=pt_BR#search/directory/admin/directory_v1/directory.members.hasMember?groupKey=02jxsxqh1ewkirf&memberKey=silvio.limeira%2540gedu.demo.mstech.com.br&_h=6&"
      //       ],
      //       scope: [
      //         "https://www.googleapis.com/auth/admin.directory.group",
      //         "https://www.googleapis.com/auth/admin.directory.group",
      //         "https://www.googleapis.com/auth/admin.directory.group",
      //         "https://www.googleapis.com/auth/admin.directory.group.readonly"
      //       ]
      //     })
      //     .then(function() {
      //       gapi.auth2
      //         .getAuthInstance()
      //         .signIn()
      //         .then(
      //           function() {
      //             console.log("signin");
      //           },
      //           function(error) {
      //             if (error) alert("please allow popup for this app");
      //           }
      //         );
      //     });

      //   const events = gapi.client.calendar.events.list({
      //     calendarId: "primary"
      //   });
      // });
    });
  }

  // async login() {
  //   const googleAuth = gapi.auth2.getAuthInstance();
  //   const googleUser = await googleAuth.signIn();

  //   const token = googleUser.getAuthResponse().id_token;

  //   const credential = firebase.auth.GoogleAuthProvider.credential(token);

  //   await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  // }

  signOut() {
    this.afAuth.auth.confirmPasswordReset;
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

  start() {
    // 2. Initialize the JavaScript client library.
    gapi.client
      .init({
        apiKey: "AIzaSyAoECXy7olOa0lZk7lP_yv9WWLOD8OyASc",
        clientId:
          "874036221463-40v1dfqisia5tqtehhf2nsjuf04lam9j.apps.googleusercontent.com",
        discoveryDocs: [
          "https://developers.google.com/apis-explorer/?hl=pt_BR#search/directory/admin/directory_v1/directory.members.hasMember?groupKey=02jxsxqh1ewkirf&memberKey=silvio.limeira%2540gedu.demo.mstech.com.br&_h=6&"
        ],
        scope: [
          "https://www.googleapis.com/auth/admin.directory.group",
          "https://www.googleapis.com/auth/admin.directory.group",
          "https://www.googleapis.com/auth/admin.directory.group",
          "https://www.googleapis.com/auth/admin.directory.group.readonly"
        ]
      })
      .then(function() {
        // 3. Initialize and make the API request.
        return gapi.client.request({
          path: "https://people.googleapis.com/v1/people/me"
        });
      })
      .then(
        function(response) {
          console.log(response.result);
        },
        function(reason) {
          console.log("Error: " + reason.token);
        }
      );
  }
  // 1. Load the JavaScript client library.
}
