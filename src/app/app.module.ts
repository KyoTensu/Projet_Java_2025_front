import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MajorsComponent } from "majors/majors.component"
import { MajorStudentsComponent } from "majors/major-students/major-students.component"
import { HttpClientModule } from "@angular/common/http";
import { ArtistesComponent } from './artistes/artistes.component';
import { LieuxComponent } from './lieux/lieux.component';
import { FavorisComponent } from './favoris/favoris.component';
import { BientotComponent } from './bientot/bientot.component';
import { CompteComponent } from './compte/compte.component';
import { ArtistesCardsComponent } from './artistes/artistes-cards/artistes-cards.component';
import { LieuxCardsComponent } from './lieux/lieux-cards/lieux-cards.component';
import { ArtisteDetailsComponent } from './artiste-details/artiste-details.component';
import { ConcertDetailsComponent } from './concert-details/concert-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    StudentDetailsComponent,
    MajorsComponent,
    MajorStudentsComponent,
    ArtistesComponent,
    LieuxComponent,
    FavorisComponent,
    BientotComponent,
    CompteComponent,
    ArtistesCardsComponent,
    LieuxCardsComponent,
    ArtisteDetailsComponent,
    ConcertDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
