import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MonsterCComponent } from './monster-c/monster-c.component';
import { MonsterDataServiceService } from './monster-data-service.service';
import {HttpClientModule} from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const appRoutes:Routes = [
  {path: '', component: HomePageComponent},
  {path: 'users', component: UserPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MonsterCComponent,
    UserPageComponent,
    HomePageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MonsterDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
