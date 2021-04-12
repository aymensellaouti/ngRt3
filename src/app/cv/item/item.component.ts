import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  @Output() selectItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSelectItem() {
    this.selectItem.emit(this.cv);
  }
}
