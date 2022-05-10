import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  currentUser: String;
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.localStorageService.getCurrentUser();
  }

  isLogin() {
    if (this.authService.isAutenticed()) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.localStorageService.removeCurrentCustomer();
    this.localStorageService.removeCurrentUserId();
    this.localStorageService.removeRental();
    this.localStorageService.deleteToken();
  }
}
