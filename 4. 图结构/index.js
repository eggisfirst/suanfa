function Node(value) {
  this.value = value
  this.neighbors = []
}

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')

a.neighbors.push(b, c, e);
b.neighbors.push(a, c, d);
c.neighbors.push(a, b);
e.neighbors.push(a, e);
d.neighbors.push(b, e);

/**
 * 深度优先遍历
 * @param {*} node 
 * @param {*} targetValue 
 * @param finded 已经找过的结点
 */
function deepFirstSearch(root, target, finded) {
  if (finded.includes(root)) return false
  if (root.value === target) return true
  finded.push(root)
  for (var i = 0; i < root.neighbors.length; i++) {
    if (deepFirstSearch(root.neighbors[i], target, finded)) {
      return true
    }
  }
  return false
}


// var result = deepFirstSearch(a, 'c', [])
// console.log(result)

function breadthFirstSearch(nodes, target, finded) {
  if (nodes.length === 0) return false
  var nexts = []
  
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].value === target) return true

    finded.push(nodes[i])

    for (let j = 0; j < nodes[i].neighbors.length; j++) {
      var n = nodes[i].neighbors[j]; //第j个邻居
      if (!nexts.includes(n)) {
        nexts.push(n);
      }
    }
  }

  for (let i = 0; i < nexts.length; i++) {
    if (finded.includes(nexts[i])) {
      nexts.splice(i, 1);
      i --
    }
  }
  return breadthFirstSearch(nexts, target,finded)
}


var result = breadthFirstSearch([a], 'd', [])
console.log(result)