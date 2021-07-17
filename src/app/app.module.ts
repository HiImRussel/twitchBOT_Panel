import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPanelComponent } from './components/regiserPanel/register-panel/register-panel.component';
import { LoginPanelComponent } from './components/loginPanel/login-panel/login-panel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainPanelComponent } from './components/mainPanel/main-panel/main-panel.component';
import { NavMenuComponent } from './components/navMenu/nav-menu/nav-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { BannedWordsComponent } from './components/banned-words/banned-words.component';
import { BannersComponent } from './components/banners/banners.component';

@NgModule({
  declarations: [AppComponent, RegisterPanelComponent, LoginPanelComponent, MainPanelComponent, NavMenuComponent, DashboardComponent, BannedWordsComponent, BannersComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
