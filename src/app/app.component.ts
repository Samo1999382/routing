import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProtofolioComponent } from "./components/protofolio/protofolio.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, HomeComponent, ContactComponent, NavbarComponent, FooterComponent, ProtofolioComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
}
