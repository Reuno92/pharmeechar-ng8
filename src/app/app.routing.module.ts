import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LayoutComponent} from './template/layout/layout.component';
import {NotFoundComponent} from './template/not-found/not-found.component';

import {CatalogComponent} from './catalog/catalog.component';
import {ProfileComponent} from './profile/profile.component';
import {CartComponent} from './cart/cart.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CatalogComponent,
        data: {
          title: 'Catalog'
        }
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        data: {
          title: 'Your Profile'
        }
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          title: 'Cart'
        }
      },
      {
        path: '**',
        component: NotFoundComponent,
        data: {
          title : 'Page not found'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
