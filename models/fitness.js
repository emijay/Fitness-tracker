/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let createWorkout = (dataObj, callback) => {

    if (dataObj.workout_id === "5") {

      let query = "INSERT INTO exercises (name, distance, duration, workout_id) VALUES ($1, $2, $3, $4) RETURNING *";

      const values = [dataObj.name, dataObj.distance, dataObj.duration, dataObj.workout_id]


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

    } else {

      let query = "INSERT INTO exercises (name, weight, reps, sets, workout_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";

      const values = [dataObj.name, dataObj.weight, dataObj.reps, dataObj.sets, dataObj.workout_id]

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
    }
  };

  let displayWorkout = (callback) => {

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

  return {
    createWorkout,
    displayWorkout
  };
};