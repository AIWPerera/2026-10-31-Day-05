
console.log("Hello, JS!");

let name = "Saman Kumara";
let age = 25;
let city = "Colombo";
var country = "Sri Lanka";

let customer = ["saman", "kamal", 1, true, 100.2, 4];

let person = {
    name: "Saman Kumara",
    age: 25,
    city: "Colombo",
    country: "Sri Lanka"
};

console.log(name);
console.log(age);
console.log(city);
console.log(country);
console.log(customer);
console.log(person);

// Class
class customer1 {
    name;
    age;
    isStudent;

    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}

let customer2 = new customer1("Saman", 25, true);
console.log(customer2);

let customer3 = new customer1("Kamal", 30, false);
console.log(customer3);

// Array of Objects
let student = [
    {
        name: "Saman Kumara",
        age: 25,
        isStudent: true,
        marks: [
            { subject: "Math", grade: "A" },
            { subject: "Science", grade: "B" }
        ]
    },
    {
        name: "Kamal Perera",
        age: 30,
        isStudent: false,
        marks: [
            { subject: "Math", grade: "B" },
            { subject: "Science", grade: "A" }
        ]
    },
    {
        name: "Nuwan Silva",
        age: 22,
        isStudent: true,
        marks: [
            { subject: "Math", grade: "A" },
            { subject: "Science", grade: "A" }
        ]
    }
];

console.log(student);
console.log(student[0].age);
console.log(student[1].marks);

let a=100;
a++;
console.log("Value of a is: " + a);

let b=200;
let sum=a+b;
console.log("Sum of a and b is: " + sum);

let x=10;
let y="10";

console.log(x==y); // true
console.log(x===y); // false

if(true || false){
    console.log("This is true");
}else{
    console.log("This is false");
}

                           
if(x>y){
    console.log("x is greater than y");
}else if(x<y){
    console.log("x is less than y");
}else{
    console.log("x is equal to y");
}




marks= 75;
if(marks>=75){
    console.log("A");
}else if(marks>=50 && marks<75){
    console.log("B");
}else{
    console.log("Fail");
}


let day =5;
switch(day){
    case 1:
        console.log("Monday"); 
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");  
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;              
    default:
        console.log("Invalid day");
        break;
}   

for(let i=0; i<5; i++){
    console.log("Value of i is: " + i);
}

