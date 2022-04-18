var name = prompt ("Enter his/her name");
console.log(name);
var gender = prompt ("Enter your gendr ");
console.log(gender);
var age = prompt("Enter you Age");
var Age=Number(age);
console.log(typeof Age);
if (Age <=0)
{
    alert("your age is less than 0 !")
}
else
{
    console.log(Age);
}
 var skip = confirm("are you want to skip the incoming message");
 console.log(skip);

 var Gender = confirm("are you female ?")
 if (Gender == true)
 {
     alert("Hello Ms " + name);
 }else if (Gender == false)
 {
     alert("Hello Mr" + name);
 }
 else {"Hello"}