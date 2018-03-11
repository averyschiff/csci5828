var fs = require('fs');
var start = process.argv[2];

var fail = function(err) { console.log(err)};

var report = function(size) {
  console.log("Total size: ", size);
}

var get_files = function(dir){
  return new Promise(function(resolve, reject) {
    fs.readdir(dir, function(err, files) {
      if (err) { return reject(err)};
      fullpaths = [];
      files.forEach(file=>fullpaths.push(dir + '/' + file));
      resolve(fullpaths);
    });
  });
}

var get_size = name => {
  return new Promise(function(resolve, reject) {
    fs.stat(name, function(err, stats) {
      if (err) reject(err);
      resolve(stats.size);
    });
  });
}

var find_type = function(name) {
  return new Promise(function(resolve, reject) {
    fs.stat(name, function(err, stats) {
      if (err) { return reject(err) };
      resolve([name, stats.isFile(), stats.isDirectory()]);
    });
  });
}

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
      //promises.push(Promise.resolve(0));
      promises.push(readDir(name));
    }
  });
  return Promise.all(promises);
}

var detect = function(files) {
  var promises = [];
  files.forEach(file => promises.push(find_type(file)));
  return Promise.all(promises);
}

var sum = function(sizes) {
  if (sizes.length > 0){
    return sizes.reduce((a,b) => a+b);
  }else{
    return 0;
  }
}

var readDir = function(dir){
  var files = get_files(dir);
  return new Promise(function(resolve, reject) {
    var size = files.then(detect).then(gather).then(sum).catch(fail);
    resolve(size);
  });
}

var report = function(dir){
  var size = readDir(dir);
  size.then(total=>console.log("Total size: ", total));
}

report(start);
