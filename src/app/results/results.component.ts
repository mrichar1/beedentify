import { Component, OnInit } from '@angular/core';
import { ImageDataService } from "../image-data.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  default_html = "<p>Please select one or more images below which match what you are currently seeing.\
  You can toggle zooming of images when you hover over them, and filter various categories of image on and off.\
  When you select at least one image, this panel will update with your results.\
  For best results, select multiple images.</p>"

  result_html: string = this.default_html;


  constructor(private imgDataSvc: ImageDataService) { }

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_dataChanged(res));
  }

  image_dataChanged(image_data) {
    this.result_html = this.default_html;
    // Update results on image_data change
    var urls = [];
    for (var image of image_data) {
      if (image['active'] == true) {
        urls.push(image['url'])
      }
    }
    if (urls.length > 0) {
      this.result_html = "<ul>"
      for (var url of urls) {
        this.result_html += "<li>" + url + "</li>"
      }
      this.result_html += "</ul>"
    }

  }

}
