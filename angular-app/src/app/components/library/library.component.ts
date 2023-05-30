import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {
  searchValue!: string;
  chosenTags!: number[];
  constructor() {}

  ngOnInit(): void {
  }

  updateInputValue(inputValue: string): void {
    this.searchValue = inputValue
  }

  updateTagsValue(chosenTags: number[]) {
   this.chosenTags = chosenTags;
  }

  componentAdded(event: any) {
    console.log(event);
}

}
