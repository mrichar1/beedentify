import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ImageDataService } from "../image-data.service";

// Create a grid of image-select objects from a list of urls. Track the select state of each image.

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit {
  image_data: Array<object>;
  private filter_types = {"insects": true, "locations": true};
  ft_keys = Object.keys(this.filter_types);
  zoom_enabled: boolean = false;

  constructor(private imgDataSvc: ImageDataService) {}

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_data = res)
  }
}
