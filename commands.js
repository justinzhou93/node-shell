date = new Date
var fs = require('fs');

module.exports = {
  pwd: function(){console.log(`${process.cwd()}`)},
  date: function(){console.log(`${date}`)},
  ls: function(){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  }
}

// if (cmd = "pwd"){
//   //process.stdout.write(`${process.cwd()}`);
//   console.log(`${process.cwd()}`);
// } else if (cmd = "date"){
//   date = new Date();
//   console.log(`${date}`);
// }
