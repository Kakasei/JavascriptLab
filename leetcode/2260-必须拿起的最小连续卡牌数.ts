// 和219几乎一样
function minimumCardPickup(cards: number[]): number {
    const map: Map<number, number> = new Map();

    let min = Infinity;

    for (const [index, value] of cards.entries()) {
        const n = map.get(value);
        if (n === undefined) {
            map.set(value, index);
        } else {
            min = Math.min(min, index - n + 1);
            map.set(value, index);
        }
    }
    return min === Infinity ? -1 : min;
}
