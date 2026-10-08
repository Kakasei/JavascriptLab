"use strict";

function throttleDecorator(fn, ms) {
    let isThrottled = false;
    let saveThis;
    let saveArgs;

    return function wrapper(...args) {
        // (2)若处于节流模式，保存最后的上下文
        if (isThrottled) {
            saveArgs = args;
            saveThis = this;
            return;
        }

        // (1)若未处于节流模式，则立刻执行一次函数，并进入节流模式
        fn.apply(this, args);
        isThrottled = true;

        // (3)ms时间后，关闭节流模式，并执行节流模式中的最后一次调用意图
        setTimeout(() => {
            isThrottled = false;
            if (saveArgs) {
                fn.apply(saveThis, saveArgs);
                saveThis = null;
                saveArgs = null;
            }
        }, ms);
    };
}
