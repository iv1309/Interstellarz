import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from 'src/app/core/model/users';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  goBack(): void {
    this.location.back();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUser(id)
      .subscribe(user => this.user = user);
  }

  save(): void {
    if (this.user) {
      this.usersService.updateUser(this.user);
    }
  }

}
