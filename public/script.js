

// Declaring Global Variables //

let selectBtn = document.querySelector('#inputWorkoutType');

let submitBtn = document.querySelector('#submitBtn');

let nameRow = document.querySelector('#divExerciseName');
let weightRow = document.querySelector('#divWeight');
let repsRow = document.querySelector('#divReps');
let setsRow = document.querySelector('#divSets');
let distanceRow = document.querySelector('#divDistance');
let durationRow = document.querySelector('#divDuration');


selectBtn.addEventListener('change', function() {

    if (selectBtn.value === "5") {

        nameRow.style.display = "";
        weightRow.style.display = "none";
        repsRow.style.display = "none";
        setsRow.style.display = "none";
        distanceRow.style.display = "";
        durationRow.style.display = "";

    } else {

        nameRow.style.display = "";
        weightRow.style.display = "";
        repsRow.style.display = "";
        setsRow.style.display = "";
        distanceRow.style.display = "none";
        durationRow.style.display = "none";
    }

});


submitBtn.addEventListener('click', function(event){

    event.preventDefault();

    let workout_id = document.querySelector('#inputWorkoutType').value;
    let name = document.querySelector('#inputExerciseName').value;
    let weight = document.querySelector('#inputWeight').value;
    let reps = document.querySelector('#inputReps').value;
    let sets = document.querySelector('#inputSets').value;
    let distance = document.querySelector('#inputDistance').value;
    let duration = document.querySelector('#inputDuration').value;

    const workout = {
        workout_id,
        name,
        weight,
        reps,
        sets,
        distance,
        duration
    }

    doPostRequest(workout);

});

const createCardioField = (workout) => {

    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.scope = "row";
    td1.textContent = workout.name;
    td2.textContent = workout.distance;
    td3.textContent = workout.duration;

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);

    document.querySelector('#tBodyCardio').appendChild(tr1);

};


const createStrengthField = (workout) => {

    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.scope = "row";
    td1.textContent = workout.name;
    td2.textContent = workout.weight;
    td3.textContent = workout.reps;
    td4.textContent = workout.sets;

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);

    document.querySelector('#tBodyStrength').appendChild(tr1);

};
let clearInputFields = () => {

    document.querySelector('#inputWorkoutType').value = '';
    document.querySelector('#inputExerciseName').value = '';
    document.querySelector('#inputWeight').value = '';
    document.querySelector('#inputReps').value = '';
    document.querySelector('#inputSets').value = '';
    document.querySelector('#inputDistance').value = '';
    document.querySelector('#inputDuration').value = '';
};

let doPostRequest = function(workout){

    let data = { "workout" : workout };

    let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = "/workout";

    // What happens after you get a response from AJAX POST
    xmlhttp.addEventListener("load", function(){

        document.querySelector('#todaysWorkout').style.display = '';

        let response = JSON.parse(this.responseText)

        if (response.workout_id === 5) {
            document.querySelector('#todaysCardio').style.display = '';
            createCardioField(response);
            clearInputFields();

        } else {
            document.querySelector('#todaysStrength').style.display = '';
            createStrengthField(response);
            clearInputFields();

        }

    });

    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.send(JSON.stringify(data));

};