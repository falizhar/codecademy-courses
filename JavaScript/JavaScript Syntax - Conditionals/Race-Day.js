// to generate Race Number.
let raceNumber = Math.floor(Math.random() * 999 + 1 ); // Math random can return 0, so instead of using * 1000, better to use * 999 + 1 to avid number #0. 

// information about participants or registrants
const registrantsAge = 21
const registeredEarly = false 

// to print participants' timeline based on the rules
switch (true) {
    case registrantsAge > 18 && registeredEarly:
        console.log(`You will race at 9.30am and your race number is #${raceNumber+1000}. Good luck!`);
        break;
    case registrantsAge > 18 && !registeredEarly:
        console.log(`You will race at 11.00am and your race number is #${raceNumber}. Good luck!`);
        break;
    case registrantsAge < 18:
        console.log(`You will race at 12.30pm and your race number is #${raceNumber}. Good luck!`);
        break;
    default:
        console.log(`You should see the registration desk.`);
        break;
}

/*  Footnote: 
The fundamental principle of the switch true pattern is that the switch statement will match against expressions as well as values. 
An expression in a case will be evaluated before matching. If the expression in your case evaluates to true - it will be matched. 
*/
