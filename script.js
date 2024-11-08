let state = 0;

function getState() {
    return state
}

let subscribers = [];

function subscribe(subscriber) {
    subscribers.push(subscriber)
}

const actions = {increment : 'INCREMENT',
    decrement : 'DECREMENT',
    reset : 'RESET'
}

console.log(getState())

function tallyApp() {
    switch (actions.state) {
        case "INCREMENT" :
            return state++;
        case "DECREMENT" :
            return state--;
        case "RESET" :
            return state == 0;
        default:
            return state;
    }
}

