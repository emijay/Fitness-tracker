
var React = require('react');
var Layout = require('./layout')

class Form extends React.Component {
  render() {
    return (

    <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

    <Layout>

    <div className="container mx-auto position-absolute" style={{top:"50%", right: "50%", transform: "translate(50%,-50%)"}}>

        <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>

            <h3 className='text-center pt-4'>What are you working on today?</h3>

            <form action="/workout" method="POST" className ="text-black my-5 mx-5">
                <div className="form-group row" id="divWorkoutType">

                    <div className="col">
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
    </div>

    <script src='/training.js'/>



    </Layout>
    </body>
    );
  }
}

module.exports = Form;