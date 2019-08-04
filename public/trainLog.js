
// Declaring Global Variables //

let submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', function(event){

    event.preventDefault();

    let workout_id = document.querySelector('#inputWorkoutType').value;

    const workoutID = {
        workout_id
    }

    doRequest(workoutID);

});

const createCardioField = (workout) => {

    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.scope = "row";
    td1.textContent = workout.name;
    td2.textContent = workout.distance;
    td3.textContent = workout.duration;
    td4.textContent = workout.date;

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);

    document.querySelector('#tBodyCardio').appendChild(tr1);

};

const createStrengthField = (workout) => {

    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.scope = "row";
    td1.textContent = workout.name;
    td2.textContent = workout.weight;
    td3.textContent = workout.reps;
    td4.textContent = workout.sets;
    td5.textContent = workout.date;


    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);

    document.querySelector('#tBodyStrength').appendChild(tr1);

};

let clearWorkoutTables = () => {

    let node = document.querySelector("#tBodyCardio");

    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }

    let node2 = document.querySelector("#tBodyStrength");

    while (node2.firstChild) {
        node2.removeChild(node2.firstChild);
    }
};

let doRequest = function(workoutID){

    let data = { "workoutID" : workoutID };

    let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = "/viewhistory";

    // What happens after you get a response from AJAX POST
    xmlhttp.addEventListener("load", function(){

        document.querySelector('#trainingHistory').style.display = '';
        document.querySelector('#cardioTable').style.display = '';
        let response = JSON.parse(this.responseText)
        // console.log(response);

        clearWorkoutTables();

        response.forEach(item => {
            let workout = {
                name : item.name,
                distance: item.distance,
                duration: item.duration,
                date: item.to_char
            }

            createCardioField(workout);
        });
    });

    xmlhttp.open("GET", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.send(JSON.stringify(data));

};