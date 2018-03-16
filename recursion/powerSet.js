//given a set, return all subsets of the set

//bit vector implementation
const powerSet = (set) => {
    const out = [];
    for (let i = 0; i < 1 << set.length; i++) {
        let subset = [];
        for (let j = 0; j < set.length; j++) {
            if ((1 << j) & i) {
                subset.push(set[j]);
            }
        }
        out.push(subset);
    }
    return out;
}

console.log(powerSet([1,2,3,4]));
