// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on
// according to the weather.

let tempInterpretor = (temp: number) => {

    if (temp < 23) {
        return console.log(`It's cold outside (${temp} C). Wear warm clothes`);
    }
    return console.log(`It's warm outside (${temp} C). Wear light clothes`);

}

tempInterpretor(23)