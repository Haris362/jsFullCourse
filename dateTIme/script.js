let date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.toTimeString());
console.log(date.getTime());

let newDate = new Date();
newDate.setFullYear(2023)
newDate.setMonth(3)
newDate.setDate(13)
newDate.setHours(11)
newDate.setMinutes(23)
console.log(newDate);

let today = new Date();
console.log(today.toString())