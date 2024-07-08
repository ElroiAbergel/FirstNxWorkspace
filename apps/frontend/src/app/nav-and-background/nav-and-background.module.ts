import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar'
import { RouterLink } from '@angular/router';
import { NavAndBackgroundComponent } from './nav-and-background.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [NavAndBackgroundComponent],
  imports: [
    ButtonModule
    , RouterLink
    , CommonModule
    , MenubarModule
  ]
  ,
  exports: [NavAndBackgroundComponent]
})
export class NavAndBackgroundModule { }
