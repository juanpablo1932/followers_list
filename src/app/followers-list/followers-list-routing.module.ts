import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowersListComponent } from './followers-list.component';

const routes: Routes = [
  {
    path: ':username',
    component: FollowersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowersListRoutingModule {}
