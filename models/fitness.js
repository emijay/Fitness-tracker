/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let createUser = (dataObj, callback) => {

    let query = "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *";

    const values = [dataObj.username, dataObj.password, dataObj.email];

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

  let checkUser = (dataObj, callback) => {

    let query = "SELECT * FROM users WHERE username = $1";

    const values = [dataObj.username];

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

  let lastCardioWorkout = (userID, callback) => {

    let query = "SELECT id,name,distance,duration,workout_id,user_id,to_char(created_at, 'DD-MM-YYYY') FROM exercises WHERE workout_id = 5 AND user_id = '"+userID+"' AND created_at = (SELECT MAX(created_at) from (SELECT * FROM exercises WHERE workout_id = 5) AS foo);";

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

  let lastStrengthWorkout = (userID, callback) => {

    let query = "SELECT id,name,weight,reps,sets,workout_id,user_id,to_char(created_at, 'DD-MM-YYYY') FROM exercises WHERE user_id = '"+userID+"' AND created_at = (SELECT MAX(created_at) from (SELECT * FROM exercises WHERE workout_id = 1 OR workout_id=2 OR workout_id=3 OR workout_id=4) as foo) AND (workout_id = 1 OR workout_id=2 OR workout_id=3 OR workout_id=4);";

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


  let displayTotalMacros = (userID, callback) => {

    let query = "SELECT SUM(carbs) carbs, SUM(protein) protein, SUM(fat) fat, SUM(calories) calories FROM (SELECT * FROM (SELECT id, name, carbs, protein, fat, calories, user_id, to_char(created_at,'DD-MM-YYYY') AS date, to_char(created_at, 'HH:MI') AS time FROM macros) AS foo WHERE date = (SELECT MAX(date) from (SELECT id, name, carbs, protein, fat, calories, user_id, to_char(created_at,'DD-MM-YYYY') AS date, to_char(created_at, 'HH:MI') AS time FROM macros) AS foo) AND user_id = '"+userID+"') as foo";

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

  let createWorkout = (userID, dataObj, callback) => {

    if (dataObj.workout.workout_id === "5") {

      let query = "INSERT INTO exercises (name, distance, duration, workout_id, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";

      const values = [dataObj.workout.name, dataObj.workout.distance, dataObj.workout.duration, dataObj.workout.workout_id, userID]


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

      let query = "INSERT INTO exercises (name, weight, reps, sets, workout_id, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";

      const values = [dataObj.workout.name, dataObj.workout.weight, dataObj.workout.reps, dataObj.workout.sets, dataObj.workout.workout_id, userID]

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

  let displayAllMacros = (userID, callback) => {

    let query = "SELECT * FROM (SELECT id, name, carbs, protein, fat, calories, user_id, to_char(created_at,'DD-MM-YYYY') AS date, to_char(created_at, 'HH:MI') AS time FROM macros) AS foo WHERE date = (SELECT MAX(date) from (SELECT id, name, carbs, protein, fat, calories, user_id, to_char(created_at,'DD-MM-YYYY') AS date, to_char(created_at, 'HH:MI') AS time FROM macros) AS foo) AND user_id = '"+userID+"'";

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

  let createMacros = (userID, dataObj, callback) => {

    let query = "INSERT INTO macros (name, carbs, protein, fat, calories, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";

      const values = [dataObj.name, dataObj.carbs, dataObj.protein, dataObj.fat, dataObj.calories, userID];

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


  let getHistory = (userID, dataObj, callback) => {

    let query = "SELECT id,name,weight,reps,sets,distance,duration,workout_id,user_id,to_char(created_at, 'DD-MM-YYYY')FROM exercises WHERE workout_id = '"+dataObj.workoutID.workout_id+"' AND user_id = '"+userID+"' ORDER BY created_at DESC";

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

  let getStats = (userID, callback) => {

    let query = "SELECT id, weight, fatpercent, user_id, to_char(created_at, 'MONTH') FROM bodystats WHERE user_id = '"+userID+"' ORDER by created_at ASC";

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

  let updateStats = (userID, dataObj, callback) => {

    let query = "INSERT INTO bodystats (weight, fatpercent, user_id) VALUES ($1, $2, $3) RETURNING *";

      const values = [dataObj.weight, dataObj.fatpercent, userID];


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
    createUser,
    checkUser,
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