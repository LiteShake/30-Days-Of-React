// QUESTION
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

// 1
empty = Array() ;

// 2
more5 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0
] ;

// 3
console.log( more5.length )

// 4
console.log( [
    more5[0],
    more5[more5.length / 2],
    more5[more5.length - 1]
] )

// 5

mixedDataTypes = [
  1,
  "hello",
  [1,2,3],
  {
    "name" : "hello" ,
    "age" : 19 ,
    "skills" : [
      "Coding" , "Eating" , "being annoying"
    ]
  },
  "out of ideas",
  3.14,
  "never gonna give you up !"
]
console.log( mixedDataTypes )
console.log( mixedDataTypes.length )

// 6

itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
]


// 7

console.log( itCompanies )

// 8

console.log(itCompanies.length)

// 9

console.log( [
  itCompanies[0],
  itCompanies[Math.floor( itCompanies.length / 2 )],
  itCompanies[itCompanies.length - 1]
] )

// 10

for( i = 0; i < itCompanies.length ; i++ ) { console.log( itCompanies[i] ) }

// 11

for( i = 0; i < itCompanies.length ; i++ ) { console.log( itCompanies[i].toUpperCase() ) }

// 12

console.log( itCompanies.join(", ") )

// 13

index = itCompanies.indexOf( "Googl" )

index != -1 
  ? console.log( "Company exists in array" )
  : console.log( "Company does not exist in array" )

// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
