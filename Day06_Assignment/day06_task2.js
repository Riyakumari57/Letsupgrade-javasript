window.onload=function()
{
let businfo=
[
    // array containing objects having name ,source, destination , numbers , Passanger Capacity
    {
      name:"volo",
      source:"Delhi",
      destination:"Jaipur",
      number:"hb06t7",
      passenger_capacity:"100",
    },

    {
        name:"zozo",
        source:"Delhi",
        destination:"Jammu",
        number:"utb089",
        passenger_capacity:"120",
    },

      {
        name:"kiki",
        source:"Delhi",
        destination:"Banglore",
        number:"vyh89r",
        passenger_capacity:"150",
      },

      {
        name:"hoda",
        source:"gujarat",
        destination:"pune",
        number:"gjt04w",
        passenger_capacity:"90",
      },

      {
        name:"yoyo",
        source:"punjab",
        destination:"Delhi",
        number:"oin789",
        passenger_capacity:"200",
      },
];
if(localStorage.getItem("bus")==null)
    {

      localStorage.setItem("bus",JSON.stringify(businfo));
    }
}


function display(supperarray = undefined) //defining a function (creating a dummy html)
{

let tabledata=""; //avoiding replacement of table data by one after another(new) row
let buss;
if (supperarray==undefined)
  {
    buss=JSON.parse(localStorage.getItem("bus"));
  }
else
  {
    buss = supperarray;
  }
    buss.forEach(function(buss,index)
    {
        let newtable=`<tr>
        <td>${index+1}</td>
        <td>${buss.name}</td>
        <td>${buss.source}</td>
        <td>${buss.destination}</td>
        <td>${buss.number}</td>
        <td>${buss.passenger_capacity}</td>
        </tr>`;

        tabledata +=newtable; //new row will be added to existing data(row)
    });
      document.getElementById("tdata").innerHTML = tabledata; 
      // innerHTML gives us the content(inside) of the element (tag)
}

display();

function addbus(event) //here we can name our parathesis(event) anyhting

{
    event.preventDefault(); //prevent submit button from refreshing the page on click
    let buss={};
    let name=document.getElementById('name').value;
    let source=document.getElementById('source').value;
    let destination=document.getElementById('destination').value;
    let number=document.getElementById('number').value;
    let passenger_capacity=document.getElementById('passenger_capacity').value;
    buss.name = name;
    buss.source = source;
    buss.destination= destination;
    buss.number = Number(number);
    buss.passenger_capacity=Number(passenger_capacity);

    let bus=JSON.parse(localStorage.getItem("bus"));
    bus.push(buss);
    localStorage.setItem("bus",JSON.stringify(bus));
    
    display();
    document.getElementById('name').value="";
    document.getElementById('source').value="";
    document.getElementById('destination').value="";
    document.getElementById('number').value="";
    document.getElementById('passenger_capacity').value="";
}

function searchSource()
{
     let searchValue =document.getElementById("searchsource").value;
     let bus=JSON.parse(localStorage.getItem("bus"));
     let newdata= bus.filter(function(buss)
    //  filter will go and check the name in the array whatever you searched for
     {
         return buss.source.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });

     display(newdata); //displaying only filtered elements of the array
}

function searchDestination()
{
     let searchValue =document.getElementById("searchdestination").value;
     let bus=JSON.parse(localStorage.getItem("bus"));
     let newdata= bus.filter(function(buss)
    //  filter will go and check the name in the array whatever you searched for
     {
         return buss.destination.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });

     display(newdata); //displaying only filtered elements of the array
}


