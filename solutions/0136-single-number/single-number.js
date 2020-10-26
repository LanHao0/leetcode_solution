// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
//
//  
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1
//
//  
// Constraints:
//
//
// 	1 <= nums.length <= 3 * 104
// 	-3 * 104 <= nums[i] <= 3 * 104
// 	Each element in the array appears twice except for one element which appears only once.
//
//


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr=getTimesArray(nums);
    for(let i=0;i<arr.length;i++){
        if(arr[i].times==1){
        
            return arr[i].c;
        }
    }
};

var getTimesArray = function (arr) {

    let res=new Array();

    let count=1;
    let A=arr.sort();

    let now_c=A[0];
    for (let i = 1; i <= A.length; i++) {
        if (i==A.length){
            res.push({
                c:now_c,
                times:count
            })
            break;
        }
        if (A[i]==now_c){
            count++;

        }else{
            res.push({
                c:now_c,
                times:count
            })
            now_c=A[i];
            count=1;
        }
    }
    return res;

}

