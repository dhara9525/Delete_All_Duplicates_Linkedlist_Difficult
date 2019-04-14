/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) 
{
   var map1=new Map();
   let a=head;
   let set=new Set();
    
   while(a!=null)
   {
       if(map1.get(a.val)==undefined)
       {
           map1.set(a.val,1);
       }
       else
       {
          map1.set(a.val,map1.get(a.val)+1);
       }
        a=a.next;
   }
    console.log(map1);
    
    let cur=head;
    var prev=new ListNode(null);  
    
    while(cur!=null)
    {
        if((map1.get(cur.val)>1) && cur==head )
        {
            head=head.next;
        }
        if(map1.get(cur.val)==1)
        {
           prev=cur;
        }
         else
        {
           prev.next=cur.next;
        }
        cur=cur.next;
    }
    return head;
};