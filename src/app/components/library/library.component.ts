import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/servises/tags.service';
import { Tag } from '../../interfaces';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [TagsService],
})
export class LibraryComponent implements OnInit {
  tags: Tag[] = [];
  querySearchParams?: string;
  activeTags?: number[];

  constructor(
    private tagsServece: TagsService,
  ) {}

  ngOnInit(): void {
    this.tags = this.tagsServece.tags;
  }

  receiveQuerySearch(querySearch: string) {
    this.querySearchParams = querySearch;
  }
  receiveQueryTags(activeTags: number[]) {
    this.activeTags = [...activeTags];
  }
}
