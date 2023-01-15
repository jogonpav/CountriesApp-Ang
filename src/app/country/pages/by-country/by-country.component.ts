import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  term: string = "";
  errorExist: boolean = false;

  countries: Country[] = [];

  suggestedCountries: Country[] = []; 

  existSuggestion: Boolean = false;

  constructor(private countryService: CountryService) { }
  
  buscar(term: string){
    this.existSuggestion = false;
    this.term = term;
    this.errorExist = false;
    this.countryService.searchCountry(this.term).subscribe((resp) =>{
      console.log(resp);
      this.countries = resp;
    },
    (err) =>{
      this.errorExist = true;
      this.countries = [];
    })
  }

  suggestion( term: string ){
    this.errorExist = false;
    this.term = term;
    if (this.term === "") { 
      this.existSuggestion = false;
      return
    }
    this.existSuggestion = true;
    this.countryService.searchCountry(term)
      .subscribe(resp => this.suggestedCountries = resp.slice(0,5),
        (err) => this.suggestedCountries =[] );
  }
}
