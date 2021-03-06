// Write a program to check whether a given number is an ugly number.
//
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
//
// Example 1:
//
//
// Input: 6
// Output: true
// Explanation: 6 = 2 × 3
//
// Example 2:
//
//
// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
//
//
// Example 3:
//
//
// Input: 14
// Output: false 
// Explanation: 14 is not ugly since it includes another prime factor 7.
//
//
// Note:
//
//
// 	1 is typically treated as an ugly number.
// 	Input is within the 32-bit signed integer range: [−231,  231 − 1].
//


/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num==1)return true;
    if(num==0)return false;
    let n=num;
     if(n!=0) {
            //n 不为0，不然执行第一个会陷入死循环
            while (n % 2 == 0) {
                n /= 2;
            }
            while (n % 5 == 0) {
                n /= 5;
            }
            while (n % 3 == 0) {
                n /= 3;
            }
            if (n == 1) {
                return true;
            } else {
                return false;
            }
        }
};
