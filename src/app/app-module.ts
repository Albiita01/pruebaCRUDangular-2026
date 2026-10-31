import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { CreateCocheComponent } from './components/create-coche-component/create-coche-component';
import { UpdateCocheComponent } from './components/update-coche-component/update-coche-component';
import { DeleteCocheComponent } from './components/delete-coche-component/delete-coche-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    CreateCocheComponent,
    UpdateCocheComponent,
    DeleteCocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
