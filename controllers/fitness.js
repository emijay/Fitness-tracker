module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let landingPage = (request, response) => {

    if(request.cookies.loggedin === "true") {
        response.redirect('/home')
    } else {
      response.render('landingPage');
    }

  };


  let homePageController = (request, response) => {

    if(request.cookies.loggedin === "true") {

      db.fitness.lastCardioWorkout(request.cookies.userID, (error, lastCardioWorkout) => {

        db.fitness.lastStrengthWorkout (request.cookies.userID, (error,lastStrengthWorkout) => {

          db.fitness.displayTotalMacros(request.cookies.userID, (error, currentMacros) => {

            db.fitness.getGoals(request.cookies.userID, (error, goals) => {

                console.log(goals)

              const data = {

                lastCardioWorkout : lastCardioWorkout,
                lastStrengthWorkout : lastStrengthWorkout,
                currentMacros : currentMacros,
                goals: goals
              }

              response.render('index', data);

            });
          });
        })
      });

    } else {
      response.render('landingPage');
    }

  };

  let registerForm = (request, response) => {
      response.render('forms/register');
  };

  let createUserController = (request, response) => {


      db.fitness.createUser(request.body, (error, userCreated) => {

        response.cookie('userID', userCreated[0].id)
        response.cookie('username', userCreated[0].username)
        response.cookie('loggedin', true);
        response.redirect('/home');
      });
  };

  let loginForm = (request, response) => {

    response.render('forms/login');

  };

  let loginController = (request, response) => {

      db.fitness.checkUser(request.body, (error, checkResult) => {

        if(request.body.password === checkResult[0].password){

            response.cookie('userID', checkResult[0].id)
            response.cookie('username', checkResult[0].username)
            response.cookie('loggedin', true);
            response.redirect('/home');

        } else{
            console.log("Wrong password!")
            response.status(403);
        }

      });
  };

  let workoutForm = (request, response) => {

      response.render('forms/workout')
  };

  let createWorkoutController = (request, response) => {


      db.fitness.createWorkout(request.cookies.userID,request.body, (error, workoutCreated) => {

        // line below signals the end of POST creation via AJAX
        response.send(workoutCreated);
      });
  };

  let macrosPage = (request, response) => {

      db.fitness.displayAllMacros(request.cookies.userID, (error, allMacros) => {

        db.fitness.getGoals(request.cookies.userID, (error, goals) => {

          data = {

            allMacros : allMacros,
            goals: goals

          }

          response.render('forms/macros', data)

        });
      });
  };

  let createMacrosController = (request, response) => {

      db.fitness.createMacros(request.cookies.userID, request.body, (error, currentMacros) => {

        response.redirect('/macros');
      });
  };

  let trainingLogForm = (request, response) => {
      response.render('forms/trainingLog')

  };

  let historyController = (request, response) => {

      db.fitness.getHistory(request.cookies.userID, request.body, (error, trainLogs) => {

        response.send(trainLogs);
      });
  };

  let statsForm = (request, response) => {

    db.fitness.getStats(request.cookies.userID, (error, bodystats) => {

      response.render('forms/bodystats', bodystats)
      });

  };

  let updateStatsController = (request, response) => {

      db.fitness.updateStats(request.cookies.userID, request.body, (error, workoutCreated) => {

        response.redirect('/stats');

        // line below signals the end of POST creation via AJAX
        // response.send(workoutCreated);
      });
  };

  let updateGoals = (request, response) => {

    db.fitness.setGoals(request.cookies.userID, request.body, (error, goals) => {

      response.redirect('/macros')

      });

  };

  let foodAPIform = (request, response) => {
      response.render('forms/foodAPI')

  };

  let logoutController = (request, response) => {

      response.cookie('userID', null)
      response.cookie('username', null)
      response.cookie('loggedin', false);
      response.redirect('/');
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    landingPage,
    registerForm,
    homePage : homePageController,
    createUser: createUserController,
    loginForm,
    login : loginController,
    workoutForm,
    createWorkout : createWorkoutController,
    macrosPage,
    createMacros : createMacrosController,
    trainingLogForm,
    getWorkoutHistory : historyController,
    statsForm,
    updateStats : updateStatsController,
    updateGoals,
    foodAPIform,
    logout : logoutController

  };

}