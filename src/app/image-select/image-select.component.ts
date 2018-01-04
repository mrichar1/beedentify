import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.css']
})
export class ImageSelectComponent implements OnInit {
  @Input() active: boolean;
  @Output() activeChange = new EventEmitter<boolean>();
  @Input() image: string;
  @Input() id: string;

  constructor() {
    this.active = false
  }

  ngOnInit() {}

  clicked() {
    // Toggle active state on click, and fire event
    this.active = !this.active
    this.activeChange.emit(this.active);
  }
}
