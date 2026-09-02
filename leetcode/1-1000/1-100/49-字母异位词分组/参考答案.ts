function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const letters = str.split("").sort().join();

        if (map.has(letters)) {
            const arr = map.get(letters)!;
            arr.push(str);
            map.set(letters, arr);
        } else {
            map.set(letters, [str]);
        }
    }

    const result = Array.from(map.values());
    return result;
}
