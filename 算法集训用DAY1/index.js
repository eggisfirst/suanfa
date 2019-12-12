/**
 * 创建一个琏表
 * @param {*} value  传入的值
 */
function Node(value) {
  this.value = value
  this.next = null
}

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')

a.next = b
b.next = c

/**
 * 遍历打印
 * @param {*} root 根节点
 */
function Print (root) {
  // while(root) {           //穷举法：把所有的都拿出来跑一遍
  //   console.log(root.value)
  //   root = root.next
  // }
  if(root) {         //分治法：把一个整体分成一个小部分加另一个整体，先完成小部分的运算。
    console.log(root.value)
    Print(root.next)
  }
}

// Print(a)

/**
 * 获取琏表长度
 */
function getLength(root) {
  // let sum = 0
  // while(root) {
  //    sum += 1
  //    root = root.next
  // }
  // return sum

  if(!root) return 0
  return 1 + getLength(root.next)
}

// console.log(getLength(b))

/**
 * 通过下标获取琏表中的某个数据
 */
function getVal (root, index) {
  /**
   * 辅助函数 判断某个节点是不是我要找的
   * @param {*} node 某个节点
   * @param {*} i 某个节点的下标
   */
  function _getVal(node, i) {
    if(!node) return null
    if(i === index) return node
    return _getVal(node.next, i + 1)
  }
  return _getVal(root, 0)
}

// let val = getVal(a, 2)
// console.log(val)

/**
 * 通过下标设置琏表中的某个数据
 */
function setVal(root, index, value) {
  /**
   * 辅助函数 判断某个节点是不是我要找的
   * @param {*} node 某个节点
   * @param {*} i 某个节点的下标
   */
  function _setVal(node, i) {
    if(!node) return null
    if(i === index) node.value = value
    _setVal(node.next, i + 1)
  }
  _setVal(root, 0)
}

// setVal(a, 0, 'd')
// Print(a)

/**
 * 在链表某一个节点之后加入一个新节点
 */
function addNode(node, newValue) {
  if(!node) return 
  const newNode = new Node(newValue) //构建新节点
  newNode.next = node.next
  node.next = newNode
}

// addNode(null, 'd')
// Print(a)

/**
 * 在链表末尾加入一个新节点
 */
function pushNode(root, newValue) {
  if(!root) return 
  if(root.next) {
    pushNode(root.next, newValue)
  }
  else {
    const node = new Node(newValue)
    root.next = node
  }
}
// pushNode(a,'sdd')
// pushNode(a,'s')
// pushNode(a,'sdd')
// Print(a)

/**
 * 删除一个链表节点
 */
function deleteNode (root, nodeValue) {
  if(!root) return
  if(root.next.value === nodeValue) {
    root.next = root.next.next
  }
  else {
    deleteNode(root.next, nodeValue)
  }
}
// deleteNode(a,'c')
// Print(a)

/**
 *  链表倒序
 */
function nodeReserve(root) {
    if(!root || !root.next) return root
    if(!root.next.next) {
      let temp = root.next
      root.next.next = root
      root.next = null
      return temp
    }
    else {
      let temp = nodeReserve(root.next)
      root.next.next = root
      root.next = null
      return temp
    }
}


var temp = nodeReserve(a)
Print(temp)
