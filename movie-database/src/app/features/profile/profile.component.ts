import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;


  constructor(private token: TokenStorageService,
  private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }



 }


