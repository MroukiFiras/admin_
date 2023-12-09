import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';

const routes: Routes = [
  { path: '', component: ClientLayoutComponent,children: [
    {path: 'login',loadChildren: () =>import('./views/client/loginclient/loginclient.module').then((m) => m.LoginclientModule)},
    ],
  },
  {path: 'admin',component: AdminLayoutComponent,canActivate:[GuardadminGuard],children: [
      {path: '',loadChildren: () =>import('./views/admin/dashboard/dashboard.module').then((m) => m.DashboardModule)},
      {path: 'dashboard',loadChildren: () =>import('./views/admin/dashboard/dashboard.module').then((m) => m.DashboardModule)},
      {path: 'addProduct',loadChildren: () =>import('./views/admin/addprod/addprod/addprod.module').then((m) => m.AddprodModule)},
      {path: 'products',loadChildren: () =>import('./views/admin/products/products/products.module').then((m) => m.ProductsModule)},
      {path: 'orders',loadChildren: () =>import('./views/admin/ordersadmin/orders/orders.module').then((m) => m.OrdersModule)},
      {path: 'customers', loadChildren: () =>import('./views/admin/customers/customers/customers.module').then((m) => m.CustomersModule)},
    ],
  },
  {path: 'admin/login' , component:AuthAdminLayoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
