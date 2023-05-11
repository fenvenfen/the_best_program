import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  queryParams = '';
  @Output() queryParamsChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  changeQuery(event: any): void{
    this.queryParams = event.target.value.trim();
    this.queryParamsChange.emit(this.queryParams)
  }
}
