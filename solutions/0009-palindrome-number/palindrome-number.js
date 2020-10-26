// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
// Follow up: Could you solve it without converting the integer to a string?
//
//  
// Example 1:
//
//
// Input: x = 121
// Output: true
//
//
// Example 2:
//
//
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//
//
// Example 3:
//
//
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//
//
// Example 4:
//
//
// Input: x = -101
// Output: false
//
//
//  
// Constraints:
//
//
// 	-231 <= x <= 231 - 1
//
//


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s=x+'';
    if(x<0){
        return false;
    }
    
    let index=0;
    let left='';
    let right='';
    if(s.length%2==0){
        index=s.length/2;
        left=s.substr(0,index);
        right=s.substr(index,s.length).split('').reverse().join('');

    }else{
        index=Math.floor(s.length/2);
        left=s.split(s[index])[0];
        right=s.split(s[index])[1].split('').reverse().join('');
    }
    

    if(left==right){
        return true;
    }else{
        return false;
    }
};
