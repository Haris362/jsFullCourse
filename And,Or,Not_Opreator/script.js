const temprature = 30;
// And opreator
if (temprature > 40 && temprature == 40) {
    console.log("Weather is Hot");
}
else if (temprature < 40) {
    console.log("Weather is cold");
}
// Or opreator
if (true || false){
    console.log("Or opreator is working");   
}
if(temprature==40 || false){
    console.log("Or opreator is not working");
}

if (!temprature==35){
    console.log("Opreator is working ");//Because tempreature is not equal to 35 and its give false in output and we are using not opreator which change the false into  rue
}
