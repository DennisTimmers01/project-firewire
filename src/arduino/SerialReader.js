// var SerialPort = require('serialport')
// var port = new SerialPort('/dev/cu.usbmodem1421')
// port.on('readable', function () {
//   console.log('Data:', port.read())
// })

console.log('1 - require')
var SerialPort = require('serialport')
console.log('2 - new')
var port = new SerialPort('/dev/cu.usbmodem1421', {autoOpen: true})
console.log('3 - waiting')
setTimeout(function () {
  console.log('4 - trying open')
  try {
    port.open(function (err) {
      if (err) {
        console.log('6a - Error opening port: ', err.message)
      }      else {
        console.log('6b - successfully opened port')
      }
    })
    console.log('5 - finished calling open')
  } catch (e) {
    console.log('7 - caught', e)
  } finally {
    console.log('8 - finally')
  }

  // the open event will always be emitted
  port.on('readable', function () {
    const buff = new Buffer(data, 'utf8');
    console.log(buff, port.read())
  })
}, 1000)
