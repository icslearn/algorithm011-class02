/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    var x = 0, y = 0;
    var maxDistSquare = 0;
    var direction = 0;
    var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    var obstaclesMap = {};
    for (let i = 0; i < obstacles.length; i++) {
        obstaclesMap[`${obstacles[i][0]} ${obstacles[i][1]}`] = true;
    }
    for (let i = 0; i < commands.length; i++) {
        var command = commands[i];
        if (command == -2) {
            direction = (direction + 3) % 4;
        } else if (command == -1) {
            direction = (direction + 1) % 4;
        } else {
            var step = 0;
            while(step < command) {
                step++;
                if (!obstaclesMap[`${x + directions[direction][0]} ${y + directions[direction][1]}`]) {
                    x += directions[direction][0];
                    y += directions[direction][1];
                } else {
                    break;
                }
            }
        }
        maxDistSquare = Math.max(maxDistSquare, x * x + y * y);
    }
    return maxDistSquare
};