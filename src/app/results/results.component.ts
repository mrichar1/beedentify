import { Component, OnInit } from '@angular/core';
import { ImageDataService } from "../image-data.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Array<any> = [];


  constructor(private imgDataSvc: ImageDataService) { }

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_dataChanged(res));
  }

  image_dataChanged(image_data) {
    // Update results on image_data change
    this.results = [];
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
    if (score_total > 0) {
      for (let [name, score] of Object.entries(scores)) {
        this.results.push({name: name, score: (Number(score) / score_total * 100).toFixed(2)});
      }
  }
  }
}
