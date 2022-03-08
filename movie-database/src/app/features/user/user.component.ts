import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from 'src/app/core/model/users';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User | undefined;

  constructor( 
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = 1//Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

}
