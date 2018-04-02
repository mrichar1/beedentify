import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-welcome',
  styles: ['.modal-header {text-align: center} .modal-title {margin: 0 auto}'],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
