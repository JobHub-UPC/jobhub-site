import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrl: './publication-form.component.css'
})
export class PublicationFormComponent {
  publicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.publicationForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  submitPublication() {
    if (this.publicationForm.valid) {
      // Lógica para enviar los datos del formulario (p. ej., a un servicio)
      console.log(this.publicationForm.value);
    }
  }

  cancel() {
    // Lógica para cancelar/cerrar el formulario
  }
}

