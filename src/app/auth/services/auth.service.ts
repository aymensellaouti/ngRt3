import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APIS } from '../../constantes/apis';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials): Observable<any>{
    return this.http.post<any>(APIS.auth + 'login', credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenitcated(): boolean {
    return !!localStorage.getItem('token');
  }
}
