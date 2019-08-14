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
        name:"meera", //data1
        age:25        //data2
    }
];
  
var search = data.filter((data1) =>  data1.name.startsWith("j")); //startsWith => print  string 1st char starts with "j" , includes => print the string that has "j" in any position
console.log(search);

var dob = data.filter((data2) => data2.age > 18); // print data( age > 18 )
console.log(dob);
