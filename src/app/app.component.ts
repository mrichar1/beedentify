import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageDataService } from "./image-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  image_data: Array<object>;
  title: string = "Beedentify";


  constructor(private http: HttpClient, private imgDataSvc: ImageDataService) {}

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_data = res)
    this.http.get('assets/images.json')
      .subscribe(data => this.imgDataSvc.changeData(this.shuffle(data)));
  }

  shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
