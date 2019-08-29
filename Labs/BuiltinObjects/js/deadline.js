"use strict"

const today = new Date();
const year = today.getFullYear();
let deadLine = new Date(year,11,31);


let differenceMS = deadLine.getTime() - today.getTime();

let differenceDays = differenceMS/(100 * 60 *60 * 24);

document.write("Only "  + Math.floor(differenceDays) + " more days until the end of the year!");



