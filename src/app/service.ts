import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) {}
    
  getGardenStatus(): Observable<any>{
      return this.httpClient.get('https://garden-data-provider.herokuapp.com/weather');
  }

  updateGardenStatus(data: {}) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'jwt-token'
      })
    };
    return this.httpClient.post('https://garden-data-provider.herokuapp.com/update-status',  data, httpOptions).subscribe(
      res => { console.log(res); },
      err => { console.log("Error occured", err); }
    );
  }
}

