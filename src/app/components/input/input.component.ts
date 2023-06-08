import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  querySearch = '';
  @Output() querySearchChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  changeQuery(event: any): void{
    this.querySearch = event.target.value.trim();
    this.querySearchChange.emit(this.querySearch);
    console.log(this.querySearch);
  }
}
