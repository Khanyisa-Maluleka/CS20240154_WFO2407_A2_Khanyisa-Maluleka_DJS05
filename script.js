let state = 0;

function getState() {
    return state
}

let subscribers = [];

const actions = {increment : 'INCREMENT',
    decrement : 'DECREMENT',
    reset : 'RESET'
}

console.log(getState())

function tallyApp(action) {
    switch (actions.type) {
        case actions.increment :
            return state++;
        case actions.decrement :
            return state--;
        case actions.reset :
            return state = 0;
        default:
            return state;
    }

    subscribers.forEach(subscriber => subscriber());
}

function subscribe(subscriber) {
    subscribers.push(subscriber)
}

function dispatch(action) {
    tallyApp(action)
}

