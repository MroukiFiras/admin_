import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginclientComponent } from './loginclient/loginclient.component';

const routes: Routes = [
  { path: '' , component: LoginclientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginclientRoutingModule { }
