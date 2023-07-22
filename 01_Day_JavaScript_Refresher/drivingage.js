
var age = require("prompt-sync")({ sigint: true });

while( true ) {

    if( age < 0 ) { break ; }

    age < 18
        ? console.log(`You are left with ${18 - age} years to drive`)
        : console.log("You are old enough to drive")

}
// ###############################################################


