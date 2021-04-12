import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() messageDeMonPapa = '';
  @Input() name = 'sonComponent';
  @Output() sendMessageToDad = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emmetreEvent() {
    this.sendMessageToDad.emit('cc papa');
  }
}
