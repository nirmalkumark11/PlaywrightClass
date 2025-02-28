function stringLength(words) {
    let str = words.trim().split(" ").pop();
    let i = str.length
    console.log(i);
}
stringLength(`Hello World`);
stringLength(`fly me to the moon `)

function isAnagram(Word1, Word2) {

    let str1 = Word1.trim().toLowerCase();
    let str2 = Word2.trim().toLowerCase();
    let strSortword1=str1.split("").sort().join('');
    let str2Sortword2= str2.split("").sort().join('');


    if (strSortword1.length != str2Sortword2.length) {
        return false
        console.log(` Not a Anagram`);
    }
        if (strSortword1 == str2Sortword2){
            console.log("The give word is Anagram");
            return true

        }
        else{
            console.log("The given word is not Anagram");
            return false
            
        }

    }

let a = isAnagram(`Listen`, `Silent`)
console.log(a);
a = isAnagram(`hello`, `World`)
console.log(a);
