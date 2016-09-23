var name = "server";

var server = function(){
  console.log('I am the ' + name);
  return name;
};

module.exports = server;