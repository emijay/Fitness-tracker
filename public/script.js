
let selectBtn = document.querySelector('#inputWorkoutType');

selectBtn.addEventListener('change', function() {

    if (selectBtn.value === "5") {
        document.querySelector('#divExerciseName').style.display = "";
        document.querySelector('#divWeight').style.display = "none";
        document.querySelector('#divReps').style.display = "none";
        document.querySelector('#divSets').style.display = "none";
        document.querySelector('#divDistance').style.display = "";
        document.querySelector('#divDuration').style.display = "";
    } else if (selectBtn.value === "6") {
        document.querySelector('#divExerciseName').style.display = "";
        document.querySelector('#divWeight').style.display = "none";
        document.querySelector('#divReps').style.display = "none";
        document.querySelector('#divSets').style.display = "none";
        document.querySelector('#divDistance').style.display = "none";
        document.querySelector('#divDuration').style.display = "";
    } else {
        document.querySelector('#divExerciseName').style.display = "";
        document.querySelector('#divWeight').style.display = "";
        document.querySelector('#divReps').style.display = "";
        document.querySelector('#divSets').style.display = "";
        document.querySelector('#divDistance').style.display = "none";
        document.querySelector('#divDuration').style.display = "none";
    }

});