module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      // db.fitness.getAll((error, allPokemon) => {
      //   response.render('pokemon/index', { allPokemon });
      // });

      response.render('index')
  };

  let workoutForm = (request, response) => {
      response.render('forms/workout')
  };

  let createWorkoutController = (request, response) => {

      db.fitness.createWorkout(request.body, (error, workoutCreated) => {
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
    workoutForm,
    createWorkout: createWorkoutController
  };

}