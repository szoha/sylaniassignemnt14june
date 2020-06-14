// ------------ Chapter No 1------------------

// 1- Write a script to greet your website visitor using JS alert box.
// var name = prompt("what is your name");
// alert("welcome " + name);

// 2- Write a script to display following message on your web page:
//alert("Error! Please enter a valid password.");

// 3- Write a script to display following message on your web page: (Hint : Use line break)
//alert("Welcome to JS Land... \n Happy Coding!");

// 4- Write a script to display following messages in sequence:
//alert("welcome to JS Land...");
//alert("Happy Coding!");

// 5- Generate the following message through browser’s developer console:
//console.log("Hello... I can run JS through my web browser's console");

 

// ------------ Chapter No 2------------------

// 1 - Declare a variable called username.
//var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name
//var myName = "Zohaib Sajjad Shah";


// 3. Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.

//var message;
//message = "Hello World";
//alert(message);


// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

/*var studentName = "Jhone Doe";
var age = "15 years old";
var certificate = "Certified Mobile Application Development"

alert(studentName);
alert(age);
alert(certificate);
*/


// 5. Write a script to display the following alert using one JS variable:
/* alert("PIZZA \nPIZZ \nPIZ\nPI\nP") */


// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

/* var email = "szohaibs@gmail.com";
alert("My email address is "+ email); */



// 7- Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

/* var book;
book = "A smarter way to learn JavaScript";
alert(book);
 */



 // 8- Write a script to display this in browser through JS

 /* document.write("Yah! I can write HTML content through JavaScript"); */





// ------------ Chapter No 3------------------

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

/* var age = 29;
alert("I am "+age+" years old"); */


// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.


/* var visit = 19;
alert("You have visited this site "+visit+ " times"); */




//3-  Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:


/* var birthYear = 1991;
document.write("My birth year is "+birthYear + "<br>");

document.write("Data type of my declared variable is number"); */

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

/* var visitorname = "Zohaib";
var productTitle ="T-shirt(s)";
var quantity = 10;
document.write(visitorname + " ordered " + quantity+" "+productTitle +" on XYZ Clothing store"); */



// ------------ Chapter No 4------------------

// 1. Declare 3 variables in one statement.
/* var a = 10 , b=5 , c=1; */


// 2. Declare 5 legal & 5 illegal variable names.
// legal variables

/* var a =0;
var cloth=1;
var First_name=2;
var Number1=3;
var Many_number_in_1=4; */

// Illegal Variables

/* var 1number;
var first name;
var %this;
var this ;
var @firstname;
 */


// 3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
//c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
//d) Variable names are case _________
//e) Variable names should not be JS _________


/* document.write("<strong> Rules for naming JS variables </strong><br>");
document.write("Variable names can only contain numbers, $, and _. For example $my_1stVariable<br>")
document.write("Variable names are case sensitive <br>")
document.write("variable names should not be JS Keywords") */


// ------------ Chapter No 5------------------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

/* var a = 10;
var b= 20;
var sum = a+b;
document.write("Sum of "+a+" and "+b+ " is "+sum) */


// 2. Repeat task1 for subtraction, multiplication, division & modulus. 

// substration
/* var a = 100;
var b= 20;
var sub = a-b;
document.write("Substration of "+a+" and "+b+ " is "+sub) */ 

// Multiplication
/* var a = 100;
var b= 20;
var mul = a*b;
document.write("Multiplication of "+a+" and "+b+ " is "+mul) */

// Division
/* var a = 100;
var b= 20;
var div = a/b;
document.write("Divison of "+a+" and "+b+ " is "+div) */

// 3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.l. Output : “The remainder is : 0”.


/* var count;
document.write("Value after variable declaration is "+ count+"<br>");
count=5;
document.write("Initial value: "+ count+"<br>");
count++;
document.write("Value after increament is: "+ count+"<br>");
count = count+7;
document.write("Value after addition is: "+ count+"<br>");
count--;
document.write("Value after decrement is: "+ count+"<br>");
count = count%3;
document.write("The remainder is: "+ count+"<br>"); */


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

/* cost = 600;
tickets = 5;
document.write("Total cost to buy "+tickets+ " tickets to a movie is "+cost*tickets +"PKR") */


 // 5. Write a script to display multiplication table of any number in your browser. E.g

