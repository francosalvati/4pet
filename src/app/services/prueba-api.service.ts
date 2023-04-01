import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PruebaApiService {

  constructor( private http: HttpClient) { }

  get(url:string){
    return this.http.get(url)
  }

  post(){

  }
}
