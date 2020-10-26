// Given a linked list, swap every two adjacent nodes and return its head.
//
// You may not modify the values in the list's nodes. Only nodes itself may be changed.
//
//  
// Example 1:
//
//
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
//
//
// Example 2:
//
//
// Input: head = []
// Output: []
//
//
// Example 3:
//
//
// Input: head = [1]
// Output: [1]
//
//
//  
// Constraints:
//
//
// 	The number of nodes in the list is in the range [0, 100].
// 	0 <= Node.val <= 100
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
        //important !! this answer is from  My solution for problem 23 and 25 !!
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
    
    let output=arrToList(arr,2);
    


    return output;   
};





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

