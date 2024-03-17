import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../models/login';
import { Register } from '../models/register';
import { JwtAuth } from '../models/jwt-auth';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  registerUrl = `AuthManagement/Register`;
  loginUrl = `AuthManagement/Login`;
  usersUrl = `AuthManagement/GetUsers`;

  constructor(private http: HttpClient) {}

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(
      `${environment.apiUrl}/${this.registerUrl}`,
      user
    );
  }

  public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(
      `${environment.apiUrl}/${this.loginUrl}`,
      user
    );
  }

  public getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.usersUrl}`);
  }
}
