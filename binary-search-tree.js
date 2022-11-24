class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    const toCheck = [this.root];

    while (toCheck.length > 0) {
      let currentNode = toCheck.pop();
      if (val < currentNode.val ) {
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
        } else {
          toCheck.push(currentNode.left);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
        } else {
          toCheck.push(currentNode.right);
        }
      }
    }
    
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    function descend(currentNode, val) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
        } else {
          descend(currentNode.left, val);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
        } else {
          descend(currentNode.right, val);
        }
      }
    }

    descend(this.root, val);
    return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    if (!this.root) {
      return undefined;
    }

    const toCheck = [this.root];

    while (toCheck.length > 0) {
      const currentNode = toCheck.pop();
      if (currentNode.val === val) {
        return currentNode;
      } else {
        if (val < currentNode) {
          if (currentNode.left) toCheck.push(currentNode.left);
          else return undefined;
        } else {
          if (currentNode.right) toCheck.push(currentNode.right);
          else return undefined;
        }
      }
    }


  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    if (!this.root) {
      return undefined;
    }
    
    function descend(currentNode, val) {
      if (currentNode.val === val) {
        return currentNode;
      } else {
        if (val < currentNode.val) {
          if (currentNode.left) return descend(currentNode.left, val);
          else return undefined;
        } else {
          if (currentNode.right) return descend(currentNode.right, val);
          else return undefined;
        }
      }
    }

    return descend(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const outArr = [];

    function descend(currentNode) {
      outArr.push(currentNode.val);
      if (currentNode.left) descend(currentNode.left);
      if (currentNode.right) descend(currentNode.right);
    }

    descend(this.root);

    return outArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const outArr = [];

    function descend(currentNode) {
      if (currentNode.left) descend(currentNode.left);
      outArr.push(currentNode.val);
      if (currentNode.right) descend(currentNode.right);
    }

    descend(this.root);

    return outArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const outArr = [];

    function descend(currentNode) {
      if (currentNode.left) descend(currentNode.left);
      if (currentNode.right) descend(currentNode.right);
      outArr.push(currentNode.val);
    }

    descend(this.root);

    return outArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return;
    
    const searchArr = [this.root];
    const outArr = [];

    while (searchArr.length > 0) {
      let currentNode = searchArr.shift();
      outArr.push(currentNode.val);
      if (currentNode.left) searchArr.push(currentNode.left);
      if (currentNode.right) searchArr.push(currentNode.right);
    }

    return outArr;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
