const LCSS = (arr1, arr2) => {
    const dp = [[]];
    for (let i = 0; i < arr1.length; i++) {
        dp[0].push(0);
    }
    for (let r = 1; r <= arr1.length; r++) {
        dp.push([0]);
        for (let c = 1; c <= arr2.length; c++) {
            if (arr1[r] === arr2[c]) {
                dp[r][c] = dp[r - 1][c - 1] + 1;
            } else {
                dp[r][c] = Math.max(dp[r - 1][c], dp[r][c - 1]);
            }
        }
    }
    let rowMax = dp[dp.length - 1];
    return rowMax[rowMax.length - 1];
}

let arr1 = 'abcbdab';
let arr2 = 'bdcaba';

console.log(LCSS(arr1, arr2));