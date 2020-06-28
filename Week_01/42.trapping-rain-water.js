var trap = function(height) {
    if (height <= 2) {
        return 0;
    }
    let area = 0;
    const stack = [0];
    for (let i = 1; i < height.length; i++) {
        const item = height[i];
        if (height[stack[stack.length -1]] < item) {
            do {
                const top = stack.pop();
                if (!stack.length) {
                    break;
                }
                const pre = stack[stack.length - 1];
                area += (Math.min(height[pre], height[i]) - height[top]) * (i - pre - 1)
            } while(height[stack[stack.length -1]] < item)
        }
        stack.push(i);
    }
    return area
};