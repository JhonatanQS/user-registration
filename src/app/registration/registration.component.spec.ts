import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let authService: AuthService;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ RegistrationComponent ],
      providers: [
        AuthService,
        { provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register should be called',()=>{
    spyOn(authService, 'register').and.returnValue(of({success: true}));
    component.register();
    expect(authService.register).toHaveBeenCalled();
  });
});
