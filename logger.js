const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(message) {
    this.emit('message', { id: uuid.v4(), message });
  }
}

//module.exports = Logger;
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => {console.log('Called listener:', data )});

logger.log("helloworld");
