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
    new Cv(
      2,
      'Khelifi',
      'Bilel',
      'ing',
      'rotating_card_profile3.png',
      12345,
      21
    ),
  ];
  @Output() forwardCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  forwardItem(cv: Cv) {
    this.forwardCv.emit(cv);
  }
}
