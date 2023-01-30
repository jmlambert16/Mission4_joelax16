//java funtion to calculate grade
$("#calc").click(function calclulate() {
    //assigning variables from user input
    var assignment = parseInt($("#assignment").val());
    var group = parseInt($("#group").val());
    var quiz = parseInt($("#quiz").val());
    var midterm = parseInt($("#midterm").val());
    var final = parseInt($("#final").val());
    var intex = parseInt($("#intex").val());

    //calculation 
    var finalperc = assignment + group + quiz + midterm + final + intex;

    //assigning variables for output 
    var percent = document.getElementById("percent")
    var grade = document.getElementById("grade")

    //grade output
    percent.textContent = " Total Percent: " + finalperc + "%";

    if (finalperc >= 94) {
        lettergrade = "A";
    }
    else if (finalperc < 94 && finalperc >= 90) {
        lettergrade = "A-";
    }
    else if (finalperc < 90 && finalperc >= 87) {
        lettergrade = "B+";
    }
    else if (finalperc < 87 && finalperc >= 84) {
        lettergrade = "B";
    }
    else if (finalperc < 84 && finalperc >= 80) {
        lettergrade = "B-";
    }
    else if (finalperc < 80 && finalperc >= 77) {
        lettergrade = "C+";
    }
    else if (finalperc < 77 && finalperc >= 74) {
        lettergrade = "C";
    }
    else if (finalperc < 74 && finalperc >= 70) {
        lettergrade = "C-";
    }
    else if (finalperc < 70 && finalperc >= 67) {
        lettergrade = "D+";
    }
    else if (finalperc < 67 && finalperc >= 64) {
        lettergrade = "D";
    }
    else if (finalperc < 64 && finalperc >= 60) {
        lettergrade = "D-";
    }
    else if (finalperc < 60) {
        lettergrade = "E";
    }

    grade.textContent = "Letter Grade: " + lettergrade

})


