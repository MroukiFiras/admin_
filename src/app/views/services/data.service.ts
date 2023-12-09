import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  token:any=localStorage.getItem('token')
  headerAdmin = new HttpHeaders()
  .set('authorization' , this.token)
  .set('role' , 'Admin')

  params=  new HttpParams()
  .set('secretkey' , environment.secretkey)
  .set('adminkey' , environment.adminkey)

  headerAll = new HttpHeaders()
  .set('authorization' , this.token)
  

  // Categories dictionary containing arrays of items for each category
  private Categories: { [key: string]: string[] } = {
    Clothes: [
      'T-shirts',
      'Shirts',
      'Jeans',
      'Shorts',
      'Baggy trousers',
      'Cargo Trousers',
      'Vests',
    ],
    Shoes: ['Sneakers', 'Smart Shoes', 'Ankle boots', 'Sandals'],
    Accessories: ['Jewellery', 'Bags', 'Wallets'],
  };

  // Sizes dictionary containing arrays of sizes for each item
  private Sizes: { [key: string]: string[] } = {
    'T-shirts': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    Shirts: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    Jeans: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      '34',
      '36',
      '38',
      '40',
      '42',
      '44',
      '46',
      '48',
    ],
    Shorts: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      '34',
      '36',
      '38',
      '40',
      '42',
      '44',
      '46',
      '48',
    ],
    'Baggy trousers': [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      '34',
      '36',
      '38',
      '40',
      '42',
      '44',
      '46',
      '48',
    ],
    'Cargo Trousers': [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      '34',
      '36',
      '38',
      '40',
      '42',
      '44',
      '46',
      '48',
    ],
    Vests: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    Sneakers: ['34', '36', '38', '40', '42', '44', '46', '48'],
    'Smart Shoes': ['34', '36', '38', '40', '42', '44', '46', '48'],
    'Ankle boots': ['34', '36', '38', '40', '42', '44', '46', '48'],
    Sandals: ['34', '36', '38', '40', '42', '44', '46', '48'],
  };
  constructor(private http: HttpClient) {}

  // Method to get categories based on the given type
  getCategoriesByType(type: string): string[] {
    return this.Categories[type] || [];
  }

  // Method to get sizes based on the given category
  getSizesByCategory(category: string): string[] {
    return this.Sizes[category] || [];
  }

  public postProduct(product: any) {
    return this.http.post(`${environment.urlbackend}` + 'addProduct', product);
  }
}
