import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './template/layout/layout.component';
import { HeaderComponent } from './template/layout/header/header.component';
import { SideComponent } from './template/layout/side/side.component';
import { MainComponent } from './template/layout/main/main.component';
import { NotFoundComponent } from './template/not-found/not-found.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { appRoutes } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SideComponent,
    MainComponent,
    NotFoundComponent,
    CatalogComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
