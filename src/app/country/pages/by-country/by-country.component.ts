import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = "";
  errorExist: boolean = false;

  countries: Country[] = [];

  constructor(private countryService: CountryService) { }
  
  buscar(term: string){
    this.term = term;
    
    this.errorExist = false;

    this.countryService.buscarPais(this.term).subscribe((resp) =>{
      console.log(resp);
      this.countries = resp;
    },
    (err) =>{
      this.errorExist = true;
      this.countries = [];
    })
  }

  suggestion( termino: string ){
    this.errorExist = false;
    //TODO: CREAR SUGERENCIA
  }
}
