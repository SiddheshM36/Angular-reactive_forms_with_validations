import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http : HttpClient, private router : Router) { }
  getAllUsers():Observable<any>{
    return this.http.get(`${this.apiURL}`)
  }

}
