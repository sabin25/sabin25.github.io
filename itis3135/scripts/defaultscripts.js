
    function promptUser(){
        var name = prompt("What is your name?", "Type your name here");
        alert("VG Creations welcomes you, " + name + "\nWe're glad you are doing great!");
    
        var date = new Date();
        document.getElementById("p1").innerHTML = date;
    
}
function getTodaysDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] ;
}


function getAccelaration()
{
    var mile =prompt("Please enter a distance in miles")
    var time =prompt("Please enter a time in second")
    acceleration =mile/(time*time);
    var Num =acceleration.toFixed(2);
    document.getElementById("fvg").innerHTML ="Accelearation: " + Num + "mi / s2 ";
}