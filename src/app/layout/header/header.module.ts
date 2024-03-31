import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const components = [
  HeaderComponent
];

@NgModule({
  declarations: components,
  imports: [
    MatMenuModule,
    MatToolbarModule,
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: components
})
export class HeaderModule { }