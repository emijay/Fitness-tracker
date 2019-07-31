
var React = require('react');

class Form extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Lora|Roboto&display=swap" rel="stylesheet"></link>
        </head>
        <body style={{backgroundImage : 'url("https://www.bestfunforall.com/better/imgs/Cutie%20wallpaper%20%2017.jpg")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

        <div className = "container mx-auto">

          <form action="/workout" method="POST" className ="text-black my-5">
            <div className="form-group row" id="divWorkoutType">
              <label htmlFor="exampleFormControlSelect2" className="col-sm-3 col-form-label">Workout Type</label>
              <div className="col-sm-8" >
                <select className="form-control" name="workout_id" id="inputWorkoutType">
                  <option>Please select a workout</option>
                  <option value="1" >Arms</option>
                  <option value="2" >Back</option>
                  <option value="3" >Chest</option>
                  <option value="4" >Legs</option>
                  <option value="5" >Cardio</option>
                </select>
              </div>
            </div>
            <div className="form-group row" id="divExerciseName">
              <label htmlFor="inputExercise" className="col-sm-3 col-form-label">Name of Exercise</label>
              <div className="col-sm-8">
                <input type="text" name="name" className="form-control" id="inputExerciseName"/>
              </div>
            </div>
            <div className="form-group row" id="divWeight">
              <label htmlFor="inputWeight" className="col-sm-3 col-form-label">Weight (kg)</label>
              <div className="col-sm-8">
                <input type="text" name="weight" className="form-control" id="inputWeight"/>
              </div>
            </div>
            <div className="form-group row" id="divReps">
              <label htmlFor="inputReps" className="col-sm-3 col-form-label">Repetitions</label>
              <div className="col-sm-8">
                <input type="text" name="reps" className="form-control" id="inputReps"/>
              </div>
            </div>
            <div className="form-group row" id="divSets">
              <label htmlFor="inputSets" className="col-sm-3 col-form-label">Sets</label>
              <div className="col-sm-8">
                <input type="text" name="sets" className="form-control" id="inputSets"/>
              </div>
            </div>
            <div className="form-group row" id="divDistance">
              <label htmlFor="inputDistance" className="col-sm-3 col-form-label">Distance (m)</label>
              <div className="col-sm-8">
                <input type="text" name="distance" className="form-control" id="inputDistance"/>
              </div>
            </div>
            <div className="form-group row" id="divDuration">
              <label htmlFor="inputDuration" className="col-sm-3 col-form-label">Duration (min)</label>
              <div className="col-sm-8">
                <input type="text" name="duration" className="form-control" id="inputDuration"/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>

        <script src='/script.js'/>

        </body>
      </html>
    );
  }
}

module.exports = Form;