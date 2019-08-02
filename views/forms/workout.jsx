
var React = require('react');
var Layout = require('../layout')

class Form extends React.Component {
  render() {
    return (

    <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

    <Layout>

    <div className="container mx-auto position-absolute" style={{top:"50%", right: "50%", transform: "translate(50%,-50%)"}}>

        <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>

            <h3 className='text-center pt-4'>Type in your workout below</h3>

            {/*<form action="/workout" method="POST" className ="text-black my-5 mx-5">*/}
            <form className ="text-black my-5 mx-5">
                <div className="form-group row" id="divWorkoutType">
                    <label htmlFor="exampleFormControlSelect2" className="col-sm-3 col-form-label">Workout Type</label>
                    <div className="col-sm-8" >
                        <select className="form-control" name="workout_id" id="inputWorkoutType">
                          <option>Please select a workout</option>
                          <option value="1">Arms</option>
                          <option value="2">Back</option>
                          <option value="3">Chest</option>
                          <option value="4">Legs</option>
                          <option value="5">Cardio</option>
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
                <button type="submit" id="submitBtn" className="btn btn-primary my-3" style={{position:"relative", right:"-50%",    transform: 'translate(-50%, 0)'}}>Submit</button>
            </form>
        </div>

        <div id="todaysWorkout" style={{backgroundColor: 'rgba(255,255,255,0.8)', display: "none"}}>
            <h3 className='text-center pt-4'>Today's Workout</h3>

            <div className="card-body pt-0">
                <div id="todaysCardio" style={{ display: "none"}}>
                    <h5>Cardio</h5>
                    <table className="table table-bordered table-hover bg-white">
                        <thead>
                            <tr>
                            <th scope="col">Name of Exercise</th>
                            <th scope="col">Distance (m)</th>
                            <th scope="col">Duration (mins)</th>
                                </tr>
                        </thead>
                        <tbody id="tBodyCardio">

                        </tbody>
                    </table>
                </div>
                <div id="todaysStrength" style={{ display: "none"}}>
                    <h5>Weight Training</h5>
                    <table className="table table-bordered table-hover bg-white">
                        <thead>
                            <tr>
                            <th scope="col">Name of Exercise</th>
                            <th scope="col">Weight (kg)</th>
                            <th scope="col">Reps</th>
                            <th scope="col">Sets</th>
                            </tr>
                        </thead>
                        <tbody id="tBodyStrength">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>



    <script src='/script.js'/>



    </Layout>
    </body>
    );
  }
}

module.exports = Form;