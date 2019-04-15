import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Nutrition } from './tables';
import { Profile } from './tables'
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:27017/nutrition-fitness-app-dsodq.gcp.mongodb.net";

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

  getEntry(id): Observable<Nutrition> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Nutrition>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Nutrition>(`getEntry id=${id}`))
    );
  }

  addEntry (entry): Observable<Nutrition> {
    return this.http.post<Nutrition>(apiUrl, entry, httpOptions).pipe(
      tap((entry: Nutrition) => console.log(`added new entry`)),
      catchError(this.handleError<Nutrition>('addEntry'))
    );
  }
  
  updateEntry (id, entry): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, entry, httpOptions).pipe(
      tap(_ => console.log(`updated entry id=${id}`)),
      catchError(this.handleError<any>('updateEntry'))
    );
    }

  deleteEntry (id): Observable<Nutrition> {
    const url = `${apiUrl}/${id}`;
    
    return this.http.delete<Nutrition>(url, httpOptions).pipe(
       tap(_ => console.log(`deleted entry id=${id}`)),
       catchError(this.handleError<Nutrition>('deleteEntry'))
    );
    }
  addProfile (profile): Observable<Profile> {
    return this.http.post<Profile>(apiUrl, profile, httpOptions).pipe(
      tap((profile: Profile) => console.log(`added new entry`)),
      catchError(this.handleError<Profile>('addEntry'))
    );
  }
}
