import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {
  searchValue!: string;
  chosenTags!: number[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.url.join('/'));
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
