import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css'],
})
export class NgstyleComponent implements OnInit {
  @Input() size = 50;
  @Input() color = 'gold';
  @Input() bgc = 'lightblue';
  @Input() font = 'verdana';
  constructor() {}

  ngOnInit(): void {}
}
