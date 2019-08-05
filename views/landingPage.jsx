
var React = require('react');

class landingPage extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Lora|Roboto&display=swap" rel="stylesheet"></link>
        </head>
        <body>
          <div class="row">
            <div class="col" style={{backgroundImage : 'url("https://images.unsplash.com/photo-1445112098124-3e76dd67983c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>
              <div className="text-left text-white position-absolute" style={{fontFamily : "Helvetica, sans-serif", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>
                <h5 className="mt-5"
                style={{fontWeight: "bold"}}>Log your workouts</h5>
                <h5 className="mt-5"
                style={{fontWeight: "bold"}}>Track your macronutrients</h5>
                <h5 className="mt-5"
                style={{fontWeight: "bold"}}>Set your goals and smash them!</h5>
              </div>
            </div>
            <div class="col" style={{height: "100vh"}}>
              <form action="/login" method="POST" className = "form-inline my-2 my-lg-0" style={{paddingLeft: "25%", paddingTop: "5%"}}>
              <div className="form-group">
                <label htmlFor="inputUsername"></label>
                <input type="username" name="username" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username" />
              </div>
              <div className="form-group mx-2">
                <label htmlFor="inputPassword"></label>
                <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>

              <div className="text-left my-5 text-black position-absolute" style={{fontFamily : "Helvetica, sans-serif", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>
                <h3 style={{fontWeight: "bold"}}>Take your workouts to the next level</h3>
                <h5 className="my-4"
                style={{fontWeight: "bold"}}>Join today!</h5>
                <a className="btn btn-primary btn-block" href={'/register'} role="button">Sign Up</a>
                <br/>
                <a className="btn btn-outline-primary btn-block" href={'/login'} role="button">Log In</a>
                <br/>
              </div>

            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = landingPage;