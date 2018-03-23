const lcss = (arr1, arr2) => {
    const dp = [[]];
    //fill first row with zeroes
    for (let i = 0; i <= arr2.length; i++) {
        dp[0].push(0);
    }
    //and first col with zeroes
    for (let r = 1; r <= arr1.length; r++) {
        dp[r] = [0];
        for (let c = 1; c <= arr2.length; c++) {
            if (arr1[r - 1] === arr2[c - 1]) {
                dp[r][c] = dp[r - 1][c - 1] + 1;
            } else {
                dp[r][c] = Math.max(dp[r - 1][c], dp[r][c - 1]);
            }
        }
    }

    //backtracking
    let rp = arr1.length;
    let cp = arr2.length;

    const out = [];

    while (dp[rp][cp] > 0) {
        let curNum = dp[rp][cp];
        console.log(curNum)
        //move left
        while (dp[rp][cp] === curNum){
            if (dp[rp][cp - 1] === curNum) {
                cp--;
            } else if (dp[rp - 1][cp] === curNum) {
                rp--;
            } else {
                break;
            }
        }
        //cross bridge
        out.push(arr1[rp - 1]);
        rp--;
        cp--;
    }

    return out;
}

let arr1 = 'abcbdab';
let arr2 = 'bdcaba';

console.log(lcss(arr1, arr2));