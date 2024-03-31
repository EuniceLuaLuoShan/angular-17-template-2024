import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TitleModule } from '../layout/title/title.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  standalone: true,
  imports: [TitleModule, MatIconModule, MatButtonModule, RouterModule]
})
export class PageNotFoundComponent {}