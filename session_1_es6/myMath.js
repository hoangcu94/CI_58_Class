const myMath = {
    sum: function(a,b) {
        return a + b;
    },
    sub: function(a,b) {
        return a - b;
    }
};

function multi(a, b) {
    return a * b;
}
function pow(a, b) {
    return a ** b;
}

export { multi, pow}; // export theo ten

export default myMath; // default export