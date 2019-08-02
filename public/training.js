

let submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', function(event){

    event.preventDefault();

    let input = document.querySelector('#inputWorkoutType');
    let workoutType = input.value;

    doRequest(workoutType);

});

let doRequest = function(workoutType){

  // what to do when we receive a request
  let responseHandler = function() {

    let dataObj = JSON.parse(this.responseText);
    console.log(dataObj);
    console.log("status text", this.statusText);
    console.log("status code", this.status);

    var newDiv = document.createElement("div");
    newDiv.textContent = dataObj.students[0].name;
    document.body.appendChild(newDiv);
  };

  // make a new request
  let request = new XMLHttpRequest();

  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  // request.open("GET", "https://swapi.co/api/people/1");
  request.open("GET", "http://localhost:3000/students/");

  // send the request
  request.send();

};