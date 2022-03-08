import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  constructor(public router: Router){}

  ngOnInit(): void {
  }

  LoginUser(): void{
    //TODO: Use the maven server to login instead of using angular code
    if(this.username == "JohnSmith" && this.password == "password"){
      this.router.navigate(['/home'])
    }
    else if (this.username == "" || this.password == "") {
      alert("Missing Password or Username")
    }
    else {
      alert("Incorrect Password or Username");
    }
  }

}
