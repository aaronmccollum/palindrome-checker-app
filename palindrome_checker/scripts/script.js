// Declaring global variables
const submitButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

// Function to reverse word - WORKS
const reverseString = (str) => {
    let reverseArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reverseArr.push(str[i]);
    }
    const reversedStr = reverseArr.join("");
    return reversedStr;
};

// Function to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
const removeNonAlphanumericSymbols = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

// Function to run on submit
submitButton.onclick = function() {
    const userValue = document.querySelector('input').value;

    // Function to check palindrome
    const isPalindrome = (str) => {
        const reversedString = reverseString(userValue);
        const result = (removeNonAlphanumericSymbols(str.toLowerCase()) === removeNonAlphanumericSymbols(reversedString.toLowerCase())) ? str + " is a palindrome" : str + " is not a palindrome";
        return result;
    };

    // Print result to console
    console.log(isPalindrome(userValue));

    // Print result to screen
    if (userValue === "") {
        alert("Please input a value");
    } else {
        resultDiv.innerText = isPalindrome(userValue);
    }
};