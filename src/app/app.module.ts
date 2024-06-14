import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuIconsComponent } from './menu-icons/menu-icons.component';

import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent, // Asegúrate de incluir el componente aquí
    NavbarComponent,
    MenuIconsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }