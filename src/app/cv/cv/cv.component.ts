import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { HelloService } from '../../services/hello.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedItem: Cv = null;
  date = new Date();
  constructor(
    private loggerService: LoggerService,
    private helloService: HelloService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('cc je suis le cv component');
    this.helloService.sayHello();
    this.toaster.info('Welcome to our CvTech');
  }

  selectItem(cv: Cv) {
    this.selectedItem = cv;
  }
}
