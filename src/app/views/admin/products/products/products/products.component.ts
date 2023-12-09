import { Component } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  public dataProducts:any[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getAllProducts().subscribe((data: any) => this.dataProducts = data.data )
  }
}
