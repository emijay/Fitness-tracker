
var React = require('react');

class Home extends React.Component {
  render() {

    const exercise = this.props.lastWorkout.map(item=> {
        return( <tr>
                    <td scope="row">{item.name}</td>
                    <td>{item.weight}</td>
                    <td>{item.reps}</td>
                    <td>{item.sets}</td>
                    <td>{item.distance}</td>
                    <td>{item.duration}</td>
                </tr>
        )
    });

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Leckerli+One|Lora&display=swap" rel="stylesheet"></link>

        </head>
        <body style={{backgroundColor : '#E7ECF0'}}>

        <div className="container mx-auto mt-5">
          <div className="row">

          <h2>Last Workout</h2>

          <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Name of Exercise</th>
                    <th scope="col">Weight (kg)</th>
                    <th scope="col">Reps</th>
                    <th scope="col">Sets</th>
                    <th scope="col">Distance (m)</th>
                    <th scope="col">Duration (mins)</th>
                </tr>
            </thead>
            <tbody>
                {exercise}
            </tbody>
        </table>

        <h2>Current Macros</h2>






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