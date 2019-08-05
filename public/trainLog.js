
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

const createEmptyFields = () => {

    let newDiv = document.createElement("div");
    let newH2 = document.createElement("h2");

    newDiv.classList.add("card-body");
    newDiv.classList.add("text-center");

    newH2.textContent = "Sorry but no workouts found for that workout type";

    newDiv.appendChild(newH2);

    document.querySelector('#trainingHistory').appendChild(newDiv);
}

let clearWorkoutTables = () => {

    let node = document.querySelector("#tBodyCardio");

    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    let node2 = document.querySelector("#tBodyStrength");

    while (node2.hasChildNodes()) {
        node2.removeChild(node2.lastChild);
    }


};

let doRequest = function(workoutID){
    let data = { "workoutID" : workoutID };

    let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = "/history";

    // What happens after you get a response from AJAX POST
    xmlhttp.addEventListener("load", function(){

        if (this.responseText === "") {

            document.querySelector('#trainingHistory').style.display = '';
            document.querySelector('#cardioTable').style.display = 'none';
            document.querySelector('#strengthTable').style.display = 'none';
            document.querySelector('#noResults').style.display = '';


        } else {
            let response = JSON.parse(this.responseText)

        clearWorkoutTables();

        if (response[0].workout_id === 5) {

            document.querySelector('#trainingHistory').style.display = '';
            document.querySelector('#cardioTable').style.display = '';
            document.querySelector('#strengthTable').style.display = 'none';
            document.querySelector('#noResults').style.display = 'none';

            response.forEach(item => {
                let workout = {
                    name : item.name,
                    distance: item.distance,
                    duration: item.duration,
                    date: item.to_char
                }

                createCardioField(workout);
            });

        } else {

            document.querySelector('#trainingHistory').style.display = '';
            document.querySelector('#strengthTable').style.display = '';
            document.querySelector('#cardioTable').style.display = 'none';
            document.querySelector('#noResults').style.display = 'none';

            response.forEach(item => {
                let workout = {
                    name : item.name,
                    weight: item.weight,
                    reps: item.reps,
                    sets: item.sets,
                    date: item.to_char
                }

                createStrengthField(workout);
            });
        }
        }
    });

    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.send(JSON.stringify(data));

};