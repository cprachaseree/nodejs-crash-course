const EventEmitter = require('events');

// create class that subclass of EventEmitter
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => { console.log('Event fired'); });

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('not event');
