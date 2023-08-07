import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let authService: AuthService;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ProfileComponent ],
      providers: [
        AuthService,
        { provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('getUser should be called',()=>{
    spyOn(authService, 'getUser').and.returnValue(of({
      name: 'name',
      email: '',
      bio: ''
    }));
    component.ngOnInit()
    expect(authService.getUser).toHaveBeenCalled();
  });

  it('logout should be called',()=>{
    spyOn(authService, 'logout').and.returnValue();
    component.signOut()
    expect(authService.logout).toHaveBeenCalled();
  });

});
