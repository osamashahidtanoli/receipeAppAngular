import { Component, OnInit } from '@angular/core';
import { DataStorgaeService } from '../shared/datastorage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorgaeService, private authService: AuthService) {

  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSave() {
    this.dataStorageService.saveReceipe();
  }

  onFetch() {
    this.dataStorageService.fetchReceipes().subscribe()
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
