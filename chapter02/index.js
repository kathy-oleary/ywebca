 /*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return (3+2) ;


};

/* jshint ignore:start */
// Statements 1
Exer.statements1 = function () {

  !true ;

};
/* jshint ignore:end */

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  // Write a statement that declares a variable.
  var blah = "You're talking but alls I'm hearing is blah blah blah";
  return blah;
  // Return that variable.

};

// Variables 2
Exer.variables2 = function () {

  // Write a statement that declares a variable.
  var whee;
  whee = 25;
  return whee ;
  // Write a statement to assign a number value to your variable.

  // Return the variable.

};

// Variables 3
Exer.variables3 = function () {

  // Write a statement that declares a variable and initializes it to a string.
  var cake="yummy goodness with frosting";
  return cake;
  // Return the variable.

};

// Variables 4
Exer.variables4 = function ( n ) {

  // Return the parameter.
  return n;
};

// Variables 5
Exer.variables5 = function ( n ) {

  // Declare a new variable and initialize it to the value of `n`.
  var lucy = n;
  return lucy;
  // Return the new variable.

};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  // (declare a variable named `apples` and initialize it to `3`)
  var apples = 3;
  return apples + stacys;
  // Stacy gives you more apples
  // (the parameter `stacys`)

  // Return the total number of apples you have.

};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  // You find a quarter.
  change = change + .25 - .10;
  change = "$"+change;
  return change;
  // Then you spend a dime on old fashioned candy.
  // How much money do you have now?

  // Use type coercion to turn your pocket change into a string add a dollar
  // sign to the beginning.

  // Return that string.

};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( truer, two ) {
  var newer = 2;
  var consnt = two+2;
  truer += "2";
  var afunction = newer + consnt + truer + two;
  return afunction;
};


/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  //  return history;
    return browser;
  // return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {

  // Your work here
  recombobulate();
  setPowerLevel(10000);
  cornTortilla("chicken", "queso", "bacon", "lime");

};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

  // Output something to the console.
  console.log("Wheeee");

};

// Console 2
Exer.console2 = function ( printme ) {

  // Print the parameter `printme` to the console.
  console.log(printme);

};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {

  // your answer here
  var xxxxx=data;
  console.log('The magic word is "' + xxxxx + '"');

};
i
// Console 4
Exer.console4 = function () {

  // Use comma-separated values to output two things to the console with one
  // call.
  console.log(2,4);
};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  // Output the first parameter `x` to the console.
  console.log(x);
  return y+1;
  // Make the function return the parameter `y` plus 1.

};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  // your work goes here

console.log(magicFunc());


};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  // your work goes here
return magicFunc();

};

// Return 3
Exer.return3 = function () {

  // Call `strShift` with the argument "abczABCZ". Log the result.
  var beep = strShift("abczABCZ");
  console.log(beep);
  return beep + "123";
  // Return that same result with "123" concatenated to the end.

};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {
  
  console.log(magicFunc()+ "" + magicFunc());

  // your work goes here

};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {

  // Declare and initialize a variable for the first string.
  var rock=strShift("abcABC123!@#");
  var roll=strShift(strShift("a S d F j K l"));
  return strShuffle(rock,roll);
  // Declare and initialize a variable for the second string.

  // A return statement.

};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {

  var crud = prompt("What is the answer to the meaning of life, the universe, and everything?","42");
  return crud;
  // Your work here

};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

  var geez=confirm("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!");
  return geez;
  // Your work here

};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  // Use prompt to get a number from a user
  var lotto = prompt("Pick a number:","");
  console.log(lotto);
  // Print that number to the console

};

