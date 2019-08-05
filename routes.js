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

  app.get('/', fitnessControllerCallbacks.landingPage)

  app.get('/register', fitnessControllerCallbacks.registerForm)
  app.post('/users', fitnessControllerCallbacks.createUser)

  app.get('/login', fitnessControllerCallbacks.loginForm )
  app.post('/login', fitnessControllerCallbacks.login )

  app.get('/home', fitnessControllerCallbacks.homePage)

  app.get('/workout', fitnessControllerCallbacks.workoutForm)
  app.post('/workout', fitnessControllerCallbacks.createWorkout)

  app.get('/macros',fitnessControllerCallbacks.macrosPage)
  app.post('/macros',fitnessControllerCallbacks.createMacros)

  app.get('/history',fitnessControllerCallbacks.trainingLogForm)
  app.post('/history',fitnessControllerCallbacks.getWorkoutHistory)

  app.get('/stats', fitnessControllerCallbacks.statsForm)
  app.post('/stats', fitnessControllerCallbacks.updateStats)

  app.get('/foodAPI', fitnessControllerCallbacks.foodAPIform)

  app.post('/goals', fitnessControllerCallbacks.updateGoals)

  app.post('/logout', fitnessControllerCallbacks.logout )


};