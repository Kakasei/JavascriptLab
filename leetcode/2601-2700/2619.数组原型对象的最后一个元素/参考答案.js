// 没啥好说的，js语法题

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    const last = this[this.length - 1];
    if (last === null) return null;
    return last ?? -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
