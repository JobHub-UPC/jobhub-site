import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  safeUrl:SafeResourceUrl;
  constructor(private authService: AuthService, private router: Router, private sanitizer: DomSanitizer) {
    const url = 'your-unsafe-url-here'; // Reemplaza con la URL que estés utilizando
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Handle successful login here
        if (response && response.user) {
          // Navigate to /home on successful login
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      error => {
        this.errorMessage = 'Error al iniciar sesión';
        console.error('Error:', error);
      }
    );
  }
  goToRegister(): void {
    this.router.navigate(['/register']); // Reemplaza '/register' con tu ruta real de registro
  }
}