// Control 2
Exer.control2 = function ( bar ) {

  // Declare a variable named `foo`.
  var foo;
  // Initialize `foo` with a string.
  foo="Hello";
  // Log `foo` to the console.
  console.log(foo);
  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.
  var ding=bar + foo + bar;
  // Call `strReverse` and pass it `ding` (as an argument).
  // Send the result to the user in a confirm window.
  // Save the user's response in a new variable called `quux`.
  var quux =confirm(strReverse(ding));
  return !quux;
  // Return the opposite of `quux`.

};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {

  console.log( "Welcome to Camelot!" );
  if (isSerious==false) {
    console.log("On second thoughts, let's not go to Camelot. It is a silly place.");
  }
  // If `isSerious` is false, output the message:
  //     On second thoughts, let's not go to Camelot. It is a silly place.

};

// Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

  // If temperature is greater than or equal to 70
  // Then output:
  //     Hermit crab warning!
  if(temperature>=70) {
    console.log("Hermit crab warning!");

  }else if(temperature<70) {
    console.log("Catch of the day: influenza, $14/lb.");
  }
  console.log("Thanks for visiting Pier One and Three Quarters!");
  // Otherwise, output
  //     Catch of the day: influenza, $14/lb.

  // In either case, also print
  //     Thanks for visiting Pier One and Three Quarters!

};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  // Declare and initialize `luckyNumber`
  var luckyNumber=7;
  if(whatDay.length<=6) {
    luckyNumber+="!";
  }
  if(whatDay=="Mannersday") {
    luckyNumber+=4;
  }else if(whatDay=="Foosday") {
    luckyNumber+=2;
  }else if(whatDay=="Heyday") {
    luckyNumber+=luckyNumber.charAt(0);
  }else {
    luckyNumber=Infinity; 
  }
  return luckyNumber;
  // If the length of `whatDay` is 6 or less...

  // If `whatDay` is "Mannersday"...
  // If `whatDay` is "Foosday"...
  // If `whatDay` is "Heyday"...
  // Otherwise...

  // Return `luckyNumber`

};

// Conditional 4
Exer.condition4 = function () {

  // Prompt the user
  var thingy=prompt("Enter today's date, please.");
  if(typeof thingy!="number" || isNaN(thingy)) {
    console.log("What do you think this is, bub? Wonderland?");
  }else if(thingy<1) {
    console.log("Negativelaaaaaaand~!");
  }else if(thingy>31) {
    console.log("Are they paying you overtime for this?");
  }else if(thingy>=29 && thingy<=31) {
    console.log("I sure hope it isn't February.");
  }else {
    console.log("Did you know? There are exactly " + thingy + " ways to make today awesome!");
  }
  // If the user's input is not a number...
  // Otherwise...
    // If the user's input is less than 1...
    // If the user's input is greater than 31...
    // If the user's input between 29 and 31, inclusive...
    // Otherwise...

};

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

// While 1
// Turn the code in the function into a while loop.
Exer.while1 = function () {

  var numbers = 10;
  while (numbers>=1) {
    console.log(numbers + " sheep");
    numbers = numbers - 1;
  }

};

/* jshint ignore:start */
// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {

  
  console.log("I'm melting!");
  console.log("m melting!");
  console.log("melting!");
  console.log("lting!");
  console.log("ing!");
  console.log("g!");
  console.log("What a world!");


};
/* jshint ignore:end */

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {
 
  var dome=0;
  do {
    var remainder= dome % 3;
    ++dome;
    console.log(remainder);
  }while (dome<6);

};

/* jshint ignore:start */
// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {
  

  console.log("Train# 1: In flight!?");
  console.log("Train# 2: In flight!?");
  console.log("Train# 3: In flight!?");
  console.log("Train# 4: In flight!?");
  console.log("Train# 5: In flight!?");
  console.log("Train# 6: In flight!?");
  console.log("Train# 7: In flight!?");
};


/* jshint ignore:end */

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
  var firstName = "Zachery"; 
  var lastName = "Moneypenny"; 
  if(firstName === "Zachery") { 
    lastName = "Johnson";  
  }
};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
    var firstName = "Penny"; 
    var lastName = "Moneywhistle"; 
    if(firstName === "Penny") { 
        lastName = "Johnson"; 
    }
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

