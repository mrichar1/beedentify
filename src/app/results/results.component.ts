import { Component, OnInit } from '@angular/core';
import { ImageDataService } from "../image-data.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  default_html = "<p>Please select one or more images below which match what you are currently seeing.\
  You can filter various categories of image on and off to aid selection.\
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
    let scores = {};
    let score_total = 0
    for (let image of image_data) {
      if (image['active'] == true) {
        for (let [name, num] of Object.entries(image['score'])) {
          scores[name] = (scores[name] || 0) + 1;
          score_total++
        }
      }
    }
    let result = []
    if (score_total > 0) {
      result.push('<ul>')
      for (let [name, score] of Object.entries(scores)) {
        if (score > 0) {
          console.log(score)
          let pct = (Number(score)/score_total)*100;
          result.push("<li><strong>" + name + "</strong> scores: " + pct.toFixed(2) +"%</li>");
        }
      }
      this.result_html = result.join("\n")
    }
  }
}
