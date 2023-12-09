import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginclientRoutingModule } from './loginclient-routing.module';
import { LoginclientComponent } from './loginclient/loginclient.component';


@NgModule({
  declarations: [
    LoginclientComponent
  ],
  imports: [
    CommonModule,
    LoginclientRoutingModule
  ]
})
export class LoginclientModule { }
