/**
 * 构造函数：能构造出节点
 * @param {*} value 
 */

function Node(value) {
  this.value = value
  this.next = null  //内存地址，用于指向下一个节点
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')

a.next = b
b.next = c

/**
 * 
 * @param {*} root 一个节点
 */
function print(root) {
  // while(root) {
  //   console.log(root.value)
  //   root = root.next
  // }
  if (!root) return
  console.log(root.value)
  print(root.next)
}

// print(b)
/**
 * 
 * @param {*} root 
 */
function count(root) {
  if (!root) return 0
  return count(root.next) + 1
}

// const result = count('f')
// console.log(result)

/**
 *  通过下标获取链表中的某个数据
 * @param {*} root 
 * @param {*} index 
 */
function getNode(root, index) {
  //当需要一个通用的变量的时候，可以写一个辅助函数
  function _getNode(node, i) {
    if (!node) return
    if (i === index) {
      return node
    }
    return _getNode(node.next, i + 1)
  }
  return _getNode(root, 0)
}

// const result = getNode(b, 1)
// console.log(result)

/**
 * 通过下标设置链表中的某个数据
 * @param {*} root 
 * @param {*} index 
 * @param {*} newValue 
 */
function setValue(root, index, newValue) {
  function _setValue(node, i) {
    if (!node) return
    if (i === index) {
      node.value = newValue
    }
    else {
      return _setValue(node.next, i + 1)
    }
  }
  return _setValue(root, 0)
}

// setValue(a, 2, null)
// print(a)

/**
 * 在链表某一个节点之后加入一个新节点
 * @param {*} root 
 * @param {*} newValue 
 */
function insertAfter(root, newValue) {
  if (!root) return
  //新构建一个节点
  const newNode = new Node(newValue)
  newNode.next = root.next
  root.next = newNode
}

// insertAfter(c, 'a')
// print(a)

/**
 * 在链表末尾加入一个新节点
 */
function pushNode(root, newValue) {
  if (!root) return
  //判断是不是最后一个节点
  if (!root.next) {
    const newNode = new Node(newValue)
    root.next = newNode
  }
  else {
    pushNode(root.next, newValue)
  }
}

// pushNode(a, 'll')
// pushNode(a, 'llaa')
// print(a)

/**
 * 删除一个链表节点
 */
function deleteNode(root, value) {
  //如果节点没有下一个，也返回
  if (!root || !root.next) return
  if (root.next.value === value) {
    root.next = root.next.next
  }
  else {
    deleteNode(root.next, value)
  }
}

// deleteNode(b, 'c')
// print(a)

/**
 * 链表倒序
 */

function reverse(root) {
  if (!root || !root.next) return
  //考虑两个节点的情况 
  //a.next = b -> b.next = null
  //要更改为a.next = null b.next = a 同时把b当作根节点返回出去
  if (!root.next.next) {
    //保持b
    let temp = root.next
    root.next.next = root
    root.next = null
    return temp
  }
  else {
    let temp = reverse(root.next) //temp为后续节点的返回
    root.next.next = root
    root.next = null
    return temp
  }
}

const result = reverse(a)
print(result)
