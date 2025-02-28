import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersListRoutingModule } from './followers-list-routing.module';
import { FollowersListComponent } from './followers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [FollowersListComponent],
  imports: [
    CommonModule,
    FollowersListRoutingModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
  ],
})
export class FollowersListModule {
  constructor() {
    console.log('FollowersListModule loaded.');
  }
}
