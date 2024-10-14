import { Component, OnInit } from "@angular/core"
import { Link } from "models/links.model"

@Component({
  selector: "epf-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = []
  

  constructor() {
    this.links.push({ name: "Artistes", href: "artistes" })
    this.links.push({ name: "Lieux", href: "lieux" })
    this.links.push({ name: "Bientôt", href: "bientot" })
    this.links.push({ name: "Favoris", href: "favoris"})
  }
}
