// 1. Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// 2. Function to subtract two numbers
function subtractNumbers(a, b) {
    return a - b;
}

// 3. Function to multiply two numbers
function multiplyNumbers(a, b) {
    return a * b;
}

// 4. Function to divide two numbers
function divideNumbers(a, b) {
    return a / b;
}

// 5. Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// 6. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 7. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 8. Function to find the maximum of two numbers
function findMax(a, b) {
    return Math.max(a, b);
}

// 9. Function to find the minimum of two numbers
function findMin(a, b) {
    return Math.min(a, b);
}

// 10. Function to find the sum of an array of numbers
function findSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// 11. Function to find the average of an array of numbers
function findAverage(arr) {
    return findSum(arr) / arr.length;
}

// 12. Function to find the median of an array of numbers


// 13. Function to find the mode of an array of numbers

// 14. Function to reverse a string
// 15. Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
}

// 16. Function to convert a string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// 17. Function to convert a string to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}

// 18. Function to capitalize the first letter of each word in a string
// 19. Function to count the number of vowels in a string
// 20. Function to count the number of consonants in a string
// 21. Function to remove all vowels from a string

// 22. Function to remove all consonants from a string

// 24. Function to check if a string contains
// 25. Function to generate a random integer between two given numbers
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 26. Function to generate a random string of a given length
function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomString += chars[randomIndex];
    }
    return randomString;
}

// 27. Function to find the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// 28. Function to check if a number is a power of 2
function isPowerOfTwo(num) {
    return num !== 0 && (num & (num - 1)) === 0;
}

// 29. Function to check if a number is a perfect square
function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}


// 31. Function to find the Greatest Common Divisor (GCD) of two numbers
function findGCD(a, b) {
    if (!b) return a;
    return findGCD(b, a % b);
}


// 33. Function to convert a binary number to decimal
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}



// 39. Function to rotate elements of an array to the right by a given number of positions
function rotateRight(arr, positions) {
    return rotateLeft(arr, arr.length - positions);
}

// 45. Function to check if an array contains a specific value
function containsValue(arr, value) {
    return arr.includes(value);
}


// 49. Function to check if a point lies inside a circle
function isPointInsideCircle(x, y, centerX, centerY, radius) {
    const distance = computeDistance(x, y, centerX, centerY);
    return distance < radius;
}

// 50. Function to check if a point lies inside a rectangle
function isPointInsideRectangle(x, y, rectX, rectY, width, height) {
    return x >= rectX && x <= rectX + width && y >= rectY && y <= rectY + height;
}