// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
//
//
// 	countAndSay(1) = "1"
// 	countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
//
//
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
//
// For example, the saying and conversion for digit string "3322251":
//
// Given a positive integer n, return the nth term of the count-and-say sequence.
//
//  
// Example 1:
//
//
// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
//
//
// Example 2:
//
//
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
//
//
//  
// Constraints:
//
//
// 	1 <= n <= 30
//
//


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return "1";

    let numBase = getCount("1")

    for (let i=0;i<n-2;i++){
        numBase=getCount(numBase)
        console.log(numBase)
    }

    return numBase


};

function getCount(a) {
    let arr = a.toString().split("");

    let nowNums = arr[0];
    let nowCount = 0;
    let newArr = '';
    while (arr.length > 0) {
        if (arr[0] === nowNums) {
            nowCount++;
        } else {
            newArr += nowCount.toString() + nowNums
            nowNums = arr[0];
            nowCount = 1;
        }
        arr.shift();
        if (arr.length === 0) {
            newArr += nowCount.toString() + nowNums
        }
    }
    return newArr
}
