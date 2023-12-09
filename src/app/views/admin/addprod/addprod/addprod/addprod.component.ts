import { Component } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css'],
})
export class AddprodComponent {
  selectedType: string = ''; // Variable to hold the selected type
  selectedCategory: string = ''; // Variable to hold the selected category
  selectedSizes: string[] = []; // Array to hold the selected sizes
  imageUrl: string = '';
  constructor(private DataService: DataService) {}

  // Method triggered when the selected type changes
  changeCategories() {
    this.selectedCategory = ''; // Reset selected category
    this.selectedSizes = []; // Reset selected sizes

    if (this.selectedType) {
      // Set the selected category to the first category of the selected type
      this.selectedCategory =
        this.DataService.getCategoriesByType(this.selectedType)[0] || '';
      this.changeSizes();
    }
  }

  // Method triggered when the selected category changes
  changeSizes() {
    this.selectedSizes = []; // Reset selected sizes
    if (this.selectedCategory) {
      // Fetch and assign sizes based on the selected category
      this.selectedSizes = this.DataService.getSizesByCategory(
        this.selectedCategory
      );
    }
  }

  // Method to get categories based on the selected type
  getCategories(): string[] {
    return this.DataService.getCategoriesByType(this.selectedType);
  }

  // Getter method to retrieve selected category sizes
  get selectedCategorySizes(): string[] {
    return this.DataService.getSizesByCategory(this.selectedCategory);
  }
  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(file: File) {
    console.log(file);
    const index = this.files.indexOf(file);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }



  AddNewProduct(f: any) {
    let data = f.value;
    data.files = this.files;
    console.log(data);

    this.DataService.postProduct(data).subscribe((data) => console.log(data));
  }
}
