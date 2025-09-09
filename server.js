console.log("MTK, first step");

// variable
{ 
    var name ="mtk";
    let age;
}
console.log("name :"+ name);
// console.log("age :"+ age);// block scope variable

let num1=4, num2=5;
console.log(num1 + num2);

// const variable
const PI=3.14;
console.log("PI: "+ PI);
// PI= 5.5;
console.log("PI: "+ PI);

// type juggling
let num;
console.log("num :"+ typeof(num));//undefined data type
num= 'MTK';
console.log("num :"+ typeof(num));
num= 123;
console.log("num :"+ typeof(num));
console.log("ABC">123);

// string with escape char
let time = '3 o\'clock';
console.log(time);
let time1 = "4 o'clock";
console.log(time1);
let time2 = "He said \"You are beautiful\"";
console.log(time2);

//template string using back tick
let my_name= 'MTK';
let custom_greet= `Hello, ${my_name}`;
console.log(custom_greet);
let greet=`
Hello ${my_name},
nice to meet you.
`
console.log(greet);
let test= "\nThis is test"+
" \nby May";
console.log(test);

//NaN
let my_var;
let my_num=1;
console.log(my_num + my_var);

console.log(typeof(0));

// use '+' to convert non-number to number
console.log(+'5');
console.log(+'a');

// '+' as string concatenator and arithematic operator
let number1= '5';
let number2= 5;
console.log(number1+ number2);
console.log(number2 + +number1);
console.log(+number1 + number2);

// '-'
console.log("11"+1);
console.log("11"-1);
console.log("mtk"*2);
console.log("5"/3);
console.log("5"%3);
console.log("5"**3);

// '++' and '--'
let a=2;
console.log(a++);//2
console.log(a);//3
console.log(++a);//4
console.log(a);//4

let b=3;
console.log(b--);//3
console.log(b);//2
console.log(--b);//1
console.log(b);//1

// left to right if operator level is same and there are more than 2 operands
console.log('$'+4+5);//$45
console.log(4+5+'$');//9$
console.log(3 - 1 + 2 * 5 / 4);//4.5
console.log((3-1+2)*5/4);//5

// assignment operator
b +=3;
console.log(b);
a-=2;
console.log(a);
let c=d=e=1;
console.log(c);
console.log(d);
console.log(e);

// comparison operators
console.log(5=='5');
console.log(5==='5');
console.log(5!='5');
console.log(5!=='5');
console.log(c<5);
console.log(e>=1);

// logical operators
let x = 3;
let y = 5;
console.log("logical:",x < y && y > 5 || x == 3);

//function
function describe(myName)// no parameter, no return
{
console.log(`name: ${myName}`);
}

function add(x,y) // 2 parameters, return 
{
return x+y;
console.log("after return");//check if it works after return or not
}

describe("M");// 1 argument
let result=add(2,3); // 2 arguments

// default parameter and rest parameter
function multiply(a,b=1){
    return a*b;
}
console.log(multiply(2,3,4));// 6
console.log(multiply(2));// 6

function addMultiple(a,b,...c){
    console.log(c, typeof(c));//[4,5,6]
    return a+b+c;
}
console.log(addMultiple(2,3,4,5,6));// 54, 5,6

//function expression
let result1=function subtract(){
console.log("result is ", 5-2);
}
result1();

//anonymous function
let myResult=function (){
    console.log("anonymous");
}
myResult();

//IIFE (Immediately Invoked Function Expression)
(function (){
    console.log("IIFE");
})();

//Callback
function twice(a, fun){
    let result=fun(a);
    console.log(result *2);
}
twice(5,function(x){
return x++;
});//10
twice(5,function(x){
    return x**2;
})//50

//arrow function
myResult= () => console.log("arrow");
let twiceResult = (a,fun) => fun(a)*2

//function variable
function hello(){
    console.log(`Result: ${result}`);
}

//Array
let names = new Array("Bob","Anna","James");
let items = ["apple",3.14,true];
items[0]=2;
items[4]="mtk";
console.log(items.length +","+ items[4] +","+ items[3]);

let mix=[ [12,34,34],['mtk','akn','syn']];
console.log(mix[0][1]);//34
names.push("Trena");
names.shift();
names.unshift("Bella");
names.pop();
for (let i=0;i<names.length ; i++)
{
    console.log(names[i]+"\n");
}
console.log(names.indexOf("Anna"));
console.log(names.splice(2,1));
console.log(names.join("/"));

