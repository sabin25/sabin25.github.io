var name;
var feeling;

function promptUser(){
    var name = prompt("What is your name?", "Type your name here");
    alert("VG Creations welcomes you, " + name + "\nWe're glad you are doing great!");

	var date = new Date();
	document.getElementById("p1").innerHTML = date;
}

async function questions(){ 
    let evt = await new Promise((resolve, reject) => {
        document.getElementById("userInput").addEventListener("Submit", (evt) => {
            evt.preventDefault();
            resolve(evt);
        });
    });
    console.log("Submitted!");
    const data = new FormData(evt.target);
    name = data.get('first');
    feeling = data.get('feeling');
    document.getElementById("userPrompt").style = "visibility: hidden;";
    document.getElementById("afterInput").style = "";
    document.getElementById("date").innerHTML = "Today is " + getCurrentTime() + " on " +  getTodaysDate() + ", " + currentYear;
    document.getElementById("welcome").innerHTML="Eshetu Wekjira designers welcomes you, " + getName()  + "!\n" +
    "We're glad you are doing "+ getFeeling() + ".";
    form = document.querySelector("signup");
}

