function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}


var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var e = new Node('e')
var f = new Node('f')
var d = new Node('d')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

//   a
// b    c
//de    f

//a () ()

/**
 * 前序遍历
 */
function DLR(root) {
  if (!root) return
  console.log(root.value)
  DLR(root.left)
  DLR(root.right)
}

// DLR(a)

/**
 * 中序遍历
 */
function LDR(root) {
  if (!root) return
  LDR(root.left)
  console.log(root.value)
  LDR(root.right)
}

// LDR(a)

/**
 * 后序遍历
 */
function LRD(root) {
  if (!root) return
  LRD(root.left)
  LRD(root.right)
  console.log(root.value)
}

// LRD(a)

//a bde cf
//dbe a fc

/**
 * 根据前序遍历和中序遍历结果，得到一颗二叉树
 */
function getTree(dlr, ldr) {
  dlr = dlr.split('')
  ldr = ldr.split("")
  if (dlr.length !== ldr.length) throw new Error("无效的遍历值");
  if (dlr.length === 0) return null;

  var root = new Node(dlr[0])

  var index = ldr.indexOf(dlr[0])
  var ldrLeft = ldr.slice(0, index).join('') //左边的中序遍历结果
  var dlrLeft = dlr.slice(1, ldrLeft.length + 1).join('') //左边的前序遍历结果
  root.left = getTree(dlrLeft, ldrLeft)  //递归

  var ldrRight = ldr.slice(index + 1).join('')  //右边的中序遍历结果
  var dlrRight = dlr.slice(ldrLeft.length + 1).join('')  //右边的前序遍历结果
  root.right = getTree(dlrRight, ldrRight)
  return root
}

// var r = getTree('abdecf', 'dbeafc')
// console.log(r)

/**
 * 计算树的深度
 */
function getDeep(root) {
  if(!root) return 0
  var left = getDeep(root.left)
  var right = getDeep(root.right)
  return Math.max(left, right) + 1
}

console.log(getDeep(a))