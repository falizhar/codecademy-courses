// Monday to Sunday, number calculated in hours 
const getActualSleepHours = () => 6  + 7 + 9 + 8 + 5 + 10 + 11; //to input your actual sleep hours in a week

const getIdealSleepHours = idealHours  => idealHours  /*hours*/ * 7 /*days*/ ; //to input your ideal sleep hours in a week

// to calculate or evaluate the sleep debt that we have within a week
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7.1);
    if (actualSleepHours === idealSleepHours) {
        console.log('You have mastered the art of sleeptime.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${(actualSleepHours - idealSleepHours).toFixed(1)} hour(s) more sleep than you needed this week. Be more productive.`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You got ${(idealSleepHours - actualSleepHours).toFixed(1)} hour(s) less sleep than you needed this week. Get some rest.`);
    }
};

calculateSleepDebt();
