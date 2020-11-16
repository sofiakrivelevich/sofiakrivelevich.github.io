let name="Sofiya"; //string
let age=18; //number
let isStudent=true; //boolean
let arr=[name, age, isStudent];
alert("first and second elements: "+arr[0]+", "+arr[1]);
arr[2]=false;
alert("the third element after change: "+arr[2]);
let animal="dog";
arr.push(animal);
let color="olive";
arr.unshift(color);
alert("array after change: "+arr);
alert("array length: "+arr.length);


let string="Every man in the world! Every woman on earth!";
alert("string: "+string);
let change="man";
var new_string=string.replace(change, "person");
change="woman";
new_string=new_string.replace(change, "person");
alert("new string: "+new_string);