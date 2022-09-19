
var entry;
var average;
var scores = [];
var total = 0;
var show = "The test scores:\n";

do {
entry = prompt("Enter test score\n" + 
"Or enter 999 to end entries", 999); 

entry = parseInt(entry);   
if (entry >= 0 && entry <= 100) {
    scores[scores.length] = entry;
}
else if (entry != 999) 
 {
  alert("Entry must be a valid number from 0 to 100\n" + "Or enter 999 to end entries");  
 }
}
while (entry != 999);

if (scores.length !=0) {
    for (var i = 0; i < scores.length; i++){
        total = total + scores[i];
        
        show = show + scores[i] + "\n";
    }
    average = parseInt(total/scores.length);
    alert (show + "\nAverage score is " + average);
}


