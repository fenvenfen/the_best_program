import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Output() onInput: EventEmitter<string> = new EventEmitter<string>()
  searchValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  filterByInput() {
    this.onInput.emit(this.searchValue)
  }
}
