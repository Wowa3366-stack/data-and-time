// 1.
function getDate() {
    return new Date();
}

console.log(getDate());


// 2.
function getYear(date) {
    return date.getFullYear();
}

console.log(getYear(new Date()));


// 3.
function getMonth(date) {
    return date.getMonth() + 1;
}

console.log(getMonth(new Date()));


// 4.
function getDay(date) {
    return date.getDate();
}

console.log(getDay(new Date()));


// 5.
function getHours(date) {
    return date.getHours();
}

console.log(getHours(new Date()));


// 6.
function getMinutes(date) {
    return date.getMinutes();
}

console.log(getMinutes(new Date()));


// 7.
function getSeconds(date) {
    return date.getSeconds();
}

console.log(getSeconds(new Date()));


// 8.
function isWeekend(date) {
    return date.getDay() == 0 || date.getDay() == 6;
}

console.log(isWeekend(new Date()));
