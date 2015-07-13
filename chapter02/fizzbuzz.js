// Student Workspace
Fizz.buzz = function () {

for (var fizzCount=1; fizzCount<101; ++fizzCount) {
  if (fizzCount%3==0 && fizzCount%5!=0) {
    console.log("Fizz");
  }else if (fizzCount%5==0 && fizzCount%3!=0) {
    console.log("Buzz");
  }else if (fizzCount%5==0 && fizzCount%3==0) {
    console.log("FizzBuzz");
  }else {
    console.log(fizzCount);
  }
}

};