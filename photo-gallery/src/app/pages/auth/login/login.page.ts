import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { StorageService } from '../../../_services/storage.service';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  public loginRequest: LoginRequest;
    public loginResponse: string = "";

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.router.navigate(['../main']);
    }
  }

  onSubmit(): void {

    this.loginRequest = this.form;
    console.log(this.loginRequest);

    this.authService.login(this.loginRequest).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        console.log("Response");
        console.log(data);
        this.isLoginFailed = false;
        this.isLoggedIn = false;
        this.roles = this.storageService.getUser().roles;
        // this.reloadPage();
        this.router.navigate(['../main']);
      },
      error: err => {
        console.log("Error");
        console.log(err);

        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      // (response) => {
      //   //Code will execute when back-end will respond
      //   console.log(response);
      //   this.loginResponse = response.text;
      // },
      //       (error) => {
      //   // this.errorMessage = error.text;
      //   // this.isLoginFailed = true;
      //   console.log(error);
      //  }
    });

  }

  reloadPage(): void {
    window.location.reload();
  }
}
