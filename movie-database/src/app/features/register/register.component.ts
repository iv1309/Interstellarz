import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/users';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  form: any = {
    username: null,
    firstName: null,
    lastName: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  users: User[] =[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.usersService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(): void {
    this.form.username = this.form.username.trim();
    if (!this.form.username) { return; }
    const username = this.form.username;
    const password = this.form.password;
    const firstName = this.form.firstName;
    const lastName = this.form.lastName;
    this.usersService.addUser({username, password, firstName, lastName} as User)
      .subscribe((user: User) => {
        this.users.push(user);
      });
      this.router.navigate(['user'])
  }
}

