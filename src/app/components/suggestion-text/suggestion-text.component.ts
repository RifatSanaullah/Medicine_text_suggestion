import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { medicineArray } from './medicine-array';
import { List, Dictionary } from 'ts-generic-collections-linq';

@Component({
  selector: 'app-suggestion-text',
  templateUrl: './suggestion-text.component.html',
  styleUrls: ['./suggestion-text.component.css'],
})
export class SuggestionTextComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = medicineArray;
  filteredOptions!: Observable<string[]>;

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      //map((val: string) => val.split(" ").length >= 3 ? this._filter(val) : []),
      map((val: string) => (val.length >= 3 ? this._filter(val) : []))
    );
  }

  private _filter(val: string): string[] {
    var words = val.split(' ');
    var filterWords = words[words.length - 1].toLowerCase();

    if (filterWords.length >= 3) {
      return this.options.filter((option) =>
        option.toLowerCase().includes(filterWords)
      );
    }
    return [];
  }
}
