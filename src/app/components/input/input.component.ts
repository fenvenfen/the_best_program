import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})

export class InputComponent implements OnInit {
  querySearch: string = '';

  @Output() querySearchChange = new EventEmitter<string>();

  inputDebouncer = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    this.inputDebouncer.pipe(
      debounceTime(600))
      .subscribe(value => {
        this.querySearchChange.emit(value);
      });
  }

  ngOnDestroy() {
    this.inputDebouncer.unsubscribe();
  }

  changeQuery(querySearch: string) {
    this.inputDebouncer.next(querySearch);
  }
}
