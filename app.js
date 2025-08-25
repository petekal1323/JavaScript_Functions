console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOdds(50);
printOdds(100);






// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
    let oldEnough = `Congrats ${name}, you are old enough!`;
    let notOldEnough = `Sorry ${name}, you are not old enough.`;

    if (age < 16) {
        console.log(notOldEnough);
    } else {
        console.log(oldEnough);
    }
}

checkAge("Jack", 17);
checkAge("Nora", 4);



//exercise 3
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x === 0 && y === 0) {
        return "Origin";
    } else if (x === 0 && y !== 0) {
        return "Y-axis";
    } else if (x !== 0 && y === 0) {
        return "X-axis";
    }
}

console.log(checkQuadrant(0, 2));
console.log(checkQuadrant(-6, 18));
console.log(checkQuadrant(1, 2));
console.log(checkQuadrant(5, -10));
console.log(checkQuadrant(4, 0));
console.log(checkQuadrant(0, 0));
console.log(checkQuadrant(-9, -5));




//Exercise 4: triangle
function isValidTriangle(a, b, c) {
    return a + b > c || a + c > b || b + c > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a === b && b === c) {
            return `Equilateral`;
        } else if (a === b || a === c || b === c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Invalid`;
    }
}
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(3, 4, 5));
console.log(checkTriangle(1, 1, 2));



//Exercise 5: data
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "Exceeding";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "Under";
    } else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your avg daily use (${currentAvg} GB/day),
        continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.`);
}

dataUsageFeedback(50, 15, 25);