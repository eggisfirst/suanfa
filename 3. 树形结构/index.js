
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


/**
 * 深度优先 Depth First Search
 */
function deepFirst(root, target) {
  if(!root) return false
  console.log(root)
  if(root.value === target) return true
  return deepFirst(root.left, target) || deepFirst(root.right, target)
}

// var result= deepFirst(a, 'd')
// console.log(result)

/**
 * 广度优先 Breadth First Search
 */
function BreadthFirst(root, target) {
  if(root.length === 0) return false
  var nexts = []

  for (let i = 0; i < root.length; i++) {
    if(root[i].value === target) return true
    if(root[i].left) {
      nexts.push(root[i].left)
    }
    if(root[i].right) {
      nexts.push(root[i].right)
    }
  }
  return BreadthFirst(nexts, target)
}

// var resulet = BreadthFirst([a], 'dd')
// console.log(resulet)

/**
 *  比较两棵二叉树，得到比较的结果
 * @param {*} originRoot 
 * @param {*} newRoot 
 */
function diff(originRoot, newRoot) {
  var result = []
  if(!originRoot && !newRoot) {
    return []
  }
  else if(!originRoot && newRoot) {
    result.push({
      type: '新增',
      originNode: originRoot,
      newNode: newRoot
    }) 
  }
  else if(originRoot && !newRoot) {
    result.push({
      type: '删除',
      originNode: originRoot,
      newRoot: null
    })
  }
  else if(originRoot.value !== newRoot.value) {
    result.push({
      type: "修改",
      originNode: originRoot,
      newNode: newRoot
    })

    var result1 = diff(originRoot.left, newRoot.left)
    var result2 = diff(originRoot.right, newRoot.right)
    result = result.concat(result1).concat(result2)
  }
  else {
    var result1 = diff(originRoot.left, newRoot.left)
    var result2 = diff(originRoot.right, newRoot.right)
    result = result.concat(result1).concat(result2)
  }

  return result
}

var root1 = getTree("abcd", "cbda");

var root2 = getTree("afkes", "kfase");

var resu = diff(root1, root2)
console.log(resu)


