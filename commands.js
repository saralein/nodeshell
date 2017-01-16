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
      process.stdout.write("prompt > ");
    });
    //process.stdout.write(process.cat(string));
  },
  head: function(option, n) {
    fs.readFile(option, 'utf8', function(err, contents) {
      var counter = 0;
      var tempContents = contents;
      while (n > counter) {
        var newLine = tempContents.indexOf("\n");
        process.stdout.write(tempContents.slice(0, newLine) + "\n");
        tempContents = tempContents.slice(newLine+1);
        counter++;
      }
      process.stdout.write("prompt > ");
      //console.log(contents.indexOf('\n'));
      //want to take contents
      //run through contents until we reach \n
      //write each line until there are 5
    })
  },
  tail: function(option, n){
     fs.readFile(option, 'utf8', function(err, contents) {
       var contentsArr = contents.toString().split("\n");
       var toWrite = contentsArr.slice(contentsArr.length - n);
       for(var i=0; i<toWrite.length; i++){
         process.stdout.write(toWrite[i] + "\n");
       }
       process.stdout.write("prompt > ");
     })
    }
};

// require('fs').readFileSync('abc.txt').toString().split('\n').forEach(function (line) { line; })
