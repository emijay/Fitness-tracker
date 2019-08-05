
var React = require('react');
var Layout = require('./layout')

class Home extends React.Component {
  render() {

    let lastCardioDate;
    let lastStrengthDate;
    let cardioExercises;
    let strengthExercises;

    if (this.props.lastCardioWorkout !== null) {
        lastCardioDate = (this.props.lastCardioWorkout[0].to_char);

        cardioExercises = this.props.lastCardioWorkout.map(item=> {
            return( <tr>
                        <td scope="row">{item.name}</td>
                        <td>{item.distance}</td>
                        <td>{item.duration}</td>
                    </tr>
            )
        });
    }

    if (this.props.lastStrengthWorkout !== null) {
        lastStrengthDate = (this.props.lastStrengthWorkout[0].to_char);

        strengthExercises = this.props.lastStrengthWorkout.map(item=> {
            return( <tr>
                        <td scope="row">{item.name}</td>
                        <td>{item.weight}</td>
                        <td>{item.reps}</td>
                        <td>{item.sets}</td>
                    </tr>
            )
        });
    }

    return (

    <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

    <Layout>

    <div className="container mx-auto mt-5">
        <div className="row">
            <div style={{width:'100%', backgroundColor: 'rgba(255,255,255,0.9)'}}>
                <h3 className='text-center pt-3'>Recent Workouts</h3>
                <div className="card-body pt-0">
                    <h5>Cardio</h5>
                    <table className="table table-bordered table-hover bg-white">
                        <thead>
                            <tr>
                            <th scope="col">{lastCardioDate}</th>
                            <th scope="col">Distance (m)</th>
                            <th scope="col">Duration (mins)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cardioExercises}
                        </tbody>
                    </table>

                    <h5>Weight Training</h5>
                    <table className="table table-bordered table-hover bg-white">
                        <thead>
                            <tr>
                            <th scope="col">{lastStrengthDate}</th>
                            <th scope="col">Weight (kg)</th>
                            <th scope="col">Reps</th>
                            <th scope="col">Sets</th>
                            </tr>
                        </thead>
                        <tbody>
                            {strengthExercises}
                        </tbody>
                    </table>
                </div>

                <a className="btn btn-info mb-3" href="/workout" role="button" style={{ width: '15%', position: 'relative', left: '50%',transform: 'translate(-50%, 0)' }}>New Workout</a>
            </div>

            <div style={{width:'100%', backgroundColor: 'rgba(255,255,255,0.9)', marginTop: '10px'}}>
                <h3 className='text-center py-3'>Current Macronutrients</h3>

                <div className="card mb-3 w-100" >
                  <div className="row no-gutters">
                    <div className="col-md-8">
                        <canvas id="myChart" style={{    position: 'absolute',top: '50%',transform: 'translate(0,-50%)'}}></canvas>
                    </div>

                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">Calories</h5>
                            <p className="card-text">
                                {this.props.currentMacros.calories}
                                <span className="text-muted"> / 1000</span>
                            </p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Carbs (g)</h5>
                            <p className="card-text">
                                {this.props.currentMacros.carbs}
                                <span className="text-muted"> / 1000</span>
                            </p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Protein (g)</h5>
                            <p className="card-text">
                                {this.props.currentMacros.protein}
                                <span className="text-muted"> / 1000</span>
                            </p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Fats (g)</h5>
                            <p className="card-text">
                            {this.props.currentMacros.fat}
                            <span className="text-muted"> / 1000</span></p>
                        </div>
                    </div>

                  </div>
                </div>

                <a className="btn btn-info my-3" href="/macros" role="button" style={{ width: '15%', position: 'relative', left: '50%',transform: 'translate(-50%, 0)' }}>Update Macros</a>
            </div>
        </div>
    </div>

    </Layout>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    {/* This line sends data over to the script file*/}
    <script dangerouslySetInnerHTML=
    { {__html:
        "let currentMacros = "+JSON.stringify(this.props.currentMacros)+";"
    }}/>

    <script src='/mainpagechart.js'/>

    </body>
    );
  }
}

module.exports = Home;