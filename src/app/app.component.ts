import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageDataService } from "./image-data.service";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Beedentify';
  image_data: Array<object>;

  constructor(private http: HttpClient, private imgDataSvc: ImageDataService, private modal: NgbModal) {}

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_data = res)
    this.http.get('assets/images.json')
      .subscribe(data => this.imgDataSvc.changeData(this.shuffle(data)));
    this.modal.open(WelcomeComponent, {size: 'lg', centered: true});
  }

    shuffle(array: any) {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
}