/*  var n = prompt("Enter number ");
 document.write("Table of "+n+"<br>")
 document.write(n +"x1="+n*1+"<br>");
 document.write(n +"x2="+n*2+"<br>");
 document.write(n +"x3="+n*3+"<br>");
 document.write(n +"x4="+n*4+"<br>");
 document.write(n +"x5="+n*5+"<br>");
 document.write(n +"x6="+n*6+"<br>");
 document.write(n +"x7="+n*7+"<br>");
 document.write(n +"x8="+n*8+"<br>");
 document.write(n +"x9="+n*9+"<br>");
 document.write(n +"x10="+n*10+"<br>"); */



 // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
//Conversion Formulae:

/* var cel = 25;
var far = (cel*9/5)+32;

var far2 = 70;
var cel2 = (far2-32)*5/9;


document.write(cel+"<span>&#8451;</span> " +"  is " +far+" <span>&#8457;</span><br>");
document.write(far2+"<span>&#8457;</span> " +"  is " +cel2+" <span>&#8451;</span>"); */


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges

/* item1 = 650;
quantity1 = 3;
total1= item1*quantity1;

item2 = 100;
quantity2= 7;
total2 = item2*quantity2;

shipping = 100;

total= total1+total2+shipping;

document.write("Price of item 1 is "+ item1+"<br>");

document.write("Quantity of item 1 is"+ quantity1+"<br>");

document.write("Price of item 2 is"+ item2+"<br>");

document.write("Quantity of item 2 is"+ quantity2+"<br>");

document.write("Shipping Charges "+ shipping+"<br>");

document.write("<br>")

document.write("Total cost of your order is "+  total); */




// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser


/* var totalmarks = 980;
var obtained = 804;
var percent = (obtained*100)/totalmarks;

document.write("Total marks: "+totalmarks+"<br>" )
document.write("Marks obtained: "+obtained+"<br>" )
document.write("Percentage: "+percent ) */



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

/* var dollarrate = 104.80;
var saudirate = 28;

var dollarihave = 10;
var riyalihave = 25;

var dollartotal = dollarrate*dollarihave;
var riyaltotal = saudirate * riyalihave;
var sum =dollartotal + riyaltotal;

document.write("Total Currency in PKR: "+ sum); */



// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

/* var number = 10;
var  final = ((10+5)*10)/2
document.write(final); */



// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.


/* var cy = 2020;
var by = 1991;
var age = cy - by;

document.write("<h2>Age Calculator</h2><br>");
document.write("<br><br>")
document.write("Current Year: "+cy+"<br>");
document.write("Birth Year: "+by+"<br>");
document.write("Your age is:"+age+"<br>");
 */


 // 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
 //b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

 /* var r = 20;
 var pi = 3.142;
 var c = 2 * r * pi;
 var a = pi * r*r ;

 document.write("<h2>The Geometrizer </h2>");
 document.write("<br><br>");
 document.write("Radius of a circle:" + r+"<br>");
 document.write("The circumference is:" + c+"<br>");
 document.write("The area is: " + a+"<br>"); */


 // 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

/* var snack = "BBQ lays";
var age = 29;
var maxage = 80;
var amountperday = 2;
var total = (maxage - age)*2;

document.write("<h2>The Lifetime Supply Calculator</h2><br>");
document.write("<br><br>")
document.write("Favorite Snack: "+snack+"<br>");
document.write("Current age: "+age+"<br>");
document.write("Estimated Maximum Age:"+maxage+"<br>");
document.write("Amount of snacks per day: "+amountperday+"<br>");
document.write("You will need "+total +" "+ snack +" to last you until the ripe old age of "+ maxage +"<br>"); */




// ------------ Chapter No 6 - 9 --------


// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

/* var x = 10;

document.write("Result<br>");
document.write("The value of x is:" + x +"<br>");
document.write("<br>");
document.write("------------------------------");
document.write("<br>");

document.write("The value of ++x is:" + ++x +"<br>");
document.write("Now the value of x is:" + x +"<br>");
document.write("<br>");

document.write("The value of x++ is:" + x++ +"<br>");
document.write("Now the value of x is:" + x +"<br>");
document.write("<br>");

document.write("The value of --x is:" + --x +"<br>");
document.write("Now the value of x is:" + x+"<br>");
document.write("<br>");


document.write("The value of x-- is:" + x-- +"<br>");
document.write("Now the value of x is:" + x+"<br>");
document.write("<br>"); */


// What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

