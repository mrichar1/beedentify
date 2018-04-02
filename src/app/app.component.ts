import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageDataService } from "./image-data.service";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
      .subscribe(data => this.imgDataSvc.changeData(data));
    this.modal.open(WelcomeComponent, {size: 'lg', centered: true});
  }
}

@Component({
  selector: 'welcome',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Instructions</h4>
      <button type="button" class="close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Please click one or more of the images which match what you are currently seeing.
      <p>You should select at least <strong>2</strong> images, and preferably 3 for better identification.</p>
      <p>As you select images, the Results window will update with match scores. You can click on any result <em>over</em> 50% for more information.</p>
      <p>You can filter various categories of image on and off to aid selection.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class WelcomeComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
