import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthadminService {
  helper = new JwtHelperService();

  profilAdmin = {
    username: '',
    role: '',
  };
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${environment.urlbackend}` + 'admin/login', data);
  }
  saveDataProfil(token: any) {
    let decodeToken = this.helper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  loggedIn(){
    let token:any = localStorage.getItem('token')
    if(!token){
      return false
    }
    let decodeToken = this.helper.decodeToken(token)
    if (decodeToken.role !== 'Admin') {
      return false
    }
    if (this.helper.isTokenExpired(token)){
      return false
    }
    return true
    
  }

}
