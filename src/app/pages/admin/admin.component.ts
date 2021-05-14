import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  isShowMenu = false;
  isShowProfileMenu = false;

  constructor(public authService: AuthService, private router: Router) { }

  toggleMenu(): void {
    this.isShowMenu = !this.isShowMenu;
  }

  toggleProfileMenu(): void {
    this.isShowProfileMenu = !this.isShowProfileMenu;
  }

}
