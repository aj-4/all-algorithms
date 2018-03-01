//hashing function
const hash = (key, limit) => {
    let sha;
    if (typeof key === 'string') {
        sha = key.split('').reduce((a, v) => a + v.charCodeAt(0), 0)        
    } else {
        sha = key * 31;
    }
    sha = sha % limit;
    return sha;
}

// console.log(hash('hel', 4));
// console.log(hash('hel', 4));
// console.log(hash('bell', 4));

module.exports = hash;