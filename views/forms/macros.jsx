
var React = require('react');

class Form extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Lora|Roboto&display=swap" rel="stylesheet"></link>
        </head>
        <body style={{backgroundImage : 'url("https://www.bestfunforall.com/better/imgs/Cutie%20wallpaper%20%2017.jpg")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

        <div className = "container mx-auto">

          <form action="/macros" method="POST" className ="text-black my-5">

            <div className="form-group row">
              <label htmlFor="inputCarbs" className="col-sm-3 col-form-label">Carbohydrates (g)</label>
              <div className="col-sm-8">
                <input type="number" name="carbs" className="form-control" id="inputCarbs"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputProtein" className="col-sm-3 col-form-label">Protein (g)</label>
              <div className="col-sm-8">
                <input type="number" name="protein" className="form-control" id="inputProtein"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputFats" className="col-sm-3 col-form-label">Fats (g)</label>
              <div className="col-sm-8">
                <input type="number" name="fat" className="form-control" id="inputFats"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputCalories" className="col-sm-3 col-form-label">Calories</label>
              <div className="col-sm-8">
                <input type="number" name="calories" className="form-control" id="inputCalories"/>
              </div>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>

        </body>
      </html>
    );
  }
}

module.exports = Form;