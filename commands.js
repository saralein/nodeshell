var fs = require('fs');

// function pwd(cmd) {
//   if (cmd === 'pwd') {
//     cmd = process.cwd();
//   }
// }

//process.stdout.write('\nprompts > ');

module.exports = {
  pwd: function(option) {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  },
  // output: function() {
  //   return process.stdout.write('\nprompt > ')
  // },
  ls: function(option) {
    fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
    });
  },
  echo: function(option) {
    if (!option) {
      process.stdout.write("Invalid command.  Please include parameters!" + "\n");
    } else {
      process.stdout.write(option + "\n");
    }
    process.stdout.write("prompt > ");
  },
  cat: function(option) {
    //need to include error for no parameter
    // if (!string)  process.stdout.write("Please include file name");
    fs.readFile(option, 'utf8', function(err, contents) {
      process.stdout.write(contents);
    });
    //process.stdout.write(process.cat(string));
  },
  head: function(option, n) {
    fs.readFile(option, 'utf8', function(err, contents) {

      while (n > counter) {

      }
      //console.log(contents.indexOf('\n'));
      //want to take contents
      //run through contents until we reach \n
      //write each line until there are 5
    })
  }
};

// require('fs').readFileSync('abc.txt').toString().split('\n').forEach(function (line) { line; })
