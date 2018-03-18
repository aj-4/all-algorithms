const knapsack = (items, capacity) => {
    const memo = [];

    for (let i = 0; i < items.length; i++) {
        let row = [];
        console.log('row ', i);
        
        for (let cap = 1; cap <= capacity; cap++) {
            let sol = getSolution(i, cap)
            row.push(sol);                        
        }
        memo.push(row);
    }
    
    let lastRow = memo[memo.length - 1];
    return lastRow[lastRow.length - 1];

    function getSolution(row, cap) {
        const NA = {maxValue: 0, subset: []};

        let col = cap - 1;
        let item = items[row];
        let rem = cap - item.w;

        //check row above
        let lastSol = row > 0 ? memo[row - 1][col] || NA : NA;
        //check row above, minus new val
        let lastSub = row > 0 ? memo[row - 1][rem - 1] || NA : NA;

        if (rem < 0) {
            return lastSol;
        }

        let lastSolVal = lastSol.maxValue;
        let lastSubVal = lastSub.maxValue;

        let newVal = lastSubVal + item.v;
        if (newVal >= lastSolVal) {
            let _lastSub = lastSub.subset.slice();
            _lastSub.push(item);
            return {maxValue: newVal, subset: _lastSub};
        } else {
            return lastSol
        }
    }
}

var items = [
    {w: 1, v: 2},
    {w: 5, v: 6},
    {w: 6, v: 10},
    {w: 10, v: 13}
]

var capacity = 16;

console.log(knapsack(items, capacity));


// var items = [
//     { w: 70, v: 135 },
//     { w: 73, v: 139 },
//     { w: 77, v: 149 },
//     { w: 80, v: 150 },
//     { w: 82, v: 156 },
//     { w: 87, v: 163 },
//     { w: 90, v: 173 },
//     { w: 94, v: 184 },
//     { w: 98, v: 192 },
//     { w: 106, v: 201 },
//     { w: 110, v: 210 },
//     { w: 113, v: 214 },
//     { w: 115, v: 221 },
//     { w: 118, v: 229 },
//     { w: 120, v: 240 },
// ];

// var capacity = 750;
// console.log(knapsack(items, capacity).maxValue === 1458);