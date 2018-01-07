import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.css']
})
export class ImageSelectComponent implements OnInit {
  @Output() activeChange = new EventEmitter<boolean>();
  @Input() image_data: object;
  @Input() id: string;

  constructor() {}

  ngOnInit() {}

  clicked() {
    // Toggle active state on click, and fire event
    this.image_data['active'] = !this.image_data['active']
    this.activeChange.emit(this.image_data['active']);
  }
}
