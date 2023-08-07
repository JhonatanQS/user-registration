import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';
import { RegisterResponse } from 'src/app/models/register-response.model';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
@Injectable({  
  providedIn: 'root'  
})  
export class AuthService {  
  private baseURl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  register(): Observable<RegisterResponse>  {  
    return this.http.get<RegisterResponse>(`${this.baseURl}7f434df6-a4ac-4817-ab7c-dd39a564d01d`);
  }

  logout() {  
    localStorage.removeItem('currentUser');  
  }

  setCurrentUser() {
    localStorage.setItem('currentUser', "loggedin"); 
  }

  public isLoggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }
  
  public getUser(userId:string = '611a3036-4420-48a5-b8da-9b461853cdd2'): Observable<User> {
    return this.http.get<User>(`${this.baseURl}${userId}`);
  }
} 