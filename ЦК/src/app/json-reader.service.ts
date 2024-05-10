import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class JsonReaderService 
{
  constructor(private http: HttpClient) {}

  // запрос к несуществующему url для демонстрации работы интерсептора
  makeRequest(): Observable<any> 
  {
    return this.http.get<any>('nonexistent-url');
  }

  getDataFromJsonFile(): Observable<any> 
  {
    return this.http.get<any>('assets/data/data.json').pipe(
      catchError(error => {
        console.error('Error reading JSON file:', error);
        return throwError(error);
      })
    );
  }
}
