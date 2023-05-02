import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
  tags = this.dataStorageService.tags
  
  constructor(public dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

}
