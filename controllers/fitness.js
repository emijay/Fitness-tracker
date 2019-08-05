module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      response.redirect('/home')
  };


  let homePageController = (request, response) => {

      db.fitness.lastCardioWorkout( (error, lastCardioWorkout) => {

        db.fitness.lastStrengthWorkout ( (error,lastStrengthWorkout) => {

          db.fitness.displayTotalMacros( (error, currentMacros) => {

          const data = {
            lastCardioWorkout : lastCardioWorkout,
            lastStrengthWorkout : lastStrengthWorkout,
            currentMacros : currentMacros
          }

          response.render('index', data);

          });
        })
      });
  };

  let workoutForm = (request, response) => {
      response.render('forms/workout')
  };

  let createWorkoutController = (request, response) => {

      db.fitness.createWorkout(request.body, (error, workoutCreated) => {

        // line below signals the end of POST creation via AJAX
        response.send(workoutCreated);
      });
  };

  let macrosPage = (request, response) => {

      db.fitness.displayAllMacros( (error, allMacros) => {

        data = {
          allMacros : allMacros
        }

        response.render('forms/macros', data)
      });
  };

  let createMacrosController = (request, response) => {

      db.fitness.createMacros(request.body, (error, currentMacros) => {

        response.redirect('/macros');
      });
  };

  let trainingLogForm = (request, response) => {
      response.render('forms/trainingLog')

  };

  let historyController = (request, response) => {

      db.fitness.getHistory(request.body, (error, trainLogs) => {

        response.send(trainLogs);
      });
  };

  let statsForm = (request, response) => {

    db.fitness.getStats((error, bodystats) => {

      response.render('forms/bodystats', bodystats)
      });

  };

  let updateStatsController = (request, response) => {

      db.fitness.updateStats(request.body, (error, workoutCreated) => {

        response.redirect('/stats');

        // line below signals the end of POST creation via AJAX
        // response.send(workoutCreated);
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    homePage : homePageController,
    workoutForm,
    createWorkout : createWorkoutController,
    macrosPage,
    createMacros : createMacrosController,
    trainingLogForm,
    getWorkoutHistory : historyController,
    statsForm,
    updateStats : updateStatsController

  };

}