import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { SetRoutingModule } from './setting-routing.module';
import { LogInComponent } from './log-in/log-in.component';



@NgModule({
  declarations: [
    FavoritesComponent,
    ProfileComponent,
    AccountComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,SetRoutingModule
  ]
})
export class SettingModule { }
