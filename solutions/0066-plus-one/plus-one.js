// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
//
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
//
// You may assume the integer does not contain any leading zero, except the number 0 itself.
//
//  
// Example 1:
//
//
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
//
//
// Example 2:
//
//
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
//
//
// Example 3:
//
//
// Input: digits = [0]
// Output: [1]
//
//
//  
// Constraints:
//
//
// 	1 <= digits.length <= 100
// 	0 <= digits[i] <= 9
//
//


var plusOne = function (digits) {
	console.log(digits.length);
    if (digits.length > Number.MAX_SAFE_INTEGER.toString().length) {
        let edit=0;
        for(let i=digits.length-1;i>0;i--){
            if(digits[i]<=9&&edit>0){
                return digits;
            }else if(digits[i]<9&&edit==0){
                let left=digits.join('').substr(0,digits.length-1);
                let right=digits[digits.length-1]+1 +'';
                return (left+right).split('');
            }else if(digits[i]==9){
                digits[i]=0;
                digits[i-1]+=1;
                edit=1;
            }else if(digits[i]==10){
				
				if(i!=1){
					digits[i]=0;
					digits[i-1]+=1;
					edit=1;
				}else{
					let arr=new Array();
					arr.push(1);
					arr.push(0);
                    arr.push(0);
					for(let j=2;j<digits.length;j++){
						arr.push(digits[j]);
					}
					console.log(arr.length)
					return arr;
				}
                
            }

            
        }

    } else {
        let raw = digits.join('');
        let res = ((parseInt(raw) + 1) + '').split('')
        return res;
    }
};
