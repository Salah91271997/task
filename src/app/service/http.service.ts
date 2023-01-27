import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Employee, filters } from '../interface/employee';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  getEmployees(url: string): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(url)
      .pipe(retry(1), catchError(this.handleError));
  }
  getfilters(url: string): Observable<filters[]> {
    return this.http
      .get<filters[]>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  constructor(private http: HttpClient) {}
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
