/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let createWorkout = (dataObj, callback) => {

    if (dataObj.workout.workout_id === "5") {

      let query = "INSERT INTO exercises (name, distance, duration, workout_id) VALUES ($1, $2, $3, $4) RETURNING *";

      const values = [dataObj.workout.name, dataObj.workout.distance, dataObj.workout.duration, dataObj.workout.workout_id]


      dbPoolInstance.query(query, values, (error, queryResult) => {
        if( error ){
          // invoke callback function with results after query has executed
          callback(error, null);

        }else{
          // invoke callback function with results after query has executed
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows[0]);
          }else{
            callback(null, null);
          }
        }
      });

    } else {

      let query = "INSERT INTO exercises (name, weight, reps, sets, workout_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";

      const values = [dataObj.workout.name, dataObj.workout.weight, dataObj.workout.reps, dataObj.workout.sets, dataObj.workout.workout_id]

      dbPoolInstance.query(query, values, (error, queryResult) => {
        if( error ){
          // invoke callback function with results after query has executed
          callback(error, null);

        }else{
          // invoke callback function with results after query has executed
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows[0]);
          }else{
            callback(null, null);
          }
        }
      });
    }
  };

  let lastWorkout = (callback) => {

    let query = "SELECT * FROM exercises WHERE created_at=(SELECT MAX(created_at) FROM exercises)";

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);

        }
      }
    });
  };

  let lastCardioWorkout = (callback) => {

    let query = "SELECT * FROM exercises WHERE created_at = (select MAX(created_at) from exercises) AND workout_id = 5";

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);

        }
      }
    });
  };

  let lastStrengthWorkout = (callback) => {

    let query = "SELECT * FROM exercises WHERE created_at = (select MAX(created_at) from exercises) AND workout_id = 1 OR workout_id=2 OR workout_id=3 OR workout_id=4;";

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);

        }
      }
    });
  };


  let createMacros = (dataObj, callback) => {

    let query = "INSERT INTO macros (carbs, protein, fat, calories) VALUES ($1, $2, $3, $4) RETURNING *";

      const values = [dataObj.carbs, dataObj.protein, dataObj.fat, dataObj.calories]

      dbPoolInstance.query(query, values, (error, queryResult) => {
        if( error ){
          // invoke callback function with results after query has executed
          callback(error, null);

        }else{
          // invoke callback function with results after query has executed
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          }else{
            callback(null, null);
          }
        }
      });
  };

  let displayMacros = (callback) => {

    let query = "SELECT SUM(carbs) carbs, SUM(protein) protein, SUM(fat) fat, SUM(calories) calories from macros WHERE created_at=(SELECT MAX(created_at) FROM macros)";

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows[0]);
        }else{
          callback(null, null);

        }
      }
    });
  };

  let displayWorkouts = (callback) => {

    let query = "SELECT * FROM exercises ORDER BY created_at ASC";

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows[0]);
        }else{
          callback(null, null);

        }
      }
    });
  };

  return {
    createWorkout,
    lastWorkout,
    lastCardioWorkout,
    lastStrengthWorkout,
    createMacros,
    displayMacros
  };
};