import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatMenuModule } from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuIconsComponent } from './menu-icons/menu-icons.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { HomeComponent } from './home/home.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from './post/post.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PublicationFormComponent } from './publication-form/publication-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent, // Asegúrate de incluir el componente aquí
    NavbarComponent,
    MenuIconsComponent,
    ProfileComponent
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PostComponent,
    SearchBarComponent,
    PublicationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