/* var a =2;
var b=1;
var result = --a - --b + ++b + b--;


document.write("a is " +a+"<br>");
document.write("b is " +b+"<br>");
document.write("result is " +result+"<br>");
// 1 - 0 + 1 + 1 = result = 3
// a is 2, after --a , now a is 1 a=1
// b = 1 , after --b b=0, 
// ++b now b=1
//b-- 1 b=0

 */


 //3. Write a program that takes input a name from user & greet the user.

 /* var username = prompt("Enter your name:");
 document.write("Welcome "+username); */



 //5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.


 /* var n = prompt("Enter number ");
 if (n === ""){
    n=5
 };
 document.write("Table of "+n+"<br>")
 document.write(n +"x1="+n*1+"<br>");
 document.write(n +"x2="+n*2+"<br>");
 document.write(n +"x3="+n*3+"<br>");
 document.write(n +"x4="+n*4+"<br>");
 document.write(n +"x5="+n*5+"<br>");
 document.write(n +"x6="+n*6+"<br>");
 document.write(n +"x7="+n*7+"<br>");
 document.write(n +"x8="+n*8+"<br>");
 document.write(n +"x9="+n*9+"<br>");
 document.write(n +"x10="+n*10+"<br>"); */
 
 
 // 6. Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)



/* var sub1 = prompt("Enter first subject");
var sub2 = prompt("Enter second subject");
var sub3 = prompt("Enter third subject");

var totalmarks = 100;
var totalmarksall = 100*3;
var obtmarks1 = prompt("Enter marks for subject 1");
var per1 = (obtmarks1*totalmarks)/100;
var obtmarks2 = prompt("Enter marks for subject 2");
var per2 = (obtmarks2*totalmarks)/100;
var obtmarks3 = prompt("Enter marks for subject 3");
var per3 = (obtmarks3*totalmarks)/100;

var totalpercent = (per1+per2+per3)/3;
var totalobtained = obtmarks1+obtmarks2+obtmarks3;

document.write("<table> <th><td>Subjects</td><td>total Marks</td><td>Marks Obtained</td><td>percentage</td></th>")


document.write("<tr><td> </td><td>"+sub1+"</td> <td>"+totalmarks+"</td> <td>"+obtmarks1+"</td> <td>"+per1+"%</td></tr>")

document.write("<tr><td> </td><td>"+sub2+"</td> <td>"+totalmarks+"</td> <td>"+obtmarks2+"</td> <td>"+per2+"%</td></tr>")

document.write("<tr><td> </td><td>"+sub3+"</td> <td>"+totalmarks+"</td> <td>"+obtmarks3+"</td> <td>"+per3+"%</td></tr>")

document.write("<tr><td> </td><td> </td> <td>"+totalmarksall+"</td> <td>"+totalobtained+"</td> <td>"+totalpercent+"%</td></tr></table>") */


// ---------------------- Chapter 9 - 10


//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

/* var city = prompt("Enter City name")

if (city === "Karachi"){
    alert("Welcome to city of lights")
} */





// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.


/* var gender = prompt("Enter Gender")
if(gender === "male"){
    alert("Good Morning Sir")
}
if (gender === "female") {
    
    alert("Good Morning Ma'am")
} */



// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

/* var color = prompt("Enter Traffic Color");

if (color==="Red") {
    alert("Must Stop")
} 
if (color==="Yellow") {
    alert("Ready to move")
} 
if (color==="Green") {
    alert("Move now")
} 
 */


 //4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”


 /* var fuel = prompt("Enter fuel");

 if (fuel < 0.25){
     alert("Please refill the fuel in your car")
 } */




 // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

/* var a = 4;
if (++a === 5){ alert("given condition for variable a is true"); }
// alert generated


 var b = 82; 
 if (b++ === 83){ alert("given condition for variable b is true"); }
// alert not generated

 var c = 12;
  if (c++ === 13){ alert("condition 1 is true"); }
   if (c === 13){ alert("condition 2 is true"); }
    if (++c < 14){ alert("condition 3 is true"); }
     if(c === 14){ alert("condition 4 is true"); }
// condition 2 and 4 are true
    
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
//alert shown
  if (true){ alert("True"); }
   if (false){ alert("False"); }
// true
if("car" < "cat"){ alert("car is smaller than cat"); } 
//alert shown */








// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:







/* Chapter 12-13 */

// Task 1

// var character = prompt("Enter Character (number or string) e.g A, a or 11");

// if( character*1) {
// 	console.log(character + " is a number");
// } else {

