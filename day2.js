//  (1).Program to search for a particular character in a string
// for this purpose we generally use indexof() function
console.log("Question-1 Program to search for a particular character in a string");
let name="Riya Kumari";
console.log(name);
let index=name.indexOf("K")
let data=`In the name ${name} y is at ${index} index no.`;
console.log(data);

//  (2).Program to convert minutes to seconds
//in this we will use arithmetic operators
console.log("Question-2 Program to convert minutes to seconds");
let min= 30;
let data1=`Minutes = ${min}`;
console.log(data1);
let sec=`seconds will be ${min*60}`;
// or we can do in this way
//let sec="Seconds will be (mins*60) ="+min*60;
console.log(sec);


//  (3). Program to search for a element in a array of strings
//Array is the collection of all elements of simmilar type.
console.log("Question-3 Program to search for a element in a array of strings");
let info=["Html","css","Javascript","C","C++","Java","Python","dart"];
console.log(info);
let len=info.length;
console.log("Length of the string is"+len);
let find=`Element at the 2th index is ${info[2]}`;
console.log(find);


// (4). Program to display only elements containing 'a' in them from a array
console.log("Question-4  Program to display only elements containing 'a' in them from a array");
   for(let i=0;i<info.length;i++)
   {
       if(info[i].indexOf("a")>=0)
       {
           console.log(info[i])
       }
   }
 // (5). Print an array in reverse order
  //we will use loop
  console.log("Question-5  Print an array in reverse order");
  console.log("Reverse of this array is :");
  for(let i=len-1;i>=0;i--)
  {
      console.log(info[i]);
  } 