let state = 0;

function getState() {
    return state
}

const actions = {type : 'INCREMENT',
    type : 'DECREMENT',
    type : 'RESET'
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