// 	console.log(character + " is string" + "<br/>");
// 	if(character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
// 		console.log(character + " is uppercase letter");
// 	}
// 	else {
// 		console.log(character + " is lowercase letter");
// 	}
// }



// Task 2

// var num1 = parseInt(prompt("Enter first number"));
// var num2 = prompt("Enter second number");

// if(num1 > num2) {
// 	console.log(num1 + " num1 is greater");
// } else if(num1 < num2) {
// 	console.log(num2 + " num2 is greater");
// } else {
// 	console.log("They are equal");
// }



// Task 3

// var num = prompt("Enter number");


// if(num > 0) {
// 	console.log(num + " num is Positive");
// } else if(num < 0) {
// 	console.log(num + " num is Negative");
// } else {
// 	console.log("It is zero");
// }



// Task 4

// var chracter = prompt("Enter alphabet to check vowel");

// if(chracter == 'a' || chracter == 'e' || chracter == 'i' || chracter == 'o' || chracter == 'u') {
// 	console.log(chracter + " is vowel");
// } else {
// 	console.log(chracter + " is not vowel");
// }



// Task 6

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// 	greeting = "Good day"; 
// } else { 
// 	greeting = "Good evening"; 
// }

// alert(greeting);



// Task 7

// var time = prompt("Enter Time in 24 hours (e.g. 0000 - 2300.  i.e 1900 = 7pm)");

// if(time >= 0000 && time < 1200) {
// 	console.log("Good Morning");
// } else if(time >= 1200 && time < 1700) {
// 	console.log("Good Afternoon");
// } else if(time >= 1700 && time < 2100) {
// 	console.log("Good Evening");
// } else {
// 	console.log("Good Night");
// }

// ----------------------------------------------- CHAPTER 12-13 END





/* CHAPTER 14-16 Arrays */

// TASK 1

/* var student_names = ["Michael", "John", "Tony"]; */

// Task2

/* var students = new Array(); */

// Task3

/* var strings = ["Saab", "Volvo", "BMW"]; */



// Task4

/* var numbers = [2,6,3,3,11,7,28,26]; */



// Task5

/* var booleans = [false, true, false, false, true] */;



// Task6

/* var mixed_array = ["Audi", true, 11]; */



// Task7

/* var education_qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]; */

// for(edu in education_qualifications) {
// 	console.log((+edu+1) + '). ',education_qualifications[edu]);
// }


// Task8

/* var scores = [320, 230, 480]; */

// function calculate_percentage(value) {
// 	return (value/500) * 100 + "%";
// }

// document.write("Score of " + student_names[0] + "is " + scores[0] + ". Percentage: " + calculate_percentage(scores[0]) + "<br/>" );
// document.write("Score of " + student_names[1] + "is " + scores[1] + ". Percentage: " + calculate_percentage(scores[1]) + "<br/>" );
// document.write("Score of " + student_names[2] + "is " + scores[2] + ". Percentage: " + calculate_percentage(scores[2]) + "<br/>" );



// Task 9

/* var colors = ["red", "green", "blue", "black", "yellow"]; */



// Task 10

// function sorting_scores() {

// 	document.write("Scores of Students: " + scores + " <br/>");

// 	scores.sort();

// 	document.write("Ordered Scores Of Students " + scores  );
// }
// sorting_scores();


// Task 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// function initialize_array() {

// 	var selectedCities = cities.slice(2,4);

// 	document.write("Selected Cities " + selectedCities  );
// }
// initialize_array();


// Task 12

// var arr = ["This ", " is ", " my ", " cat"];

// function join_array() {

// 	var joined = arr.join(" ");

// 	document.write("Selected Cities " + joined  );
// }
// join_array();


// Task 13 


// var devices = ["keyboard", "mouse", "printer", "monitor"];

// function FIFO() {

// 	console.log(devices.shift());

// }
// FIFO();
// FIFO();
// FIFO();
// FIFO();


// Task 14

// var devices1 = ["keyboard", "mouse", "printer", "monitor"];
// function LIFO() {

// console.log(devices1.pop());


// }
// LIFO();
// LIFO();
// LIFO();
// LIFO();


// Task 15

// var phones = ["Apple", "Samsung", "Motorolla", "Nokia", "Sony & Haeir"];



// document.write("<select>");
// for(i in phones) {
// 	document.write("<option>" + phones[i] + "</option>" );
// }
// document.write("</select>");