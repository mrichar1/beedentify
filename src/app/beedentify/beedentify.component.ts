import { Component, Input, OnInit } from '@angular/core';
import { WelcomeComponent } from "../welcome/welcome.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-beedentify',
  templateUrl: './beedentify.component.html',
  styleUrls: ['./beedentify.component.css']
})
export class BeedentifyComponent {

  title = 'Beedentify';
  image_data: Array<object>;

  constructor(private modal: NgbModal) {}

  ngOnInit() {
    this.modal.open(WelcomeComponent, {size: 'lg', centered: true});
  }
}
