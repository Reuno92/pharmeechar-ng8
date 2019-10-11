import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

const MODULES = [
  BrowserModule,
  AppRoutingModule
];

import { HeaderComponent } from './template/layout/header/header.component';
import { SideComponent } from './template/layout/side/side.component';
import { MainComponent } from './template/layout/main/main.component';
import { FooterComponent } from './template/layout/footer/footer.component';

const APP_CONTAINER = [
  HeaderComponent,
  SideComponent,
  MainComponent,
  FooterComponent
];

import {LayoutComponent} from './template/layout/layout.component';
import {CatalogComponent} from './catalog/catalog.component';
import {ProfileComponent} from './profile/profile.component';
import {CartComponent} from './cart/cart.component';
import {NotFoundComponent} from './template/not-found/not-found.component';
import { UserActionComponent } from './template/layout/header/user-action/user-action.component';

const APP_COMPONENTS = [
  AppComponent,
  LayoutComponent,
  CatalogComponent,
  ProfileComponent,
  CartComponent,
  NotFoundComponent
];

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    ...APP_CONTAINER,
    UserActionComponent
  ],
  imports: [
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
