import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  demoapi(fdata){
    return this.http.post('http://localhost/api.php',fdata);
  }
}
