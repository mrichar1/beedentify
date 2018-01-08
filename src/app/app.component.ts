import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageDataService } from "./image-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Beedentify';
  image_data: Array<object>;

  constructor(private http: HttpClient, private imgDataSvc: ImageDataService) {}

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_data = res)
    this.http.get('assets/images.json')
      .subscribe(data => this.imgDataSvc.changeData(data));
  }
}
