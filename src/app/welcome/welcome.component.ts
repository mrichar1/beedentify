import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-welcome',
  styles: ['.modal-header {text-align: center} .modal-title {margin: 0 auto}'],
  template: `
    <div class="modal-header">
      <h3 class="modal-title">Welcome to Beedentify</h3>
      <button type="button" class="close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Beedentify is designed to help you work out what type of bees or wasps you have in your home or garden,
      and provide you with information on what can be done about them if they are causing you a problem.</p>
      <h5>Instructions</h5>
      <ol>
      <li>
        Please click one or more images which match what you are currently seeing.<br/>
        You should select at least <strong>2</strong> images, and preferably <strong>3</strong> for better identification.
      </li>
      <li>As you select images, the <strong>Results</strong> section will update.</li>
      <li>Once <em>more than</em> <strong>50%</strong> of the images you have selected match for a particular insect,
      its Results entry will become much larger, indicating it is the most likely candidate.
      </ol>
      <p><em>You can turn on zooming for more detail, and filter various categories of image on and off.</em></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class WelcomeComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
