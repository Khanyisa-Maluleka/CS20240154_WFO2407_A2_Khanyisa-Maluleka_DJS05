let state = 0;

function getState() {
    return state
}

console.log(getState())

function increment() {
    return state++;
}

function decrement() {
    return state--;
}

increment()
increment()
console.log(increment())