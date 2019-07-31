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

      db.fitness.displayWorkout( (error, lastWorkout) => {
        // response.redirect('/');
        // console.log(lastWorkout)
        response.render('index', { lastWorkout : lastWorkout });
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
        console.log(macrosCreated)
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