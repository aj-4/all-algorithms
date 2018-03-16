const moveTo = (from, to) => {
    to.push(from.pop());
}

const shift = (n, f, t, b) => {
    if (n > 0) {
        shift(n - 1, f, b, t);
        moveTo(f, t);
        shift(n - 1, b, t, f);
    }
}

const hanoi = (n) => {
    const f = [];
    for (let i = 0; i < n; i++) {
        f.push(n - i);
    }
    const t = [];
    const b = [];
    shift(n, f, t, b);
    return t;
}

console.log(hanoi(5));
