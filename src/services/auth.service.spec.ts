
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/services/auth.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterResponse } from 'src/app/models/register-response.model';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [AuthService] 
    });
    service = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('isLoggedIn should return false after logout() call',()=>{
    service.setCurrentUser();
    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
  });


  it('register should return an observable of RegisterResponse',()=>{
    let registerReturn = service.register();
    expect(registerReturn).toBeInstanceOf(Observable<RegisterResponse>);
  });
});
