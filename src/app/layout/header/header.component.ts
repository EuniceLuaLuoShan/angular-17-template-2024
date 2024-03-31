import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


interface HeaderTab {
  display: string
  routerLink: string;
  displaySidenavContentType: string;
  isRole?: string;
  dropdown?: HeaderTabDropdown[];
}
interface HeaderTabDropdown {
  display: string
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  duration = 3000;
  headerTabs: HeaderTab[] = [
    {
      display: 'Home',
      routerLink: '/home',
      displaySidenavContentType: 'home'
    }
  ];

  constructor(private _snackBar: MatSnackBar, private _router: Router) { }

  logout(): void {
    this._snackBar.open('Logout Successfully. Will automatically Redirect to home page', 'Ok', { duration: this.duration });
    setTimeout(() => {
      this._router.navigate(['home']);
    }, this.duration);
  }
}