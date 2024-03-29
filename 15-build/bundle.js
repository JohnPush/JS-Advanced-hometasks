'use strict';

class Task {
  constructor(message) {
    this.message = message;
  }

  run() {
    console.log(this.message);
  }
}

class User {
    constructor(task) {
    this.task = task;
  }
  
  do() {
    this.task.run();
  }
}

const createTask = new Task('Is the decision correct?');
const createUser = new User(createTask);
createUser.do();
