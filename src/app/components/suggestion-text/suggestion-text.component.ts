import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {medicineArray} from './medicine-array'
@Component({
  selector: 'app-suggestion-text',
  templateUrl: './suggestion-text.component.html',
  styleUrls: ['./suggestion-text.component.css']
})


export class SuggestionTextComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = medicineArray;
  filteredOptions!: Observable<string[]>;


  constructor(private http: HttpClient) {
    this.http.get('../assets/Medicine_list_names.csv', {responseType: 'text'})
    .subscribe(
      data => {
        for(let index = 1; index < data.length; index++)
        {
          //this.listMedicine.push(array);
        }
      }
    );
   }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
