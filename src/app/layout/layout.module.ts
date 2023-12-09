import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { FormsModule } from '@angular/forms';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';



@NgModule({
  declarations: [AdminLayoutComponent,  ClientLayoutComponent, AuthAdminLayoutComponent],
  imports: [CommonModule, RouterModule,FormsModule],
})
export class LayoutModule {}
