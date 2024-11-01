import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit{
  proyectos = [
    {
      nombre: 'Vitale consciente',
      descripcion: 'Página en construcción para la empresa Vitale consciente',	
      imagen: 'assets/images/vitale.png',
      link: 'En construcción'
    },
    {
      nombre: 'Gestión de proyectos de extensión',
      descripcion: 'Proyecto interno de la universidad del quidío(no es permitido compartir el código) ni más información relevante',
      imagen: 'assets/images/GPE.png',
      link: 'no disponible'
    },
    // Agrega más proyectos según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }
  navigateToLink(link: string): void {
    window.open(link, '_blank');
  }
}
