import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoketellerService {

  constructor(private http: HttpClient) {
  }

  // get dad joke
  public telljoke(): Observable<any> {
    const url = 'https://icanhazdadjoke.com/';
    return this.http.get<any>(url, {
      headers: new HttpHeaders({Accept: 'Application/json)'})
    });
  }
}
