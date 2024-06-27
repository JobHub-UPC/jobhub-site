import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-icons-example',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.css']
})
export class MenuIconsComponent {
  constructor (private router : Router) {}
  goToProfile() {
    this.router.navigate(['/perfil']);
  }
}
