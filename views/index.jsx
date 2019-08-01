
var React = require('react');
var Layout = require('./layout')

class Home extends React.Component {
  render() {

    const cardioExercises = this.props.lastCardioWorkout.map(item=> {
        return( <tr>
                    <td scope="row">{item.name}</td>
                    <td>{item.distance}</td>
                    <td>{item.duration}</td>
                </tr>
        )
    });

    const strengthExercises = this.props.lastStrengthWorkout.map(item=> {
        return( <tr>
                    <td scope="row">{item.name}</td>
                    <td>{item.weight}</td>
                    <td>{item.reps}</td>
                    <td>{item.sets}</td>
                </tr>
        )
    });

    return (

    <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

    <Layout>

    <div className="container mx-auto mt-5">
        <div className="row">
            <div style={{width:'100%', backgroundColor: 'rgba(255,255,255,0.9)'}}>
                <h3 className='text-center pt-3'>Last Workout</h3>
                <div className="card-body">
                    <h5>Cardio</h5>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Name of Exercise</th>
                            <th scope="col">Distance (m)</th>
                            <th scope="col">Duration (mins)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cardioExercises}
                        </tbody>
                    </table>

                    <h5>Weight Training</h5>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Name of Exercise</th>
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
                <h3 className='text-center py-3'>Current Macros</h3>

                <div className="card-group">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Carbohydrates (g)</h5>
                            <p className="card-text">{this.props.currentMacros.carbs}<span className="text-muted"> / 1000</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Protein (g)</h5>
                            <p className="card-text">{this.props.currentMacros.protein}<span className="text-muted"> / 1000</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Fats (g)</h5>
                            <p className="card-text">{this.props.currentMacros.fat}<span className="text-muted"> / 1000</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Calories</h5>
                            <p className="card-text">{this.props.currentMacros.calories}<span className="text-muted"> / 1000</span></p>
                        </div>
                    </div>
                </div>

                <a className="btn btn-info my-3" href="/macros" role="button" style={{ width: '15%', position: 'relative', left: '50%',transform: 'translate(-50%, 0)' }}>Update Macros</a>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

    </Layout>
    </body>
    );
  }
}

module.exports = Home;