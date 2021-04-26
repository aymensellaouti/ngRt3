import { Injectable } from '@angular/core';
import { Todo } from '../Model/todo';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}

  logger() {
    this.loggerService.logger(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index === -1) {
      return false;
    }
    this.todos.splice(index, 1);
    return true;
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
