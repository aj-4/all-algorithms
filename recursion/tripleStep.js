//when you're able to take 1, 2, or 3 steps, how many ways are there
//to traverse n steps?

const tripleStep = (n) => {
    if (n < 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
}

console.log(tripleStep(6));