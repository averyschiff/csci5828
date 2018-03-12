/* CSCI 5828 - Spring 2018
 * Homework 3
 * Collaborators: Avery Schiff 
 */

var fs = require('fs');
var topdir = process.argv[2];

var fail = function(err) { console.log(err)};

var print = function(total) {console.log("Total size:", total)}; //final print statement

/***
 * Scans a directory for all files and
 * directories. Appends the full path to the
 * names and returns them in an array
 ***/
var get_files = function(dir){
  return new Promise(function(resolve, reject) {
    fs.readdir(dir, function(err, files) {
      if (err) { return reject(err)};
      fullpaths = [];
      files.forEach(file=>fullpaths.push(dir + '/' + file)); //adds full path to file name
      resolve(fullpaths);
    });
  });
}

/***
 * Returns the size of a file in bytes
 ***/
var get_size = name => {
  return new Promise(function(resolve, reject) {
    fs.stat(name, function(err, stats) {
      if (err) reject(err);
      resolve(stats.size);
    });
  });
}

/***
 * Returns an array containing 
 * 0 - The name of something in a directory (string)
 * 1 - Whether it is a file or not (Boolean)
 * 2 - Whether it is a directory or not (Boolean)
 ***/
var find_type = function(name) {
  return new Promise(function(resolve, reject) {
    fs.stat(name, function(err, stats) {
      if (err) { return reject(err) };
      resolve([name, stats.isFile(), stats.isDirectory()]);
    });
  });
}

/***
 * Takes an array of arrays created by find_type
 * For each array, it finds the size if the
 * object is a file and begins a directory
 * traversal if it's a directory
 * **/
var gather = function(files){
  var promises = [];
  files.forEach( info => {
    var name = info[0];
    var isFile = info[1];
    var isDirectory = info[2];
    if (isFile) {
      promises.push(get_size(name));
    }
    if (isDirectory){
      promises.push(readDir(name));
    }
  });
  return Promise.all(promises);
}

/***
 * Creates an array of promises containing
 * arrays defined by find_type
 * **/
var detect = function(files) {
  var promises = [];
  files.forEach(file => promises.push(find_type(file)));
  return Promise.all(promises);
}

/***
 * Reduces an array of sizes by summing them together
 * If given an empty array (caused by traversing an empty directory)
 * then it will return 0
 * **/
var sum = function(sizes) {
  if (sizes.length > 0){
    return sizes.reduce((a,b) => a+b);
  }else{
    return 0;
  }
}

/***
 * Traverses a directory and returns the size
 * in bytes of all files in the directory and
 * its sub-directories
 * **/
var readDir = function(dir){
  return new Promise(function(resolve, reject) {
    var files = get_files(dir);
    files.then(detect).then(gather).then(sum).then(resolve).catch(fail);
  });
}

/***
 * Checks whether a parameter is provided for
 * the initial directory.
 * If so, traverses the directory and prints the
 * the size if the directory exists
 * **/
var report = function(dir){
  if (!dir){
    fail("Error: Directory must be provided as command line argument");
  }else{
    readDir(dir).then(print).catch(fail);
  }
}

report(topdir);
