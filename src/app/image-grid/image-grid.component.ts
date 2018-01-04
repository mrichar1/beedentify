import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ImageDataService } from "../image-data.service";

// Create a grid of image-select objects from a list of urls. Track the select state of each image.

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit {
  image_data: object;

  constructor(private imgDataSvc: ImageDataService) {}

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_data = res)
  }
}
