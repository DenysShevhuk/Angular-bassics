import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FbAuthResponse, FbCreateResponse, Post, User, UserRegister} from '../components/interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    console.log(user);
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handelError.bind(this))
      );
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  // tslint:disable-next-line:typedef
  private handelError(error: HttpErrorResponse) {
    const {message} = error.error.error;
    console.log(message);
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Невірний email');
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
        this.error$.next('Невірний пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Невірний email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Невірний пароль');
        break;
    }
    return throwError(error);
  }

  // tslint:disable-next-line:typedef
  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }

  }

  regist(user: UserRegister): Observable<any> {
    user.returnSecureToken = true;
    console.log(user);
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, user)
      .pipe(tap(this.setToken));
  }
}
