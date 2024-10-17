import { Component, OnInit , AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  autenticado = false;
  nombre?: string;
  items: MenuItem[] = [];
  title = 'gpeuq_frontend';
  sidebarVisible: boolean = false;

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

  }






  toggleItem(item: any): void {
    item.expanded = !item.expanded;
  }

  setupMenuItems(): void {
    const tipoRol = this.nombre;
    const rol = 'ROL_ADMIN';

    if (this.autenticado && tipoRol === rol) {
      this.items = [
        {
          label: 'Proyecto',
          routerLink: 'administracion/proyecto',
        },
        {
          label: 'Tipos de proyectos',
          routerLink: 'administracion/tipo-proyecto',
        },
        {
          label: 'Comunidad objetivo',
          routerLink: 'administracion/comunidad-objetivo',
        },
        {
          label: ' Áreas solicitantes',
          routerLink: 'administracion/area-solicitante',
        },
        {
          label: 'Costos',
          routerLink: 'administracion/tipo-costo',
        },
        {
          label: 'Comunidad objetivo',
          routerLink: 'administracion/comunidad-objetivo',
        },
        {
          label: 'Acto administrativo',
          routerLink: 'administracion/acto-administrativo',
        },
        {
          label: 'Ingresos Financieros',
          items: [
            {
              label: 'Tipo ingreso',
              routerLink: 'administracion/tipo-ingreso',
            },
            {
              label: 'Concepto ingreso',
              routerLink: 'administracion/concepto-ingreso',
            },
          ],
        },
        {
          label: 'Gastos operacionales',
          items: [
            {
              label: 'Espacio',
              routerLink: 'administracion/espacio',
            },
            {
              label: 'Equipo',
              routerLink: 'administracion/equipo',
            },
            {
              label: 'Rubro',
              routerLink: 'administracion/rubro',
            },
            {
              label: 'Concepto gasto operacional',
              routerLink: 'administracion/concepto-gasto-operacional',
            },
            {
              label: 'Tipo costo operacional',
              routerLink: 'administracion/tipo-costo-operacional',
            },
          ],
        },
        {
          label: 'Convenios',
          items: [
            {
              label: 'Entidad Convenio',
              routerLink: 'administracion/entidad-convenio',
            },
          ],
        },
        {
          label: 'Usuario',
          items: [
            {
              label: 'Pantalla',
              routerLink: 'administracion/pantalla',
            },
            {
              label: 'Privilegio',
              routerLink: 'administracion/privilegio',
            },
            {
              label: 'Privilegio-Rol',
              routerLink: 'administracion/privilegio-rol',
            },
            {
              label: 'Rol',
              routerLink: 'administracion/rol',
            },
            {
              label: 'Usuario',
              routerLink: 'administracion/usuario',
            },
          ],
        },
      ];
    

      this.rolAutorizado = true;
    } else if (this.nombre === 'ROL_USER') {
      this.router.navigateByUrl('/administracion/proyecto');
      this.rolAutorizado = false;
    }

    history.pushState(null, '', location.href);
    window.addEventListener('popstate', () => {
      if (!this.autenticado) {
        history.pushState(null, '', location.href);
      }
    });
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
