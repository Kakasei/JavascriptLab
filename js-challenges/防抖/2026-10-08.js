"use strict";

function debounceDecorator(fn, ms) {
    let timeoutID;
    return function wrapper(...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            fn.apply(this, args);
        }, ms);
    };
}

let worker = function (x) {
    console.log(x);
};

worker = debounceDecorator(worker, 1000);

setTimeout(() => {
    worker(50);
}, 200);
setTimeout(() => {
    worker(50);
}, 500);
