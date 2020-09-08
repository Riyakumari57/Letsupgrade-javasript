let info=[
    {
        name:"Riya Kumari",
        age:18,
        country:"INDIA",
        hobbies:["Eating","Watching TV","Dancing","Singing"],
        
    },

    {
        name:"David Malan",
        age:20,
        country:"AMERICA",
        hobbies:["Coding","Watching Series","learning","playing"],
        
    },

    {
        name:"Rohan Kumar",
        age:78,
        country:"New York",
        hobbies:["jumping","Watching Movies","jogging","Riding"],
        
    },

    {
        name:"Jack",
        age:10,
        country:"PAKISTAN",
        hobbies:["Acting","Watching Albums","Hacking","working out"],
        
    },

    {
        name:"Mr Sharma",
        age:40,
        country:"INDIA",
        hobbies:["Acting","Creating Drama","writing","driving"],
    },
];

console.log("All the objects having age less than 30 are");


for(let i=0;i<5;i++)
{
    if(info[i].age<30)
    {
        console.log(info[i]);
    }
}

console.log("All the objects having country India");
for(let i=0;i<5;i++)
{
    if(info[i].country=="INDIA")
    {
        console.log(info[i]);
    }
}
