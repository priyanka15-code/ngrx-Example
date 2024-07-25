import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api/auth';
  private localStorageKey = 'authToken';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        localStorage.setItem(this.localStorageKey, response.token);
      })
    );
  }


  register(username: string, password: string, email: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/register`, { username, password, email });
  }


  logout(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
}
