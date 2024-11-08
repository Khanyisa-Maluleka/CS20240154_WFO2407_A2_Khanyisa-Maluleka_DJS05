let state = 0;

function getState() {
    return state
}

console.log("Initial State: " + getState())

let subscribers = [];

const actions = {increment : 'INCREMENT',
    decrement : 'DECREMENT',
    reset : 'RESET'
}

function subscribe(subscriber) {
    subscribers.push(subscriber)
}

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

function dispatch(action) {
    tallyApp(action)
}

dispatch({ type: actions.increment });  
dispatch({ type: actions.increment });  
dispatch({ type: actions.decrement });  
dispatch({ type: actions.reset });      


