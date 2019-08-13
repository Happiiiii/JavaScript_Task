var data = [
    {
        name:"jos",
        age:21
    },
    {
        name:"lusy",
        age:16
    },
    {
        name:"Happi",
        age:22
    },
    {
        name:"veronica",
        age:17
    },
    {
        name:"athena",
        age:23
    },
    {
        name:"xander",
        age:24
    },
    {
        name:"jellal",
        age:21
    },
    {
        name:"mickey",
        age:18
    },
    {
        name:"jill",
        age:17
    },
    {
        name:"meera",
        age:25
    }
];
  
var search = data.filter((names) =>  names.name.startsWith("j")); //startsWith => print 1st char starts with "j" , includes => print the string that has "j" in any position
console.log(search);

var dob = data.filter((year) => year.age > 18); // print data( age > 18 )
console.log(dob);
