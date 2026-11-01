import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { CreateCocheComponent } from './components/create-coche-component/create-coche-component';
import { UpdateCocheComponent } from './components/update-coche-component/update-coche-component';
import { DeleteCocheComponent } from './components/delete-coche-component/delete-coche-component';
import { LoginComponent } from './components/login-component/login-component';
import { CocheService } from './services/coche.service';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    CreateCocheComponent,
    UpdateCocheComponent,
    DeleteCocheComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    CocheService,
  ],
  bootstrap: [App]
})
export class AppModule { }
