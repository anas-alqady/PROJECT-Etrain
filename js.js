
var bybuttonstart = document.getElementById('start-button');
bybuttonstart.onclick=function () {
    var hoursobject = document.getElementById('hours');
    var mintobject = document.getElementById('mint');
    var secondobject = document.getElementById('sec');
    var mlsecondobject = document.getElementById('msec');

    var hoursCounter = 0;
    var mintCounter = 0;
    var secondCounter = 0;
    var mseccounter=0;
    var status = 1;

    setInterval(function () {
       for (var status=1 ; status > 0 ; status--)
        {
            mseccounter++ ;
            secondCounter++;
            mintCounter++;
            hoursCounter++;
if (mseccounter>1024)
    mseccounter=1024;
if (secondCounter>960)
    secondCounter=960;
if (mintCounter>1019)
    mintCounter=1019;
if(hoursCounter>819)
    hoursCounter=819;
        // if (status) {
        //     mseccounter++;
        //     if(mseccounter>819){
        //         mseccounter=0;
        //         secondCounter++;}
        //     if (secondCounter > 1019) {
        //         secondCounter = 0;
        //         mintCounter++;
        //     }
        //     if (mintCounter > 960) {
        //         hoursCounter++;
        //         mintCounter = 0;
        //     }
            hoursobject.innerText = hoursCounter;
            mintobject.innerText = mintCounter;
            secondobject.innerText = secondCounter;
            mlsecondobject.innerText=mseccounter;
        }

    }, 1);
    bybuttonstart.id = "stop-button";
    bybuttonstart.innerText = "stop";
    bybuttonstart.style.borderColor = "blue";
    bybuttonstart.onclick = function () {
        if (bybuttonstart.innerText === "stop") {
            bybuttonstart.innerText = "start"
        } else if (bybuttonstart.innerText === "start") {
            bybuttonstart.innerText = "stop";
        }
        if (status) {
            status = 0;
        } else {
            status = 1;
        }
    }
}
