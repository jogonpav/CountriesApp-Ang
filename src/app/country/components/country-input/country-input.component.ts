import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{

  term: string = "";

   
  @Output() onTerm: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit( valor )
    })
  }


  buscar(): void{
    if(this.term.trim().length !== 0){
     this.onTerm.emit(this.term);
    }
  }

  keyPress(event:any){
    //const valor = event.target.value;  // This is not used because the ngMODEL is already there.
    this.debouncer.next(this.term)


  }


}
