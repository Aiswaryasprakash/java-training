var a=20;
if(a>20){
document.write("value of a is greater than 10");
}
else{
document.write("value of a is lesser than 10");
}
if(a%2==0){
document.write("<br> even");
}
else{
document.write("<br> odd");
}
if(a==10){
document.write("a is equal to 10");
}
else if(a==15){
document.write("<br>a is equal to 15");
}
else if(a==20){
document.write("<br>a is equal to 20");
}
else{
document.write("<br>a is not equal to 10,15, or 20");
}
var grade='B';
var result;
switch(grade){
case 'A':
result="A Grade";
break;
case 'B':
result="<br>B Grade";
break;
case 'C':
result="C Grade";
break;
default:
result="No Grade";
}
document.write(result);
for(i=1;i<=5;i++)
{
document.write(i+"<br/>")
}
var i=11;
while(i<=15)
{
document.write(i+"<br/>");
i++;
}
function getcube(number){
alert(number*number*number);
}
function getInfo(){
return "happy day!";
}
document.write(getInfo());
