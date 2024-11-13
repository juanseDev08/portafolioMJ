import { Component, OnInit , AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


import { MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  autenticado = false;
  nombre?: string;
  items: MenuItem[] = [];
  title = 'gpeuq_frontend';
  sidebarVisible: boolean = false;

  descripcionLinkedIn?: string = "LinkedIn";
  linkLinkedIn?: string="https://www.linkedin.com/in/juan-sebasti%C3%A1n-san%C3%ADn-villarreal-319584225/";
  iconLinkedIn?: string = "pi pi-linkedin";

  descripcionGitHub?: string = "GitHub";
  linkGitHub?: string="https://github.com/juanseDev08";
  iconGitHub?: string = "pi pi-github";

  descripcionCorreo?: string = "juanses081@gmail.com";
  linkCorreo?: string = "mailto:juanses081@gmail.com";
  iconCorreo?: string = "pi pi-envelope";

  nomTercero?: string;
  rolAutorizado = false;

  estadoSwitch:number = 1;

  /**Lista Renuncia formulas de pago */
  listaEstilos = [
    { label: 'Verde Institucional', value: 1 },
    { label: 'Negro Minimalista', value: 2 },
    { label: 'Azul  Minimalista', value: 3 }
  ];

  estilo: any ;
  placeholderText: string = 'Seleccione';

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setupMenuItems();
  }


  toggleItem(item: any): void {
    item.expanded = !item.expanded;
  }

  setupMenuItems(): void {

      this.items = [
        {
          label: 'Sobre mi',
          command: () => this.scrollToSection('sobreMi')
        },
        {
          label: 'Experiencia',
          command: () => this.scrollToSection('Experiencia')
        },
        {
          label: 'Proyectos',
          command: () => this.scrollToSection('Proyectos')
        },
        {
          label: 'Contacto',
          command: () => this.scrollToSection('contactame')
        },
      ];
    
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  cargarEstilos(opcion: number) {
    
    switch (opcion) {
      case 1:
        /**this.estilo = { label: 'OPCION 1', value: 1  };**/
        this.estilo = this.listaEstilos.find(item => item.value === 1);
        document.documentElement.style.setProperty('--color-gpe', '#308113');
        document.documentElement.style.setProperty('--color-aux', '#276412');
        break;
      case 2:
        /**this.estilo = { label: 'OPCION 2', value: 2  };**/
        this.estilo = this.listaEstilos.find(item => item.value === 2);
        document.documentElement.style.setProperty('--color-gpe', '#343f4b');
        document.documentElement.style.setProperty('--color-aux', '#32383f');
        break;
      case 3:
        /**this.estilo = { label: 'OPCION 3', value: 3  };**/
        this.estilo = this.listaEstilos.find(item => item.value === 3);
        document.documentElement.style.setProperty('--color-gpe', '#2c85b3');
        document.documentElement.style.setProperty('--color-aux', '#055f8b');
        break;
    }
    this.placeholderText = this.estilo.label;
    this.cdr.detectChanges(); // Forzar la detección de cambios


  }

  cargarEstilolocalStorage(cambioColor: Number) {
    switch (cambioColor) {
      case 1:
        /**this.estilo = { label: 'OPCION 1', value: 1  };*/
        this.estilo = this.listaEstilos.find(item => item.value === 1);
        document.documentElement.style.setProperty('--color-gpe', '#308113');
        document.documentElement.style.setProperty('--color-aux', '#276412');
        break;
      case 2:
        /**this.estilo = { label: 'OPCION 2', value: 2  };*/
        this.estilo = this.listaEstilos.find(item => item.value === 2);
        document.documentElement.style.setProperty('--color-gpe', '#343f4b');
        document.documentElement.style.setProperty('--color-aux', '#32383f');
        break;
      case 3:
        /**this.estilo = { label: 'OPCION 3', value: 3  };**/
        this.estilo = this.listaEstilos.find(item => item.value === 3);
        document.documentElement.style.setProperty('--color-gpe', '#2c85b3');
        document.documentElement.style.setProperty('--color-aux', '#055f8b');
        break;
    }

     this.placeholderText = this.estilo.label;
     this.cdr.detectChanges(); // Forzar la detección de cambios

  }

}
