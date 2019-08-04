module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR FITNESS CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const fitnessControllerCallbacks = require('./controllers/fitness')(allModels);

  app.get('/', fitnessControllerCallbacks.index)

  app.get('/home', fitnessControllerCallbacks.homePage)

  app.get('/workout', fitnessControllerCallbacks.workoutForm)
  app.post('/workout', fitnessControllerCallbacks.createWorkout)

  app.get('/macros',fitnessControllerCallbacks.macrosForm)
  app.post('/macros',fitnessControllerCallbacks.createMacros)

  app.get('/history',fitnessControllerCallbacks.trainingLogForm)
  app.get('/viewhistory',fitnessControllerCallbacks.getWorkoutHistory)

  app.get('/stats', fitnessControllerCallbacks.statsForm)
  app.post('/stats', fitnessControllerCallbacks.updateStats)

};