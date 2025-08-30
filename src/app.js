function greet(name) {
  return 'Hello, ${name}!';  
}

module.exports = greet;

if(requiree.main == module) {
    console.log(greet("World"));
}