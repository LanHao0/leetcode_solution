// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
//
//  
// Example 1:
//
//
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
//
//
// Example 2:
//
//
// Input: l1 = [], l2 = []
// Output: []
//
//
// Example 3:
//
//
// Input: l1 = [], l2 = [0]
// Output: [0]
//
//
//  
// Constraints:
//
//
// 	The number of nodes in both lists is in the range [0, 50].
// 	-100 <= Node.val <= 100
// 	Both l1 and l2 are sorted in non-decreasing order.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // console.log(lists.length);
    
    //important !! this answer is from  My solution for problem 23 !!
    arr.length=0;
    
    if(l1==null&&l2==null) return null;
    
    
    let lists=[l1,l2];

    
    
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
    


    return output;    
};

var arr=[];

    
    
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
