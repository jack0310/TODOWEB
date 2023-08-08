const cal = {
    add: function (a, b) {
        return a + b;
    },

    sub: function (a, b) {
        console.log(a - b);
    },
    mux: function (a, b) {
        console.log(a * b);
    },
    div: function (a, b) {
        console.log(a / b);
    },
    mux2: function (a, b) {
        console.log(a ** b);
    },
};

console.log(cal.add(1, 5));

cal.sub(3, 1);
cal.mux(2, 3);
cal.div(2, 2);
cal.mux2(2, 2);
