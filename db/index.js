var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'plantlife',
  database : 'Occa'
});
 
connection.connect();

// Helper Functions
// 1. searchEvents - by lat lng range and date in DB - return array of results to server
// 2. searchOrCreateVenue 
// 3. addNewEvents - to DB - return if addition was successful or not

const searchEvents = ({center_lat, center_lng, range}) => {
  var today = new Date();
  
  var todayDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
  
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  hours = hours.length === 1 ? '0' + hours : hours;
  minutes = minutes.length === 1 ? '0' + minutes : minutes;
  seconds = seconds.length === 1 ? '0' + seconds : seconds;

  var todayTime = `${hours}:${minutes}:${seconds}`;
  var latMin = center_lat - range;
  var latMax = center_lat + range;
  var lngMin = center_lng - range;
  var lngMax = center_lng + range;
   
  connection.query('SELECT * FROM events WHERE ' + 
    '(lat => ' + latMin + ' AND lat <= center_lat + range) AND ' +
    '(lng >= center_lng - range AND lng <= center_lng + range) AND ' +
    '(startDate >= )', () => {

  })
}

const searchOrCreateVenue = () => {

}

const addNewEvents = () => {

}

 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

module.exports = {
  searchEvents
  searchOrCreateVenue
  addNewEvents
}