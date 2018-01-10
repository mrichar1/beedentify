import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageDataService } from "../image-data.service";

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.css']
})
export class ImageSelectComponent implements OnInit {
  @Input() private id: string;
  private image_data: Array<object>;
  private image: object;

  constructor(private imgDataSvc: ImageDataService) {}

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.imageEvent(res))
  }

  imageEvent (res) {
    this.image_data = res;
    this.image = this.image_data[this.id];
  }

  clicked() {
    // Toggle active state on click, and push data to service
    this.image['active'] = !this.image['active'];
    this.imgDataSvc.changeData(this.image_data)
  }
}
