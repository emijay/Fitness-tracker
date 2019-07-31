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
        console.log(lastWorkout)
        response.render('index', { lastWorkout : lastWorkout });
      });
  };

  let createWorkoutController = (request, response) => {

      db.fitness.createWorkout( request.body, (error, workoutCreated) => {
        console.log(workoutCreated)
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
    createWorkout : createWorkoutController
  };

}