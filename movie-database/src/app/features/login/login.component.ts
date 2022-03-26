import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  successMessage= ''
  invalidLogin = false
  loginSuccess = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginservice: AuthService
    ) { }

  ngOnInit(): void {
  }

  checkLogin() {

    /** 
    this.loginservice.authenticate(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['user']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });    
    */  

    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['profile'])
      this.invalidLogin = false
      this.loginSuccess = true
      this.successMessage = 'Login Successful.'
    } else {
      this.invalidLogin = true
      this.loginSuccess = false
    }
  }

}
