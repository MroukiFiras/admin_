import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddprodRoutingModule } from './addprod-routing.module';
import { AddprodComponent } from './addprod/addprod.component';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';




@NgModule({
  declarations: [
    AddprodComponent
  ],
  imports: [
    CommonModule,
    AddprodRoutingModule,
    FormsModule,
    NgxDropzoneModule
    
  ]
})
export class AddprodModule { }
