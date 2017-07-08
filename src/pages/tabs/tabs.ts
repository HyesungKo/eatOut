import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { FollowingPlanPage } from '../following-plan/following-plan';
import { EventListPage } from '../event-list/event-list';
import { ChatListPage } from '../chat-list/chat-list';
import { UserRecommendationPage } from '../user-recommendation/user-recommendation';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventListPage;
  tab2Root = UserRecommendationPage;
  tab3Root = ChatListPage;
  tab4Root = FollowingPlanPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
