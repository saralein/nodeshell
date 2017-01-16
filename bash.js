var commands = require('./commands')
//var fs = require('fs');
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(),
      option;  // remove the newline; "echo hello world"
  //"echo" "hello world"
  if (cmd.indexOf(" ") > -1) {
    var idx = cmd.indexOf(" ");
    var temp = cmd;
    cmd = cmd.slice(0, idx);
    option = temp.slice(idx + 1);
  }
  //(cmd, function())
  if (cmd === 'pwd') {
    commands.pwd(option);
  } else if (cmd === 'ls') {
    commands.ls(option);
  } else if (cmd === 'echo') {
    commands.echo(option);
  } else if (cmd === 'cat') {
    commands.cat(option);
  } else if (cmd === 'head') {
    commands.head(option, 5);
  }
  //if (cmd === 'pwd') {
  //   cmd = process.cwd();
  // } else if (cmd === 'date') {
  //   cmd = new Date();
  // }
  //process.stdout.write('You typed: ' + cmd);
  //process.stdout.write('\nprompt > ');
  //commands.output();
});

//console.log(Object.keys(process));
