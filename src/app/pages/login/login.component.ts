import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    if (this.authService.isLoggedIn) {
      await this.router.navigate(['admin']);
    }
  }

}
