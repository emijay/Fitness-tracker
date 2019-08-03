
var React = require('react');
var Layout = require('../layout')

class Form extends React.Component {
  render() {
    return (

    <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

    <Layout>

    <div className="container mx-auto position-absolute" style={{top:"50%", right: "50%", transform: "translate(50%,-50%)"}}>

        <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>

            <h3 className='text-center pt-4'>Type in your measurements below</h3>

            <form action="/stats" method="POST" className ="text-black my-5 mx-5">

            <div className="form-group row">
              <label htmlFor="inputProtein" className="col-sm-3 col-form-label">Weight (kg)</label>
              <div className="col-sm-8">
                <input type="number" name="weight" className="form-control" id="inputWeight"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputFats" className="col-sm-3 col-form-label">Height (cm)</label>
              <div className="col-sm-8">
                <input type="number" name="height" className="form-control" id="inputHeight"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Fat %</label>
              <div className="col-sm-8">
                <input type="number" name="fatpercent" className="form-control" id="inputFat"/>
              </div>
            </div>

            <button type="submit" className="btn btn-primary my-3" style={{position:"relative", right:"-50%",    transform: 'translate(-50%, 0)'}}>Submit</button>
            </form>
        </div>
    </div>
    </Layout>
    </body>
    );
  }
}

module.exports = Form;