const EventEmitter = require('events'); //this is a damn class
const emitter = new EventEmitter(); // this is a fucking object

emitter.on('activate', (e) => {
    console.log('Event Activated!', e);
})

emitter.emit('activate', {id: 21})