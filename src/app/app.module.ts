import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { FollowingPlanPage } from '../pages/following-plan/following-plan';
import { EventListPage } from '../pages/event-list/event-list';
import { ChatListPage } from '../pages/chat-list/chat-list';
import { UserRecommendationPage } from '../pages/user-recommendation/user-recommendation';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProfilePage,
    FollowingPlanPage,
    EventListPage,
    ChatListPage,
    UserRecommendationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProfilePage,
    FollowingPlanPage,
    EventListPage,
    ChatListPage,
    UserRecommendationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EventProvider,
    ProfileProvider,
    Camera
  ]
})
export class AppModule {}
