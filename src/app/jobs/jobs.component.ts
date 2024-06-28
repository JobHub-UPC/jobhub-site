import { Component } from '@angular/core';

interface Job {
  title: string;
  company: string;
  location: string;
  time: number;
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
    },
    {
      title: 'Chef / Jefe de cocina',
      company: 'Importante empresa del sector',
      location: 'Lima, Jesus Maria',
      time: 8,
    }
  ];

  selectedJob: Job | null = null;

  selectJob(job: Job): void {
    this.selectedJob = job;
  }
}
