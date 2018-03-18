const knapsack = (items, capacity) => {
    const memo = [];

    for (let i = 0; i < items.length; i++) {
        let row = [];
        for (let cap = 1; cap < capacity; cap++) {
            row.push(getSquare(i, items, cap));
        }
        memo.push(row);
    }

    let lastSq = memo[memo.length - 1];
    return lastSq[lastSq.length - 1];

    function getSquare(row, items, c) {
        const NA = {maxValue: 0, set: []};

        let col = c - 1;
        let item = items[row];
        let iVal = item.v;
        let iWt = item.w;

        let above = row ? memo[row - 1][col] || NA : NA;
        let aboveVal = above.maxValue;

        let remWt = c - iWt;

        let dim = row ? memo[row - 1][remWt - 1] || NA : NA;
        let dimVal = dim.maxValue;

        if (remWt < 0) {
            return above;
        }

        let totVal = dimVal + iVal;
        if (totVal > aboveVal) {
            let copySet = dim.set.slice();
            copySet.push(items[row]);
            return {maxValue: totVal, set: copySet};
        } else {
            return above;
        }

    }
}

var items = [
    { w: 70, v: 135 },
    { w: 73, v: 139 },
    { w: 77, v: 149 },
    { w: 80, v: 150 },
    { w: 82, v: 156 },
    { w: 87, v: 163 },
    { w: 90, v: 173 },
    { w: 94, v: 184 },
    { w: 98, v: 192 },
    { w: 106, v: 201 },
    { w: 110, v: 210 },
    { w: 113, v: 214 },
    { w: 115, v: 221 },
    { w: 118, v: 229 },
    { w: 120, v: 240 },
];

var capacity = 750;
console.log(knapsack(items, capacity));