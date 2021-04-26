import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 12345, 38),
    new Cv(2, 'Khelifi', 'Bilel', 'ing', '', 12345, 21),
    new Cv(3, 'Mellakh', 'Insaf', 'ing', '                  ', 12346, 21),
  ];
  @Output() forwardCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  forwardItem(cv: Cv) {
    this.forwardCv.emit(cv);
  }
}
