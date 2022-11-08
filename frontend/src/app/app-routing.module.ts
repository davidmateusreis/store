import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'product-list', component: ProductListComponent
  },
  {
    path: 'client-list', component: ClientListComponent
  },
  {
    path: 'brand-list', component: BrandListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
