import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-icons-example',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.css']
})
export class MenuIconsComponent {
  // Aquí podrías agregar lógica específica del componente si la necesitas
  constructor(private router: Router) { }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
