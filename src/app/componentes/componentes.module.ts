import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactameComponent } from './contactame/contactame.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PanelModule
    ],
    declarations: [
        ContactameComponent
    ],
    exports: [
        ContactameComponent,
    ]
})
export class ComponentesModule { }