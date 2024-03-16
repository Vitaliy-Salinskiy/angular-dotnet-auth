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
}
