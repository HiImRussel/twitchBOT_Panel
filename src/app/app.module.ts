import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPanelComponent } from './components/regiserPanel/register-panel/register-panel.component';
import { LoginPanelComponent } from './components/loginPanel/login-panel/login-panel.component';

@NgModule({
  declarations: [AppComponent, RegisterPanelComponent, LoginPanelComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
