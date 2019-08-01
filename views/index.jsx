
var React = require('react');

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
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Leckerli+One|Lora&display=swap" rel="stylesheet"></link>

        </head>
        <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

        <div className="container mx-auto mt-5">
          <div className="row">
            <div className="card w-100">
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
            </div>

            <div className="card w-100 mt-5">
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
            </div>



          </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;