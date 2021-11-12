import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// import { medicineArray } from './medicine-array';
import { Subject } from 'rxjs';
import { medicineArray } from './medicine-array';


@Component({
  selector: 'app-suggestion-text',
  templateUrl: './suggestion-text.component.html',
  styleUrls: ['./suggestion-text.component.css'],
})
export class SuggestionTextComponent implements OnInit {
  visible = true;
  selectable = true;
  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;
  selectChoice = new Subject();



  formControlValue = '';

  findChoices(searchText: string) {
    console.log(medicineArray);
    if(searchText.length >= 3){
      return medicineArray.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
    }
    return [];
  }

  getChoiceLabel(choice: string) {
    return `${choice} `;
  }











  constructor() {}
  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((val: string) => (val.length >= 3 ? this._filter(val) : []))
    // );
  }
  // _filter(searchText: string) {
  //   console.log(this.options);
  //   var words = searchText.split(' ');
  //   var filterWords = words[words.length - 1].toLowerCase();
  //   // this.totalSentence(val);
  //   if (filterWords.length >= 3) {
  //     return this.options.filter((option) =>
  //       option.toLowerCase().includes(filterWords)
  //     );
  //   }

  //   return [];
  // }

  text(){
    console.log("hello world")
  }

  // totalSentence(val: string){
  //   console.log(val);
  // }
}
