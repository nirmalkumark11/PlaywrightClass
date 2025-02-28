
let str2 = ``;
let str3 = ``;
function isPalindrome(str) {
    let str2 = ``;
    let str3 = ``;
    for (i = str.length - 1; i >= 0; i--) {

        str2 = str.split("");
        str3 += str2[i];
    }

    if (str === str3) {
        console.log(`The Given word ${str} is Palidrome`);
    }
    else {
        console.log(`The Given word ${str} is not Palindrome`);

    }
}

isPalindrome(`madam`);
isPalindrome(`Welcome`);
