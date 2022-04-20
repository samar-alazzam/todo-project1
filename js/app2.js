'use strict';
var user = prompt ("are your name is ahmad?");
   function userName(){
   if (user == null)
   {
       return "inavalid";
   }else
   {
       return user;
   }

}
var Name = userName();

var Age = prompt ("are your age > 25?");
   function userAge(){
   if (user == null)
   {
       return "inavalid";
   }else
   {
       return Age;
   }

}
var age = userAge();

var exc = prompt ("are you excited for java script?");
   function userExc(){
   if (exc == null)
   {
       return "inavalid";
   }else
   {
       return exc;
   }

}
var Exc = userExc();

var arr = [Name , age , Exc];
console.log(arr);