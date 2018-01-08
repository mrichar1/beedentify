import { Component, OnInit } from '@angular/core';
import { ImageDataService } from "../image-data.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  image_data: Array<object>;
  result_html: string = "<p>Please select one or more images below which match what you are currently seeing.\n\
        You can toggle zooming of images when you hover over them, and turn various categories of image on and off, depending on what you can see.\n\
        When you select at least one image, this panel will update with your results.</p>"


  constructor(private imgDataSvc: ImageDataService) { }

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_dataChanged(res));
  }

  image_dataChanged(res) {
    // Update results on image_data change
    this.image_data = res;

    for (var image of this.image_data) {
      if (image['active'] == true) {
        console.log("ACTIVE", image['url'])
      }
    }

  }

}
