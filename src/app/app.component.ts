import { Component } from '@angular/core';
import { HeaderModule } from './layout/header/header.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
