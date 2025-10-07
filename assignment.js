// Q1.

var marks = prompt("Enter a number : ");
if(marks>=90){
    console.log(marks, "Grade A");
}
else if(marks>=80 && marks <=89){
    console.log(marks, "Grade B");
}
else if(marks>=70 && marks<=79){
    console.log(marks, "Grade C");
}
else if(marks>=60 && marks<=69){
    console.log(marks, "Grade D");
}
else{
    console.log(marks, "Fail");
}


// Q2.

var unit = prompt("Enter the unit : ");
if(unit<=100){
    console.log("$5 per unit");
}
else if(unit<=300){
    console.log("$7 per unit");
}
else{
    console.log("$10 per unit");
}

// Q3.

var amt = prompt("Enter a Amount : ");
if(amt<=250000){
    console.log("No tex");
}
else if(amt<=500000 && amt>250000){
    console.log("5% tax");
}
else if(amt>500000 && amt<=1000000){
    console.log("20% tax");
}
else{
    console.log("30% tax");
}

// Q4.

var age = prompt("Enter the age : ");
if(age>=18){
    console.log("Eligible for vote");
}
else if(age<18 && age>0){
    console.log("Not eligible for vote");
}
else{
    console.log("Invalid age");
}

// Q5.

let num1 = 25;
let num2 = 42;
let num3 = 18;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + "is the largest number");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + "is the largest number");
} else {
    console.log(num3 + "is the largest number");
}

// Q6.

var temp = prompt("Enter the tempreture : ");
if(temp<=0){
    console.log("Freezing cold");
}
else if(temp>0 && temp<15){
    console.log("Very cold");
}
else if(temp>15 && temp<25){
    console.log("Cold");
}
else if(temp>25 && temp<35){
    console.log("Warm");
}
else{
    console.log("Hot");
}

// Q7.

var income = prompt("Enter the number : ");
var marks = prompt("Enter the marks : ");
if(marks>=85 && income<300000){
    console.log("Full Scholarship");
}
else if(marks>=70 && income<500000){
    console.log("Half Scholarship");
}
else{
    console.log("Not eligible for scholarship");
}