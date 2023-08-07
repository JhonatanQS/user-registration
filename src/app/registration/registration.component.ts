import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { RegisterResponse } from '../models/register-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnDestroy {

  public userRegistration : FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required,Validators.maxLength(256)]),
  });

  protected subscriptions: Subscription[] = [];

  constructor(private authService: AuthService, private router: Router) {}
 
  public register() {
    this.subscriptions.push(
      this.authService.register().subscribe((response: RegisterResponse) =>{
        if(response.success) {
          this.authService.setCurrentUser();
          this.router.navigate(['/profile'])
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

}
