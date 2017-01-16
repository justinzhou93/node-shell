//console.log(process);

var commands = require("./commands")
process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
  var cmd = data.toString().trim();
  var date;

  //process.stdout.write('You typed: ' + cmd);
  if (cmd === "date"){
    commands.date();
  }
  if (cmd === "pwd"){
    commands.pwd();
  }
  if (cmd === "ls"){
    commands.ls();
  }


  //cat prints out the file
  //head prints out first 10 lines of the file
  //

  process.stdout.write('\nprompt > ');
})
