class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

///// REVERSE LIST ///////
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

const reverseListRecursively = (head, prev=null) => {
  if (!head) {
    return prev;
  }

  const next = head.next;
  head.next = prev;
  return reverseListRecursively(next, head);
};

// const newRecursiveHead = reverseListRecursively(a);
// printList(newRecursiveHead);

const reverseListIteratively = (head) => {
  let current = head;
  let prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

// const newIterativeHead = reverseListIteratively(a);
// printList(newIterativeHead);


/////// ADD TWO NUMBERS ///////
const stringList = (head) => {
  if (!head) {
    return '';
  }

  return head.val + stringList(head.next);
};

// Numbers are read backwards from the list
// eg 532 == 2->3->5
const m = new Node(9);
const n = new Node(9);
const o = new Node(9);
m.next = n;
n.next = o;

const x = new Node(3);
const y = new Node(2);
// const z = new Node(1);
x.next = y;
// y.next = z;

const addTwoNumbers = (l1, l2, carry=0) => {
  if (!l1 && !l2 && carry === 0) {
    return null;
  }

  const l1Val = !l1 ? 0 : l1.val;
  const l2Val = !l2 ? 0 : l2.val;
  const sum = l1Val + l2Val + carry;

  const nextCarry = sum >= 10 ? 1 : 0;
  const digit = sum % 10;
  const resultNode = new Node(digit);

  const l1Next = !l1 ? l1 : l1.next;
  const l2Next = !l2 ? l2 : l2.next;
  resultNode.next = addTwoNumbers(l1Next, l2Next, nextCarry);
  return resultNode;
};

console.log(stringList(m));
console.log(stringList(x));
const sumNode = addTwoNumbers(m, x);
console.log(stringList(sumNode));
