import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth/auth.reducer';
import * as AuthActions from '../store/auth/auth.actions';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [
    trigger('formState', [
      state('login', style({
        transform: 'rotateY(0)',
        opacity: 1
      })),
      state('register', style({
        transform: 'rotateY(180deg)',
        opacity: 1
      })),
      transition('login <=> register', [
        animate('0.6s ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  email: string = '';
  showLogin: boolean = true;

  constructor(private api: LoginService, private store: Store<AuthState>) {}

  ngOnInit(): void {}

  toggleForm(showLogin: boolean): void {
    this.showLogin = showLogin;

  }

  login(): void {
   /*  this.api.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Login successful',res);
      },
      error: (err) => {
        console.error('Login error:', err);
      },
    }); */

    this.store.dispatch(AuthActions.login({username:this.username,password: this.password}));
    console.log("Login Successful");
    
  }

 

  

  register(): void {

    this.store.dispatch(AuthActions.register({username: this.username,password:this.password, email:this.email}))
    console.log("Register Successfull");
   /*  this.api.register(this.username, this.password, this.email).subscribe({
      next: (response) => {
        console.log(response.message);
        this.login();
      },
      error: (err) => {
        console.error('Registration error:', err);
      },
    }); */
  }
}



