function reverseString() {
    //get the user's word

    let userWord = document.getElementById("tacoCat").value;
    let regexWord = userWord.replace(/[\W_]/g).toLowerCase();
    let start = regexWord.length - 1;
    let reverseWord = "";

    //alternate solution using array functions
    //This is used instead of the for loop
    //let reversedWord = regexWord.split("").reverse().join("");

    //for loop
    for (let i = start; i >= 0; i--) {
        reverseWord += regexWord[i];
    }
    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord;

    //pallindrome
    let trueFalsePalindrome = document.getElementById("palindrome");
    if (regexWord === reverseWord) {
        trueFalsePalindrome.innerText = "It's a palindrome";
    } else {
        trueFalsePalindrome.innerText = "It's not a palindrome";
    }

}