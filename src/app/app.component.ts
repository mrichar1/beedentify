import { Component, Input, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ImageDataService } from "./image-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Beedentify';
  image_data: object;

  constructor(private http: Http, private imgDataSvc: ImageDataService) {}

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_data = res)
    this.http.get('assets/images.json')
      .subscribe(res => this.imgDataSvc.changeData(res.json()));
  }
}
