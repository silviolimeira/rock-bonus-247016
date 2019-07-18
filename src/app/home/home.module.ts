import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

import { FirebaseUIModule } from "firebaseui-angular";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,

    CommonModule,
    FormsModule,
    IonicModule,

    FirebaseUIModule,

    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
