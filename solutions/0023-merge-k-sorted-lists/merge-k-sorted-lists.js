// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
//
// Merge all the linked-lists into one sorted linked-list and return it.
//
//  
// Example 1:
//
//
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
//
//
// Example 2:
//
//
// Input: lists = []
// Output: []
//
//
// Example 3:
//
//
// Input: lists = [[]]
// Output: []
//
//
//  
// Constraints:
//
//
// 	k == lists.length
// 	0 <= k <= 10^4
// 	0 <= lists[i].length <= 500
// 	-10^4 <= lists[i][j] <= 10^4
// 	lists[i] is sorted in ascending order.
// 	The sum of lists[i].length won't exceed 10^4.
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var arr=[];
var mergeKLists = function(lists) {
    
    // console.log(lists.length);
    arr.length=0;
    if(lists.length<1) return null;
    if(lists[0]==undefined && lists.length<2) return null;
    if(lists[0]==null && lists.length<2) return null;

    
//     console.log(lists[0].val);
    
    for (let list of lists){
        if(list ==undefined || list==null ||list.val==null) continue;
        // console.log(list);
        arr.push(list.val);
        if(list.next!=null){
            detect(list.next);
        }
    }
    arr.sort((a,b)=>a-b);
    
    
    let output=arrToList(arr);
    
    console.log(output.length);
    
    console.log(output.val);

    console.log(output.next);
    
    if(output.val==0&&output.next==null){
        
        return null;
    }

    return output;
}
    
    
function detect(list){
    arr.push(list.val);
    if(list.next!=null){
        detect(list.next);
    }
}


function arrToList(aar){
    if(aar[0]!==null&&aar[1]!==null){
        var res=new ListNode(aar[0],null);
        // console.log(res.next);
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
