let computer_Students = ["Hitesh","Hassan","John","Albert","Ali","Anderson","Shayan"];
console.log(`1.Previous years students ${computer_Students}`)

// Adding new students
let new_Students = ["Haris","Ahad","Hamza"];
computer_Students.push(new_Students)
console.log(`2.New students in computer class are ${new_Students}`);

// Students that leave class 
let left_Students = computer_Students.splice(4,2);
console.log(`3.Students that left the computer class are ${left_Students}`);

// New section
let new_Section_Students = ["Uzair","Haroon","Samiullah","Ayan","Moiz","Shahbaz","Waqas"];
console.log(`4.New section students are ${new_Section_Students}`);

// Merging Both Sections
let combineStudents_Section = computer_Students.push(new_Section_Students);

// Flating the array
let flat_Array = computer_Students.flat();

// Extracting the Students according to their studies results
console.log(`5.Toppers Name: ${flat_Array.slice(0,5)}`)
console.log(`6.Mediocre Name: ${flat_Array.slice(6,10)}`)
console.log(`7.Average Name: ${flat_Array.slice(10,15)}`)


