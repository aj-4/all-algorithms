const LCS = (arr1, arr2) => {
    const dp = [[]];
    for (let i = 0; i <= arr2.length; i++) {
        dp[0][i] = 0;
    }
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
    let ri = arr1.length;
    let ci = arr2.length;

    //if returning length:
    // return dp[ri][ci];
    
    const sequence = [];

    while (dp[ri][ci] > 0) {
        //searching for inflection point
        let cur = dp[ri][ci];
        if (dp[ri][ci - 1] === cur) ci--;
        else if (dp[ri - 1][ci] === cur) ri--;
        else {
            console.log('crossing bridge at', ri, ci);
            console.log('pushing', arr1[ri - 1]);
            
            sequence.push(arr1[ri - 1]);
            //cross bridge
            ri--;
            ci--;
        }
    }

    return sequence;
}

let arr1 = 'abcbdab';
let arr2 = 'bdcaba';

console.log(LCS(arr1, arr2));