// For 1
// Rewrite the loop as a linear sequence of statements.
Exer.for1 = function () {
 
 

console.log("...");
console.log("    ...AA");
console.log("        ...AAAA");
console.log("            ...AAAAAA");
console.log("                ...AAAAAAAA");
console.log("                    ...AAAAAAAAAAH!");



};

/* jshint ignore:start */
// For 2
// Rewrite the repetative code with for loops.
Exer.for2 = function () {



  for (var counter2=0; counter2<2; ++counter2) {
    console.log("Hi!");
    var slim="My name is";
    for (var counter=0; counter<3; ++counter) {
      console.log(slim);
    }
      console.log("Slim Shady");
  }


};
/* jshint ignore:end */

// For 3
// Write a loop that counts backwards from 20 to 5 and prints the number and
// "even" if the number is even and "odd" if the number is odd.
Exer.for3 = function () {

  // Your work here


for (var countz=20; countz>=5; --countz) {
    if (countz%2==0) {
      console.log(countz, "even");
    }else {
      console.log(countz, "odd");
    }
}

};

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

// Breaking 1
// Use a break to stop this infinite loop
Exer.breaking1 = function(yeng) {

  while(yeng()) {
    break;
  }

};

// Breaking 2
// Every time theatre.current() is called it returns a string, break when that string is
// "Electric Boogaloo!"
Exer.breaking2 = function(theatre) {

  while (theatre.next()) {
    console.log(theatre.current());
    if (theatre.current() === "Electric Boogaloo!") {
      break;
    }
  }

};

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

// Succinct 1
Exer.succinct1 = function ( kiwis ) {

  // Quadruple kiwis.

  // Reduce kiwis by 2.

  // Halve kiwis.

  // Concatenate " handsomely hirsute kiwis" to kiwis.

  // Return kiwis.
kiwis *=4;
kiwis -=2;
kiwis /=2;
kiwis+=" handsomely hirsute kiwis";
return kiwis;


};

// Succinct 2
// Edit the for loop to use the incrementation operator.
Exer.succinct2 = function () {

  for ( var hippo = 2; hippo <= 10; hippo++ ) {
    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
  }

};

// Succinct 3
// Correct the decrementation operator error.
Exer.succinct3 = function () {

  var message = "Reverse me!";
  var pointer = message.length;
  while( pointer > 0 ) {
    console.log( message.charAt( --pointer ) );
  }

};

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.
    // "cow": "foo"
    // "sheep": "bar"
    // "duck": "quux"
    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"
  
  switch (animal) {
    case "cow":
      output+="foo";
      break;
    case "sheep":
      output+="bar";
      break;
    case "duck":
      output+="quux";
      break;
    default:
      output+="ring-a-ding-ding-dingding-ding-a-ding-ding";
    
  }
  output += '"!';
  console.log(output);

};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/* jshint ignore:start */
Exer.capitalization1 = function() {

  var zero = 0;
  var happyCat = new String("How did this get here! I'm not good at computer!");
  for (var index = 0; I < happyCat.length; index++) {
    if (index % 4 == zero) {
      console.log(happyCat);
    }
  }

};
/* jshint ignore:end */

/*------------------------------    COMMENTS    ------------------------------*/

Exer.comments1 = function ( war, missiles, wood, sheep, brick ) {

  if ( war ) {
    if ( missiles ) {
      // missiles.launch();
    } else {
      cower();
    }
    // I like wheat bread for my sandwiches when coding!
  } else {
    if ( wood ) {
      wood.trade( sheep, 1 );
    } else if ( sheep ) {
      sheep.trade( wood, 3 );
    } else {
      brick.buy(2); // Zorro lives! and so does his bandits!
    }
  }

};

Exer.comments2 = function () {

 

/*           *        ****     *            *                
  *    *    *        *    *     *     *    *      
   *  *  * *         *    *      *  *   * *         
    *     *           ****         *     * 

    */    


};