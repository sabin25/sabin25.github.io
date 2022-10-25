
var names = [];
var salary = [];
var $ = function (id) { return document.getElementById(id); };
window.onload = function () {
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("add").onclick = addSalary;
    document.getElementById("display_salary").onclick = displaySalary;
};
function addSalary() {

    var names  = $("names").value;
    
    var salary = $("salary").value;
    
    names.push(names);
    
    salary.push(salary);
    
    }
    
    function displayResults() {
    
    var avg = 0.0;
    
    var highest = 0;
    
    for (var i = 0; i < salary.length; i++) {
    
    avg += parseFloat(salary[i]);
    
    if (salary[highest] < salary[i])
    
    highest = i;
    
    }
    
    avg = avg / salary.length;
    
    $("results").innerHTML = "Average salary = " + avg + "<br />";
    
    $("results").innerHTML += "Highest salary = " + names[highest] + " with a score of " + salary[highest];
    
    }
    
    function displaySalary() {
    
    var str = "<table>";
    
    str += "<tr align='left'><th>Name</th><th>Salary</th></tr>";
    
    for (var i = 0; i < salary.length; i++) {
    
    str += "<tr><td>" + names[i] + "</td><td>" + salary[i] + "</td></tr>";
    
    }
    
    str += "</table>";
    
    $("scores_table").innerHTML = str;
    
    }
    
    window.onload = function() {
    
    $("add").onclick = addScore;
    
    $("display_results").onclick = displayResults;
    
    $("display_scores").onclick = displayScores;
    
    };