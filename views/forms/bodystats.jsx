
var React = require('react');
var Layout = require('../layout')

class Form extends React.Component {


  render() {
    return (

    <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

    <Layout>

    <div className="container mx-auto mt-5">
        <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
            <h3 className='text-center py-3'>Body Stats Trend</h3>
            <div className="card mb-3 w-100" >
                <div className="row no-gutters">
                    <div className="col-md-8" style={{position: 'relative',left: '50%', transform: 'translate(-50%,0)'}}>
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
            </div>

             <button type="button" class="btn btn-primary mt-2 mb-4" data-toggle="modal" data-target="#exampleModal" style={{position: 'relative',left: '50%', transform: 'translate(-50%,0)'}}>
              Update Body Stats
            </button>
        </div>
    </div>

    <div className="container mx-auto">
        <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Type in your measurements below</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div class="modal-body">
                    <form action="/stats" method="POST" className ="text-black my-5 mx-5">
                        <div className="form-group row">
                          <label htmlFor="inputProtein" className="col-sm-3 col-form-label">Weight (kg)</label>
                          <div className="col-sm-8">
                            <input type="number" name="weight" className="form-control" id="inputWeight"/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Fat %</label>
                          <div className="col-sm-8">
                            <input type="number" name="fatpercent" className="form-control" id="inputFat"/>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary my-3" style={{position: 'relative',left: '50%', transform: 'translate(-50%,0)'}}>Submit</button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
    </Layout>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    {/* This line sends data over to the script file*/}
    <script dangerouslySetInnerHTML=
    { {__html:
        "let currentStats = "+JSON.stringify(this.props)+";"
    }}/>

    <script src='/bodystatsChart.js'/>

    </body>
    );
  }
}

module.exports = Form;