const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    const node = new Node(data);
    if (!this.node) {
      this.node = node;
    } else {
      let current = this.node;
      while (current) {
        if (node.data < current.data) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    let current = this.node;
    while (current) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if(!node){
        return null;
      } else if(data === node.data){
        if(!node.left && !node.right) return null;
        if(!node.left) return node.right;
        if(!node.right) return node.left;
        let tmp = node.right;
        while(tmp.left) tmp = tmp.left;
        node.data = tmp.data;
        node.right = removeNode(node.right, tmp.data);
        return node;
      }
      else if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    removeNode(this.node, data);
  }

  min() {
    let current = this.node;
    while(current.left) current = current.left;
    return current.data;
  }

  max() {
    let current = this.node;
    while(current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
