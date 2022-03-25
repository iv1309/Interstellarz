import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './core/helpers/auth.interceptor';
import { ProfileComponent } from './features/profile/profile.component';
import { BoardAdminComponent } from './features/board-admin/board-admin.component';
import { RegisterComponent } from './features/register/register.component';
import { BoardModeratorComponent } from './features/board-moderator/board-moderator.component';
import { BoardUserComponent } from './features/board-user/board-user.component';
import { LoginComponent } from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
