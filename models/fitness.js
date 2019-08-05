/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let lastCardioWorkout = (callback) => {

    let query = "SELECT id,name,distance,duration,workout_id,user_id,to_char(created_at, 'DD-MM-YYYY') FROM exercises WHERE workout_id = 5 AND created_at = (SELECT MAX(created_at) from (SELECT * FROM exercises WHERE workout_id = 5) AS foo)";

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

    let query = "SELECT id,name,weight,reps,sets,workout_id,user_id,to_char(created_at, 'DD-MM-YYYY') FROM exercises WHERE created_at = (SELECT MAX(created_at) from (SELECT * FROM exercises WHERE workout_id = 1 OR workout_id=2 OR workout_id=3 OR workout_id=4) as foo) AND (workout_id = 1 OR workout_id=2 OR workout_id=3 OR workout_id=4)";

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


  let displayTotalMacros = (callback) => {

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

  let displayAllMacros = (callback) => {

    let query = "SELECT id, name, carbs, protein, fat, calories, user_id, to_char(created_at,'DD-MM-YYYY') AS date, to_char(created_at, 'HH:MI') AS time FROM macros";

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

    let query = "INSERT INTO macros (name, carbs, protein, fat, calories) VALUES ($1, $2, $3, $4, $5) RETURNING *";

      const values = [dataObj.name, dataObj.carbs, dataObj.protein, dataObj.fat, dataObj.calories]

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


  let getHistory = (dataObj, callback) => {

    let query = "SELECT id,name,weight,reps,sets,distance,duration,workout_id,user_id,to_char(created_at, 'DD-MM-YYYY')FROM exercises WHERE workout_id = '"+dataObj.workoutID.workout_id+"' ORDER BY created_at DESC";


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

  let getStats = (callback) => {

    let query = "SELECT id, weight, fatpercent, user_id, to_char(created_at, 'MONTH') FROM bodystats ORDER by created_at ASC";

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

  let updateStats = (dataObj, callback) => {

    let query = "INSERT INTO bodystats (height, weight, fatpercent) VALUES ($1, $2, $3) RETURNING *";

      const values = [dataObj.height, dataObj.weight, dataObj.fatpercent]


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
  };



  return {
    lastCardioWorkout,
    lastStrengthWorkout,
    displayTotalMacros,
    createWorkout,
    displayAllMacros,
    createMacros,
    getHistory,
    getStats,
    updateStats
  };
};