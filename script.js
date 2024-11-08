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

    return () => {
        subscribers = subscribers.filter(s => s !== subscriber);
    };
}

function tallyApp(action) {
    switch (action.type) {
        case actions.increment :
            state++;
            break;
        case actions.decrement :
            state--;
            break;
        case actions.reset :
            state = 0;
            break;
        default:
            break;
    }

    subscribers.forEach(subscriber => subscriber(state));
    return state;
}

function dispatch(action) {
    tallyApp(action)
}

subscribe((newState) => {
    console.log("State updated:", newState);
});

dispatch({ type: actions.increment });  
dispatch({ type: actions.increment });  
dispatch({ type: actions.decrement });  
dispatch({ type: actions.reset });      


