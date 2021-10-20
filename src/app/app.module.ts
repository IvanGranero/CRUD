import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent, PhonePipe } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { CMSBoardComponent } from './components/cmsboard/cmsboard.component';
import { PopupCardComponent } from './components/popup-card/popup-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    CMSBoardComponent,
    PopupCardComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
