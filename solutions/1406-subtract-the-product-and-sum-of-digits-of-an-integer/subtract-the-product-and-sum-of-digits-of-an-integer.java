// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
//  
// Example 1:
//
//
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
//
//
// Example 2:
//
//
// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
//
//
//  
// Constraints:
//
//
// 	1 <= n <= 10^5
//
//


class Solution {
    public int subtractProductAndSum(int n) {
                //1281 it's too simple!
        String[] array=String.valueOf(n).split("");
        int[] pre_arr=new int[array.length];
        for (int i=0;i<array.length;i++){
            pre_arr[i]=Integer.parseInt(array[i]);
        }
        //Product of digits
        int pd=1;
        //Sum of digits
        int sd=0;
        for (int a=0;a<pre_arr.length;a++){
            pd*=pre_arr[a];
            sd+=pre_arr[a];
        }
        return pd-sd;
    }
}
