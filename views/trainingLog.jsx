
var React = require('react');
var Layout = require('./layout')

class Form extends React.Component {
  render() {
    return (

    <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

    <Layout>

    <div className="container mx-auto position-absolute" style={{top:"50%", right: "50%", transform: "translate(50%,-50%)"}}>

        <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>

            <h3 className='text-center pt-4'>Choose  workout type below to display training logs</h3>

            <form className ="text-black my-5 mx-5">
                <div className="form-group row" id="divWorkoutType">
                    <div className="col-4 position-relative" style={{right:'-50%', transform:'translate(-50%,0)'}}>
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

                <button type="submit" id="submitBtn" className="btn btn-primary my-3" style={{position:"relative", right:"-50%",    transform: 'translate(-50%, 0)'}}>Submit</button>
            </form>
        </div>

        <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
            <h3 className='text-center pt-4'>Previous Training History</h3>

            <div className="card-body pt-0">
                <div id="todaysCardio" style={{}}>
                    <table className="table table-bordered table-hover bg-white">
                        <thead>
                            <tr>
                            <th scope="col">Name of Exercise</th>
                            <th scope="col">Weight (kg)</th>
                            <th scope="col">Reps</th>
                            <th scope="col">Sets</th>
                            <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody id="tBodyStrength">

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>

    <script src='/trainLog.js'/>


    </Layout>
    </body>
    );
  }
}

module.exports = Form;