import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
  MatCardActions,
  MatCardImage
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
  MatSidenavModule
} from "@angular/material/sidenav";
import {NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatLine} from "@angular/material/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatButton,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatSidenavModule,
    NgIf,
    MatList,
    MatListItem,
    MatToolbar,
    MatNavList,
    MatLine,
    NgForOf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MaterialExample';
  links: string[] = ['Inicio', 'Nosotros', 'Contacto'];

}
