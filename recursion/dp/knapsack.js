const knapsack = (items, capacity) => {
    const dp = [[]];
    const NA = {maxValue: 0, subList: []};
    //set first row to zeroes (no items)
    for (let i = 0; i <= capacity; i++) {
        dp[0].push(NA);
    }
    //iterate through rows (item list)
    for (let r = 1; r <= items.length; r++) {
        //set first col to zeroes, (no weight)
        dp[r] = [NA];
        for (let c = 1; c <= capacity; c++) {
            dp[r][c] = getSquare(r, c, dp, items);
        }
    }

    let maxCol = dp[dp.length - 1];
    return maxCol[maxCol.length - 1];

    function getSquare(r, c, dp, items) {
        const item = items[r - 1];
        const above = dp[r - 1][c];

        if (item.w > c) {
            return above;
        }

        const rem = dp[r - 1][c - item.w];
        const totalSq = rem.maxValue + item.v;

        if (totalSq > above.maxValue) {
            let _subList = rem.subList.slice();
            _subList.push(item);
            return {maxValue: totalSq, subList: _subList};
        } else {
            return above;
        }
    }

}

const items = [
    { w: 1, v: 2 },
    { w: 5, v: 6 },
    { w: 6, v: 10 },
    { w: 10, v: 13 }
]

const capacity = 16;

console.log(knapsack(items, capacity));