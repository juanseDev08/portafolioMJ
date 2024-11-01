import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit{
  proyectos = [
    {
      nombre: 'Gestión de proyectos de extensión',
      descripcion: 'Proyecto interno de la universidad del quidío(no es permitido compartir el código, ni más información relevante)',
      imagen: 'assets/images/GPE.png',
      link: 'no disponible',
      disable: true,
    },
    {
      nombre: 'Portafolio en Angular 17',
      descripcion: 'Este portafolio es creado directamente por mi, con el fin de mostrar mis proyectos y habilidades,no fue creado por medio de guías, fue creado desde 0',
      imagen: 'assets/images/portafolioAngular.png',
      link: 'https://github.com/juanseDev08/portafolioMJ',
    },
    {
      nombre: 'Portafolio en Astro',
      descripcion: 'Este es un portafolio creado por medio de guías de Astro, con el fin de mostrar mis proyectos y habilidades(no fue creado propiamente por mi, fue más basado a un código guía)',	
      imagen: 'assets/images/portafolioAstro.png',
      link: 'https://github.com/juanseDev08/portafolio.dev?tab=readme-ov-file',
      disable: false,
    },
    {
      nombre: 'Vitale consciente',
      descripcion: 'Página en construcción para la empresa Vitale consciente (no hay github disponible)',	
      imagen: 'assets/images/vitale.png',
      link: 'En construcción',
      disable: true,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  navigateToLink(link: string): void {
    window.open(link, '_blank');
  }
}
