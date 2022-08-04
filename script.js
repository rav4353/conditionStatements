// if statement

let num = 50; 

if (num < 100) 
{
    console.log("Value of a is lesser than 100");
}



// if else statement

let age = 18;

if(age >= 18)
{
    eligible = "You are eligible to vote";
    console.log(eligible);
}

else
{
    eligible = "You are not eligible to vote";
    console.log(eligible);
}




// if elseif

let month = 3;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);



// Nested if else if

var age1 = 20;
if( age1 < 18 )
{
  console.log("You are Minor"); 
  console.log("Not Eligible to Work"); 
}
else
{
  if (age1 >= 18 && age1 <= 60 )
  {
      console.log("You are Eligible to Work");
  }
  else
  {
      console.log("You are too old to work as per the Government rules.");
  }
}



// while

let count = 1;
while (count < 10) 
{
    console.log(count);
    count +=2; // short form of count = count + 2;
}


// Do while

let countValue = 0;
do 
{
  console.log(countValue);
  countValue++;
} 

while (countValue < 5)