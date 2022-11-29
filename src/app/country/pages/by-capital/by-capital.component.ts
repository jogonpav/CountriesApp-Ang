import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = "";
  errorExist: boolean = false;

  countries: Country[] = [];

  constructor(private countryService: CountryService) { }
  
  buscar(term: string){
    this.term = term;
    
    this.errorExist = false;

    this.countryService.searchCapital(this.term).subscribe((resp) =>{
      console.log(resp);
      this.countries = resp;
    },
    (err) =>{
      this.errorExist = true;
      this.countries = [];
    })
  }


}
