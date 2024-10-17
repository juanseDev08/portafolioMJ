import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
 
import { DropdownModule } from 'primeng/dropdown';
import { LOCALE_ID } from '@angular/core';  
import '@angular/common/locales/global/es-CO';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ToastModule,
    HttpClientModule,
    RouterOutlet,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
