import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = "https://restcountries.com/v3.1"; 

  constructor(private http: HttpClient) { }

  get httpParams (){
   return new HttpParams().set('fields','name,capital,cca2,flags,population');
  }

  searchCountry(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(codeCountry: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${codeCountry}`
    return this.http.get<Country[]>(url);
  }

  getCountryByRegion(codeRegion: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${codeRegion}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }



}
