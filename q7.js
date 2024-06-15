//closure

function createCounter() {
    let count = 0

    return {
        increment: function () {
            count++
            console.log(count);
        },
        reset : function () {
            count = 0
            console.log(count);
        },
    }
}

counter1 = new createCounter()
counter2 = new createCounter()

counter1.increment()
counter2.increment()
counter1.increment()
counter1.reset()
counter2.increment()