import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private loggerService: LoggerService) {}

  sayHello() {
    this.loggerService.logger('Hello');
  }
}
