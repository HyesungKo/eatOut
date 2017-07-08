import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowingPlanPage } from './following-plan';

@NgModule({
  declarations: [
    FollowingPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowingPlanPage),
  ],
  exports: [
    FollowingPlanPage
  ]
})
export class FollowingPlanPageModule {}
