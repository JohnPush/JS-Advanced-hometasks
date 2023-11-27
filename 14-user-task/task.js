'use strict';

/* Создать 3 файла:
- user.js - содержит класс User, который в constructor принимает Task и метод do(), который вызывает у Task метод run().
- task.js - содержит класс Task с методом run(), который выводит в консоль заданной в constructor сообщение.
- index.js - создает Task, а затем User с этим Task и вызывает у User do()
*/

export class Task {
  constructor(message) {
    this.message = message;
  }

  run() {
    console.log(this.message);
  }
}


