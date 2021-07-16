import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPanelComponent } from './components/loginPanel/login-panel/login-panel.component';
import { MainPanelComponent } from './components/mainPanel/main-panel/main-panel.component';
import { RegisterPanelComponent } from './components/regiserPanel/register-panel/register-panel.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginPanelComponent },
  { path: 'register', component: RegisterPanelComponent },
  { path: 'panel', component: MainPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
