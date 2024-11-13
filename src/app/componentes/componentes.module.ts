import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ContactameComponent } from './contactame/contactame.component';
import { PanelModule } from 'primeng/panel';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { SocialPillComponent } from './social-pill/social-pill.component';
import { TimelineProyectosComponent } from './timeline-proyectos/timeline-proyectos.component';
import { TimelineModule } from 'primeng/timeline';
import { Button } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PanelModule,
        CardModule,
        AvatarModule,
        TimelineModule,
        Button,
        BadgeModule,
        DividerModule,
        SplitterModule
    ],
    declarations: [
        ContactameComponent,
        ProyectosComponent,
        SobreMiComponent,
        SocialPillComponent,
        TimelineProyectosComponent
    ],
    exports: [
        ContactameComponent,
        ProyectosComponent,
        SobreMiComponent,
        SocialPillComponent,
        TimelineProyectosComponent
    ]
})
export class ComponentesModule { }