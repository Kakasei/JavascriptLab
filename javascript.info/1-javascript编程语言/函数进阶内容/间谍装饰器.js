"use strict";
function work(a, b) {
    console.log(a + b);
}

function spyDecorator(fn) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        fn.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spyDecorator(work);

work(1, 2);
work(3, 4);

for (const args of work.calls) {
    console.log("call:" + args.join());
}
