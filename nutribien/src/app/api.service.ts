import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { NutritionPage } from './nutrition/nutrition.page';
import { Profile } from './tables'
import { Injectable } from '@angular/core';
import { RegisterPage } from './register/register.page';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api/v1/nutritionPage";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEntry(id): Observable<NutritionPage> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<NutritionPage>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<NutritionPage>(`getEntry id=${id}`))
    );
  }

  addEntry (entry): Observable<NutritionPage> {
    return this.http.post<NutritionPage>(apiUrl, entry, httpOptions).pipe(
      tap((entry: NutritionPage) => console.log(`added new entry`)),
      catchError(this.handleError<NutritionPage>('addEntry'))
    );
  }
  
  updateEntry (id, entry): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, entry, httpOptions).pipe(
      tap(_ => console.log(`updated entry id=${id}`)),
      catchError(this.handleError<any>('updateEntry'))
    );
    }

  deleteEntry (id): Observable<NutritionPage> {
    const url = `${apiUrl}/${id}`;
    
    return this.http.delete<NutritionPage>(url, httpOptions).pipe(
       tap(_ => console.log(`deleted entry id=${id}`)),
       catchError(this.handleError<NutritionPage>('deleteEntry'))
    );
    }
  addProfile (profile): Observable<Profile> {
    return this.http.post<Profile>(apiUrl, profile, httpOptions).pipe(
      tap((profile: Profile) => console.log(`added new entry`)),
      catchError(this.handleError<Profile>('addEntry'))
    );
  }
}
