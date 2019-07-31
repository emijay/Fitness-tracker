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

};