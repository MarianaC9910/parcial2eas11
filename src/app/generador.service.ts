import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class GeneradorService {

// private apiUrl = '';
  //private apiKey = '';

  constructor(private http: HttpClient) {}

 /* generateIdea(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
     // 'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100
    };

    //return this.http.post<any>(this.apiUrl, body, { headers });
   // return this.http.post(this.apiUrl, body, { headers });
  }*/
}
