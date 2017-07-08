import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatListPage } from './chat-list';

@NgModule({
  declarations: [
    ChatListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatListPage),
  ],
  exports: [
    ChatListPage
  ]
})
export class ChatListPageModule {}
