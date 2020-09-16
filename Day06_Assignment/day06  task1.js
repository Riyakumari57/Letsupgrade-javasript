let employee=[
    {
        // array containing objects having name ,age , city , Salary
        name:"Riya",
        age:18,
        city:"mumbai",
        Salary:"50 Lakh",

    },

    {
        name:"Mohit",
        age:18,
        city:"mumbai",
        Salary:"50 Lakh",

    },

    {
        name:"Meoko",
        age:30,
        city:"Kolkata",
        Salary:"50,000",
    },

    {
        name:"Arth",
        age:20,
        city:"chennai",
        Salary:"30 Lakh",

    },
    

    {
        name:"Radha",
        age:44,
        city:"Jaipur",
        Salary:"10 Lakh",

    },

    

];

function display(a) //defining a function (creating a dummy html)
{
let tabledata=""; //avoiding replacement of table data by one after another(new) row

    a.forEach(function(person,index)
    {
        let newtable=`<tr>
        <td>${index+1}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.Salary}</td>
        <td><button onclick="deleteperson(${index})">Delete</button></td>
        </tr>`;

        tabledata +=newtable; //new row will be added to existing data(row)
    });
    document.getElementById("tdata").innerHTML = tabledata; 
    // innerHTML gives us the content(inside) of the element (tag)
}
display(employee);

function searchByname()
{
     let searchValue =document.getElementById("searchName").value;
     let newdata= employee.filter(function(person)
    //  filter will go and check the name in the array whatever you searched for
    {
         return person.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });

     display(newdata); //displaying only filtered elements of the array
}

function searchBycity()
{
    let searchValue =document.getElementById("searchCity").value;
     let newdata= employee.filter(function(person)
    //  filter will go and check the name in the array whatever you searched for
    {
         return person.city.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });

     display(newdata); //displaying only filtered elements of the array
}

function deleteperson(index)
{
   employee.splice(index,1);
   display(employee);
}