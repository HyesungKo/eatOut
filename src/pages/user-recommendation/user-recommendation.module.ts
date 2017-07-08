import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRecommendationPage } from './user-recommendation';

@NgModule({
  declarations: [
    UserRecommendationPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRecommendationPage),
  ],
  exports: [
    UserRecommendationPage
  ]
})
export class UserRecommendationPageModule {}
