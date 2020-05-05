// Sort a linked list in O(n log n) time using constant space complexity.
//
// Example 1:
//
//
// Input: 4->2->1->3
// Output: 1->2->3->4
//
//
// Example 2:
//
//
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5
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
var sortList = function(head) {
    //important !! this answer is from  My solution for problem 23 !!
    if(head == null)return null;    
    arr.length=0;
    
    let lists=[head];

    
    
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
