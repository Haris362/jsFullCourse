const evenNum_Array = [2,4,6,8,10];
console.log(`In array at index 2: ${evenNum_Array[2]} is present`);

// Merging multiple arrays into one array
const oddNum_Array = [1,3,5,7,9];
const another_Array = evenNum_Array.concat(oddNum_Array)
console.log(another_Array);

const muslimCountries = ["Pakistan","Dubai","Turkey","Saudia"];
const Non_MuslimCountries = ["America","Japan","Denmark","Germany"]
const countries = []
const allCountries = countries.concat(muslimCountries,Non_MuslimCountries)
console.log(allCountries);

const team1 = "Islamabad";
const team2 = "Lahore";
const team3 = "Karachi";
const team4 = "Peshawar"
const string_To_Array = Array.from("Haris");
console.log(string_To_Array);

const pslTeams = Array.of(team1,team2,team3,team4);
console.log(pslTeams);

const multipleArray = [23,45,[3,6,9],34,[45,67,8],[34,5,25,4545]]
console.log(multipleArray.flat());

const cutted_Arr = oddNum_Array.slice(1,4);
console.log(cutted_Arr,oddNum_Array);

console.log(evenNum_Array);

evenNum_Array.splice(1,0,12,23)
console.log(evenNum_Array);
