import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule} from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './users/user/user.component';
import { MoviesModule } from './movies/movies.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { CoreModule } from '../core/core.module';
import { LogoutComponent } from './logout/logout.component';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MoviesModule,
    CoreModule,
    FeaturesRoutingModule,
    UsersModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
})
export class FeaturesModule { }

