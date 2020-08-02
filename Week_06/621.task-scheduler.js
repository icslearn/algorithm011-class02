/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = new Array(26).fill(0);
    for (let i = 0; i < tasks.length; i++) {
        map[tasks[i].charCodeAt() - 65]++;
    }
    map.sort((a, b) => b - a);
    const circle = map[0] - 1;
    let idleSlots = circle * n;
    for (let i = 1; i < map.length && map[i] > 0; i++) {
        idleSlots -= Math.min(map[i], circle);
    }
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};