module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      response.redirect('/home')
  };

  let workoutForm = (request, response) => {
      response.render('forms/workout')
  };

  let homePageController = (request, response) => {

      db.fitness.lastCardioWorkout( (error, lastCardioWorkout) => {

        db.fitness.lastStrengthWorkout ( (error,lastStrengthWorkout) => {

          db.fitness.displayMacros( (error, currentMacros) => {

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

  let createWorkoutController = (request, response) => {

      db.fitness.createWorkout(request.body, (error, workoutCreated) => {
        // console.log(workoutCreated)
        response.redirect('/');
      });
  };

  let macrosForm = (request, response) => {
      response.render('forms/macros')
  };

  let createMacrosController = (request, response) => {

      db.fitness.createMacros(request.body, (error, macrosCreated) => {

        response.redirect('/');
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
    macrosForm,
    createMacros : createMacrosController
  };

}