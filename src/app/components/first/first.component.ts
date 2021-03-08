import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  /*
    attributs
    methodes
  */
  classe = 'RT3';
  isHidden = false;
  color = 'green';
  constructor() {}

  ngOnInit(): void {}

  hide(): void {
    this.isHidden = true;
  }
  changeColor(color: string): void {
    this.color = color;
  }
}
