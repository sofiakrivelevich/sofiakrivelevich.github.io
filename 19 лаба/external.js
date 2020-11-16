let string="Every man in the world! Every woman on earth!";
document.write(string+"<br/>");
let change="man";
var new_string=string.replace(change, "person");
change="woman";
new_string=new_string.replace(change, "person");
document.write(new_string+"<br/>");