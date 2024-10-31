import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-proyectos',
  templateUrl: './timeline-proyectos.component.html',
  styleUrl: './timeline-proyectos.component.scss'
})
export class TimelineProyectosComponent {
  events!: any[];

  constructor() {
    this.events = [
      { date: '01/11/2023-10/07/2023', title: 'Prácticas profesionales Growth acceleration partners (GAP)', description: 'Se trabajó en aplicaciones internas en el área de talent HUB en el framework React. Se ralizó una guía de estilos para uniformizar todas las aplicaciones internas de la empresa' },
      { date: '07/06/2024-16/12/2024', title: 'Universidad del Quindío (Gestión de proyectos de extensión)', description: 'Creación de la aplicación desde 0 con back-end en springBoot y Font-end en Angular 17' },
     // { status: 'success', date: '25/07/2021', title: 'Creación de la página de proyectos', description: 'Se crea la página de proyectos con menú y barra de navegación' },
     // { status: 'success', date: '30/07/2021', title: 'Creación de la página de contacto', description: 'Se crea la página de contacto con menú y barra de navegación' },
    ]
  }
}
