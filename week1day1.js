function whoAmI(name, age){
// var name = 'Schwartznegger';
// var age = 'unknown';

var yearOfBirth = 2016 - age;

if (yearOfBirth < 0) {
	return yearOfBirth * (-1) + "B.C."; 
}

console.log("You can use " + name + "'s bike, and " + name + " is " +
 age + " years old. " + name + " was born in " + yearOfBirth + ".");

}

whoAmI("Zeus", 2016);

// funct..........(name, age){ 
//   var yearOf..........16 - age;
//   console.l..........my name is Chris and I'm 29 ye..........
//   console.log("I was born in " + yearOf.......
// }
// whoAmI(..........);