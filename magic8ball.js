// consist of user Name, print the user name (if user give their name) 
const userName = 'Dea';
userName ?
    console.log(`Hello, ${userName}!`) :
    console.log('Hello!');

// consist of user question, and print the question
let userQuestion = `"Should I take Master's Degree?"`
console.log(`Your question is: ${userQuestion}`);


// to generate a random number between 1 and 20. +1 is used because Math.random() start from 0.
let eightBall = Math.floor(Math.random() * 20 + 1);

/*A standard Magic 8 Ball has 20 possible answers:
- 10 affirmative answers
- 5 non-committal answers
- 5 negative answers
*/

switch (eightBall) {
    //consist of 10 affirmative answers
    case 1:
        eightBall = "It is Certain.";
        break;
    case 2:
        eightBall = "It is decidedly so.";
        break;
    case 3:
        eightBall = "Without a doubt.";
        break;
    case 4:
        eightBall = "Yes definitely.";
        break;
    case 5:
        eightBall = "You may rely on it.";
        break;
    case 6:
        eightBall = "As I see it, yes.";
        break;
    case 7:
        eightBall = "Most likely.";
        break;
    case 8:
        eightBall = "Outlook good.";
        break;
    case 9:
        eightBall = "Yes.";
        break;
    case 10:
        eightBall = "Signs point to yes.";
        break;

        //consist of 5 non-committal answers
    case 11:
        eightBall = "Reply hazy, try again.";
        break;
    case 12:
        eightBall = "Ask again later.";
        break;
    case 13:
        eightBall = "Better not tell you now.";
        break;
    case 14:
        eightBall = "Cannot predict now.";
        break;
    case 15:
        eightBall = "Concentrate and ask again.";
        break;

        //consist of 5 negative answers 
    case 16:
        eightBall = "Don't count on it.";
        break;
    case 17:
        eightBall = "My reply is no.";
        break;
    case 18:
        eightBall = "My sources say no.";
        break;
    case 19:
        eightBall = "Outlook not so good.";
        break;
    case 20:
        eightBall = "Very doubtful.";
        break;
}

// Print the answer
console.log(`The Magic Ball said: "${eightBall}"`)
