import { HttpClient } from '@angular/common/http';
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

  searchCountry(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }

  searchCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha(codeCountry: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${codeCountry}`
    return this.http.get<Country[]>(url);
  }

}
