var currentHour = moment().hour(); 
var startHour = 9;
var pageTopTime = moment().format("dddd, MMMM Do");
document.getElementById("currentDay").innerHTML = pageTopTime;
function generateRows() {
    for (var rowNum = 0; rowNum < 9; rowNum++) {
        var amPmHour = moment().hour(rowNum+startHour);
        var amPmHourStr = amPmHour.format("h A");
        console.log(amPmHourStr);
        var table = document.getElementById("myTable");
        var row = table.insertRow(rowNum);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var textName = "inputEvent" + rowNum;
        var divId = "div" + rowNum;
        var rowNumStr = "row" + rowNum;
        var currentEvent = localStorage.getItem(rowNumStr);
        console.log(currentEvent);
        if (currentEvent === null) {
            currentEvent = "Enter Event";
        }
       
        cell1.innerHTML = amPmHourStr,
        
        cell2.innerHTML = "<div id=\""+divId+"\" class=\"col-auto\">"
        + "<input type=\"text\" class=\"form-control\" id=\""+textName+"\" placeholder=\""+currentEvent+"\"> " 
        + "</div>";
        
        var cell3HTML = "<button onclick=\"saveEvent(" + rowNum + ")\"> " 
        + "Save event " 
        + "</button> ";

         if (currentHour < amPmHour.hour()) {
            cell2.style.backgroundColor = "#99ff66";
            document.getElementById(textName).style.backgroundColor = "#99ff66";
        }
        if (currentHour > amPmHour.hour()) {
            cell2.style.backgroundColor = "#bfbfbf	";
            document.getElementById(textName).style.backgroundColor = "#bfbfbf	";
        }
        if (currentHour === amPmHour.hour()) {
            cell2.style.backgroundColor = "#ff5050	";
            document.getElementById(textName).style.backgroundColor = "#ff5050	";
        }
        console.log(currentHour, "currentHour");
        console.log(amPmHour.hour());
        cell3.innerHTML = cell3HTML;
        console.log(textName);
        console.log(cell3HTML);
    }
}

function saveEvent(rowNum) {
    var textContent = "inputEvent" + rowNum;
    console.log(textContent);
    var rowNumStr = "row" + rowNum;
    var eventText = document.getElementById(textContent).value;
    localStorage.setItem(rowNumStr, eventText);
    console.log(eventText);
}