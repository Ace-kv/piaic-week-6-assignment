// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to
// print the corresponding day's name.

const determineDayOfWeek = (dayNum: number): string => {
    
    if (dayNum >= 1 && dayNum <= 7) {
        if (dayNum === 1) {
            return 'Monday';
        } else if (dayNum === 2) {
            return 'Tuesday';
        } else if (dayNum === 3) {
            return 'Wednesday';
        } else if (dayNum === 4) {
            return 'Thursday';
        } else if (dayNum === 5) {
            return 'Friday';
        } else if (dayNum === 6) {
            return 'Saturday';
        }
        return 'Sunday';
        
    }
    return 'Invalid day number. Please enter a number between 1 and 7.';

};

const dayOfWeek = determineDayOfWeek(8);
console.log(`The day of the week is: ${dayOfWeek}`);
