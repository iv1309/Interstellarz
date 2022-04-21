import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/core/model/users';
import { UsersService } from 'src/app/core/services/users.service';
import { MoviesService } from 'src/app/core/services/movies.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User | undefined;
  friends: String[] = []
  tenMovies: String[] = []
  recommendation: String[] = []
  followers: number = 0

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private moviesService: MoviesService
    ) { }

  ngOnInit(): void {
    this.getUser();
    this.amongstFriends();
    this.topTen();
    this.getRecommendation();
    this.getFollowers();

  }

  getUser(): void {
    const id = 1//Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUser(id)
      .subscribe(user => this.user = user);
  }

  amongstFriends(): void {
      this.moviesService.amongstFriends(1)
        .subscribe(friends => this.friends = friends);
    }

    topTen(): void{
        this.moviesService.topTen(1)
        .subscribe(tenMovies => this.tenMovies = tenMovies);
      }

      getRecommendation(): void{
        this.moviesService.getRecommendation(1)
          .subscribe(recommendation => this.recommendation = recommendation);
      }

  getFollowers(): void{
          this.moviesService.followers(1)
            .subscribe(followers => this.followers = followers);
        }

}
