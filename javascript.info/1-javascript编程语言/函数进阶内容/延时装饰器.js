"use strict";

function f(x) {
    console.log(x);
}

function delayDecorator(fn, delays) {
    // 附加了功能的函数
    function wrapper(...args) {
        setTimeout(() => {
            fn.apply(this, args);
        }, delays);
    }

    return wrapper;
}

let f1000 = delayDecorator(f, 1000);
let f1500 = delayDecorator(f, 1500);

f1000(1);
f1500(2);
