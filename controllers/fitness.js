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


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
  };

}