import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from 'rxjs/operators'

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService 
  ) { }

  country: Country[] = [];

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( (param) => this.countryService.getCountryByAlpha(param.countryCode)),
      tap(console.log)
      //tap(resp => console.log(resp))
    )
    .subscribe( resp=> this.country = resp )

      
  }



}
