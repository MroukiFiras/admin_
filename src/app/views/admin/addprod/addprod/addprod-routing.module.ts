import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprodComponent } from './addprod/addprod.component';
import { ProductsComponent } from '../../products/products/products/products.component';

const routes: Routes = [
  { path: '' , component : AddprodComponent},
  { path : 'products' , component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddprodRoutingModule { }
