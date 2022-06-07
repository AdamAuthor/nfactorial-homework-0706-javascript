let slaver = {};
let slavers = [];

function buySlaver(name, age, gender) {
    slaver = {name, age, gender};
    slavers.push(slaver);
    console.log("Success!");
}

function sellSlaver(name) {
    let idx = slavers.indexOf(name);
    if (idx !== -1) {
        slavers.splice(idx, 1);
        console.log(`Good bye, ${name}!`);
    }
}

function printSlaver() {
    for (const key in slavers) {
        console.log(key)
    }
}

module.exports = {printSlaver, buySlaver, sellSlaver}