//given a set, return all subsets of the set

//bit vector implementation
const powerSet = (set) => {
    const powerSet = [[]];
    for (let i = 1; i < 1 << set.length; i++) {
        let subset = [];
        for (let j = 0; j < set.length; j++) {
            if (i & (1 << j)) {
                subset.push(set[j]);
            }
        }
        powerSet.push(subset.join(''));
    }
    return powerSet;
}

console.log(powerSet([1,2,3,4]));
