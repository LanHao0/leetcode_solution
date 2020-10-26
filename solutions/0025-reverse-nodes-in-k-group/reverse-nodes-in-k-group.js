// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
//
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
//
// Follow up:
//
//
// 	Could you solve the problem in O(1) extra memory space?
// 	You may not alter the values in the list's nodes, only nodes itself may be changed.
//
//
//  
// Example 1:
//
//
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
//
//
// Example 2:
//
//
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
//
//
// Example 3:
//
//
// Input: head = [1,2,3,4,5], k = 1
// Output: [1,2,3,4,5]
//
//
// Example 4:
//
//
// Input: head = [1], k = 1
// Output: [1]
//
//
//  
// Constraints:
//
//
// 	The number of nodes in the list is in the range sz.
// 	1 <= sz <= 5000
// 	0 <= Node.val <= 1000
// 	1 <= k <= sz
//
//


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    //important !! this answer is from  My solution for problem 23 !!
    if(head == null)return null;    
    arr.length=0;
    
    let lists=[head];

    
    
//     console.log(lists[0].val);
    
    let count=0;
    for (let list of lists){
        if(list ==undefined || list==null ||list.val==null) continue;
        // console.log(list);
        
        arr.push(list.val);
        if(list.next!=null){
            detect(list.next);
        }
    }
    // arr.sort((a,b)=>a-b);
    
    let output=arrToList(arr,k);
    


    return output;    
}



var arr=[];

    
    
function detect(list){
    arr.push(list.val);
    if(list.next!=null){
        detect(list.next);
    }
}


function arrToList(aar,k){
    aar=reverseByK(aar,k);
    
    if(aar[0]!==null&&aar[1]!==null){
        var res=new ListNode(aar[0],null);
        for(let i=1;i<aar.length;i++){
            insert(res,aar[i]);
        }
    }
    
    // console.log(aar.length);
    
    // console.log(res);
    return res;
}



function insert(list,val){
    // console.log(list);
    
    if(list.next!=null){
        insert(list.next,val);
    }else{
        list.next=new ListNode(val,null);
        return list;
    }
    
}




function reverseByK(inputARR,k) {
    let tmparr = [];
    let count = 0;
    let reversedArr = [];
    
    let allcount=Math.floor(inputARR.length/k);
	let nowAll=0;

    for (let i = 0; i < inputARR.length; i++) {
        tmparr.push(inputARR[i]);
        count += 1;

        if (count < k) {
			if(nowAll==allcount){
				let newarr=inputARR;
				newarr.splice(0,k*allcount);
				console.log("new"+newarr);
				reversedArr+=","+newarr.join();
			}
            
        } else {
            tmparr = tmparr.reverse();
            // console.log(tmparr);

            reversedArr = reversedArr + "," + tmparr.join();
            count = 0;
            tmparr = [];
            nowAll++;
        }
    }
    reversedArr = reversedArr.split(",");
    let back = [];
    for (let i = 1; i < reversedArr.length; i++) {
        back.push(parseInt(reversedArr[i]))
    }

    return back;
}

