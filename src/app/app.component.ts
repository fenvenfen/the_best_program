import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/servises/tags.service';
import { Tag } from "../app/interfaces";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TagsService],

})
export class AppComponent implements OnInit {
  title = 'the_best_program';
    tags: Tag[] = [];

  constructor(private tagsServece: TagsService) {
    this.tags = this.tagsServece.tags;
  }

  ngOnInit() {}

  receiveQuery($event: any) {
    console.log($event);
  }
}
