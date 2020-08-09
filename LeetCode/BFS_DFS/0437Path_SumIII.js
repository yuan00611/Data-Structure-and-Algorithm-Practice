// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, 
// but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and 
// the values are in the range -1,000,000 to 1,000,000.

// Example:

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11


var pathSum = function(root, sum) { //root为根节点， sum为规定的路径权值和
    if(!root) return 0 //若节点为空，返回0
    let page = findDown(root,sum) //从根节点开始有多少满足条件的路径数，findDown函数是求从单个节点开始满足条件的路径数
    let sum1 = pathSum(root.left, sum) //遍历左子树求符合条件的路径数，
    let sum2 = pathSum(root.right, sum) //遍历右子树求符合条件的路径数
    return page + sum1 +sum2; //得出总路径数

};

function findDown(tNode, sum) { // 求从单个节点开始满足条件的路径数，tNode为当前节点，sum为规定的路径权值和
    if(!tNode) return 0 //若节点为空，返回0
    let flag = tNode.val === sum ? 1 : 0 // 当前节点权值刚好等于sum则算为1，否则为0
    let leftSum = findDown(tNode.left, sum - tNode.val) //剩下的权值要子树来凑，先看左子树能不能凑出来
    let rightSum = findDown(tNode.right, sum-tNode.val) //再看右子树是否能凑出来
    return flag  + leftSum + rightSum // 返回符合条件的路径数
}

// 作者：xiao-jian-feng
// 链接：https://leetcode-cn.com/problems/path-sum-iii/solution/shuang-zhong-di-gui-hao-yong-de-hen-by-xiao-jian-f/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。