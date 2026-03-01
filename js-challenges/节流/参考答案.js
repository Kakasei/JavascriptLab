function throttle(fn, ms) {
    // 是否处于节流模式
    let isThrottled = false,
        savedThis,
        savedArgs;

    function wrapper(...args) {
        // （2）若处于节流模式，覆盖保存调用意图
        if (isThrottled) {
            savedThis = this;
            savedArgs = args;
            return;
        }

        // （1）若未处于节流模式，则立刻调用一次函数，并进入节流模式
        isThrottled = true;
        fn.apply(this, args);

        // （3）进入节流模式后，ms时间后需要关闭节流模式，若节流期间存在着调用意图，则调用最后的那个意图
        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                fn.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
