import { EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler() {
    console.log('Hello world')
}

function goodByeHandler() {
    console.log('Goodbye')
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByeHandler);

// Emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye')