
/**
 * 最小生成树
 * 使用Prim算法根据点的集合，和边的集合，链接结点
 */
function prim() {
  
}

//点的集合
var nodes = [a, b, c, d, e];
//边的集合
var sides = [
    [0, 8, 3, Infinity, 4],//a点到其他结点的距离
    [8, 0, 4, 10, Infinity], //b到其他点的距离
    [3, 4, 0, 3, Infinity], //c到其他点的距离
    [Infinity, 10, 3, 0, 6], //d到其他点的距离
    [4, Infinity, Infinity, 6, 0], //e到其他点的距离
];

prim(nodes, sides);