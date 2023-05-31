import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponent } from '../Component/nav-bar/nav-bar.component';
import { SideBarComponent } from '../Component/side-bar/side-bar.component';
import { LayoutComponent } from '../Component/layout/layout.component';
import { NavChatComponent } from '../Component/nav-chat/nav-chat.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';



@NgModule({
    declarations: [
        HomeComponent,
        SideBarComponent,
        LayoutComponent,
        NavChatComponent,
        NavBarComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ModalModule
    ]
})
export class HomeModule { }
