import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent {
  constructor(private authAdmin : AuthadminService ,  private route:Router) {}
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

}
