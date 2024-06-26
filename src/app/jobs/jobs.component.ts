import { Component } from '@angular/core';

interface Job {
  title: string;
  company: string;
  location: string;
  time: number;
  description: string;
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs: Job[] = [
    {
      title: 'Sub jefe de cocina / Chifa KION',
      company: 'RETAIL SERVICES SAC',
      location: 'Lima, Miraflores',
      time: 8,
      description: `ÚNETE A NOSOTROS! SE PARTE DE LA FAMILIA DE KION peruvian-chinese.
      Nuestro restaurante KION del grupo gastronómico Retail Services, dedicada a la
      elaboración de comida china de alta cocina. Se encuentra en la búsqueda de Sub jefe
      de cocina, ubicado en Miraflores - La Mar.`
    },
    {
      title: 'Chef / Jefe de cocina',
      company: 'Importante empresa del sector',
      location: 'Lima, Jesus Maria',
      time: 8,
      description: 'Descripción del trabajo pendiente.'
    }
  ];

  selectedJob: Job | null = null;

  selectJob(job: Job): void {
    this.selectedJob = job;
  }
}
