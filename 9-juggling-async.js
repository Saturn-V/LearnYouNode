var http = require('http');

// Recursive solution
getData(2);

function getData(index) {
  // console.log('End point: ' + process.argv[index]);
  http.get(process.argv[index], function httpCallback(response) {

    var data = '';

    response.setEncoding('utf8').on('data', function dataCallback(chunk) {
      // console.log('Data chunk: ' + data);
      data += chunk;
    });

    response.on('end', function endCallback() {
      // console.log('\n Stream ' + i + ' ended.');
      // console.log('Setence 2: ' + data);
      console.log(data);
      if(index < process.argv.length - 1) {
        index++
        getData(index);
      }
    });

    response.on('error', function httpErrorCallback(err) {
      console.error('Error: ' + err.message);
    });
  });
}

// Suggested solution
// var http = require('http')
//    var bl = require('bl')
//    var results = []
//    var count = 0
//    
//    function printResults () {
//      for (var i = 0; i < 3; i++) {
//        console.log(results[i])
//      }
//    }
//
//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err) {
//            return console.error(err)
//          }
//
//          results[index] = data.toString()
//          count++
//
//          if (count === 3) {
//            printResults()
//          }
//        }))
//      })
//    }
//
//    for (var i = 0; i < 3; i++) {
//      httpGet(i)
//    }
