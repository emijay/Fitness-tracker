
// Declaring Global Variables //

let submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', function(event){

    event.preventDefault();

    let workout_id = document.querySelector('#inputWorkoutType').value;

    const workoutID = {
        workout_id
    }

    doPostRequest(workoutID);

});


let doRequest = function(workoutID){

    let data = { "workout" : workout };

    let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = "/history";

    // What happens after you get a response from AJAX POST
    xmlhttp.addEventListener("load", function(){

        // document.querySelector('#todaysWorkout').style.display = '';
        // let response = JSON.parse(this.responseText)

        // if (response.workout_id === 5) {
        //     document.querySelector('#todaysCardio').style.display = '';
        //     createCardioField(response);
        //     clearInputFields();

        // } else {
        //     document.querySelector('#todaysStrength').style.display = '';
        //     createStrengthField(response);
        //     clearInputFields();

        // }

    });

    xmlhttp.open("GET", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.send(JSON.stringify(data));

};