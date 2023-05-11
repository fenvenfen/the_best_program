import { Component, OnInit, Input } from '@angular/core';
import { Book } from "../../interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() book: Book = { 
    tags: [],
    name: "No name",
    favorite: false,
    src: "no source",
    id: 1
  };
  
  constructor() {  }

  ngOnInit(): void {
  }

}
