
var React = require('react');

class Register extends React.Component {


  render() {
    return (

      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Leckerli+One|Lora&display=swap" rel="stylesheet"></link>
        </head>
        <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

        <div className="container mx-auto position-absolute" style={{top:"50%", right: "50%", transform: "translate(50%,-50%)"}}>
          <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>

            <h3 className='text-center pt-4'>Please Register Below</h3>

            <form action="/users" method="POST" className ="text-black my-5 mx-5">
              <div className="form-group row">
                <div className="col-5 position-relative" style={{right:'-50%', transform:'translate(-50%,0)'}}>
                  <label htmlFor="inputUsername">Username</label>
                  <input type="username" name="username" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-5 position-relative" style={{right:'-50%', transform:'translate(-50%,0)'}}>
                  <label htmlFor="inputPassword">Password</label>
                  <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-5 position-relative" style={{right:'-50%', transform:'translate(-50%,0)'}}>
                  <label htmlFor="inputEmail">Email Address</label>
                  <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email Address" />
                </div>
              </div>

              <button type="submit" className="btn btn-primary my-3" style={{position:"relative", right:"-50%",    transform: 'translate(-50%, 0)'}}>Submit</button>
              <br />
              <a class="btn btn-secondary mb-3" href="/" role="button" style={{position:"relative", right:"-50%",    transform: 'translate(-50%, 0)'}}>Go Back</a>
            </form>
          </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;