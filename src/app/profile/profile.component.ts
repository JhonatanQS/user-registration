import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User | undefined;
  protected subscriptions: Subscription[] = [];
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.getUser().subscribe((user: User)=> this.user = user)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  public signOut() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
