import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

import { MenubarModule } from 'primeng/menubar';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';

 
import { DropdownModule } from 'primeng/dropdown';
import '@angular/common/locales/global/es-CO';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';

import { ComponentesModule } from "../../componentes/componentes.module";
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MenubarModule,
    ToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    PanelMenuModule,
    SidebarModule,
    MenuModule,
    TieredMenuModule,
    PasswordModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    DropdownModule,
    ComponentesModule,
    CardModule
    
]
})
export class InicioModule { }
