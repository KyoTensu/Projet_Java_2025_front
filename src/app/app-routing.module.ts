import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentsResolver } from "students/students.resolver"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { StudentDetailsResolver } from "students/student-details/student-details.resolver"
import { MajorsComponent } from "majors/majors.component"
import { MajorsResolver } from "majors/majors.resolver"
import { MajorStudentsResolver } from "majors/major-students/major-students.resolver"
import { MajorStudentsComponent } from "majors/major-students/major-students.component"
import { ArtistesComponent } from "artistes/artistes.component"
import { LieuxComponent } from "lieux/lieux.component"
import { BientotComponent } from "bientot/bientot.component"
import { FavorisComponent } from "favoris/favoris.component"
import { CompteComponent } from "compte/compte.component"
import { BientotResolver } from "./bientot/bientot.resolver"
import { ArtisteDetailsComponent } from "./artiste-details/artiste-details.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "artistes",
    component: ArtistesComponent,
  },
  {
    path: "lieux",
    component: LieuxComponent,
  },
  {
    path: "bientot",
    component: BientotComponent,
    resolve: {
      artists: BientotResolver
    }
  },
  {
    path: "favoris",
    component: FavorisComponent,

  },
  {
    path: "compte",
    component: CompteComponent,

  },
  {
    path: "artiste_details",
    component: ArtisteDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
