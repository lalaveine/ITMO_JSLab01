#!/usr/bin/node

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log("Today is %s %d, year %d.", months[d.getMonth()], d.getDate(), d.getFullYear());
