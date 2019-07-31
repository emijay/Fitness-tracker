
var React = require('react');

class Register extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Lora|Roboto&display=swap" rel="stylesheet"></link>
        </head>
        <body style={{backgroundImage : 'url("https://www.bestfunforall.com/better/imgs/Cutie%20wallpaper%20%2017.jpg")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

        <div className = "container mx-auto">

          <form action="/users" method="POST" className ="text-black my-5">
            <div class="form-group row">
              <label for="exampleFormControlSelect2" class="col-sm-3 col-form-label">Workout Type</label>
              <div class="col-sm-8">
                <select class="form-control" name="workout_id" id="inputWorkoutType">
                  <option>Please select a workout</option>
                  <option value="1" >Chest</option>
                  <option value="2" >Back</option>
                  <option value="3" >Arms</option>
                  <option value="4" >Cardio</option>
                  <option value="5" >Yoga</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputExercise" class="col-sm-3 col-form-label">Name of Exercise</label>
              <div class="col-sm-8">
                <input type="text" name="name" class="form-control" id="inputtext" placeholder="Bench Press" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputWeight" class="col-sm-3 col-form-label">Weight (kg)</label>
              <div class="col-sm-8">
                <input type="text" name="weight" class="form-control" id="inputWeight" placeholder="45" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputReps" class="col-sm-3 col-form-label">Repetitions</label>
              <div class="col-sm-8">
                <input type="text" name="reps" class="form-control" id="inputReps" placeholder="4" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputSets" class="col-sm-3 col-form-label">Sets</label>
              <div class="col-sm-8">
                <input type="text" name="sets" class="form-control" id="inputSets" placeholder="4" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;