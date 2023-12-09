import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css'],
})
export class AuthAdminLayoutComponent {
  dataReceived: any;
  url:any
  errorMessage:any;
  constructor(private authAdmin: AuthadminService, private route: Router , private activateRoute : ActivatedRoute) {
    
  }
  ngOnInit() :void {
    this.url=this.activateRoute.snapshot.queryParams['returnUrl'] || '/admin'
  }

  loginAdmin(f: any) {
    let data = f.value;
    this.authAdmin.login(data).subscribe(
      (response) => {
        
        this.dataReceived = response;
        this.authAdmin.saveDataProfil(this.dataReceived.token);
        this.route.navigate([this.url]);
      },
      (err) => {
        
        this.errorMessage = 'Invalid email or password. Please try again'; 

      } 
    );
  }
}
