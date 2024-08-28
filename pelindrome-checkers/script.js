let inputs = document.getElementById("add-str");
let result = document.getElementById("result");
let check = document.getElementById("check");

function isPalindrome(str) {
   let splitStr = str.split("");
   let reverse = splitStr.reverse();
   let join = reverse.join("");
   return str === join;
}

check.addEventListener("click", () => {
    let string1 = inputs.value;
    string1 = string1.toLowerCase();
    if (isPalindrome(string1)) {
        result.innerHTML = `${string1} is a palindrome`;
        result.style.color = "green";
    } else {
        result.innerHTML = `${string1} is not a palindrome`;
        result.style.color = "red";
    }
});
