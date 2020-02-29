// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// Example 1:
//
//
// Input: [2,2,1]
// Output: 1
//
//
// Example 2:
//
//
// Input: [4,1,2,1,2]
// Output: 4
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

