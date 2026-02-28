"use strict"

let worker = function (x) {
    console.log(x);
};

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

worker = debounceDecorator(worker,1000)

setTimeout(() => {
    worker("不会被打印");
}, 200);

setTimeout(() => {
    worker("会被打印");
}, 500);
