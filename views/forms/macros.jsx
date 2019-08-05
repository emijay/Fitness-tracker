
var React = require('react');
var Layout = require('../layout')

class Form extends React.Component {


  render() {

    let macros;

    if (this.props.allMacros !== null) {
        macros = this.props.allMacros.map(item=> {
            return( <tr>
                        <td scope="row">{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.name}</td>
                        <td>{item.carbs}</td>
                        <td>{item.protein}</td>
                        <td>{item.fat}</td>
                        <td>{item.calories}</td>
                    </tr>
            )
        });
    }

    return (

    <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

    <Layout>

    <div className="container mx-auto mt-5">
        <div className="row">
            <div style={{width:'100%', backgroundColor: 'rgba(255,255,255,0.9)'}}>
                <h3 className='text-center py-3'>Current Macronutrients</h3>

                <div className="card-body pt-0">
                    <table className="table table-bordered table-hover bg-white">
                        <thead>
                            <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Name</th>
                            <th scope="col">Carbs</th>
                            <th scope="col">Protein</th>
                            <th scope="col">Fat</th>
                            <th scope="col">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {macros}
                        </tbody>
                    </table>
                </div>

                <button type="button" class="btn btn-primary mt-2 mb-4" data-toggle="modal" data-target="#exampleModal" style={{position: 'relative',left: '50%', transform: 'translate(-50%,0)'}}>
                  Update Macros
                </button>

                <br />

                <button type="button" class="btn btn-info mt-2 mb-4" data-toggle="modal" data-target="#exampleModal2" style={{position: 'relative',left: '50%', transform: 'translate(-50%,0)'}}>
                  Set Goals
                </button>

            </div>
        </div>
    </div>

    <div className="container mx-auto">
        <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Type in your macros below</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div class="modal-body">
                    <form action="/macros" method="POST" className ="text-black my-5 mx-5">
                        <div className="form-group row">
                          <label htmlFor="inputName" className="col-sm-3 col-form-label">Name</label>
                          <div className="col-sm-8">
                            <input type="text" name="name" className="form-control" id="inputName"/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Carbs</label>
                          <div className="col-sm-8">
                            <input type="number" name="carbs" className="form-control" id="inputCarbs"/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Protein</label>
                          <div className="col-sm-8">
                            <input type="number" name="protein" className="form-control" id="inputProtein"/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Fat</label>
                          <div className="col-sm-8">
                            <input type="number" name="fat" className="form-control" id="inputFat"/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Calories</label>
                          <div className="col-sm-8">
                            <input type="number" name="calories" className="form-control" id="inputFat"/>
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

            <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Set your goals below</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div class="modal-body">
                    <form action="/goals" method="POST" className ="text-black my-5 mx-5">
                        <div className="form-group row">
                          <label htmlFor="inputName" className="col-sm-3 col-form-label">Carbs</label>
                          <div className="col-sm-8">
                            <input type="number" name="carbs" className="form-control" value={this.props.goals.carbs}/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Protein</label>
                          <div className="col-sm-8">
                            <input type="number" name="protein" className="form-control" value={this.props.goals.protein}/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Fat</label>
                          <div className="col-sm-8">
                            <input type="number" name="fat" className="form-control" value={this.props.goals.fat}/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Calories</label>
                          <div className="col-sm-8">
                            <input type="number" name="calories" className="form-control"value={this.props.goals.calories}/>
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



    </body>
    );
  }
}

module.exports = Form;