import {
    Stack,
  
    Queue,
  
  
    EnhancedSet,
  
    LinkedList,
    LinkedListNode,
    DoublyLinkedList,
    DoublyLinkedListNode,
  
    MinHeap,
    MaxHeap,
    HeapNode, // interface
  
    PriorityQueueOptions, // interface
    PriorityQueueItem, // interface
    MinPriorityQueue,
    MaxPriorityQueue,
  
    BinarySearchTree,
    BinarySearchTreeNode,
    AvlTree,
    AvlTreeNode,
  
    Trie,
    TrieNode,
  
    Graph,
    DirectedGraph,
  } from 'datastructures-js';

  import { Deque } from '@datastructures-js/deque';


const isBalanced = (inputString: string):boolean =>{
    //crete a hashMap for allowed characters
    interface Map{
        '{': string,
        '[':string,
        '(': string
    }
    let allowedCharacters: Map = {
        '{': '}',
        '[':']',
        '(': ')'
    }
    let closingSymbols = new Stack()
    //loop through each element in string
    for(let i=0;i<inputString.length;i++){
        console.log("Loop",inputString[i],allowedCharacters)
    //check if it is opening or closing using hashmap created
      if(inputString[i] in allowedCharacters){ //it is a valid opening, push it's closing
        closingSymbols.push(allowedCharacters[inputString[i]])
        console.log(i,closingSymbols)
      }
     //compare with top element if it is not
     else{ //it is an opening, pop and compare
         if(closingSymbols.pop() != inputString[i]){
             return false
         }
         if(closingSymbols.size()==0){
             return true
         }
     }
    //push to stck if it is not
    }
    return true
}

let exp = "{[({})]}"

console.log(isBalanced(exp))